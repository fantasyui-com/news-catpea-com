#!/usr/bin/env bash

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

./generate-updates.mjs
