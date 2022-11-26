// GRUPO A \\

let qatar = document.getElementById('qatar');
let ecuador = document.getElementById('ecuador');
let senegal = document.getElementById('senegal');
let paises_bajos = document.getElementById('paises-bajos');

// GRUPO B \\
 
let inglaterra = document.getElementById('Inglaterra');
let iran = document.getElementById('Iran');
let estados_unidos = document.getElementById('Estados-Unidos');
let gales = document.getElementById('Gales');

// // GRUPO C \\
 
let argentina = document.getElementById('Argentina');
let arabia_saudita = document.getElementById('Arabia-Saudita');
let mexico = document.getElementById('Mexico');
let polonia = document.getElementById('Polonia');

// // GRUPO D \\
 
let francia = document.getElementById('Francia');
let australia = document.getElementById('Australia');
let dinamarca = document.getElementById('Dinamarca');
let tunez = document.getElementById('Tunez');

// // GRUPO E \\
 
let españa = document.getElementById('España');
let costa_rica = document.getElementById('Costa-Rica');
let alemania = document.getElementById('Alemania');
let japon = document.getElementById('Japon');

// // GRUPO F \\
 
let belgica = document.getElementById('Belgica');
let canada = document.getElementById('Canada');
let marruecos = document.getElementById('Marruecos');
let croacia = document.getElementById('Croacia');

// // GRUPO G \\
 
let brasil = document.getElementById('Brasil');
let serbia = document.getElementById('Serbia');
let suiza = document.getElementById('Suiza');
let camerun = document.getElementById('Camerun');

// // GRUPO H \\
 
let portugal = document.getElementById('Portugal');
let ghana = document.getElementById('Ghana');
let uruguay = document.getElementById('Uruguay');
let corea_del_sur = document.getElementById('Corea-del-Sur');

// BOTONES LIMPIAR
let boton_grupo_A = document.querySelector('.group-A-Button');
let boton_grupo_B = document.querySelector('.group-B-Button');
let boton_grupo_C = document.querySelector('.group-C-Button');
let boton_grupo_D = document.querySelector('.group-D-Button');
let boton_grupo_E = document.querySelector('.group-E-Button');
let boton_grupo_F = document.querySelector('.group-F-Button');
let boton_grupo_G = document.querySelector('.group-G-Button');
let boton_grupo_H = document.querySelector('.group-H-Button');
boton_grupo_A.addEventListener('click', cleanSelection_groupA);
boton_grupo_B.addEventListener('click', cleanSelection_groupB);
boton_grupo_C.addEventListener('click', cleanSelection_groupC);
boton_grupo_D.addEventListener('click', cleanSelection_groupD);
boton_grupo_E.addEventListener('click', cleanSelection_groupE);
boton_grupo_F.addEventListener('click', cleanSelection_groupF);
boton_grupo_G.addEventListener('click', cleanSelection_groupG);
boton_grupo_H.addEventListener('click', cleanSelection_groupH);

// IMAGENES 
let octavos_1A = document.querySelector('.octavos-vs-1A');
let octavos_2B = document.querySelector('.octavos-vs-2B');

let octavos_1C = document.querySelector('.octavos-vs-1C');
let octavos_2D = document.querySelector('.octavos-vs-2D');

let octavos_1B = document.querySelector('.octavos-vs-1B');
let octavos_2A = document.querySelector('.octavos-vs-2A');

let octavos_1D = document.querySelector('.octavos-vs-1D');
let octavos_2C = document.querySelector('.octavos-vs-2C');

let octavos_1E = document.querySelector('.octavos-vs-1E');
let octavos_2F = document.querySelector('.octavos-vs-2F');

let octavos_1G = document.querySelector('.octavos-vs-1G');
let octavos_2H = document.querySelector('.octavos-vs-2H');

let octavos_1F = document.querySelector('.octavos-vs-1F');
let octavos_2E = document.querySelector('.octavos-vs-2E');

let octavos_1H = document.querySelector('.octavos-vs-1H');
let octavos_2G = document.querySelector('.octavos-vs-2G');

// CUARTOS DE FINAL
let g1 = document.querySelector('.cuartos-g1');
let g2 = document.querySelector('.cuartos-g2');
let g3 = document.querySelector('.cuartos-g3');
let g4 = document.querySelector('.cuartos-g4');
let g5 = document.querySelector('.cuartos-g5');
let g6 = document.querySelector('.cuartos-g6');
let g7 = document.querySelector('.cuartos-g7');
let g8 = document.querySelector('.cuartos-g8');

// SEMIS
let a1 = document.querySelector('.semis-A1');
let a2 = document.querySelector('.semis-A2');
let a3 = document.querySelector('.semis-A3');
let a4 = document.querySelector('.semis-A4');


// FINAL

let f1 = document.querySelector('.final-f1');
let f2 = document.querySelector('.final-f2');

// CHAMPION

let first = document.querySelector('.champion');

// SUBCHAMPION

let subChampion = document.querySelector('.subchampion');

// THIRD PLACE MATCH

let t1 = document.querySelector('.tercer-puesto-T1');
let t2 = document.querySelector('.tercer-puesto-T2');

// THIRD PLACE FINAL

let thirdPlace = document.querySelector('.third');

// //-------- GRUPO A --------\\

//****** FUNCIONES CHECK GRUPO A \\
qatar.addEventListener('click', checkGroupA);
ecuador.addEventListener('click', checkGroupA);
senegal.addEventListener('click', checkGroupA);
paises_bajos.addEventListener('click', checkGroupA);

// //-------- GRUPO B --------\\

inglaterra.addEventListener('click', checkGroupB);
iran.addEventListener('click', checkGroupB);
estados_unidos.addEventListener('click', checkGroupB);
gales.addEventListener('click', checkGroupB);

