An Amazon S3 client for uploading and downloading files

_nothing fancy, it just works_ 

## Installation

`npm install`

open the `.env.example` file.

Add your amazon S3 variables here.

 Change the name of this file from `.env.example` to `.env`
 Be sure to include that first dot in the name.

```env
accessKeyId=YOUR S3 ACCESS KEY GOES HERE

secretAccessKey=YOUR S3 SECRET ACCESS KEY GOES HERE

region=YOUR S3 REGION GOES HERE
```

**Save**.

## Features

 * Create Buckets.
 * List Buckets.
 * Delete Buckets.

 * Upload Objects.
 * List Objects.
 * Download Objects.
 * Delete Objects.

## Adding these to your project
 At the top of your page add:
 ```js
const foo = require("filename");
```

## Passing arrays
If you one to pass more than one Object or Bucket to a function do it like this:

```js
var bucket= [{Key: 'a.txt'}, {Key: 'b.txt'}, {Key: 'c.txt'}];

var object= [{Key: 'a.txt'}, {Key: 'b.txt'}, {Key: 'c.txt'}];
```

## Set your variables and run it.

**s3_createbucket.js**

on line 15 set the name of the Bucket you want to create:

```js
var bucket= "name of your Bucket goes here";
```

run it from the command line:

```js
node s3_createbucket.js
```

**s3_listbuckets.js**

No variables to set.

Run it from the command line:

```js
node s3_listbuckets.js
```

**s3_deletebucket.js**

on line 15 set the name of the Bucket you want to delete:

```js
var bucket= "name of your Bucket goes here";
```

run it from the command line:

```js
node s3_deletebucket.js
```

**s3_uploadobject.js**

On lines 15 & 16 set your variables:

```js
var bucket= "name of your Bucket goes here";
var file = "path to your file/filename goes here";
```
Run it from the command line:

```js 
node s3_uploadobject.js
```
**s3_listobjects.js**

On line 15 set the name of the Bucket you're listing from:

```js
var bucket= "name of your Bucket goes here";
```
Run it from the command line:
```js
node s3_listobjects.js
```
**s3_downloadobject.js**

On lines 16 & 17 set your variables:
```js
var bucket= "name of the Bucket you're downloading from goes here";
var key = 'name of the object you're downloading goes here';
```
Run it from the command line:
```js
node s3_downloadobject.js
```
**s3_deleteobjects.js**

On line 20 & 21 set your variables:
```js
var bucket= "name of the Bucket you're deleting from goes here";
var Objects = [{Key: 'name of the Object you're deleting goes here'}];
```
Run it from the command line:
```js
node s3_deleteobjects.js
```






 

 
