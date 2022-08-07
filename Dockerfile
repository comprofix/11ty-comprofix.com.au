FROM php:8.1-apache

LABEL Matthew McKinnon <support@comprofix.com>

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

COPY --from=composer:2 /usr/bin/composer /usr/local/bin/composer
COPY _site/ /var/www/html

WORKDIR /
