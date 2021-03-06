# Mock Argon

This project allows for live copy of Argon scrape which can then be hosted using a static node server or ran as a docker container.

### Prerequisities

* node **OR** docker

### Install and Run Locally

1. Clone the repo
2. run: ```npm install``` to install project dependencies
3. run: ```npm run scrape-argon``` to scrape live argon site
4. run: ```npm run tasks``` to run pre build gulp tasks
5. run: ```npm run in-browser``` to host the scraped copy on [http://localhost:8888] and open up this page on your default browser
6. or to run **all** of the above steps, simply run: ```npm run all```

### Run as Docker Container

1. Run: ```docker build -t "sequensis/mock-argon:latest" .``` to build the container image containing a freshly scraped mock argon web app hosted on port 8888
2. Run: ```docker run -p 8888:8888 -d sequensis/mock-argon``` to run the container image and map it to your local 8888 port