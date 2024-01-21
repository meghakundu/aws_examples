import json
import boto3

client = boto3.client('rekognition')
client_email = boto3.client('sns')
snsArn = 'arn:aws:sns:us-east-1:257440051472:testmsg'

def lambda_handler(event, context):
    
    bucket_name='tesdrdrdr'
    file_name='IMG_2471.JPG'
    response = client.detect_faces(Image={'S3Object':{'Bucket':bucket_name,'Name':file_name}},Attributes=['ALL'])
   
    if response['FaceDetails'] is not None:
       for face in response['FaceDetails']:
           print(json.dumps(face,indent=2))
           
       client_email.publish(
            TopicArn = snsArn,
            Message = 'present',
            Subject='Hello'
            )

#eventcouldwatch trigger can be added for scheduling emails using cron(0 17?*MON-FRI*)