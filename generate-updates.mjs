#!/usr/bin/env -S node --experimental-modules
import fs from 'fs-extra';
import path from 'path';
import matter from 'gray-matter';
import byKey from '../natural-sort-by-key/index.js';
import marked from 'marked';
import moment from 'moment';
import cheerio from 'cheerio';
import flatten from 'lodash/flatten.js';
import last from 'lodash/last.js';
import markedHelpers from 'marked/src/helpers.js';


const { cleanUrl, escape } = markedHelpers;
// Get reference
const renderer = new marked.Renderer();
// Override function
renderer.image = function(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text;
    }
    let out = '<img loading="lazy" class="img-fluid rounded shadow mt-5 mb-2" src="' + href + '" alt="' + text + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += this.options.xhtml ? '/>' : '>';
    return out;
};

function doAudio(o){
  const $ = cheerio.load(o.html);
  const node = $('a[href$=".mp3"]');
  if(node){
    const url = node.attr('href');
    o.audio = url;
    node.parent().remove();
  }
  o.html = $.html('body > *');
}

function doIllustration(o){
  const $ = cheerio.load(o.html);
  const node = $('img[alt="Illustration"]').first();
  if(node){
    const url = node.attr('src');
    o.image = url;
    node.parent().remove();
  }
  o.html = $.html('body > *');
}

function toDirs(name){
  return fs.readdirSync(`./${name}/db`, { withFileTypes: true }).filter(o=>o.isDirectory()).filter(o=>o.name.match(/^[^._]/)).map(o=>path.resolve(`./${name}/db`,o.name));
}

function copyDirs(dir){
  fs.copySync(dir, `./static/${path.basename(dir)}`, {preserveTimestamps:true})
}

function toFiles(name){
  return fs.readdirSync(`./${name}/db`, { withFileTypes: true }).filter(o=>o.isFile()).filter(o=>o.name.match(/\.md$/)).map(o=>path.resolve(`./${name}/db`,o.name));
}

function toObject(file){
  let {content, data} = matter(fs.readFileSync(file).toString());

  // this is for github use only, it must be removed
  // content = content.replace(/\[download audio version\]\([^)]+\)/g,'');

  const html = marked(content, {renderer});

  let published = moment(data.date).format('ddd MMM Do YYYY, h:mm A');

  const o = Object.assign({},data,{published, html});

  doAudio(o);
  doIllustration(o);

  return o;
}

function byDate(a,b){
  return new Date(b.date) - new Date(a.date);
}

function saveAsJson(list){
  // Create JSON
  let metaJSON = JSON.stringify(list);
  fs.writeFileSync(`static/database.json`,  metaJSON);
}

function saveAsModule(list){
  // Create Module
  let metaModuleSimple = `
  const data = ${JSON.stringify(list, null, '  ')};
  // Generated via update-module.mjs
  export default function main(){
    return data;
  }
  `;
  fs.writeFileSync(`src/modules/db/index.js`,  metaModuleSimple);
}







function main(){
  const sources = ['poetry', 'research'];

  flatten(sources.map(s=>toDirs(s)))
  .map(s=>copyDirs(s));

  const list = flatten(sources.map(s=>toFiles(s)))
  .map(s=>toObject(s))
  .sort(byDate);

  saveAsJson(list)
  saveAsModule(list)
}

main();
