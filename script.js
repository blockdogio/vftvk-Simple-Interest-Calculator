
     
     //Interest rate slider 
     
     function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

  //Check for positive values & compute interest on principle 
  
  function compute() {
    var principal = document.getElementById("principal").value;
    var moreThenZero = parseInt(principal) > 0;
    if (!moreThenZero) {
        alert("Enter a positive number please");
        document.getElementById("principal").focus();
    }

        else

     {

        var principal = document.getElementById("principal").value;

        var rate = document.getElementById("rate").value;
        
        var years = document.getElementById("years").value;
        
        var interest = principal * years * rate /100;
        
        var amount =  interest;

        var total = parseInt(principal) + interest;
        
        var year = new Date().getFullYear()+parseInt(years);

    p = document.getElementById("principal").nodeValue;
         document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>Making your total "+total+"\<br\>"
         
     }
  }
    

