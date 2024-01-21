import boto3

def lambda_handler(event, context):
    # TODO implement

    client = boto3.client('sns')
    snsArn = 'arn:aws:sns:us-east-1:257440051472:testmsg'
    message = event['Records'][0]['Sns']['Message']

    response = client.publish(
        TopicArn = snsArn,
        Message = message ,
        Subject='Hello'
    )