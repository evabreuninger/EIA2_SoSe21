"use strict";
var eia11_1;
(function (eia11_1) {
    /*
    Aufgabe: L11.1_BlumenwiesePolymorphie
    Name: Eva Breuninger
    Matrikel: 266825
    Datum: 20.06.2021
    Quellen: Larissa Gaede, Maximilian Buckel
    Ehrenmann: Felix Pönitzsch
    */
    let timeScale = 0.005;
    let scene = new eia11_1.Scene(timeScale);
    setInterval(updateAll, 30);
    function updateAll() {
        scene.update();
    }
})(eia11_1 || (eia11_1 = {}));
//# sourceMappingURL=script.js.map