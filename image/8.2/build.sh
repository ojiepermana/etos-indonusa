docker build -t etos8.2 .


docker tag etos8.2 asia.gcr.io/etos-cloud/etos
docker push asia.gcr.io/etos-cloud/etos