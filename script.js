let res = document.getElementById("result")
res.value = ""
let myVal = res.value
function addNum(num) {
    if (myVal.length == 0 && num == 0) {return}
    else {
    myVal += String(num) 
    res.innerText = myVal
    }
}
function operation(ope) {
    let x = res.innerText[res.innerText.length - 1]
    if (x == "+" || x == "-" || x == "*" || x == "/"|| x == "%" ) console.log("error")
    else {//console.log(res.innerText[res.innerText.length - 1])
    addNum(ope)
    }
}
function equal() {
    try {
        myVal = String(eval(myVal))
    res.innerHTML = eval(myVal)
    }
    catch {
        alert("error: please enter valid operation")
    }
}
function del() {
    
    myVal = myVal.slice(0,-1)
    res.innerText = myVal
}
function clr() {
    myVal = ""
    res.innerText = myVal
}
function mailTo() {
    window.location.href = "mailto:HaidarContactMe@gmail.com";
}