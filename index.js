let div = document.createElement("div");
let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", function(){
    let BillAmount = document.getElementById("Bill-Amount").value;
    let TipPercentage = document.getElementById("Tip-Percantage").value;
    let TipAmount = document.getElementById("Tip-Amount").value = (BillAmount/100)*(TipPercentage);
    document.getElementById("Total-Bill").value = parseFloat(BillAmount)+parseFloat(TipAmount);
})
function fun(){  
    document.getElementById("Container").reset();  
  }
