function pasisveikinimas(pasnekovas) {
    //issiaiskinti kokia kalba kalba mano pasnekove
    //patikrinti ar mokuu ta kalba
    //jeigu taip:
    //issitraukiu sarasa galimu pasisveikinimu ta kalba
    //atsitiktine tvarka issirenku pasisveikinimo fraze
    //grazinu pasisveikinima
    //jei ne:
    //grazinu default pasisveikinima

    const pasnekovoKalba = pasnekovas.lang;
    const manoMokamosKalbos = ['lt', 'en'];
    const pasisveikinimai = {
        lt: ['Labas', 'Labukas', 'Sveiki', 'Ka tu?'],
        en: ['Hi', 'Hello', 'Watsup', 'How re you?'],
    }

    if (manoMokamosKalbos.includes(pasnekovoKalba)) {
        console.log('paaiskejo, jog moku...');
        const galimosFrazes = pasisveikinimai[pasnekovoKalba];
        console.log(galimosFrazes);
        const frazesIndexas = Math.floor(Math.random() * galimosFrazes.length);
        const fraze = galimosFrazes[frazesIndexas];
        return false;

    } else {
        console.log('paaiskejo, jog NE moku...');
        return 'Hi';
    }
}

const drauge = {
    name: 'Vaida';
    lang: 'lt';
}

const response = pasisveikinimas(drauge);

console.log(response);