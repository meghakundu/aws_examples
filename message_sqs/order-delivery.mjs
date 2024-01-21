import {SQSClient,SendMessageCommand} from "@aws-sdk/client-sqs";
const sqs = new SQSClient();
//const sqsurl = "https://sqs.us-east-1.amazonaws.com/257440051472/pizza-ordering-queue.fifo";
const numberofPizzaShops=1;
const numberofOrders =10;

export const handler = async (event) => {
  // TODO implement
  let orderID=100;
  const records=[];
  for(let i=0;i < numberofOrders;i++){
    const params={
      MessageBody:JSON.stringify({
        orderID:orderID,
        order:'pizza - ${Math.floor(Math.random()*10)}',
        timestamp: new Date().toISOString()
      }),
      QueueUrl:sqsurl,
      MessageDeduplicationId:orderID.toString(),
      MessageGroupId:'group-1'
    };
    records.push(params);
    orderID++;
  }
  for(const record of records){
    await sqs.send(new SendMessageCommand(record)).then((response)=>{
      console.log(JSON.stringify(response));
    });
  }
};