// //-------- GRUPO C --------\\

argentina.addEventListener('click', checkGroupC);
arabia_saudita.addEventListener('click', checkGroupC);
mexico.addEventListener('click', checkGroupC);
polonia.addEventListener('click', checkGroupC);

// //-------- GRUPO D --------\\

francia.addEventListener('click', checkGroupD);
australia.addEventListener('click', checkGroupD);
dinamarca.addEventListener('click', checkGroupD);
tunez.addEventListener('click', checkGroupD);

// //-------- GRUPO E --------\\

españa.addEventListener('click', checkGroupE);
costa_rica.addEventListener('click', checkGroupE);
alemania.addEventListener('click', checkGroupE);
japon.addEventListener('click', checkGroupE);

// //-------- GRUPO F --------\\

belgica.addEventListener('click', checkGroupF);
canada.addEventListener('click', checkGroupF);
marruecos.addEventListener('click', checkGroupF);
croacia.addEventListener('click', checkGroupF);

// //-------- GRUPO G --------\\

brasil.addEventListener('click', checkGroupG);
serbia.addEventListener('click', checkGroupG);
suiza.addEventListener('click', checkGroupG);
camerun.addEventListener('click', checkGroupG);

// //-------- GRUPO H --------\\

portugal.addEventListener('click', checkGroupH);
ghana.addEventListener('click', checkGroupH);
uruguay.addEventListener('click', checkGroupH);
corea_del_sur.addEventListener('click', checkGroupH);

function checkGroupA(event){
    if (event.currentTarget.classList.contains("winner")){
        return;
    } 
    else if (((ecuador.classList.contains("winner")) ||( senegal.classList.contains("winner")) || (paises_bajos.classList.contains("winner")) || (qatar.classList.contains("winner"))) && ((qatar.classList.contains("second")) || (ecuador.classList.contains("second")) ||( senegal.classList.contains("second")) || (paises_bajos.classList.contains("second")))){
        return;
    }
    else if ((ecuador.classList.contains("winner")) ||( senegal.classList.contains("winner")) || (qatar.classList.contains("winner")) || (paises_bajos.classList.contains("winner"))){
        event.currentTarget.classList.add("second");
        octavos_2D.removeChild(octavos_2D.firstElementChild);
        let imagen_second = event.target.lastElementChild;
        if (imagen_second == null && event.target.classList.contains('nombre_equipo')){
            imagen_second = event.target.nextElementSibling;
            let img_2d = document.createElement('img');
            img_2d.setAttribute('src', imagen_second.currentSrc);
            octavos_2D.appendChild(img_2d);
            img_2d.addEventListener('click', cuartosDeFinal_G1);
        } 
        else if(imagen_second == null && event.target.classList.contains('img-bandera-equipo')){
            imagen_second = event.target;
            let img_2d = document.createElement('img');
            img_2d.setAttribute('src', imagen_second.currentSrc);
            octavos_2D.appendChild(img_2d);
            img_2d.addEventListener('click', cuartosDeFinal_G1);
        }
        else {
            let img_2d = document.createElement('img');
            img_2d.setAttribute('src', imagen_second.currentSrc);
            octavos_2D.appendChild(img_2d);
            img_2d.addEventListener('click', cuartosDeFinal_G1);
        }
    }
    else {        
        event.currentTarget.classList.add("winner");
        octavos_1A.removeChild(octavos_1A.firstElementChild);
        let imagen_winner = event.target.lastElementChild;
        if (imagen_winner == null && event.target.classList.contains('nombre_equipo')){
            imagen_winner = event.target.nextElementSibling;
            let img_1a = document.createElement('img');
            img_1a.setAttribute('src', imagen_winner.currentSrc);
            octavos_1A.appendChild(img_1a);
            img_1a.addEventListener('click', cuartosDeFinal_G5);
        } 
        else if(imagen_winner == null && event.target.classList.contains('img-bandera-equipo')){
            imagen_winner = event.target;
            let img_1a = document.createElement('img');
            img_1a.setAttribute('src', imagen_winner.currentSrc);
            octavos_1A.appendChild(img_1a);
            img_1a.addEventListener('click', cuartosDeFinal_G5);
        }
        else {
            let img_1a = document.createElement('img');
            img_1a.setAttribute('src', imagen_winner.currentSrc);
            octavos_1A.appendChild(img_1a);
            img_1a.addEventListener('click', cuartosDeFinal_G5);
        }
    }
}

