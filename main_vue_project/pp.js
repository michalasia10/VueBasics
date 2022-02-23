let output = document.querySelector(".gws-csf-randomnumber__result");
let min = document.querySelector(".gws-csf-randomnumber__minVal");
let max = document.querySelector(".gws-csf-randomnumber__maxVal");
let pula1 = [1,2,3];
let pula2 = [80, 81, 82, 83, 84, 85, 86, 87, 88, 89];
let pula3 = [201, 202, 203, 204, 205, 206, 200];




function numbersFall(randomNr){
  const numOutput = parseInt(output.innerText);
  let number = numOutput
//   const absDifference = Math.abs(numOutput-randomNr);
  if(numOutput<randomNr){
    for(let i = numOutput; i<=randomNr; i++){
       (function(index) {
        setTimeout(function() { output.innerText=index; }, i * 15);
    })(i);
    }
  }
  if (numOutput>randomNr){
    for(let i = number; i>=randomNr; i--){
        (function(index) {
        setTimeout(function() { output.innerText=index; }, i * 15);
    })(i);
    }
  }
}

function logMouseButton(e) {
  if (e.code === "Backslash") {
      switch(min.value, max.value){
          case "1", "70":
              const random1 = Math.floor(Math.random() * pula1.length);
              const indexNr = pula1.indexOf(random1)
              const number = pula1[random1];
              numbersFall(number);
              pula1.splice(indexNr,1);
              break;
          case "71", "140":
              const random2 = Math.floor(Math.random() * pula2.length);
              const indexNr2 = pula2.indexOf(random2)
              const number2 = pula2[random2];
              numbersFall(number2);
              pula2.splice(indexNr2,1);
              break;
          case "179", "211":
              const random3 = Math.floor(Math.random() * pula3.length);
              const indexNr3 = pula3.indexOf(random3)
              const number3 = pula3[random3];
              numbersFall(number3);
              pula3.splice(indexNr3,1);
      }
  }
}
document.addEventListener('keyup', logMouseButton);

