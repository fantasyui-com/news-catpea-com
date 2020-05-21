#!/usr/bin/env bash

# Big files are not being copied during project generation, I think the sapper scraper times out under load.

rsync -a poetry/dist/audio docs