function checkGroupB(event){
    if (event.currentTarget.classList.contains("winner")){
        return;
    } 
    else if (((inglaterra.classList.contains("winner")) ||( iran.classList.contains("winner")) || (estados_unidos.classList.contains("winner")) || (gales.classList.contains("winner"))) && ((inglaterra.classList.contains("second")) || (iran.classList.contains("second")) ||( estados_unidos.classList.contains("second")) || (gales.classList.contains("second")))){
        return;
    }
    else if ((inglaterra.classList.contains("winner")) ||( iran.classList.contains("winner")) || (estados_unidos.classList.contains("winner")) || (gales.classList.contains("winner"))){
        event.currentTarget.classList.add("second");
        octavos_2B.removeChild(octavos_2B.firstElementChild);
        let imagen_second = event.target.lastElementChild;
        if (imagen_second == null && event.target.classList.contains('nombre_equipo')){
            imagen_second = event.target.nextElementSibling;
            let img_2b = document.createElement('img');
            img_2b.setAttribute('src', imagen_second.currentSrc);
            octavos_2B.appendChild(img_2b);
            img_2b.addEventListener('click' , cuartosDeFinal_G5);
        } 
        else if(imagen_second == null && event.target.classList.contains('img-bandera-equipo')){
            imagen_second = event.target;
            let img_2b = document.createElement('img');
            img_2b.setAttribute('src', imagen_second.currentSrc);
            octavos_2B.appendChild(img_2b);
            img_2b.addEventListener('click' , cuartosDeFinal_G5);
        }
        else {
            let img_2b = document.createElement('img');
            img_2b.setAttribute('src', imagen_second.currentSrc);
            octavos_2B.appendChild(img_2b);
            img_2b.addEventListener('click' , cuartosDeFinal_G5);
        }
    }
    else {
        event.currentTarget.classList.add("winner");
        octavos_1C.removeChild(octavos_1C.firstElementChild);
        let imagen_winner = event.target.lastElementChild;
        if (imagen_winner == null && event.target.classList.contains('nombre_equipo')){
            imagen_winner = event.target.nextElementSibling;
            let img_1c = document.createElement('img');
            img_1c.setAttribute('src', imagen_winner.currentSrc);
            octavos_1C.appendChild(img_1c);
            img_1c.addEventListener('click' , cuartosDeFinal_G1);
            
        } 
        else if(imagen_winner == null && event.target.classList.contains('img-bandera-equipo')){
            imagen_winner = event.target;
            let img_1c = document.createElement('img');
            img_1c.setAttribute('src', imagen_winner.currentSrc);
            octavos_1C.appendChild(img_1c);
            img_1c.addEventListener('click' , cuartosDeFinal_G1);
        }
        else {
            let img_1c = document.createElement('img');
            img_1c.setAttribute('src', imagen_winner.currentSrc);
            octavos_1C.appendChild(img_1c);
            img_1c.addEventListener('click' , cuartosDeFinal_G1);
        }
    }
}

function checkGroupC(event){
    if (event.currentTarget.classList.contains("winner")){
        return;
    } 
    else if (((argentina.classList.contains("winner")) ||( arabia_saudita.classList.contains("winner")) || (mexico.classList.contains("winner")) || (polonia.classList.contains("winner"))) && ((argentina.classList.contains("second")) || (arabia_saudita.classList.contains("second")) ||( mexico.classList.contains("second")) || (polonia.classList.contains("second")))){
        return;
    }
    else if ((argentina.classList.contains("winner")) ||( arabia_saudita.classList.contains("winner")) || (mexico.classList.contains("winner")) || (polonia.classList.contains("winner"))){
        event.currentTarget.classList.add("second");
        octavos_2C.removeChild(octavos_2C.firstElementChild);
        let imagen_second = event.target.lastElementChild;
        if (imagen_second == null && event.target.classList.contains('nombre_equipo')){
            imagen_second = event.target.nextElementSibling;
            let img_2c = document.createElement('img');
            img_2c.setAttribute('src', imagen_second.currentSrc);
            octavos_2C.appendChild(img_2c);
            img_2c.addEventListener('click' , cuartosDeFinal_G2);

        } 
        else if(imagen_second == null && event.target.classList.contains('img-bandera-equipo')){
            imagen_second = event.target;
            let img_2c = document.createElement('img');
            img_2c.setAttribute('src', imagen_second.currentSrc);
            octavos_2C.appendChild(img_2c);
            img_2c.addEventListener('click' , cuartosDeFinal_G2);

        }
        else {
            let img_2c = document.createElement('img');
            img_2c.setAttribute('src', imagen_second.currentSrc);
            octavos_2C.appendChild(img_2c);
            img_2c.addEventListener('click' , cuartosDeFinal_G2);

        }
    }
    else {
        event.currentTarget.classList.add("winner");
        octavos_1B.removeChild(octavos_1B.firstElementChild);
        let imagen_winner = event.target.lastElementChild;
        if (imagen_winner == null && event.target.classList.contains('nombre_equipo')){
            imagen_winner = event.target.nextElementSibling;
            let img_1b = document.createElement('img');
            img_1b.setAttribute('src', imagen_winner.currentSrc);
            octavos_1B.appendChild(img_1b);
            img_1b.addEventListener('click', cuartosDeFinal_G6);
        } 
        else if(imagen_winner == null && event.target.classList.contains('img-bandera-equipo')){
            imagen_winner = event.target;
            let img_1b = document.createElement('img');
            img_1b.setAttribute('src', imagen_winner.currentSrc);
            octavos_1B.appendChild(img_1b);
            img_1b.addEventListener('click', cuartosDeFinal_G6);

        }
        else {
            let img_1b = document.createElement('img');
            img_1b.setAttribute('src', imagen_winner.currentSrc);
            octavos_1B.appendChild(img_1b);
            img_1b.addEventListener('click', cuartosDeFinal_G6);

        }
    }
}

