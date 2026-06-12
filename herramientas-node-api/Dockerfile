FROM oven/bun:1-alpine

WORKDIR /app

COPY package.json ./

RUN bun install

COPY . .

EXPOSE 4005

CMD ["bun", "server.js"]