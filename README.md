# md-editor


Simple md editor/viewer

## aws deployment

```
aws s3 mb s3://bucket-name
aws s3 sync build/ s3://bucket-name --acl public-read
aws s3 website s3://bucket-name --index-document index.html

//url will be http://bucket-name.s3-website-us-west-2.amazonaws.com/
```
