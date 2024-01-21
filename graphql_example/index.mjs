//appsync is used
export const handler = async (event) => {
    console.log("Event is",JSON.stringify(event,3));
     return {data : "hello"};
   };
   
