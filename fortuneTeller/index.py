import json
import random

def random_integer():
    options=[1,2,3];
    return random.choice(options)

def lambda_handler(event, context):
    # TODO implement
    options = random_integer();
    if options == 1:
        value = "yes"
    elif options == 2:
           value ="no"
    else:
        value = "maybe"  
    message = f"{value}"
    return {
        'statusCode': 200,
        'body': json.dumps(message)
    }
