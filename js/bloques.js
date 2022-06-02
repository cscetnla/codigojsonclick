// Operaciones basicas
function suma(N1, N2, Sm){
    alert("Suma entre dos numeros.");
    
    var N1;
    var N2;
    var Sm;
    
    N1 = parseInt(prompt("Por favor ingrese el valor del primer numero:"));
    N2 = parseInt(prompt("Por favor ingrese el valor del segundo numero:"));

    Sm = N1 + N2;

    alert("El resultado de la suma es: " + Sm);
    
}

function resta(N3, N4, Rs){
    alert("Resta entre dos numeros.");

    var N3;
    var N4;
    var Rs;

    N3 = parseInt(prompt("Por favor ingrese el valor del primer numero:"));
    N4 = parseInt(prompt("Por favor ingrese el valor del segundo numero:"));

    Rs = N3 - N4;

    alert("El resultado de la resta es: " + Rs);

}

function multiplicacion(N5, N6, Ml){
    alert("Multiplicacion entres dos numeros.");

    var N5;
    var N6;
    var Ml;

    N5 = parseInt(prompt("Por favor ingrese el valor del primer numero"));
    N6 = parseInt(prompt("Por favor ingrese el valor del segundo numero"));

    Ml = N5 * N6;

    alert("El resultado de la multiplicacion es: " + Ml);

}

function division(N7, N8, Dv){
    alert("Division entre dos numeros");

    var N7;
    var N8;
    var Dv;

    N7 = parseInt(prompt("Por favor ingrese el valor del primer numero:"));
    N8 = parseInt(prompt("Por favor ingrese el valor del segundo numero:"));

    Dv = N7 / N8;

    alert("El resultado de la division es: " + Dv);
}


// El mayor de dos numeros
function minor(){
    alert("El mayor de dos numeros ingresados por el usuario.");

    var N1;
    var N2;

    N1 = parseInt(prompt("Por favor ingrese el valor del primer numero:"));
    N2 = parseInt(prompt("Por favor ingrese el valor del segundo numero"));
    
    if (N1 == N2){
        alert("El valor de los numeros " + N1 + " y " + N2 + " son iguales.");
    }       else if (N1 > N2){
                alert("El valor del numero mayor es: " + N1);
    }               else {
                        alert("El valor del numero mayor es: " + N2);
    }
}


