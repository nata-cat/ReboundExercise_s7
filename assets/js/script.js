function asignarEvento(){

    //console.log('funciona');
    
    let htmlParrafo = document.getElementById('texto');
    let parrafo = document.getElementById('texto').innerText;

    let patron = /sed|vehicula|vivamus|nam|eros|vestibulum|quam|sollicitudin|finibus|dictum|morbi/gi;

    let contadorSed = 0;
    let contadorVehicula = 0;
    let contadorVivamus = 0;
    let contadorNam = 0;
    let contadorEros = 0;
    let contadorVestibulum = 0;
    let contadorQuam = 0;
    let contadorSollicitudin = 0;
    let contadorFinibus = 0;
    let contadorDictum = 0;
    let contadorMorbi = 0;


  
    let resultadoSed = parrafo.replaceAll(patron, function(match){

        if(match === 'sed'){

            contadorSed++
            return '<span style="color: #ff5500;">UNO</span>';            
        }

        if(match === 'vehicula'){
            contadorVehicula++
            return '<span style="color: #ff99b2;">DOS</span>';
        }

        if(match === 'vivamus'){
            contadorVivamus++
            return '<span style="color: #ff99f5;">TRES</span>';
        }

        if(match === 'nam'){
            contadorNam++
            return '<span style="color: #bb99f5;">CUATRO</span>';
        }

        if(match === 'eros'){
            contadorEros++
            return '<span style="color: #99c5fe;">CINCO</span>';
        }

        if(match === 'vestibulum'){
            contadorVestibulum++
            return '<span style="color: #00ceff;">SEIS</span>';
        }
        if(match === 'quam'){
            contadorQuam++
            return '<span style="color: #01fffe;">SIETE</span>';
        }
        if(match === 'sollicitudin'){
            contadorSollicitudin++
            return '<span style="color: #00ff9f;">OCHO</span>';
        }
        if(match === 'finibus'){
            contadorFinibus++
            return '<span style="color: #b6ff01;">NUEVE</span>';
        }
        if(match === 'dictum'){
            contadorDictum++
            return '<span style="color: #ffff00;">DIEZ</span>';
        }
        if(match === 'morbi'){
            contadorMorbi++
            return '<span style="color: #ffb600;">ONCE</span>';
        }
    });


    htmlParrafo.innerHTML = resultadoSed;

    console.log(`%cSed: ${contadorSed}`, "color: #ff5500;");
    console.log(`%cVehicula: ${contadorVehicula}`, "color: #ff99b2;");
    console.log(`%cVivamus: ${contadorVivamus}`, "color: #ff99f5;");
    console.log(`%cNam: ${contadorNam}`, "color: #bb99f5;");
    console.log(`%cEros: ${contadorEros}`, "color: #99c5fe;");
    console.log(`%cVestibulum: ${contadorVestibulum}`, "color: #00ceff;");
    console.log(`%cQuam: ${contadorQuam}`, "color: #01fffe;");
    console.log(`%cSollicitudin: ${contadorSollicitudin}`, "color: #00ff9f;");
    console.log(`%cFinibus: ${contadorFinibus}`, "color: #b6ff01;");
    console.log(`%cDictum: ${contadorDictum}`, "color: #ffff00;");
    console.log(`%cMorbi: ${contadorMorbi}`, "color: #ffb600;");
    
};