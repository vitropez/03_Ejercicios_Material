function factorial(numero) {
    parseInt(numero);
    var resultado=1;

    for (let i =1; i<=numero; i++) {

        if (numero === 0) {
            return 1;
        } else {

           resultado= resultado*i;
        }
    }

    return resultado;
};

function convertir(centigrados){
    parseFloat(centigrados);
    fahrenheit=(centigrados*1.8)+32;
    return fahrenheit;
}