function checkGroupD(event){
    if (event.currentTarget.classList.contains("winner")){
        return;
    } 
    else if (((francia.classList.contains("winner")) ||( australia.classList.contains("winner")) || (dinamarca.classList.contains("winner")) || (tunez.classList.contains("winner"))) && ((francia.classList.contains("second")) || (australia.classList.contains("second")) ||( dinamarca.classList.contains("second")) || (tunez.classList.contains("second")))){
        return;
    }
    else if ((francia.classList.contains("winner")) ||( australia.classList.contains("winner")) || (dinamarca.classList.contains("winner")) || (tunez.classList.contains("winner"))){
        event.currentTarget.classList.add("second");
        octavos_2A.removeChild(octavos_2A.firstElementChild);
        let imagen_second = event.target.lastElementChild;
        if (imagen_second == null && event.target.classList.contains('nombre_equipo')){
            imagen_second = event.target.nextElementSibling;
            let img_2a = document.createElement('img');
            img_2a.setAttribute('src', imagen_second.currentSrc);
            octavos_2A.appendChild(img_2a);
            img_2a.addEventListener('click', cuartosDeFinal_G6);

        } 
        else if(imagen_second == null && event.target.classList.contains('img-bandera-equipo')){
            imagen_second = event.target;
            let img_2a = document.createElement('img');
            img_2a.setAttribute('src', imagen_second.currentSrc);
            octavos_2A.appendChild(img_2a);
            img_2a.addEventListener('click', cuartosDeFinal_G6);

        }
        else {
            let img_2a = document.createElement('img');
            img_2a.setAttribute('src', imagen_second.currentSrc);
            octavos_2A.appendChild(img_2a);
            img_2a.addEventListener('click', cuartosDeFinal_G6);
        }
    }
    else {
        event.currentTarget.classList.add("winner");
        octavos_1D.removeChild(octavos_1D.firstElementChild);
        let imagen_winner = event.target.lastElementChild;
        if (imagen_winner == null && event.target.classList.contains('nombre_equipo')){
            imagen_winner = event.target.nextElementSibling;
            let img_1d = document.createElement('img');
            img_1d.setAttribute('src', imagen_winner.currentSrc);
            octavos_1D.appendChild(img_1d);
            img_1d.addEventListener('click' , cuartosDeFinal_G2);
        } 
        else if(imagen_winner == null && event.target.classList.contains('img-bandera-equipo')){
            imagen_winner = event.target;
            let img_1d = document.createElement('img');
            img_1d.setAttribute('src', imagen_winner.currentSrc);
            octavos_1D.appendChild(img_1d);
            img_1d.addEventListener('click' , cuartosDeFinal_G2);

        }
        else {
            let img_1d = document.createElement('img');
            img_1d.setAttribute('src', imagen_winner.currentSrc);
            octavos_1D.appendChild(img_1d);
            img_1d.addEventListener('click' , cuartosDeFinal_G2);
        }
    }
}

function checkGroupE(event){
    if (event.currentTarget.classList.contains("winner")){
        return;
    } 
    else if (((españa.classList.contains("winner")) ||( costa_rica.classList.contains("winner")) || (alemania.classList.contains("winner")) || (japon.classList.contains("winner"))) && ((españa.classList.contains("second")) || (costa_rica.classList.contains("second")) ||( alemania.classList.contains("second")) || (japon.classList.contains("second")))){
        return;
    }
    else if ((españa.classList.contains("winner")) ||( costa_rica.classList.contains("winner")) || (alemania.classList.contains("winner")) || (japon.classList.contains("winner"))){
        event.currentTarget.classList.add("second");
        octavos_2H.removeChild(octavos_2H.firstElementChild);
        let imagen_second = event.target.lastElementChild;
        if (imagen_second == null && event.target.classList.contains('nombre_equipo')){
            imagen_second = event.target.nextElementSibling;
            let img_2h = document.createElement('img');
            img_2h.setAttribute('src', imagen_second.currentSrc);
            octavos_2H.appendChild(img_2h);
            img_2h.addEventListener('click' , cuartosDeFinal_G3);

        } 
        else if(imagen_second == null && event.target.classList.contains('img-bandera-equipo')){
            imagen_second = event.target;
            let img_2h = document.createElement('img');
            img_2h.setAttribute('src', imagen_second.currentSrc);
            octavos_2H.appendChild(img_2h);
            img_2h.addEventListener('click' , cuartosDeFinal_G3);
        }
        else {
            let img_2h = document.createElement('img');
            img_2h.setAttribute('src', imagen_second.currentSrc);
            octavos_2H.appendChild(img_2h);
            img_2h.addEventListener('click' , cuartosDeFinal_G3);
        }
    }
    else {
        event.currentTarget.classList.add("winner");
        octavos_1E.removeChild(octavos_1E.firstElementChild);
        let imagen_winner = event.target.lastElementChild;
        if (imagen_winner == null && event.target.classList.contains('nombre_equipo')){
            imagen_winner = event.target.nextElementSibling;
            let img_1e = document.createElement('img');
            img_1e.setAttribute('src', imagen_winner.currentSrc);
            octavos_1E.appendChild(img_1e);
            img_1e.addEventListener('click' , cuartosDeFinal_G7);
            
        } 
        else if(imagen_winner == null && event.target.classList.contains('img-bandera-equipo')){
            imagen_winner = event.target;
            let img_1e = document.createElement('img');
            img_1e.setAttribute('src', imagen_winner.currentSrc);
            octavos_1E.appendChild(img_1e);
            img_1e.addEventListener('click' , cuartosDeFinal_G7);

        }
        else {
            let img_1e = document.createElement('img');
            img_1e.setAttribute('src', imagen_winner.currentSrc);
            octavos_1E.appendChild(img_1e);
            img_1e.addEventListener('click' , cuartosDeFinal_G7);

        }
    }
}

