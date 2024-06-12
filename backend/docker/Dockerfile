FROM node:18

ARG HOST_NAME

ENV HOST_NAME=${HOST_NAME}

WORKDIR /usr/src/backend

COPY ../ .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start"]