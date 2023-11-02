echo ">>> upload to aws s3 bucket"
aws s3 cp build/ s3://jobsprint.app --recursive