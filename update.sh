#!/usr/bin/env bash

# if [ -d news ]; then
#   cd news
#   git pull
#   cd ..
# else
#   git clone --depth 1 git@github.com:fantasyui-com/news.git
# fi



if [ -d poetry ]; then
  cd poetry
  git pull
  cd ..
else
  git clone --depth 1 git@github.com:catpea/poetry.git
fi
if [ -d research ]; then
  cd research
  git pull
  cd ..
else
  git clone --depth 1 git@github.com:catpea/research.git
fi


#./update-module.mjs
