import { siElAnioEsBisiesto } from "./aniobisiesto.js";

describe("AnioBisiesto", () => {
    it("Todos los años divisibles por 400 SON años bisiestos", () => {
        expect(siElAnioEsBisiesto(2000)).toEqual("Es año bisiesto");
        expect(siElAnioEsBisiesto(2400)).toEqual("Es año bisiesto");
    });

    it("Todos los años divisibles por 100 pero no por 400 NO son años bisiestos", () => {
        expect(siElAnioEsBisiesto(1700)).toEqual("No es año bisiesto");
        expect(siElAnioEsBisiesto(1800)).toEqual("No es año bisiesto");
        expect(siElAnioEsBisiesto(1900)).toEqual("No es año bisiesto");
        expect(siElAnioEsBisiesto(2100)).toEqual("No es año bisiesto");
    });

    it("Todos los años divisibles por 4 pero no por 100 SON años bisiestos", () => {
        expect(siElAnioEsBisiesto(2004)).toEqual("Es año bisiesto");
        expect(siElAnioEsBisiesto(2008)).toEqual("Es año bisiesto");
        expect(siElAnioEsBisiesto(2012)).toEqual("Es año bisiesto");
    });

    it("Todos los años que no son divisibles por 4 NO son años bisiestos", () => {
        expect(siElAnioEsBisiesto(2017)).toEqual("No es año bisiesto");
        expect(siElAnioEsBisiesto(2018)).toEqual("No es año bisiesto");
        expect(siElAnioEsBisiesto(2019)).toEqual("No es año bisiesto");
    });
});

