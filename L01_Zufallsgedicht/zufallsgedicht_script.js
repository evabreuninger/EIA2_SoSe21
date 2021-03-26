"use strict";
var Zufallsgedicht;
(function (Zufallsgedicht) {
    //Arrays
    let subjekt = ["Eren", "Mikasa", "Armin", "Levi", "Erwin", "Hange"];
    let prädikat = ["kämpft gegen", "liebt", "studiert", "hasst", "feiert", "zerstört"];
    let objekte = ["Mauer Rose", "einen Titan", "Rekruten", "Marley", "den 3D-Manöver-Apparat", "den Aufklärungstrupp"];
    console.log(objekte);
    for (let index = subjekt.length; index > 0; index--) {
        let verse = getVerse();
        console.log(verse);
        document.write("<p>" + verse + "</p>");
    }
    function getVerse() {
        let value1 = Math.floor(Math.random() * subjekt.length);
        let value2 = Math.floor(Math.random() * prädikat.length);
        let value3 = Math.floor(Math.random() * objekte.length);
        let value = subjekt[value1] + " " + prädikat[value3] + " " + objekte[value2];
        subjekt.splice(value1, 1);
        objekte.splice(value2, 1);
        prädikat.splice(value3, 1);
        return value;
    }
})(Zufallsgedicht || (Zufallsgedicht = {}));
//# sourceMappingURL=zufallsgedicht_script.js.map