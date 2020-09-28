# Existing NodeJs app and dockerise it
# use alpine version of node
# Expected result
# Verify it
# Tag and Push it to docker hub

# Get base Image
FROM  node:lts-alpine3.11

ENV PORT 80

WORKDIR /usr/nodejs/

EXPOSE 80

COPY . ./

RUN ls && node --version

RUN npm install

CMD ["npm", "start"]