function checkGroupF(event){
    if (event.currentTarget.classList.contains("winner")){
        return;
    } 
    else if (((belgica.classList.contains("winner")) ||( canada.classList.contains("winner")) || (marruecos.classList.contains("winner")) || (croacia.classList.contains("winner"))) && ((belgica.classList.contains("second")) || (canada.classList.contains("second")) ||( marruecos.classList.contains("second")) || (croacia.classList.contains("second")))){
        return;
    }
    else if ((belgica.classList.contains("winner")) ||( canada.classList.contains("winner")) || (marruecos.classList.contains("winner")) || (croacia.classList.contains("winner"))){
        event.currentTarget.classList.add("second");
        octavos_2F.removeChild(octavos_2F.firstElementChild);
        let imagen_second = event.target.lastElementChild;
        if (imagen_second == null && event.target.classList.contains('nombre_equipo')){
            imagen_second = event.target.nextElementSibling;
            let img_2f = document.createElement('img');
            img_2f.setAttribute('src', imagen_second.currentSrc);
            octavos_2F.appendChild(img_2f);
            img_2f.addEventListener('click' , cuartosDeFinal_G7);
        } 
        else if(imagen_second == null && event.target.classList.contains('img-bandera-equipo')){
            imagen_second = event.target;
            let img_2f = document.createElement('img');
            img_2f.setAttribute('src', imagen_second.currentSrc);
            octavos_2F.appendChild(img_2f);
            img_2f.addEventListener('click' , cuartosDeFinal_G7);
        }
        else {
            let img_2f = document.createElement('img');
            img_2f.setAttribute('src', imagen_second.currentSrc);
            octavos_2F.appendChild(img_2f);
            img_2f.addEventListener('click' , cuartosDeFinal_G7);
        }
    }
    else {
        event.currentTarget.classList.add("winner");
        octavos_1G.removeChild(octavos_1G.firstElementChild);
        let imagen_winner = event.target.lastElementChild;
        if (imagen_winner == null && event.target.classList.contains('nombre_equipo')){
            imagen_winner = event.target.nextElementSibling;
            let img_1g = document.createElement('img');
            img_1g.setAttribute('src', imagen_winner.currentSrc);
            octavos_1G.appendChild(img_1g);
            img_1g.addEventListener('click' , cuartosDeFinal_G3);
        } 
        else if(imagen_winner == null && event.target.classList.contains('img-bandera-equipo')){
            imagen_winner = event.target;
            let img_1g = document.createElement('img');
            img_1g.setAttribute('src', imagen_winner.currentSrc);
            octavos_1G.appendChild(img_1g);
            img_1g.addEventListener('click' , cuartosDeFinal_G3);
        }
        else {
            let img_1g = document.createElement('img');
            img_1g.setAttribute('src', imagen_winner.currentSrc);
            octavos_1G.appendChild(img_1g);
            img_1g.addEventListener('click' , cuartosDeFinal_G3);
        }
    }
}

function checkGroupG(event){
    if (event.currentTarget.classList.contains("winner")){
        return;
    } 
    else if (((brasil.classList.contains("winner")) ||( serbia.classList.contains("winner")) || (suiza.classList.contains("winner")) || (camerun.classList.contains("winner"))) && ((brasil.classList.contains("second")) || (serbia.classList.contains("second")) ||( suiza.classList.contains("second")) || (camerun.classList.contains("second")))){
        return;
    }
    else if ((brasil.classList.contains("winner")) ||( serbia.classList.contains("winner")) || (suiza.classList.contains("winner")) || (camerun.classList.contains("winner"))){
        event.currentTarget.classList.add("second");
        octavos_2G.removeChild(octavos_2G.firstElementChild);
        let imagen_second = event.target.lastElementChild;
        if (imagen_second == null && event.target.classList.contains('nombre_equipo')){
            imagen_second = event.target.nextElementSibling;
            let img_2g = document.createElement('img');
            img_2g.setAttribute('src', imagen_second.currentSrc);
            octavos_2G.appendChild(img_2g);
            img_2g.addEventListener('click' , cuartosDeFinal_G4);
        } 
        else if(imagen_second == null && event.target.classList.contains('img-bandera-equipo')){
            imagen_second = event.target;
            let img_2g = document.createElement('img');
            img_2g.setAttribute('src', imagen_second.currentSrc);
            octavos_2G.appendChild(img_2g);
            img_2g.addEventListener('click' , cuartosDeFinal_G4);
        }
        else {
            let img_2g = document.createElement('img');
            img_2g.setAttribute('src', imagen_second.currentSrc);
            octavos_2G.appendChild(img_2g);
            img_2g.addEventListener('click' , cuartosDeFinal_G4);
        }
    }
    else {
        event.currentTarget.classList.add("winner");
        octavos_1F.removeChild(octavos_1F.firstElementChild);
        let imagen_winner = event.target.lastElementChild;
        if (imagen_winner == null && event.target.classList.contains('nombre_equipo')){
            imagen_winner = event.target.nextElementSibling;
            let img_1f = document.createElement('img');
            img_1f.setAttribute('src', imagen_winner.currentSrc);
            octavos_1F.appendChild(img_1f);
            img_1f.addEventListener('click' , cuartosDeFinal_G8);

        } 
        else if(imagen_winner == null && event.target.classList.contains('img-bandera-equipo')){
            imagen_winner = event.target;
            let img_1f = document.createElement('img');
            img_1f.setAttribute('src', imagen_winner.currentSrc);
            octavos_1F.appendChild(img_1f);
            img_1f.addEventListener('click' , cuartosDeFinal_G8);
        }
        else {
            let img_1f = document.createElement('img');
            img_1f.setAttribute('src', imagen_winner.currentSrc);
            octavos_1F.appendChild(img_1f);
            img_1f.addEventListener('click' , cuartosDeFinal_G8);
        }
    }
}

