// alert("Oi! Eu sou o Alert");
// document.write("Estou na página.");
// console.log("Eu estou no console.");
let tabuada = 5;
function alo(){
    let tabuada = document.getElementById("entrada").value;

    document.write("<h1>Tabuada do " + tabuada + "</h1>");
    document.write(tabuada + " x 1 = " + (tabuada*1)+"<br>");
    document.write(tabuada + " x 2 = " + (tabuada*2)+"<br>");
    document.write(tabuada + " x 3 = " + (tabuada*3)+"<br>");
    document.write(tabuada + " x 4 = " + (tabuada*4)+"<br>");
    document.write(tabuada + " x 5 = " + (tabuada*5)+"<br>");
    document.write(tabuada + " x 6 = " + (tabuada*6)+"<br>");
    document.write(tabuada + " x 7 = " + (tabuada*7)+"<br>");
    document.write(tabuada + " x 8 = " + (tabuada*8)+"<br>");
    document.write(tabuada + " x 9 = " + (tabuada*9)+"<br>");
    document.write(tabuada + " x 10 = " + (tabuada*10)+"<br>");
}
function escreva(){
    for(var i=1; i < 10; i ++){
        for(var i=1; i <= 10; j++){
            document.write(tabuada + " x " + 1 + " = " +(j*i)+"<br>")
        }
        document.write("<br>")
    }
}

function quadrado(){
    for(var i = 2; i < 11; i ++){
        document.write("O quadrado de" + i + " é " + (i*i)+"<br>");
    }let
}

function total(){
     val = document.getElementById("valor").value;
    let ju = document.getElementById("juros").value;

     if (Number(val)){
        alert("o valor deve ser um numero")
        document.getElementById("valor").value =m" " ;
        document.getElementById("valor").focus();
        return

     if(Number(ju)){
            alert"o valor dos juros deve ser um numero");
        document.getElementById("juros").value =m" " ;
        document.getElementById("juros").focus(); 
        return
    }
    let resultado = (val *(1+ (ju/100)))
    document.write("O resultado é " + resultado);
}
