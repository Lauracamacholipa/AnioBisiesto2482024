import { siElAnioEsBisiesto } from "./aniobisiesto.js";

describe("AnioBisiesto", () => {
    it("Todos los años divisibles por 400 SON años bisiestos", () => {
        expect(siElAnioEsBisiesto(2000)).toEqual("Es año bisiesto");
    });

    it("Años divisibles por 100 pero no por 400 NO son años bisiestos", () => {
        expect(siElAnioEsBisiesto(1900)).toEqual("No es año bisiesto");
    });

});

