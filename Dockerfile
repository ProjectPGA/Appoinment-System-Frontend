# build stage
FROM node:9.11.1-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install --progress=false
COPY . .
RUN npm run build

# production stage
FROM nginx:1.13.12-alpine as production-stage
VOLUME [ "/sysinfo" ]
ARG version
ENV VERSION=$version
ARG component
ENV COMPONENT=$component
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY ./nginx/andres.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
COPY ./entrypoint.sh .
RUN ["chmod", "+x", "./entrypoint.sh"]
ENTRYPOINT ["./entrypoint.sh"]