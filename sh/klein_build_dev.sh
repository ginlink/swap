#!/bin/sh
yarn bootstrap

yarn build:test:klein

docker build  -f packages/klein-interface/Dockerfile  -t  coinflow/crv-klein-web:dev .

docker login --username $DOCKER_ACCESS_NAME -p $DOCKER_ACCESS_TOKEN


docker push  coinflow/crv-klein-web:dev
