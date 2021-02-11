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

var bucket= "socialatm";

// Create the parameters for calling listObjects
var bucketParams = {
    Bucket : bucket,
  };
  
  // Call S3 to obtain a list of the objects in the bucket
  s3.listObjects(bucketParams, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
    }
  });
