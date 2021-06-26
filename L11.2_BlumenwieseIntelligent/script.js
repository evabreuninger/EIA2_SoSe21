"use strict";
var eia11_1;
(function (eia11_1) {
    /*
    Aufgabe: L11.1_BlumenwiesePolymorphie
    Name: Eva Breuninger
    Matrikel: 266825
    Datum: 19.06.2021
    Quellen: Larissa Gaede, Maximilian Buckel
    */
    let timeScale = 0.005;
    eia11_1.scene = new eia11_1.Scene(timeScale);
    setInterval(updateAll, 30);
    function updateAll() {
        eia11_1.scene.update();
    }
    document.addEventListener("click", e => {
        eia11_1.scene.makeBee(e.x, e.y);
    });
})(eia11_1 || (eia11_1 = {}));
//# sourceMappingURL=script.js.map