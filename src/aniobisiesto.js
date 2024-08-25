function siElAnioEsBisiesto(numero) {
    if (numero % 400 === 0) {
        return "Es año bisiesto";
    }
    if (numero % 100 ===0){
        return "No es año bisiesto"
    }
    return "No es año bisiesto";
}

export { siElAnioEsBisiesto };
