function getHistory() {
 return document.getElementById("history-value"),innerText;
}
function printHistory(num) {
  document.getElementById("history-value").innerText=num;
}
function getOutput() {
   return document.getElementById("output-value").innerText;
}
function printOutput(num) {
 // document.getElementById("output-value").innerText=getFormattedNumber(num);
 if(num=="") {
   document.getElementById("output-value").innerText=num;
 }
 else {
document.getElementById("output-value").innerText=getFormattedNumber(num);
 }

}
function getFormattedNumber(num) {
  var n = Number(num);
  var value = n.toLocaleString("en");
  return value;
}
// printOutput("9999");
// printOutput("9847543");
function reverseNumberFormat(num) {
  return Number(num.replace(/,/g,''));
}
var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++) {
  operator[i].addEventListener('click',function(){
    // alert("The operator clicked:"+this.id);
    if(this.id=="clear"){
      printHistory("");
      printOutput("");
    }

    else if(this.id=="backspace"){
      var output=reverseNumberFormat(getOutput()).toString();
      if(output){  //if outputhas a value
        output= output.substr(0,output.length-1);
        printOutput(output);
      }
    }
  });
}
var number = document.getElementsByClassName("number");
for(var i =0;i<operator.length;i++) {
  number[i].addEventListener('click',function(){
    // alert("The number clicked:"+this.id);
    var output=reverseNumberFormat(getOutput());
    if(output!=NaN){  // if output is a number
        output=output+this.id;
        printOutput(output);
    }
  });
}
// alert(reverseNumberFormat(getOutput()));
