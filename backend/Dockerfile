FROM node

WORKDIR /backend

COPY package*.json .

RUN npm install

COPY . /backend

ENV PORT=4100

EXPOSE ${PORT}

CMD ["npm", "start"]