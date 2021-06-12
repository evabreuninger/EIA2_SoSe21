var eia10_2;
(function (eia10_2) {
    var timeScale = 0.005;
    var scene = new eia10_2.Scene(timeScale);
    setInterval(updateAll, 30);
    function updateAll() {
        scene.update();
    }
})(eia10_2 || (eia10_2 = {}));
//# sourceMappingURL=script.js.map