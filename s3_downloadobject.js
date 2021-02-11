require('dotenv').config();
const fs = require('fs');

// Load the SDK for JavaScript
var AWS = require('aws-sdk');
// Set the Region and keys
AWS.config.update({
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey,
    region: process.env.region
});

// Create S3 service object
s3 = new AWS.S3({apiVersion: '2006-03-01'});

var bucket= "socialatm";
var key = 'klein.png';

var params = {
    Bucket: bucket,
    Key: key
};
var file = fs.createWriteStream(key);

s3.getObject(params, function(err, data) {
    if (err) console.log(err, err.stack);
    else 
    fs.writeFileSync(`./${key}`, data.Body);
    console.log('file downloaded successfully')
});
