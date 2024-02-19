FROM php:8.3-fpm

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
    libpq-dev \
    wget \
    nano \
    curl \
    supervisor

RUN pecl channel-update pecl.php.net
RUN pecl install swoole && docker-php-ext-enable swoole
RUN docker-php-ext-configure pcntl --enable-pcntl \
  && docker-php-ext-install \
    pcntl
RUN pecl install apcu && docker-php-ext-enable apcu
RUN pecl install igbinary && docker-php-ext-enable igbinary
RUN pecl install mongodb && docker-php-ext-enable mongodb
RUN pecl install redis && docker-php-ext-enable redis

RUN docker-php-ext-install pdo pdo_mysql pdo_pgsql
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

ENV DB_CONNECTION=mysql
ENV DB_HOST=34.128.79.10
ENV DB_PORT=3306
ENV DB_DATABASE=erp_user
ENV DB_USERNAME=app
ENV DB_PASSWORD='Pantek123!@#'


ENV PULSE_DB_CONNECTION=pulse
ENV PULSE_DB_HOST=mysql
ENV PULSE_DB_PORT=3306
ENV PULSE_DB_DATABASE=etos
ENV PULSE_DB_USERNAME=etos
ENV PULSE_DB_PASSWORD=etos


ENV REDIS_HOST=redis
ENV REDIS_PASSWORD=etos
ENV REDIS_PORT=6379
ENV REDIS_CLIENT=phpredis


ENV URL_AUTH=https://indonusa.auth.etos.ojie.dev
ENV URL_USER=https://user-services.etos.ojie.dev
ENV URL_EMPLOYEE=https://employee-services.etos.ojie.dev
ENV URL_MASTER=https://indonusa.master-srv.etos.ojie.dev
ENV URL_CONTRACT=https://contract-services.etos.ojie.dev
ENV URL_BUDGET=https://budget-services.etos.ojie.dev
ENV URL_TARGET_SALES=https://target-sales-services.etos.ojie.dev
ENV URL_OPERATOR=https://operator-services.etos.ojie.dev
ENV URL_TAGIHAN=https://tagihan-services.etos.ojie.dev
ENV URL_FAKTUR=https://faktur-services.etos.ojie.dev
ENV URL_LOKASI=https://lokasi-services.etos.ojie.dev
ENV URL_EQS=https://eqs-services.etos.ojie.dev

ENV CLIENT_ID_MFE=96ec14eb-ced9-4606-84f8-b5e4b0d210a2
ENV CLIENT_SECRET_MFE=uP7aG4mmmfMmRzsawJlRmjvB4ZvBXS3qwbReIXX6


ENV CLIENT_ID_SALES=96ec14eb-ced9-4606-84f8-b5e4b0d210a2
ENV CLIENT_SECRET_SALES=uP7aG4mmmfMmRzsawJlRmjvB4ZvBXS3qwbReIXX6


ENV CLIENT_ID_HOST=96ec14eb-ced9-4606-84f8-b5e4b0d210a2
ENV CLIENT_SECRET_HOST=uP7aG4mmmfMmRzsawJlRmjvB4ZvBXS3qwbReIXX6


ENV CLIENT_ID_REPORT=96ec14eb-ced9-4606-84f8-b5e4b0d210a2
ENV CLIENT_SECRET_REPORT=uP7aG4mmmfMmRzsawJlRmjvB4ZvBXS3qwbReIXX6


ENV CLIENT_ID_ACCOUNTING=96ec14eb-ced9-4606-84f8-b5e4b0d210a2
ENV CLIENT_SECRET_ACCOUNTING=uP7aG4mmmfMmRzsawJlRmjvB4ZvBXS3qwbReIXX6

ENV CLIENT_ID_PAYROLL=96ec14eb-ced9-4606-84f8-b5e4b0d210a2
ENV CLIENT_SECRET_PAYROLL=uP7aG4mmmfMmRzsawJlRmjvB4ZvBXS3qwbReIXX6

ENV CLIENT_ID_SPV=96ec14eb-ced9-4606-84f8-b5e4b0d210a2
ENV CLIENT_SECRET_SPV=uP7aG4mmmfMmRzsawJlRmjvB4ZvBXS3qwbReIXX6


ENV CLIENT_ID_MANAGEMENT=96ec14eb-ced9-4606-84f8-b5e4b0d210a2
ENV CLIENT_SECRET_MANAGEMENT=uP7aG4mmmfMmRzsawJlRmjvB4ZvBXS3qwbReIXX6

ENV CLIENT_ID_CRM=96ec14eb-ced9-4606-84f8-b5e4b0d210a2
ENV CLIENT_SECRET_CRM=uP7aG4mmmfMmRzsawJlRmjvB4ZvBXS3qwbReIXX6



# CMD ["/usr/bin/supervisord", "-n", "-c", "/etc/supervisor/conf.d/supervisord.conf"]