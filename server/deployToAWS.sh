#!/bin/sh

echo ">>> transpiling..."

cd /Users/gazakorompis/snow-revou/week-18-gkorompis/server
pwd

npx tsc

echo ">>> compress deploy file"
zip -r deploy.zip . -x "src/*" "misc/*" "test*" "*.sh" "./testenv.js" "cek/*" "lambda.js" ".git/*"

echo ">>> upload to aws s3 bucket"
aws s3 cp deploy.zip s3://revou-week18-00-server

echo ">>> deploy to aws lambda"
aws lambda update-function-code --function-name revou-week18-00 --s3-bucket revou-week18-00-server --s3-key deploy.zip

