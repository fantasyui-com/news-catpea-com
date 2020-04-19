#!/usr/bin/env -S node --experimental-modules

import fs from 'fs';
import matter from 'gray-matter';
//import byKey from 'natural-sort-by-key';
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
  }


const order = JSON.parse(fs.readFileSync(`db/data/order.json`).toString()); // .map({}) // .sort( byKey('date') )
let list = [];

for( let id of order){
  const {content, data} = matter(fs.readFileSync(`db/content/posts/${id}.md`).toString());
  list.push(Object.assign({},data,{html:marked(content, { renderer })}));
}

list = list.sort(function(a,b){
  // Turn your strings into dates, and then subtract them
  // to get a value that is either negative, positive, or zero.
  return new Date(b.date) - new Date(a.date);
});
let meta = `
const data = ${JSON.stringify(list, null, '  ')};

export default function main(){
  return data;
}
`;

fs.writeFileSync(`src/modules/db/index.js`,  meta);
