export const handler = async(event)=>{
    var result,price,discount;
    
     if('price' in event){
       price = event['price'];
       discount = event['discount'];
       result = price*(1-(discount/100));
       const response = `<p>The discounted price is: ${result}</p>`;
      return {
        'statusCode':200,
        'body':response
      };
     }
     else{
      return "Price not mentioned";
     }
    };