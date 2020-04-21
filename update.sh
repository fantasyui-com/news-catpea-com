#!/usr/bin/env bash

if [ -d news ]; then
  cd news
  git pull
  cd ..
else
  git clone --depth 1 git@github.com:fantasyui-com/news.git
fi

./update-module.mjs
