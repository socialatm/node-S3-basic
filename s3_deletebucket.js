require('dotenv').config();

// Load the SDK for JavaScript
var AWS = require('aws-sdk');
// Set the Region 
AWS.config.update({
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey,
    region: process.env.region
});

// Create S3 service object
s3 = new AWS.S3({apiVersion: '2006-03-01'});

var bucket= "socialatm3";

// Create params for S3.deleteBucket
var bucketParams = {
    Bucket : bucket
  };
  
  // Call S3 to delete the bucket
  s3.deleteBucket(bucketParams, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
    }
  });
