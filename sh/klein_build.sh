#!/bin/sh
yarn bootstrap

yarn build:prod:klein

docker build -f ./packages/klein/Dockerfile -t  coinflow/crv-defi-web:latest .

docker login --username $DOCKER_ACCESS_NAME -p $DOCKER_ACCESS_TOKEN


docker push coinflow/crv-defi-web:latest
