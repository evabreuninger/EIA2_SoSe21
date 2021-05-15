//inspired by Jirka
namespace L08_2_FlowerCanvas {
    interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;
    let golden: number = 0.62;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        drawBackground();
        drawSun({x: 100, y: 75});
        drawCloud({x: 500, y: 125}, {x: 200, y: 50});
        drawMountains({x: -500, y: 400}, 75, 200, "grey", "white");
        drawMountains({x: -500, y: 400}, 50, 150, "grey", "lightgrey");
        drawBush({x: -300, y: 500}, {x: 50, y: 40});
        drawFlowers({x: -200, y: -50});
    }

    function drawBackground(): void {
        console.log("Background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "green");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

    }

    function drawSun(_position: Vector): void {
        console.log("Sun");

        let r1: number = 30;
        let r2: number = 150;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }

    function drawCloud(_position: Vector, _size: Vector): void {
        console.log("Cloud", _position, _size);

        let nParticles: number = 60;
        let radiusParticle: number = 30;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
    }

    function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        console.log("Mountains");
        let stepMin: number = 50;
        let stepMax: number = 150;
        let x: number = 0;
        
        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();
    }

    function drawBush(_position: Vector, _size: Vector): void {
        console.log("Bush", _position, _size);
        
        let nParticles: number = 10;
        let radiusParticle: number = 20;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "green");
        gradient.addColorStop(1, "darkgreen");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
    }
    //Blüten inspiriert von Karen Josten
    function drawFlowers(_position: Vector): void {
        for (var nFlowers: number = 0; nFlowers < 15; nFlowers++) {
        let randomX: number = 1000 * Math.random();
        let randomY: number = 270 * Math.random();
        
        //Blumestiel
        crc2.beginPath();
        crc2.rect(_position.x + randomX, _position.y + randomY, 5, 50); 
        crc2.fillStyle = "green";
        crc2.fill();
        crc2.closePath();

        //Blatt
        crc2.beginPath();
        crc2.arc(_position.x + 14 + randomX, _position.y + 32 + randomY, 8, 0, 1 * Math.PI); 
        crc2.fillStyle = "green";
        crc2.fill();
        crc2.closePath();

        //Blüten
        crc2.beginPath();
        crc2.arc(_position.x + 10 + randomX, _position.y + randomY, 10, 0, 2 * Math.PI);
        crc2.arc(_position.x + randomX, _position.y + 10 + randomY, 10, 0, 2 * Math.PI);
        crc2.arc(_position.x - 10 + randomX, _position.y + randomY, 10, 0, 2 * Math.PI);
        crc2.arc(_position.x + randomX, _position.y - 10 + randomY, 10, 0, 2 * Math.PI);
        crc2.fillStyle = "red";
        crc2.fill();
        crc2.closePath();

        //Blumenmitte
        crc2.beginPath();
        crc2.arc(_position.x + randomX, _position.y + randomY, 8, 0, 2 * Math.PI);
        crc2.fillStyle = "yellow";
        crc2.fill();
        crc2.closePath();
    }
    }

}