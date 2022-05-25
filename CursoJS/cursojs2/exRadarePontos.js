let vel = 70

function radar(vel) {
    if (vel <= 70){
        console.log('OK')

    }else {
        const pontos = ((vel - 70) / 5)
        if(pontos >= 12)
            console.log(`Carta Suspensa com ${pontos} pontos`)
        else
            console.log(`voce estava a ${vel}Km foi multado e levou ${pontos} pontos`)

    }
    
}
radar(180)