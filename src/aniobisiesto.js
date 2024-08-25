function siElAnioEsBisiesto(numero) {
    if (numero % 400 === 0) {
        return "Es año bisiesto";
    }
    return "No es año bisiesto";
}

export { siElAnioEsBisiesto };
