FROM node:24-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY prisma ./prisma

ARG DATABASE_URL
ARG PORT
ARG HOST

ENV DATABASE_URL=$DATABASE_URL
ENV PORT=$PORT
ENV HOST=$HOST

RUN npx prisma generate

COPY . .

EXPOSE 8001

CMD ["sh", "-c", "npx prisma migrate dev --name init && npm run server"]