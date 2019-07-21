FROM node:12.6.0-alpine

# use to build the bcrypt package
RUN apk --no-cache add --virtual builds-deps build-base python

WORKDIR /app

COPY  package*.json ./

RUN npm install --only=production

COPY . /app

ENV NODE_ENV=development

EXPOSE 80

CMD ["npm","start"]