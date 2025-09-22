FROM node:20-alpine

WORKDIR /usr/src/app
COPY package.json ./
COPY src ./src
COPY public ./public
COPY scripts ./scripts

ENV HOST=0.0.0.0
EXPOSE 3000
CMD ["node", "scripts/dev-server.mjs"]
