const dynamoose = require('dynamoose');
const ddb = new dynamoose.aws.ddb.DynamoDB({
    "credentials": {
        "accessKeyId": process.env.AWS_KEY,
        "secretAccessKey": process.env.AWS_SECRET
    },
    "region": process.env.AWS_REGION
});

// Set DynamoDB instance to the Dynamoose DDB instance
dynamoose.aws.ddb.set(ddb);