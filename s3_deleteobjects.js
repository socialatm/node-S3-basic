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

/**
 * Objects is an array so you can delete one or more like this 
 * [{Key: 'a.txt'}, {Key: 'b.txt'}, {Key: 'c.txt'}]
 */

var bucket= "socialatm";
var Objects = [{Key: 'klein.png'}];

var deleteParam = {
    Bucket: bucket,
    Delete: {Objects}
};    
s3.deleteObjects(deleteParam, function(err, data) {
    if (err) console.log(err, err.stack);
    else console.log('delete', data);
});
