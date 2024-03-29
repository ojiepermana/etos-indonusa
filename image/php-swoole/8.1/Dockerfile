FROM php:8.1-cli

# Update and upgrade the package lists
RUN apt-get update && apt-get upgrade -y

RUN apt-get install -y --no-install-recommends \
    openssl \
    libssl-dev \
    libcurl4-openssl-dev \
    libzip-dev \
    libmagickwand-dev \
    imagemagick \
    libtidy-dev \
    libc-ares-dev \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    libpq-dev \
    libevent-dev \
    libuv1-dev \
    zip \
    unzip \
    supervisor \
    curl

RUN docker-php-ext-install sockets
RUN pecl channel-update pecl.php.net
RUN pecl install event
RUN pecl install ev
# RUN pecl install uv
RUN pecl install swoole && docker-php-ext-enable swoole
RUN pecl install apcu && docker-php-ext-enable apcu
RUN pecl install igbinary && docker-php-ext-enable igbinary
RUN pecl install mongodb && docker-php-ext-enable mongodb
RUN pecl install redis && docker-php-ext-enable redis
RUN docker-php-ext-install pdo pdo_mysql pgsql pdo_pgsql
RUN docker-php-ext-install bcmath
RUN docker-php-ext-install zip
RUN docker-php-ext-install tidy
RUN docker-php-ext-enable tidy
RUN docker-php-ext-install gd
RUN docker-php-ext-enable opcache
RUN docker-php-ext-configure pcntl --enable-pcntl \
  && docker-php-ext-install \
    pcntl


RUN echo '\
    opcache.interned_strings_buffer=16\n\
    opcache.load_comments=On\n\
    opcache.max_accelerated_files=16000\n\
    opcache.save_comments=On\n\
    ' >> /usr/local/etc/php/conf.d/docker-php-ext-opcache.ini

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer --version

RUN rm /etc/localtime
RUN ln -s /usr/share/zoneinfo/Asia/Jakarta /etc/localtime
RUN "date"

RUN docker-php-source delete && \
    rm -r /tmp/* /var/cache/*
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

