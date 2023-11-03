docker build -t etos8.2 .


docker tag etos8.2 asia.gcr.io/etos-cloud/etos
docker push asia.gcr.io/etos-cloud/etos

docker tag etos8.2 asia.gcr.io/etos-cloud/user
docker push asia.gcr.io/etos-cloud/user

docker tag etos8.2 asia.gcr.io/etos-cloud/website
docker push asia.gcr.io/etos-cloud/website

docker tag etos8.2 asia.gcr.io/etos-cloud/accounting
docker push asia.gcr.io/etos-cloud/accounting

docker tag etos8.2 asia.gcr.io/etos-cloud/sales
docker push asia.gcr.io/etos-cloud/sales

docker tag etos8.2 asia.gcr.io/etos-cloud/payroll
docker push asia.gcr.io/etos-cloud/payroll

docker tag etos8.2 asia.gcr.io/etos-cloud/supervisor
docker push asia.gcr.io/etos-cloud/supervisor

docker tag etos8.2 asia.gcr.io/etos-cloud/operator
docker push asia.gcr.io/etos-cloud/operator