function checkGroupH(event){
    if (event.currentTarget.classList.contains("winner")){
        return;
    } 
    else if (((portugal.classList.contains("winner")) ||( ghana.classList.contains("winner")) || (uruguay.classList.contains("winner")) || (corea_del_sur.classList.contains("winner"))) && ((portugal.classList.contains("second")) || (ghana.classList.contains("second")) ||( uruguay.classList.contains("second")) || (corea_del_sur.classList.contains("second")))){
        return;
    }
    else if ((portugal.classList.contains("winner")) ||( ghana.classList.contains("winner")) || (uruguay.classList.contains("winner")) || (corea_del_sur.classList.contains("winner"))){
        event.currentTarget.classList.add("second");
        octavos_2E.removeChild(octavos_2E.firstElementChild);
        let imagen_second = event.target.lastElementChild;
        if (imagen_second == null && event.target.classList.contains('nombre_equipo')){
            imagen_second = event.target.nextElementSibling;
            let img_2e = document.createElement('img');
            img_2e.setAttribute('src', imagen_second.currentSrc);
            octavos_2E.appendChild(img_2e);
            img_2e.addEventListener('click' , cuartosDeFinal_G8);

        } 
        else if(imagen_second == null && event.target.classList.contains('img-bandera-equipo')){
            imagen_second = event.target;
            let img_2e = document.createElement('img');
            img_2e.setAttribute('src', imagen_second.currentSrc);
            octavos_2E.appendChild(img_2e);
            img_2e.addEventListener('click' , cuartosDeFinal_G8);
        }
        else {
            let img_2e = document.createElement('img');
            img_2e.setAttribute('src', imagen_second.currentSrc);
            octavos_2E.appendChild(img_2e);
            img_2e.addEventListener('click' , cuartosDeFinal_G8);
        }
    }
    else {
        event.currentTarget.classList.add("winner");
        octavos_1H.removeChild(octavos_1H.firstElementChild);
        let imagen_winner = event.target.lastElementChild;
        if (imagen_winner == null && event.target.classList.contains('nombre_equipo')){
            imagen_winner = event.target.nextElementSibling;
            let img_1h = document.createElement('img');
            img_1h.setAttribute('src', imagen_winner.currentSrc);
            octavos_1H.appendChild(img_1h);
            img_1h.addEventListener('click' , cuartosDeFinal_G4);
        } 
        else if(imagen_winner == null && event.target.classList.contains('img-bandera-equipo')){
            imagen_winner = event.target;
            let img_1h = document.createElement('img');
            img_1h.setAttribute('src', imagen_winner.currentSrc);
            octavos_1H.appendChild(img_1h);
            img_1h.addEventListener('click' , cuartosDeFinal_G4);
        }
        else {
            let img_1h = document.createElement('img');
            img_1h.setAttribute('src', imagen_winner.currentSrc);
            octavos_1H.appendChild(img_1h);
            img_1h.addEventListener('click' , cuartosDeFinal_G4);
        }
    }
}


function cleanSelection_groupA(){
    // remuevo las clases que pintan los equipos al seleccionarlos
    ecuador.removeAttribute('class');
    senegal.removeAttribute('class');
    qatar.removeAttribute('class');
    paises_bajos.removeAttribute('class');
    // remuevo las imagenes que estan en octavos despues de dar click en boton limpiar
    // a su vez agrego las imagenes de los signos de pregunta para que quede como antes
    // por ultimo agrego la clase imagen-octavos que le da tamaño a los signos de pregunta
    octavos_1A.removeChild(octavos_1A.firstElementChild);
    let newImage = document.createElement('img');
    newImage.setAttribute('src', './img/question-mark.png');
    newImage.classList.add('imagen-octavos');
    octavos_1A.appendChild(newImage);

    octavos_2D.removeChild(octavos_2D.firstElementChild);
    let otherImage = document.createElement('img');
    otherImage.setAttribute('src', './img/question-mark.png');
    otherImage.classList.add('imagen-octavos');
    octavos_2D.appendChild(otherImage);
}

