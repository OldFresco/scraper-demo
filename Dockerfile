FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

# Run build pipeline
RUN npm run scrape-argon
RUN npm run tasks

EXPOSE 8888
CMD [ "npm", "start" ]