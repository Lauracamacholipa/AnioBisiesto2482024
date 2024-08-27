import { siElAnioEsBisiesto } from "./aniobisiesto.js";

describe("AnioBisiesto", () => {
    it("Todos los años divisibles por 400 SON años bisiestos", () => {
        expect(siElAnioEsBisiesto(2000)).toEqual("Es año bisiesto");
    });

    it("Todos los años divisibles por 100 pero no por 400 NO son años bisiestos", () => {
        expect(siElAnioEsBisiesto(1700)).toEqual("No es año bisiesto");
    });

    it("Todos los años divisibles por 4 pero no por 100 SON años bisiestos", () => {
        expect(siElAnioEsBisiesto(2004)).toEqual("Es año bisiesto");
    });

    it("Todos los años que no son divisibles por 4 NO son años bisiestos", () => {
        expect(siElAnioEsBisiesto(2017)).toEqual("No es año bisiesto");
    });
});