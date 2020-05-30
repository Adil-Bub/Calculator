document.getElementById('display').innerHTML=0;
let temp= ['',''];
  let i = 0;
  let operator=['AC','C','.'];
  let op;
  let final = 0;
function keyPress(obj){
  if(obj.innerHTML!= '=')
    {if(!isNaN(Number(obj.innerHTML)))
      {temp[i]+=obj.innerHTML;
      document.getElementById('display').innerHTML=Number(temp[i]);
      }
    else 
      {if(operator.includes(`${obj.innerHTML}`))
        {if(obj.innerHTML=='AC')
          {temp= ['',''];
          i=0;
          document.getElementById('display').innerHTML=0;
          document.getElementById('point').style.pointerEvents = 'auto';}
         else if(obj.innerHTML=='C')
           {if(temp[i].length) { 
             temp[i]=temp[i].substring(0, temp[i].length - 1);
           if(temp[i].length==0) temp[i]='0';}
            else temp[i]='0';
            if(!temp[i].includes('.')){ document.getElementById('point').style.pointerEvents = 'auto';}           document.getElementById('display').innerHTML=temp[i];

           }
         else{temp[i]+=obj.innerHTML;              document.getElementById('display').innerHTML=temp[i];
              document.getElementById('point').style.pointerEvents = 'none';
         }
        }
      else
        {if(i<1){
            temp[i]=Number(temp[i]);
            op=obj.innerHTML;
          document.getElementById('display').innerHTML=Number(temp[i]);
          document.getElementById('display').innerHTML=op;
            i++;

          document.getElementById('point').style.pointerEvents = 'auto';
                }
        else {temp[i]=Number(temp[i]);
              document.getElementById('display').innerHTML=op;
              final = calc(temp[i-1],temp[i],op);
              document.getElementById('display').innerHTML=Number(final);
              temp[i-1]=final;
              temp[i]='';
              i==1; 
              op=obj.innerHTML;
              document.getElementById('point').style.pointerEvents = 'auto';
             }
        }
     }
  }
  else 
  {if(i!=0){
   temp[i]=Number(temp[i]);
  
  final = calc(temp[i-1],temp[i],op);
  if(!isFinite(final)){document.getElementById('display').innerHTML='ERROR';}
  else{document.getElementById('display').innerHTML=Number(final);
  temp[i-1]=final.toString();
  temp[i]='';
  i--;
  }
  }
  }
  document.getElementById(`${obj.getAttribute('id')}`).classList.add('MyClass');
   setTimeout(function(){document.getElementById(`${obj.getAttribute('id')}`).classList.remove('MyClass')},100);  
}
function calc(a,b,op){
    if (op=='+')
      {return parseFloat((a+b).toFixed(6));}
    else if (op=='-')
      {return parseFloat((a-b).toFixed(6));}
    else if (op=='X')
      {return parseFloat((a*b).toFixed(6));}
    else if (op=='/')
      {return parseFloat((a/b).toFixed(6));}
    else if (op=='%')
      {return parseFloat((a%b).toFixed(6));}
    }