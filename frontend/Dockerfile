FROM nginx

RUN rm /etc/nginx/conf.d/default.conf

COPY frontend/build /www/build

COPY frontend/nginx.conf /etc/nginx/conf.d/default.conf