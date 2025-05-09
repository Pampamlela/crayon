/*Crée une fonction drawMyPen(){:js} qui retourne l'état de ton crayon en ASCII Art 
en fonction du temps passé en cours. 
Tu trouveras un exemple de crayons ci-dessous. 
Attention, petite subtilité : la gomme a deux étages en début d'année scolaire, 
mais se réduit à un seul étage à partir du mois de mars.Exemple :

drawMyPen('septembre');
// retourne un crayon à 10 étages avec une gomme à 2 étages
 /\
/__\
||||
||||
||||
||||
||||
||||
||||
||||
||||
||||
|__|
|  |
|__|
*/

const calendrierDuCrayon = {
    septembre: 10,
    octobre: 9,
    novembre: 8,
    decembre: 7,
    janvier: 6,
    fevrier: 5,
    mars: 4,
    avril: 3,
    mai: 2,
    juin: 1,
};

console.log(calendrierDuCrayon.septembre)

// 1. afficher la point du crayon : 
//  /\
// /__\

function afficherPointe(){
    let premiereLigne = " /\\"
    console.log(premiereLigne)
    let deuxiemeLigne = "/__\\"
    console.log(deuxiemeLigne)
}

afficherPointe()

// 2. afficher 1 étage du crayon : 
// ||||

function afficherEtage(){
    let etage = "||||"
    console.log(etage)
}

afficherEtage()

// 2. afficher plusieurs étages :

function afficherPlusieursEtages(mois){
    let valeur = calendrierDuCrayon[mois];
    //console.log(valeur);
    
    for(let i=0; i<valeur; i++){
        afficherEtage()
    }
}

afficherPlusieursEtages('septembre')

// 3. afficher la fin du crayon qui correspond aussi à 1 étage de gomme:
// |__|

function afficherBasCrayon(){
    let basCrayon = "|__|"
    console.log(basCrayon)
}

afficherBasCrayon()

// 4. afficher gomme à 2 étages : 
// |  |
// |__|

function afficherGomme(){
    let premiereGomme = "|  |"
    console.log(premiereGomme)
    let deuxiemeGomme = "|__|"
    console.log(deuxiemeGomme)
}

afficherGomme()


function drawMyPen(mois){
    console.log(mois)
    afficherPointe()
    afficherPlusieursEtages(mois)
    afficherBasCrayon()
    if(calendrierDuCrayon[mois]>4){
        afficherGomme()
    }else{
        afficherBasCrayon()
    }
}

drawMyPen('septembre')
/drawMyPen('octobre')
drawMyPen('decembre')
drawMyPen('fevrier')
drawMyPen('mars')
drawMyPen('mai')
drawMyPen('juin')