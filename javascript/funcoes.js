
var input = document.getElementById("inp");

function aparecerDragao(){
    document.getElementById("dragaoImg").style.display = 'block';
}
function sumirDragao(){
    document.getElementById("dragaoImg").style.display = 'none';
}
function back(){
    document.getElementById("calculadora").style.backgroundColor = 'rgba(255,40,0,.8)';
}
function sumirBack(){
    document.getElementById("calculadora").style.backgroundColor = 'rgba(255,255,255,.1)';
}

            //////////////////////// Teclas ////////////////////////
function digitar0(){
    input.value = input.value + '0';
}
    function digitar1(){
        input.value = input.value + '1';  
    }
        function digitar2(){
            input.value = input.value + '2';
        }
            function digitar3(){
                input.value = input.value + '3';
            }
                function digitar4(){
                    input.value = input.value + '4';
                }
                function digitar5(){
                    input.value = input.value + '5';
                }
            function digitar6(){
                input.value = input.value + '6';
            }
        function digitar7(){
            input.value = input.value + '7';
        }
    function digitar8(){
        input.value = input.value + '8';
    }
function digitar9(){
    input.value = input.value + '9';
}

function digitarVirgula(){
    input.value = input.value + ".";
}

    function digitarponto(){
        input.value = input.value +".";
    }
            //////////////////////// Teclas ////////////////////////

var vet = [0,0,0,0,0,0,0,0,0,0];
var sinal;

    function c(){
        input.value = "";
        vet[0] = 0;
        vet[1] = 0;
        vet[2] = 0;
        vet[3] = 0;
        vet[4] = 0;
        vet[5] = 0;
        vet[6] = 0;
        vet[7] = 0;
        vet[8] = 0;
        vet[9] = 0;    
    }

    function ce(){
        input.value = "";    
}


function adicao(){
    
    if(vet[8] != 0){
        vet[9] = Number(input.value);
        input.value = "";
    }else
    if(vet[7] != 0){
        vet[8] = Number(input.value);
        input.value = "";
    }else
    if(vet[6] != 0){
        vet[7] = Number(input.value);
        input.value = "";
    }else
    if(vet[5] != 0){
        vet[6] = Number(input.value);
        input.value = "";
    }else
    if(vet[4] != 0){
        vet[5] = Number(input.value);
        input.value = "";
    }else
    if(vet[3] != 0){
        vet[4] = Number(input.value);
        input.value = "";
    }else
    if(vet[2] != 0){
        vet[3] = Number(input.value);
        input.value = "";
    }else
    if(vet[1] != 0){
        vet[2] = Number(input.value);
        input.value = "";
    }else
    if(vet[0] != 0){
        vet[1] = Number(input.value);
        input.value = "";
    }else
    if(vet[0] == 0){
        vet[0] = Number(input.value);
        input.value = "";
    }
        
    sinal = "+";

}

function subtracao(){

    if(vet[8] != 0){
        vet[9] = Number(input.value);
        input.value = "";
    }else
    if(vet[7] != 0){
        vet[8] = Number(input.value);
        input.value = "";
    }else
    if(vet[6] != 0){
        vet[7] = Number(input.value);
        input.value = "";
    }else
    if(vet[5] != 0){
        vet[6] = Number(input.value);
        input.value = "";
    }else
    if(vet[4] != 0){
        vet[5] = Number(input.value);
        input.value = "";
    }else
    if(vet[3] != 0){
        vet[4] = Number(input.value);
        input.value = "";
    }else
    if(vet[2] != 0){
        vet[3] = Number(input.value);
        input.value = "";
    }else
    if(vet[1] != 0){
        vet[2] = Number(input.value);
        input.value = "";
    }else
    if(vet[0] != 0){
        vet[1] = Number(input.value);
        input.value = "";
    }else
    if(vet[0] == 0){
        vet[0] = Number(input.value);
        input.value = "";
    }
        
    sinal = "-";

}