// El menor de tres numeros
function minorthree(){
    alert("El menor de tres numeros ingresados por el usuario.");

        var N1;
        var N2;
        var N3;
        var Minor;
        var Equal;

        N1 = parseInt(prompt("Por favor ingrese el valor del primer numero"));
        N2 = parseInt(prompt("Por favor ingrese el valor del segundo numero"));
        N3 = parseInt(prompt("Por favor ingrese el valor del tercer numero"));

        if (N1 == N2 && N1 == N3){
            Equal = N1;
            alert("El valor de los numeros ingresados son iguales.");
        }else if (N1 <= N2 && N1 <= N3){
            Minor = N1;
            alert("El numero menor es: " + Minor);
        }else if (N2 <= N1 && N2 < N3){
            Minor = N2;
            alert("El numero menor es: " + Minor);
        }else{
            Minor = N3;
            alert("El numero menor es: " + Minor);
        }                       
        
    }    

    
    // Numero par o impar
    function pairodd(){
        alert("Descubra si su numero es par o impar.")
    
        var N;
        var Modular;
        
        N = parseInt(prompt("Por favor ingrese un numero:"));
    
        Modular = (N % 2)
    
        if (Modular == 0){
            alert("El numero " + N + " es par.");
        }else{
            alert("El numero " + N + " es impar.");
        }
    
    }


    // Cuadrado de un numero
    function cuadrado(){
        alert("El cuadrado de un numero.")

        var N;
        var Cuadrado;
    
        N = parseInt(prompt("Por favor ingrese un numero:"));
    
        Cuadrado = N * N;
    
        alert("El valor de " + N + " al cuadrado es: " + Cuadrado);
    }


    // Area de un triangulo
    function triarea(){
        alert("Area de un triangulo.")

        var B;
        var H;
        var A;
    
        B = parseInt(prompt("Por favor ingrese el valor de la base del triangulo:"));
        H = parseInt(prompt("Por favor ingrese el valor de la altura del triangulo:"));
    
        A = (B * H) / 2;
    
        alert("El valor del area del triangulo es: " + A);
    
    }


    // De metros a centimetros
    function conversor(){
        alert("Conversor de unidad de metros a centimetros.")

        var M;
        var Conver;
    
        M = parseInt(prompt("Por favor digite el valor de la medida en metros:"));
    
        Conver = M * 100;
    
        alert(M + " metros es igual a: " + Conver + " centimetros.");
    
    }


    // Año de nacimiento
    function year(){
        alert("Ingrese su edad y el sistema mostrara el año en que nacio.");

        var EDAD;
        var YEAR;
        var NAC;

        EDAD = parseInt(prompt("Por favor ingrese su edad:"));
        YEAR = parseInt(prompt("Por favor ingrese el año actal:"));

        NAC = YEAR - EDAD;

        alert("El año de su nacimiento fue: " + NAC);

    }


    // Inversion en un banco
    function invertion(){
        alert("Valor de ganacia segun dinero invertido.");

        var CAPITAL;
        var VALORMENSUAL;
        var VALORANUAL;
        var TIEMPO;
        var VALORTOTAL;

        CAPITAL = parseInt(prompt("Por favor ingrese el valor del capital a invertir:"));
        TIEMPO = parseInt(prompt("Por favor ingrese el numero de años de inversion:"));

        VALORMENSUAL = CAPITAL      * 0.02;
        VALORANUAL   = VALORMENSUAL * 12;
        VALORTOTAL   = VALORANUAL   * TIEMPO;

        alert("El valor mensual de la ganacia es: " + VALORMENSUAL);
        alert("El valor anual de la ganacia es: " + VALORANUAL);
        alert("El valor total de la ganacia es: " + VALORTOTAL);  

    }


    // Promedio de notas
    function note(){
        alert("Promedio de notas.")

        var NOTA1;
        var NOTA2;
        var NOTA3;
        var NOTA4;
        var NOTA5;
        var PRO;

        NOTA1 = parseInt(prompt("Por favor ingrese el valor de la primera nota:"));
        NOTA2 = parseInt(prompt("Por favor ingrese el valor de la segunda nota:"));
        NOTA3 = parseInt(prompt("Por favor ingrese el valor de la tercera nota:"));
        NOTA4 = parseInt(prompt("Por favor ingrese el valor de la cuarta nota:"));
        NOTA5 = parseInt(prompt("Por favor ingrese el valor de la quinta nota:"));
        
        PRO = (NOTA1 + NOTA2 + NOTA3 + NOTA4 + NOTA5) / 5

        alert("El valor del promedio es:" + PRO);

        if (PRO <= 2.9){
            alert("Lo sentimos, usted reprobo.")
        }else if(PRO > 5){
            alert("Error.")
        }else{
            alert("Felicitaciones, usted aprobo.")
        }

    }


        // Valor compra de manzanas
        function fruits(){
            alert("Descuento en compra de manzanas.")

            var KILOS;
            var DESCUENTO;
            var TOTAL;

            KILOS = parseInt(prompt("Por favor ingrese el numero de kilos:"));

            if(KILOS <= 2){
                DESCUENTO = 0;
                TOTAL = KILOS * 4500;
                alert("El descuento en la compra de manzanas es: " + DESCUENTO);
                alert("El total a pagar es: " + TOTAL);
            }else if(KILOS >= 3 && KILOS <= 5){
                DESCUENTO = KILOS * 4500 * 0.10;
                TOTAL = (KILOS * 4500) - DESCUENTO;
                alert("El descuento en la compra de manzanas es: " + DESCUENTO);
                alert("El total a pagar es: " + TOTAL);
            }else if(KILOS >= 6 && KILOS <= 10){
                DESCUENTO = KILOS * 4500 * 0.15;
                TOTAL = (KILOS * 4500) - DESCUENTO;
                alert("El descuento en la compra de manzanas es: " + DESCUENTO);
                alert("El total a pagar es: " + TOTAL); 
            }else{
                DESCUENTO = KILOS * 4500 * 0.20;
                TOTAL = (KILOS * 4500) - DESCUENTO;
                alert("El descuento en la compra de manzanas es: " + DESCUENTO);
                alert("El total a pagar es: " + TOTAL);
            }
    }
