FROM node:12.18.4
WORKDIR /app
COPY package.json /app/
COPY package-lock.json /app/
RUN npm install -g nodemon
RUN npm install
COPY . /app/
EXPOSE 5000
