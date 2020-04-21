#!/usr/bin/env -S node --experimental-modules
import fs from 'fs-extra';
import path from 'path';
import matter from 'gray-matter';
import byKey from '../natural-sort-by-key/index.js';
import marked from 'marked';
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
    let out = '<img class="img-fluid rounded shadow mt-5 mb-2" src="' + href + '" alt="' + text + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += this.options.xhtml ? '/>' : '>';
    return out;
};

const files = fs.readdirSync('./news/', { withFileTypes: true }).filter(o=>o.isFile()).filter(o=>o.name.match(/^id[0-9]+\.md/)).map(o=>path.resolve('./news',o.name));
const dirs = fs.readdirSync('./news/', { withFileTypes: true }).filter(o=>o.isDirectory()).filter(o=>o.name.match(/^[^._]/)).map(o=>path.resolve('./news',o.name));

let list = [];
for( let id of files){
  const {content, data} = matter(fs.readFileSync(id).toString());
  list.push(Object.assign({},data,{html:marked(content, { renderer })}));
}
list = list.sort(function(a,b){
  return new Date(b.date) - new Date(a.date);
});
let meta = `
const data = ${JSON.stringify(list, null, '  ')};

export default function main(){
  return data;
}
`;
fs.writeFileSync(`src/modules/db/index.js`,  meta);

for( let id of dirs){
  fs.copySync(id, `./static/${path.basename(id)}`, {preserveTimestamps:true})
}
