namespace eia11_1 {

    /*
    Aufgabe: L11.1_BlumenwiesePolymorphie
    Name: Eva Breuninger
    Matrikel: 266825
    Datum: 20.06.2021
    Quellen: Larissa Gaede, Maximilian Buckel
    Ehrenmann: Felix Pönitzsch
    */

    let timeScale: number = 0.005;
    let scene: Scene = new Scene(timeScale);

    setInterval(updateAll, 30);
    
    function updateAll(): void {
        scene.update();
    }
}