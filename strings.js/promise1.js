let userage=parseInt(prompt("enter your age"));
let checkuser=new Promise((res,rej)=>{
    if(userage>=22)
        {
            res("welcome to the club");
        }
        else{
            rej("you are not allowed");
        }
});
       checkuser
      .then((msg)=>document.write(msg))
      .catch((msg)=>document.write(msg))
      .finally(()=>document.write("thank you for wishing us"))