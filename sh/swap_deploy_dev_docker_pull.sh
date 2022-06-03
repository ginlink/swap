
# Deleting an Original Image
docker rmi -f ginlink/coolswap:dev

# Pull the server container and start it
docker-compose -f swap-docker-compose-dev pull
docker-compose -f swap-docker-compose-dev down
docker-compose -f swap-docker-compose-dev up -d
