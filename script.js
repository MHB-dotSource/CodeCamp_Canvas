function draw() {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        let radius = canvas.height / 2;
        //legt Ursprung des Koordinatensystems in die Mitte
        ctx.translate(radius, radius);
        radius *= 0.9;

        //Draw outline
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();

        //Rand
        let grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
        grad.addColorStop(0, '#333');
        grad.addColorStop(0.5, 'white');
        grad.addColorStop(1, '#333');
        ctx.strokeStyle = grad;
        ctx.lineWidth = radius * 0.1;
        ctx.stroke();

        //small cricle
        ctx.beginPath();
        ctx.arc(0, 0, radius * 0.1, 0, Math.PI * 2);
        ctx.fillStyle = "black";
        ctx.fill();

        //numbers
        ctx.font = radius * 0.15 + "px arial";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        for (num = 1; num < 13; num++) {
            ang = num * Math.PI / 6;
            //rotiere die Achsen
            ctx.rotate(ang);
            //verschiebe den Nullpunkt
            ctx.translate(0, -radius * 0.85);
            //zurückrotieren
            ctx.rotate(-ang);
            //Text
            ctx.fillText(num.toString(), 0, 0);
            //Rotieren
            ctx.rotate(ang);
            //zurück in die Mitte
            ctx.translate(0, radius * 0.85);
            //Zurückrotieren
            ctx.rotate(-ang);
        }

        //time
        let now = new Date();
        let hour = now.getHours();
        let min = now.getMinutes();
        let sec = now.getSeconds();
        //Stunde auf Uhr ermittelnt
        hour = hour % 12;
        //Grad ermitteln
        hour = (hour * Math.PI * 2 / 12);
        drawHand(ctx, hour, radius * 0.5, radius * 0.07);
        min = (min * Math.PI * 2 / 60);
        drawHand(ctx, min, radius * 0.8, radius * 0.05);
        sec = (sec * Math.PI * 2 / 60);
        drawHand(ctx, sec, radius * 0.75, radius * 0.03);

    }

    //Zeiger
    function drawHand(ctx, pos, length, width) {
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.lineCap = "round";
        ctx.moveTo(0, 0);
        ctx.rotate(pos);
        ctx.lineTo(0, -length);
        ctx.stroke();
        ctx.rotate(-pos);
    }
}

var i = 0;

function draw2() {
    const canvas = document.getElementById("canvas2");
    const ctx = canvas.getContext("2d");
    //canvas leeren
    ctx.clearRect(0, 0, 400, 400);
    //weißes Canvas sichern
    ctx.save();
    let radius = canvas.height / 2;
    //legt Ursprung des Koordinatensystems in die Mitte
    ctx.translate(radius, radius);

    //zeichnet Rechteck
    ctx.fillStyle = "rgb(200, 0, 0)";
    ctx.fillRect(0, 0, 50, 20);
    //style mit opacity
    ctx.fillStyle = "rgb(0, 200, 0, 0.5)";
    ctx.fillRect(-10, -10, 50, 20);
    //Rahmen
    ctx.strokeStyle = "rbg(0,0,200)";
    ctx.strokeRect(-50, -50, 100, 100);
    //Feld leeren
    ctx.clearRect(-5, -5, 20, 30);

    //Pfad ausgefüllt
    ctx.fillStyle = "rgb(0, 0, 200, 0.3)";
    ctx.beginPath();
    ctx.moveTo(-200, -200);
    ctx.lineTo(0, 0);
    ctx.lineTo(200, -200);
    //Anfangs und Endpunkt werden automatisch verbunden
    ctx.fill();

    //Pfad als Linie
    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.lineTo(0, 0);
    ctx.lineTo(-200, 200);
    ctx.closePath();
    ctx.stroke();

    //Kreise
    ctx.moveTo(-50, 0);
    ctx.arc(-100, 0, 50, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.moveTo(150, 0)
    ctx.arc(100, 0, 50, 0, Math.PI * 2, true);
    ctx.stroke();
    //Halbkreis
    ctx.moveTo(30, 100);
    ctx.arc(0, 100, 30, 0, Math.PI, false);
    ctx.stroke();
    //andrere Kreise
    ctx.beginPath();
    ctx.fillStyle = "rgb(100,100,100)"
    ctx.moveTo(-100, -100)
    ctx.arc(-100, -100, 30, 0, Math.PI + 1, false);
    ctx.fill();

    //quadratische Kurven
    ctx.beginPath();
    ctx.moveTo(100, -100);
    ctx.quadraticCurveTo(120, -100, 120, -140);
    ctx.stroke();

    //Animation
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 10;
    ctx.moveTo(0, 0);
    switch (i) {
        case 0: ctx.lineTo(50, 50);
            i++;
            break;
        case 1: ctx.lineTo(60, 0);
            i++
            break;
        default: ctx.lineTo(50, -50);
            i = 0;
            break;
    }
    ctx.stroke();

    //zurücksetzen auf Anfang
    ctx.restore();
}

draw();
//setInterval(draw2, 500);
