import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import fs from 'fs';
const content = fs.readFileSync('fileupload.html', {encoding:'utf-8'});

const client = new S3Client({});

export const handler = async (event) => {
    if(event.queryStringParameters && event.queryStringParameters.imageBucket){
      const command = new PutObjectCommand({
        Bucket: "imageuploadtext",
        Key: event.queryStringParameters.imageBucket,
        Body: "Hello S3!",
      });
    
      try {
        const response = await client.send(command);
        console.log(response);
      } catch (err) {
        console.error(err);
      }
      
      return "file was uploaded successfully";
    }
   return {
      statusCode: 200,
      body:content,
      headers:{
      "Content-Type":"text/html"
      }
    };
};
