var result=document.getElementById('result');

/* To display entered number on the screen*/
function liveScreen(enteredValue)
{
    if(!result.value)
    {
        result.value=""
    }
    result.value+=enteredValue;
}

/* To calculate the result */
function calculate(valueOfResult)
{
  const calculatedValue=eval(valueOfResult||NULL);
  if(isNaN(calculatedValue))
  {
    result.value="Can't Divide 0 with 0";
    setTimeout(()=>{
        result.value="";
       },2000);
  }
  else{
    result.value=calculatedValue;
  }
  
}

/*FUNCTION TO HANDLE KEY EVENTS*/

document.addEventListener('keydown',keyBoardInputHandler);

function keyBoardInputHandler(e)
{
    // to prevent any undefined behaviour
    e.preventDefault();

    // for numeric keys
    if(e.key==='Enter')calculate(result.value);
    else if(e.key==='Backspace'){
        var presentResult=result.value;
        result.value=presentResult.substring(0,result.value.length-1);
    }
    else
    //numbersult
  if (e.key === "0") {
    result.value += "0";
  } else if (e.key === "1") {
    result.value += "1";
  } else if (e.key === "2") {
    result.value += "2";
  } else if (e.key === "3") {
    result.value += "3";
  } else if (e.key === "4") {
    result.value += "4";
  } else if (e.key === "5") {
    result.value += "5";
  } else if (e.key === "6") {
    result.value += "6";
  } else if (e.key === "7") {
    result.value += "7";
  } else if (e.key === "7") {
    result.value += "7";
  } else if (e.key === "8") {
    result.value += "8";
  } else if (e.key === "9") {
    result.value += "9";
  }

  //operators
  if (e.key === "+") {
    result.value += "+";
  } else if (e.key === "-") {
    result.value += "-";
  } else if (e.key === "*") {
    result.value += "*";
  } else if (e.key === "/") {
    result.value += "/";
  }

  //decimal key
  if (e.key === ".") {
    result.value += ".";
  }


    
}
