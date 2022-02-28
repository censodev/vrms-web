FROM node:16.14.0-alpine as builder
COPY . /home/app
WORKDIR /home/app
RUN npm i
RUN npm run build

FROM nginx:stable-alpine
COPY --from=builder /home/app/dist/vrms-web /usr/share/nginx/html
COPY --from=builder /home/app/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
