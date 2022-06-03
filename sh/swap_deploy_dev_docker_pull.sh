
# Deleting an Original Image
docker rmi -f ginlink/coolswap:dev

# Pull the server container and start it
docker-compose -f swap-docker-compose-dev.yml pull
docker-compose -f swap-docker-compose-dev.yml down
docker-compose -f swap-docker-compose-dev.yml up -d
