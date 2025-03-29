let btn=document.querySelectorAll(".b");
let val=document.querySelector("input");
val.value="";



    for(let i=0;i<btn.length;i++)
        {
            btn[i].addEventListener("click",()=>{
             
         
            if(btn[i].innerHTML=="AC")
val.value="";
            else if(btn[i].innerHTML=="=")
                {
                    val.value=eval(val.value);
                    console.log(eval(val.value))
                    
                }
       else if(btn[i].innerHTML=="DEL")
       val.value=val.value.slice(0,val.value.length-1);
else if(val.value.slice(val.value.length-1)!='+' && val.value.slice(val.value.length-1)!='-' &&
val.value.slice(val.value.length-1)!='/' && val.value.slice(val.value.length-1)!='*' && val.value.slice(val.value.length-1)!='.')
{
 val.value=val.value+btn[i].innerHTML;

}
else if(btn[i].innerHTML>='0' && btn[i].innerHTML<='9')
{
    val.value=val.value+btn[i].innerHTML;
}

});
        }

