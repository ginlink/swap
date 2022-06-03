#!/bin/sh
yarn

yarn prepare:swap
yarn build:test:swap

docker build -f apps/coolswap/Dockerfile -t ginlink/coolswap:dev .

docker login --username $DOCKER_ACCESS_NAME -p $DOCKER_ACCESS_TOKEN


docker push ginlink/coolswap:dev
