#Instructions
## To build docker image 
```
docker image build -t <username>/<repo name>[tags] .
```
## To push to docker hub
```
docker image push <username>/<reponame>
```
## To run the container with auto cleanup
```
docker run -p 80:80 --rm <username>/<repo name>
```
