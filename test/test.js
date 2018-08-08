const assert = require("assert")
const banquete = require("../algoritmo").banquete


describe("result", function(){
    it("ingresar el costo de banquete para mas de 300 personas", function(){
        var expected = 18810
        var actual = banquete(198)
    });
});

