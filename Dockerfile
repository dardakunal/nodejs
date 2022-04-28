FROM node:10-alpine
WORKDIR /app
COPY . /app
RUN npm i
EXPOSE 3000
CMD ["npm","start"]

