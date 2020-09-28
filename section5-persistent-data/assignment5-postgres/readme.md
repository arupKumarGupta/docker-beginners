# Problem Statement: Upgrade database containers
* Create a postgres container with an older version with named volume
* Check logs, then stop container
* Create new postgres container with one version above (patch version)
* Check logs and validate

***Note: Upgrading to major/minor version required manual DB commands and its a database limitation not a container one.***

## Solution:
  > volume mount for postgres 9.5 is /var/lib/postgresql/data -- from dockerhub dockerfile of official postgres
  
  1. Start postgress container with named volume
     - docker run -d --name postgress961 -e POSTGRES_PASSWORD=secret -v postgres-vol:/var/lib/postgresql/data postgres:9.6.1
     - docker exec -it postgress961 psql -h 127.0.0.1 -U postgress
        - create database test; \l > \q -- now we have a dataabase created named test
     - docker volume ls | grep postgres-vol
     - docker container stop postgress961
     - docker volume ls | grep postgres -- should yield same as before
  2. Upgrade postgres container to 9.6.2 -- means create a new container with the same volume as before and check the data should be same after udpate.
     - docker run -d --name postgress962 -e POSTGRES_PASSWORD=secret -v postgres-vol:/var/lib/postgresql/data postgres:9.6.2
     - docker volume ls | grep postgres should yield same result as in step 1
     - docker exec -it postgress962 psql -h 127.0.0.1 -U postgres
     - \l -- verify database is present

  Successfully upgraded postgres without losing data.


