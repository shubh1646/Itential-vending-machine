FROM node:14
WORKDIR /app
COPY  package*.json  ./
COPY wait-for-it.sh ./
RUN chmod +x  wait-for-it.sh
RUN npm install 
COPY . .
RUN chmod +x  wait-for-it.sh
CMD  ./wait-for-it.sh mysql:3306 -- npm run start