function cleanSelection_groupB(){
    inglaterra.removeAttribute('class');
    iran.removeAttribute('class');
    estados_unidos.removeAttribute('class');
    gales.removeAttribute('class');
    
    octavos_1C.removeChild(octavos_1C.firstElementChild);
    let newImage = document.createElement('img');
    newImage.setAttribute('src', './img/question-mark.png');
    newImage.classList.add('imagen-octavos');
    octavos_1C.appendChild(newImage);

    octavos_2B.removeChild(octavos_2B.firstElementChild);
    let otherImage = document.createElement('img');
    otherImage.setAttribute('src', './img/question-mark.png');
    otherImage.classList.add('imagen-octavos');
    octavos_2B.appendChild(otherImage);
}
function cleanSelection_groupC(){
    argentina.removeAttribute('class');
    arabia_saudita.removeAttribute('class');
    mexico.removeAttribute('class');
    polonia.removeAttribute('class');
     
    octavos_1B.removeChild(octavos_1B.firstElementChild);
    let newImage = document.createElement('img');
    newImage.setAttribute('src', './img/question-mark.png');
    newImage.classList.add('imagen-octavos');
    octavos_1B.appendChild(newImage);

    octavos_2C.removeChild(octavos_2C.firstElementChild);
    let otherImage = document.createElement('img');
    otherImage.setAttribute('src', './img/question-mark.png');
    otherImage.classList.add('imagen-octavos');
    octavos_2C.appendChild(otherImage);
}
function cleanSelection_groupD(){
    francia.removeAttribute('class');
    australia.removeAttribute('class');
    dinamarca.removeAttribute('class');
    tunez.removeAttribute('class');

    octavos_1D.removeChild(octavos_1D.firstElementChild);
    let newImage = document.createElement('img');
    newImage.setAttribute('src', './img/question-mark.png');
    newImage.classList.add('imagen-octavos');
    octavos_1D.appendChild(newImage);

    octavos_2A.removeChild(octavos_2A.firstElementChild);
    let otherImage = document.createElement('img');
    otherImage.setAttribute('src', './img/question-mark.png');
    otherImage.classList.add('imagen-octavos');
    octavos_2A.appendChild(otherImage);
}
function cleanSelection_groupE(){
    españa.removeAttribute('class');
    costa_rica.removeAttribute('class');
    alemania.removeAttribute('class');
    japon.removeAttribute('class');
     
    octavos_1E.removeChild(octavos_1E.firstElementChild);
    let newImage = document.createElement('img');
    newImage.setAttribute('src', './img/question-mark.png');
    newImage.classList.add('imagen-octavos');
    octavos_1E.appendChild(newImage);

    octavos_2H.removeChild(octavos_2H.firstElementChild);
    let otherImage = document.createElement('img');
    otherImage.setAttribute('src', './img/question-mark.png');
    otherImage.classList.add('imagen-octavos');
    octavos_2H.appendChild(otherImage);
}
function cleanSelection_groupF(){
    belgica.removeAttribute('class');
    canada.removeAttribute('class');
    marruecos.removeAttribute('class');
    croacia.removeAttribute('class');
     
    octavos_1G.removeChild(octavos_1G.firstElementChild);
    let newImage = document.createElement('img');
    newImage.setAttribute('src', './img/question-mark.png');
    newImage.classList.add('imagen-octavos');
    octavos_1G.appendChild(newImage);

    octavos_2F.removeChild(octavos_2F.firstElementChild);
    let otherImage = document.createElement('img');
    otherImage.setAttribute('src', './img/question-mark.png');
    otherImage.classList.add('imagen-octavos');
    octavos_2F.appendChild(otherImage);
}
function cleanSelection_groupG(){
    brasil.removeAttribute('class');
    serbia.removeAttribute('class');
    suiza.removeAttribute('class');
    camerun.removeAttribute('class');
     
    octavos_1F.removeChild(octavos_1F.firstElementChild);
    let newImage = document.createElement('img');
    newImage.setAttribute('src', './img/question-mark.png');
    newImage.classList.add('imagen-octavos');
    octavos_1F.appendChild(newImage);

    octavos_2G.removeChild(octavos_2G.firstElementChild);
    let otherImage = document.createElement('img');
    otherImage.setAttribute('src', './img/question-mark.png');
    otherImage.classList.add('imagen-octavos');
    octavos_2G.appendChild(otherImage);
}
function cleanSelection_groupH(){
    portugal.removeAttribute('class');
    ghana.removeAttribute('class');
    uruguay.removeAttribute('class');
    corea_del_sur.removeAttribute('class');
     
    octavos_1H.removeChild(octavos_1H.firstElementChild);
    let newImage = document.createElement('img');
    newImage.setAttribute('src', './img/question-mark.png');
    newImage.classList.add('imagen-octavos');
    octavos_1H.appendChild(newImage);

    octavos_2E.removeChild(octavos_2E.firstElementChild);
    let otherImage = document.createElement('img');
    otherImage.setAttribute('src', './img/question-mark.png');
    otherImage.classList.add('imagen-octavos');
    octavos_2E.appendChild(otherImage);
}

function cuartosDeFinal_G5(img){
    g5.removeChild(g5.firstElementChild);
    let new_g5_image = document.createElement('img');
    new_g5_image.setAttribute('src', img.target.currentSrc);
    g5.appendChild(new_g5_image);
    new_g5_image.addEventListener('click', semis_A1);
}

function cuartosDeFinal_G6(img){
    g6.removeChild(g6.firstElementChild);
    let new_g6_image = document.createElement('img');
    new_g6_image.setAttribute('src', img.target.currentSrc);
    g6.appendChild(new_g6_image);
    new_g6_image.addEventListener('click', semis_A1);
}

function cuartosDeFinal_G1(img){
    g1.removeChild(g1.firstElementChild);
    let new_g1_image = document.createElement('img');
    new_g1_image.setAttribute('src', img.target.currentSrc);
    g1.appendChild(new_g1_image);
    new_g1_image.addEventListener('click', semis_A3);
}

function cuartosDeFinal_G2(img){
    g2.removeChild(g2.firstElementChild);
    let new_g2_image = document.createElement('img');
    new_g2_image.setAttribute('src', img.target.currentSrc);
    g2.appendChild(new_g2_image);
    new_g2_image.addEventListener('click', semis_A3);
}

function cuartosDeFinal_G7(img){
    g7.removeChild(g7.firstElementChild);
    let new_g7_image = document.createElement('img');
    new_g7_image.setAttribute('src', img.target.currentSrc);
    g7.appendChild(new_g7_image);
    new_g7_image.addEventListener('click', semis_A2);
}

function cuartosDeFinal_G8(img){
    g8.removeChild(g8.firstElementChild);
    let new_g8_image = document.createElement('img');
    new_g8_image.setAttribute('src', img.target.currentSrc);
    g8.appendChild(new_g8_image);
    new_g8_image.addEventListener('click', semis_A2);
}

function cuartosDeFinal_G3(img){
    g3.removeChild(g3.firstElementChild);
    let new_g3_image = document.createElement('img');
    new_g3_image.setAttribute('src', img.target.currentSrc);
    g3.appendChild(new_g3_image);
    new_g3_image.addEventListener('click', semis_A4);
}

function cuartosDeFinal_G4(img){
    g4.removeChild(g4.firstElementChild);
    let new_g4_image = document.createElement('img');
    new_g4_image.setAttribute('src', img.target.currentSrc);
    g4.appendChild(new_g4_image);
    new_g4_image.addEventListener('click', semis_A4);
}

function semis_A1(img){
    a1.firstElementChild.src = img.target.src;
    let new_A1_image = a1.firstElementChild;
    a1.firstElementChild.classList.remove('imagen-octavos');
    new_A1_image.addEventListener('click' , final_1);
}

function semis_A2(img){
    a2.firstElementChild.src = img.target.src;
    let new_A2_image = a2.firstElementChild;
    a2.firstElementChild.classList.remove('imagen-octavos');
    new_A2_image.addEventListener('click' , final_2);
}

