exports.handler = async (event) => {
    // TODO implement
    console.log(JSON.stringify(event));
    const order =JSON.parse(event.Records[0].body);
    console.log("Received orders:",order);
    console.log("Making Pizza..at shop 1 ");
    await sleep(10000);
  };
  
  function sleep(ms){
    return new Promise((resolve)=>{
      setTimeout(resolve,ms);
    })
  }