function multiplicacao(){
    
    if(vet[8] != 0){
        vet[9] = Number(input.value);
        input.value = "";
    }else
    if(vet[7] != 0){
        vet[8] = Number(input.value);
        input.value = "";
    }else
    if(vet[6] != 0){
        vet[7] = Number(input.value);
        input.value = "";
    }else
    if(vet[5] != 0){
        vet[6] = Number(input.value);
        input.value = "";
    }else
    if(vet[4] != 0){
        vet[5] = Number(input.value);
        input.value = "";
    }else
    if(vet[3] != 0){
        vet[4] = Number(input.value);
        input.value = "";
    }else
    if(vet[2] != 0){
        vet[3] = Number(input.value);
        input.value = "";
    }else
    if(vet[1] != 0){
        vet[2] = Number(input.value);
        input.value = "";
    }else
    if(vet[0] != 0){
        vet[1] = Number(input.value);
        input.value = "";
    }else
    if(vet[0] == 0){
        vet[0] = Number(input.value);
        input.value = "";
    }
        
    sinal = "x";

}

function divisao(){
    
    if(vet[8] != 0){
        vet[9] = Number(input.value);
        input.value = "";
    }else
    if(vet[7] != 0){
        vet[8] = Number(input.value);
        input.value = "";
    }else
    if(vet[6] != 0){
        vet[7] = Number(input.value);
        input.value = "";
    }else
    if(vet[5] != 0){
        vet[6] = Number(input.value);
        input.value = "";
    }else
    if(vet[4] != 0){
        vet[5] = Number(input.value);
        input.value = "";
    }else
    if(vet[3] != 0){
        vet[4] = Number(input.value);
        input.value = "";
    }else
    if(vet[2] != 0){
        vet[3] = Number(input.value);
        input.value = "";
    }else
    if(vet[1] != 0){
        vet[2] = Number(input.value);
        input.value = "";
    }else
    if(vet[0] != 0){
        vet[1] = Number(input.value);
        input.value = "";
    }else
    if(vet[0] == 0){
        vet[0] = Number(input.value);
        input.value = "";
    }
        
    sinal = "/";

}

