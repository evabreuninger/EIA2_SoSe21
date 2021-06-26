namespace eia11_1 {

    /*
    Aufgabe: L11.1_BlumenwiesePolymorphie
    Name: Eva Breuninger
    Matrikel: 266825
    Datum: 26.06.2021
    Quellen: Maximilian Buckel, Larissa Gaede
    */

    let timeScale: number = 0.005;
    export let scene: Scene = new Scene(timeScale);

    setInterval(updateAll, 30);

    function updateAll(): void {
        scene.update();
    }

    document.addEventListener("click", e => {
        scene.makeBee(e.x, e.y);
    });
}
