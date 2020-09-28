# Instructions
using existing image of nodejs created before

## Steps
  1. ```npm install```
  2. docker run -p 80:80 -d --name <name-here> -v $(pwd):<WORK_DIR inside CONTAINER> <REPO_NAME>[:TAG]
  3. update app.js in local and restart the container to view changes.

