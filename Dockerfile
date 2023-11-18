FROM php:8.2-fpm

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    openssl \
    libssl-dev \
    libcurl4-openssl-dev \
    libzip-dev \
    zip \
    unzip \
    libmagickwand-dev \
    imagemagick \
    libtidy-dev \
    libc-ares-dev \
    wget \
    nano \
    curl

RUN pecl channel-update pecl.php.net
RUN pecl install swoole && docker-php-ext-enable swoole
RUN docker-php-ext-configure pcntl --enable-pcntl \
  && docker-php-ext-install \
    pcntl
RUN pecl install apcu && docker-php-ext-enable apcu
RUN pecl install igbinary && docker-php-ext-enable igbinary
RUN pecl install mongodb && docker-php-ext-enable mongodb
RUN pecl install redis && docker-php-ext-enable redis

RUN docker-php-ext-install pdo pdo_mysql
RUN docker-php-ext-install bcmath
RUN docker-php-ext-install sockets
RUN docker-php-ext-install zip
RUN docker-php-ext-install tidy
RUN docker-php-ext-install gd
RUN docker-php-ext-enable opcache
RUN docker-php-ext-enable tidy


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


WORKDIR /home/www-data
RUN chown -R www-data:www-data /home/www-data/
RUN chmod -R 777 /home/www-data/

