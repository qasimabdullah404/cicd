FROM node:9

WORKDIR /app

ADD . /app 

#RUN npm install -g contentful-cli 
#install app dependencies

#COPY package.json .
RUN npm install

#COPY . .

#USER node
EXPOSE 3000

#CMD ./run.sh 

CMD ["npm", "run", "start:dev"]  