function igual(){
    var calculo;
    
    vet[9] = Number(input.value);
    
    if(sinal == "+"){
            
        calculo = vet[0] + vet[1]+ vet[2]+ vet[3]+ vet[4]+ vet[5]+ vet[6]+ vet[7]+ vet[8]+ vet[9];
            
        input.value = calculo;

        vet[0] = 0;
        vet[1] = 0;
        vet[2] = 0;
        vet[3] = 0;
        vet[4] = 0;
        vet[5] = 0;
        vet[6] = 0;
        vet[7] = 0;
        vet[8] = 0;
        vet[9] = 0;          
        }
 
        if(sinal == "-"){
            
            calculo = vet[0] - vet[1] - vet[2] - vet[3] - vet[4] - vet[5] - vet[6]+ vet[7] - vet[8] - vet[9];
                
            input.value = calculo;

            vet[0] = 0;
            vet[1] = 0;
            vet[2] = 0;
            vet[3] = 0;
            vet[4] = 0;
            vet[5] = 0;
            vet[6] = 0;
            vet[7] = 0;
            vet[8] = 0;
            vet[9] = 0;          
            }

            if(sinal == "x"){
             if(vet[0] != 0 && vet[1] != 0 && vet[2] != 0 && vet[3] != 0 && vet[4] 
                    != 0 && vet[5] != 0 &&vet[6] != 0 && vet[7] != 0 && vet[8] != 0 && vet[9] != 0){
                calculo = vet[0] * vet[1] * vet[2] * vet[3] * vet[4] * vet[5] * vet[6] * vet[7] * vet[8] * vet[9];
            }else if(vet[0] != 0 && vet[1] != 0 && vet[2] != 0 && vet[3] != 0 && vet[4] 
                    != 0 && vet[5] != 0 &&vet[6] != 0 && vet[7] != 0 && vet[9] != 0){
                calculo = vet[0] * vet[1] * vet[2] * vet[3] * vet[4] * vet[5] * vet[6] * vet[7] * vet[9];
            }else if(vet[0] != 0 && vet[1] != 0 && vet[2] != 0 && vet[3] != 0 && vet[4] 
                    != 0 && vet[5] != 0 &&vet[6] != 0 && vet[9] != 0){
                calculo = vet[0] * vet[1] * vet[2] * vet[3] * vet[4] * vet[5] * vet[6] * vet[9];
            }else if(vet[0] != 0 && vet[1] != 0 && vet[2] != 0 && vet[3] != 0 && vet[4] 
                    != 0 && vet[5] != 0 && vet[9] != 0){
                calculo = vet[0] * vet[1] * vet[2] * vet[3] * vet[4] * vet[5] * vet[9];
            }else if(vet[0] != 0 && vet[1] != 0 && vet[2] != 0 && vet[3] != 0 && vet[4] 
                    != 0 && vet[9] != 0){
                calculo = vet[0] * vet[1] * vet[2] * vet[3] * vet[4] * vet[9];
            }else if(vet[0] != 0 && vet[1] != 0 && vet[2] != 0 && vet[3] != 0 && vet[9] != 0){
                calculo = vet[0] * vet[1] * vet[2] * vet[3] * vet[9];
            }else if(vet[0] != 0 && vet[1] != 0 && vet[2] != 0 && vet[9] != 0){
                calculo = vet[0] * vet[1] * vet[2] * vet[9];
            }else if(vet[0] != 0 && vet[1] != 0 && vet[9] != 0){
                calculo = vet[0] * vet[1] * vet[9];
            }else if(vet[0] != 0 && vet[9] != 0){
                calculo = vet[0] * vet[9];
            }
            
                input.value = calculo;

        vet[0] = 0;
        vet[1] = 0;
        vet[2] = 0;
        vet[3] = 0;
        vet[4] = 0;
        vet[5] = 0;
        vet[6] = 0;
        vet[7] = 0;
        vet[8] = 0;
        vet[9] = 0;          
        }

        if(sinal == "/"){
             if(vet[0] != 0 && vet[1] != 0 && vet[2] != 0 && vet[3] != 0 && vet[4] 
                    != 0 && vet[5] != 0 &&vet[6] != 0 && vet[7] != 0 && vet[8] != 0 && vet[9] != 0){
                calculo = vet[0] / vet[1] / vet[2] / vet[3] / vet[4] / vet[5] / vet[6] / vet[7] / vet[8] / vet[9];
            }else if(vet[0] != 0 && vet[1] != 0 && vet[2] != 0 && vet[3] != 0 && vet[4] 
                    != 0 && vet[5] != 0 &&vet[6] != 0 && vet[7] != 0 && vet[9] != 0){
                calculo = vet[0] / vet[1] / vet[2] / vet[3] / vet[4] / vet[5] / vet[6] / vet[7] / vet[9];
            }else if(vet[0] != 0 && vet[1] != 0 && vet[2] != 0 && vet[3] != 0 && vet[4] 
                    != 0 && vet[5] != 0 &&vet[6] != 0 && vet[9] != 0){
                calculo = vet[0] / vet[1] / vet[2] / vet[3] / vet[4] / vet[5] / vet[6] / vet[9];
            }else if(vet[0] != 0 && vet[1] != 0 && vet[2] != 0 && vet[3] != 0 && vet[4] 
                    != 0 && vet[5] != 0 && vet[9] != 0){
                calculo = vet[0] / vet[1] / vet[2] / vet[3] / vet[4] / vet[5] / vet[9];
            }else if(vet[0] != 0 && vet[1] != 0 && vet[2] != 0 && vet[3] != 0 && vet[4] 
                    != 0 && vet[9] != 0){
                calculo = vet[0] / vet[1] / vet[2] / vet[3] / vet[4] / vet[9];
            }else if(vet[0] != 0 && vet[1] != 0 && vet[2] != 0 && vet[3] != 0 && vet[9] != 0){
                calculo = vet[0] / vet[1] / vet[2] / vet[3] / vet[9];
            }else if(vet[0] != 0 && vet[1] != 0 && vet[2] != 0 && vet[9] != 0){
                calculo = vet[0] / vet[1] / vet[2] / vet[9];
            }else if(vet[0] != 0 && vet[1] != 0 && vet[9] != 0){
                calculo = vet[0] / vet[1] / vet[9];
            }else if(vet[0] != 0 && vet[9] != 0){
                calculo = vet[0] / vet[9];
            }
            
                input.value = calculo;

        vet[0] = 0;
        vet[1] = 0;
        vet[2] = 0;
        vet[3] = 0;
        vet[4] = 0;
        vet[5] = 0;
        vet[6] = 0;
        vet[7] = 0;
        vet[8] = 0;
        vet[9] = 0;          
        }
}