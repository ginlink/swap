#!/bin/sh
yarn bootstrap

yarn prepare:swap
yarn build:prod:swap

docker build -f apps/coolswap/Dockerfile -t  ginlink/coolswap:prod .

docker login --username $DOCKER_ACCESS_NAME -p $DOCKER_ACCESS_TOKEN


docker push ginlink/coolswap:prod
