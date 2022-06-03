#!/bin/sh
eval $(ssh-agent -s)

echo "$PRIVATE_KEY" > deploy.key

mkdir -p ~/.ssh
chmod 0600 deploy.key
ssh-add deploy.key

echo "Host *\n\tStrictHostKeyChecking no\n\n" >> ~/.ssh/config

# copy
scp sh/swap_deploy_dev_docker_pull.sh $HOST_ADMIN_99@$HOST_IP_99:~/coolswap111/
scp sh/swap-docker-compose-dev.yml $HOST_ADMIN_99@$HOST_IP_99:~/coolswap111/

# login and sh
ssh $HOST_ADMIN_99@$HOST_IP_99 "cd coolswap111 && sh swap_deploy_dev_docker_pull.sh"
