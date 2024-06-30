FROM node:21

WORKDIR /nextapp

COPY  package* .

RUN npm install


COPY  . . 


CMD ["npm" , "run" , "dev"]



# docker build -t nextappimage .
# docker run -p 3000:3000 -v ./app:/nextapp/app nextappimage