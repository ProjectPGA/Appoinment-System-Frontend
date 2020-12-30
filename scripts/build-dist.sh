#!/bin/bash
set -e

mkdir dist
yarn run format:check
yarn run lint
yarn run build
