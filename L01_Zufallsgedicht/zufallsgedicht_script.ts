namespace Zufallsgedicht {
    //Arrays
    let subjekt: string[] = ["Eren", "Mikasa", "Armin", "Levi", "Erwin", "Hange"];
    let prädikat: string[] = ["kämpft gegen", "liebt", "studiert", "hasst", "feiert", "zerstört"];
    let objekte: string[] = ["Mauer Rose", "einen Titan", "Rekruten", "Marley", "den 3D-Manöver-Apparat", "den Aufklärungstrupp"]
    console.log(objekte);

    for (let index = subjekt.length; index > 0 ; index--) {  
        let verse: string = getVerse();
        console.log(verse);
        document.write("<p>" + verse + "</p>");
    }

    function getVerse(): string {
        let value1: number = Math.floor(Math.random() * subjekt.length);
        let value2: number = Math.floor(Math.random() * prädikat.length);
        let value3: number = Math.floor(Math.random() * objekte.length);

        let value: string = subjekt[value1] + " " + prädikat[value3] + " " + objekte[value2];

        subjekt.splice(value1, 1);
        objekte.splice(value2, 1);
        prädikat.splice(value3, 1);
        return value;
    }
}
