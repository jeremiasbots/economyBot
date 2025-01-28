FROM node:22.13

RUN mkdir -p /home/app
COPY . /home/app

WORKDIR /home/app
RUN npm install

CMD ["node", "index.js"]