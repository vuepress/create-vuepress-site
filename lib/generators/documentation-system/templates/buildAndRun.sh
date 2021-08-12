#!/usr/bin/env bash

npm run build
echo "-----> building docs"
docker build -t ssp_docs .
echo "-----> remove old version"
docker rm -f ssp_docs
echo "-----> starting docs"
docker run --name project_docs -d --network=host project_docs
echo "-----> project_docs ready: http:localhost"