function semis_A3(img){
    a3.firstElementChild.src = img.target.src;
    let new_A3_image = a3.firstElementChild;
    a3.firstElementChild.classList.remove('imagen-octavos');
    new_A3_image.addEventListener('click' , final_3);
}

function semis_A4(img){
    a4.firstElementChild.src = img.target.src;
    let new_A4_image = a4.firstElementChild;
    a4.firstElementChild.classList.remove('imagen-octavos');
    new_A4_image.addEventListener('click' , final_4);
}

function final_1(img){
    f1.firstElementChild.src = img.target.src;
    f1.firstElementChild.classList.remove('imagen-octavos');
    t1.firstElementChild.src = a2.firstElementChild.src;
    t1.firstElementChild.classList.remove('imagen-octavos');
    let champion = f1.firstElementChild; 
    champion.addEventListener('click', Winner1);  
}

function final_2(img){
    f1.firstElementChild.src = img.target.src;
    f1.firstElementChild.classList.remove('imagen-octavos');
    t1.firstElementChild.src = a1.firstElementChild.src;
    t1.firstElementChild.classList.remove('imagen-octavos');
    let champion = f1.firstElementChild; 
    champion.addEventListener('click', Winner1);
}

function final_3(img){
    f2.firstElementChild.src = img.target.src;
    f2.firstElementChild.classList.remove('imagen-octavos');
    t2.firstElementChild.src = a4.firstElementChild.src;
    t2.firstElementChild.classList.remove('imagen-octavos');
    let champion = f2.firstElementChild; 
    champion.addEventListener('click', Winner2);
}

function final_4(img){
    f2.firstElementChild.src = img.target.src;
    f2.firstElementChild.classList.remove('imagen-octavos');
    t2.firstElementChild.src = a3.firstElementChild.src;
    t2.firstElementChild.classList.remove('imagen-octavos');
    let champion = f2.firstElementChild; 
    champion.addEventListener('click', Winner2);
}

function Winner1(img) {// first f1 IZQUIERDA
    first.firstElementChild.src = img.target.src;
    if (first.firstElementChild.src == 'https://sorteomundial.ole.com.ar/images/SEN.svg'){
        first.firstElementChild.classList.remove('imagen-octavos');
        first.firstElementChild.src = './img/123.jpg';

    }
    if (first.firstElementChild.src == 'https://sorteomundial.ole.com.ar/images/CAM.svg'){
        first.firstElementChild.classList.remove('imagen-octavos');
        first.removeChild(first.firstElementChild);
        let videoEmi = document.createElement('video');
        videoEmi.src = 'https://youtu.be/F7doKRUZ4QU';
        videoEmi.autoplay = false;
        videoEmi.controls = true;
        videoEmi.muted = false;
        videoEmi.height = 240; // 👈️ in px
        videoEmi.width = 320; // 👈️ in px
        first.appendChild(videoEmi);
    } 
    if (first.firstElementChild.src == 'http://127.0.0.1:5500/img/arg.svg'){
        first.firstElementChild.classList.remove('imagen-octavos');
        first.firstElementChild.src = './img/anuloMufa.jpg';
        first.firstElementChild.height = 240;
        first.firstElementChild.width = 240;

    }
    if (first.firstElementChild.src == 'http://127.0.0.1:5500/img/brasil.svg'){
        first.firstElementChild.classList.remove('imagen-octavos');
        first.firstElementChild.src = './img/brasilCampeon.jpg';
    }
    subChampion.firstElementChild.src = f2.firstElementChild.src;
    subChampion.firstElementChild.classList.remove('imagen-octavos');
    
}

function Winner2(img) { // first f2 DERECHA
    first.firstElementChild.src = img.target.src;
    first.firstElementChild.classList.remove('imagen-octavos');
    if (first.firstElementChild.src == 'https://sorteomundial.ole.com.ar/images/SEN.svg'){
        first.firstElementChild.classList.remove('imagen-octavos');
        first.firstElementChild.src = './img/123.jpg';

    }
    if (first.firstElementChild.src == 'https://sorteomundial.ole.com.ar/images/CAM.svg'){
        first.firstElementChild.classList.remove('imagen-octavos');
        first.removeChild(first.firstElementChild);
        let videoEmi = document.createElement('video');
        videoEmi.src = 'https://youtu.be/F7doKRUZ4QU';
        videoEmi.autoplay = true;
        videoEmi.controls = true;
        videoEmi.muted = false;
        videoEmi.height = 240; // 👈️ in px
        videoEmi.width = 320; // 👈️ in px
        first.appendChild(videoEmi);
    } 
    if (first.firstElementChild.src == 'http://127.0.0.1:5500/img/arg.svg'){
        first.firstElementChild.classList.remove('imagen-octavos');
        first.firstElementChild.height = 240;
        first.firstElementChild.width = 240;
        first.firstElementChild.src = './img/anuloMufa.jpg';
    }
    if (first.firstElementChild.src == 'http://127.0.0.1:5500/img/brasil.svg'){
        first.firstElementChild.classList.remove('imagen-octavos');
        first.firstElementChild.src = './img/brasilCampeon.jpg';
    }
    subChampion.firstElementChild.src = f1.firstElementChild.src;
    subChampion.firstElementChild.classList.remove('imagen-octavos');
}

t1.firstElementChild.addEventListener('click', tercer_puesto);
t2.firstElementChild.addEventListener('click', tercer_puesto);

function tercer_puesto(img){ 
    thirdPlace.firstElementChild.src = img.target.src;
    thirdPlace.firstElementChild.classList.remove('imagen-octavos');
}
