This is a quick example of errors occuring on the Google Cloud Functions 

## local deploy
functions start
functions clear
functions deploy dnsNS --trigger-http 
functions deploy nativeNS --trigger-http

## local test
http://localhost:8010/dwarfstar-2017/us-central1/dnsNS?domainname=google.com
http://localhost:8010/dwarfstar-2017/us-central1/nativeNS?domainname=google.com


## Deploy cloud
todo: use variables to specify $stage-bucket
gcloud beta functions deploy dnsNS --stage-bucket ds-us1-functions --trigger-http 
gcloud beta functions deploy nativeNS --stage-bucket ds-us1-functions --trigger-http 

## Published URL
https://us-central1-dwarfstar-2017.cloudfunctions.net/dnsNS?domainname=google.com
https://us-central1-dwarfstar-2017.cloudfunctions.net/nativeNS?dnsnname=google.com

