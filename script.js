function rodytiLaukelius() {

    const forma = document.getElementById("forma").value;
    const laukeliai = document.getElementById("matmenuLaukeliai");

    if (forma === "staciakampis") {

        laukeliai.innerHTML =
            '<label>Ilgis mm:</label>' +
            '<input type="number" id="ilgis" min="0">' +

            '<label>Plotis mm:</label>' +
            '<input type="number" id="plotis" min="0">' +

            '<label>Storis mm:</label>' +
            '<input type="number" id="storis" min="0">';
    }

    else if (forma === "kvadratas") {

        laukeliai.innerHTML =
            '<label>Kraštinė mm:</label>' +
            '<input type="number" id="krastine" min="0">' +

            '<label>Storis mm:</label>' +
            '<input type="number" id="storis" min="0">';
    }

    else if (forma === "skritulys") {

        laukeliai.innerHTML =
            '<label>Diametras mm:</label>' +
            '<input type="number" id="diametras" min="0">' +

            '<label>Storis mm:</label>' +
            '<input type="number" id="storis" min="0">';
    }

    else if (forma === "trikampis") {

        laukeliai.innerHTML =
            '<label>1 kraštinė mm:</label>' +
            '<input type="number" id="a" min="0">' +

            '<label>2 kraštinė mm:</label>' +
            '<input type="number" id="b" min="0">' +

            '<label>3 kraštinė mm:</label>' +
            '<input type="number" id="c" min="0">' +

            '<label>Storis mm:</label>' +
            '<input type="number" id="storis" min="0">';
    }

    else if (forma === "penkiakampis") {

        laukeliai.innerHTML =
            '<label>Kraštinė mm:</label>' +
            '<input type="number" id="krastine" min="0">' +

            '<label>Storis mm:</label>' +
            '<input type="number" id="storis" min="0">';
    }

    else if (forma === "sesiakampis") {

        laukeliai.innerHTML =
            '<label>Kraštinė mm:</label>' +
            '<input type="number" id="krastine" min="0">' +

            '<label>Storis mm:</label>' +
            '<input type="number" id="storis" min="0">';
    }
}


function skaicius(id) {

    const elementas = document.getElementById(id);

    if (!elementas) {
        return 0;
    }

    return Number(elementas.value) || 0;
}


function parinktiTankį() {

    const medziaga = document.getElementById("medziaga").value;
    const tankis = document.getElementById("tankis");

    if (medziaga !== "other") {
        tankis.value = medziaga;
    }
}


function skaiciuoti() {

    const forma = document.getElementById("forma").value;

    let plotasMm2 = 0;
    let perimetrasMm = 0;
    let storisMm = 0;


    if (forma === "staciakampis") {

        const ilgis = skaicius("ilgis");
        const plotis = skaicius("plotis");

        storisMm = skaicius("storis");

        plotasMm2 = ilgis * plotis;

        perimetrasMm = 2 * (ilgis + plotis);
    }


    else if (forma === "kvadratas") {

        const krastine = skaicius("krastine");

        storisMm = skaicius("storis");

        plotasMm2 = krastine * krastine;

        perimetrasMm = 4 * krastine;
    }


    else if (forma === "skritulys") {

        const diametras = skaicius("diametras");

        storisMm = skaicius("storis");

        const spindulys = diametras / 2;

        plotasMm2 =
            Math.PI * spindulys * spindulys;

        perimetrasMm =
            Math.PI * diametras;
    }


    else if (forma === "trikampis") {

        const a = skaicius("a");
        const b = skaicius("b");
        const c = skaicius("c");

        storisMm = skaicius("storis");

        perimetrasMm = a + b + c;

        const p = perimetrasMm / 2;

        const formule =
            p * (p - a) * (p - b) * (p - c);

        if (formule > 0) {
            plotasMm2 = Math.sqrt(formule);
        }
    }


    else if (forma === "penkiakampis") {

        const krastine = skaicius("krastine");

        storisMm = skaicius("storis");

        perimetrasMm = 5 * krastine;

        plotasMm2 =
            (Math.sqrt(
                5 * (5 + 2 * Math.sqrt(5))
            ) / 4) *
            krastine *
            krastine;
    }


    else if (forma === "sesiakampis") {

        const krastine = skaicius("krastine");

        storisMm = skaicius("storis");

        perimetrasMm = 6 * krastine;

        plotasMm2 =
            (3 * Math.sqrt(3) / 2) *
            krastine *
            krastine;
    }


    // SKYLĖS

    const skyliuDiametras =
        skaicius("skylesDiametras");

    const skyliuKiekis =
        skaicius("skylesKiekis");


    // Vienos skylės plotas

    const vienosSkylesPlotas =
        Math.PI *
        Math.pow(skyliuDiametras / 2, 2);


    // Visų skylių plotas

    const visuSkyliuPlotas =
        vienosSkylesPlotas *
        skyliuKiekis;


    // Metalo plotas atėmus skyles

    const grynasPlotasMm2 =
        Math.max(
            0,
            plotasMm2 - visuSkyliuPlotas
        );


    // PLOTAS m²

    const plotasM2 =
        grynasPlotasMm2 / 1000000;


    // SVORIS

    const tankis =
        skaicius("tankis");

    const turisM3 =
        (grynasPlotasMm2 * storisMm) /
        1000000000;

    const svoris =
        turisM3 * tankis;


    // METALO KAINA

    const metaloKaina =
        skaicius("metaloKaina");

    const metaloKainosRezultatas =
        svoris * metaloKaina;


    // PJOVIMAS

    const pjovimoKaina =
        skaicius("pjovimoKaina");

    const formosPjovimoIlgis =
        perimetrasMm / 1000;

    const formosPjovimoKaina =
        formosPjovimoIlgis *
        pjovimoKaina;


    // SKYLIŲ PJOVIMAS

    const vienosSkylesPerimetras =
        Math.PI * skyliuDiametras;

    const skyliuPjovimoIlgisMm =
        vienosSkylesPerimetras *
        skyliuKiekis;

    const skyliuPjovimoIlgis =
        skyliuPjovimoIlgisMm / 1000;

    const skyliuPjovimoKaina =
        skyliuPjovimoIlgis *
        pjovimoKaina;


    // VISAS PJOVIMO ILGIS

    const visoPjovimoIlgis =
        formosPjovimoIlgis +
        skyliuPjovimoIlgis;


    // VISA KAINA

    const visaKaina =
        metaloKainosRezultatas +
        formosPjovimoKaina +
        skyliuPjovimoKaina;


    // REZULTATAI

    document.getElementById("plotas").textContent =
        plotasM2.toFixed(4);

    document.getElementById("perimetras").textContent =
        formosPjovimoIlgis.toFixed(3);

    document.getElementById("svoris").textContent =
        svoris.toFixed(3);

    document.getElementById("formosPjovimoIlgis").textContent =
        formosPjovimoIlgis.toFixed(3);

    document.getElementById("skyliuPjovimoIlgis").textContent =
        skyliuPjovimoIlgis.toFixed(3);

    document.getElementById("visoPjovimoIlgis").textContent =
        visoPjovimoIlgis.toFixed(3);

    document.getElementById("metaloKainosRezultatas").textContent =
        metaloKainosRezultatas.toFixed(2);

    document.getElementById("formosPjovimoKaina").textContent =
        formosPjovimoKaina.toFixed(2);

    document.getElementById("skyliuPjovimoKaina").textContent =
        skyliuPjovimoKaina.toFixed(2);

    document.getElementById("visaKaina").textContent =
        visaKaina.toFixed(2);
}


rodytiLaukelius();