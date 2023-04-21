function fototeste(){
    /*Api*/ 
       
   fetch("https://api.openai.com/v1/images/generations", {
       method:"POST",
       headers:{
           Accept: "application/json",
           "Content-Type": "application/json",
           Authorization: "Bearer " + OPENAI_API_KEY,
           model: "gpt-3.5-turbo",
       },
       body: JSON.stringify({
           model: "text-davinci-003",
           prompt: "Comando",
           size: "1024x1024",
           temperature: 1,
       }),
   })
   .then((response)=> response.json())
   .then((json) =>{
       if(json.error?.message){
           result.value += `Error!`;
       }else if(json.choices?.[0].text){
           let text = json.choices[0].text || "Sem resposta";
           console.log(text)
       }
   })
}
fototeste();