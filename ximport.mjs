#!/usr/bin/env -S node --experimental-modules

import fs from 'fs-extra';
import oneof from 'oneof';
import TurndownService from 'turndown';
import turndownPluginGfm from 'turndown-plugin-gfm';
import byKey from '../natural-sort-by-key/index.js';
import kebabCase from 'lodash/kebabCase.js';
import startCase from 'lodash/startCase.js';

var gfm = turndownPluginGfm.gfm

import news from './old-news/index.mjs';

let collection = news().quarantine.map(i => {
  i.type = 'quarantine';
  return i;
})
.concat(news().research.map(i => {
  i.type = 'research';
  return i
}))
.concat(news().theme.map(i => {
  i.type = 'theme';
  return i
}))
.sort(function(a, b) {
  return new Date(b.date) - new Date(a.date);
});

var turndownService = new TurndownService({
  linkStyle: 'referenced'
})
turndownService.use(gfm)

// turndownService.addRule('audio', {
//   filter: ['audio'],
//   replacement: function (content) {
//     return '~' + content + '~'
//   }
// })

turndownService.keep(['audio'])

var markdown = turndownService.turndown('<h1>Hello world!</h1>')

fs.emptyDirSync('db/content/posts');


















let idIndex = 1;
for (let item of collection) {


  item.id = 'id' + (collection.length - idIndex);
  item.text = turndownService.turndown(item.html);

  if (!item.name && item.text) {
    item.name = item.text.replace(/<[^>]*>/g, "").replace(/\n/g, "").replace(/\[[^\]]*\]/g, "").substr(0, 128);
    item.name = startCase(kebabCase(item.name));
    item.name = item.name + '...';
  }

  const tags = [];
  if(item.type == 'research') tags.push('Coding');
  if(item.type == 'quarantine') tags.push('Poem');
  if(item.text.match(/\sbootstrap\s/mi)) tags.push('Bootstrap');
  if(item.text.match(/\sGUI\s/mi)) tags.push('GUI');
  if(item.text.match(/\ssquirrel\s/mi)) tags.push('Squirrel');

  if(item.text.match(/GUI/i)) {
    console.log(item.text)
  }



  delete item.link
  delete item.html


  item.text = `---
id: ${item.id}
title: ${item.name}
category: ${item.type}
tags: ${tags.join(' ')}
date: ${item.date}
draft: false
deleted: false
---

${item.text}`;

  fs.writeFileSync(`db/content/posts/${item.id}.md`, item.text)
  idIndex++;
}



const dataIndex = [];
for (let item of collection) {
  dataIndex.push(item.id)

}
fs.writeFileSync(`db/data/order.json`, JSON.stringify(dataIndex, null, '  '))
