// On attrape la balise HTML qui à pour id resultat
let resultat = document.getElementById('resultat')

function appuisTouche(num) {
    //On ajoute le numéro num dans la balise HTML qui a pour id résultat
    resultat.innerHTML += num
}
function appuisSymbole(sym) {
    //On récupère la position des symboles +-*/ dans la balise HTML résultat, 
    //si la fonction répond -1 la balise résultat ne contient pas le symbole
    let pExiste = resultat.innerHTML.indexOf('+')
    let mExiste = resultat.innerHTML.indexOf('-')
    let fExiste = resultat.innerHTML.indexOf('X')
    let dExiste = resultat.innerHTML.indexOf('/')

    //on test si aucun des 4 symboles n'existe dans le résultat
    if (pExiste == -1 && mExiste == -1 && fExiste == -1 && dExiste == -1) {
        resultat.innerHTML += sym
    }
}

function appuisClear() {
    //On vide la balise résultat
    resultat.innerHTML = ""
}

function egal() {
    //On récupère la position des symboles +-*/ dans la balise HTML résultat, 
    //si la fonction répond -1 la balise résultat ne contient pas le symbole
    let pExiste = resultat.innerHTML.indexOf('+')
    let mExiste = resultat.innerHTML.indexOf('-')
    let fExiste = resultat.innerHTML.indexOf('X')
    let dExiste = resultat.innerHTML.indexOf('/')

    if (pExiste > -1) {
        //Il y a un plus, on découpe la chaine avec + et on additionne
        let nombres = resultat.innerHTML.split('+')
        resultat.innerHTML = (+nombres[0]) + (+nombres[1])
    }
    else {
        if (mExiste > -1) {
            //Il y a un moins, on découpe la chaine avec - et on soustrait
            let nombres = resultat.innerHTML.split('-')
            resultat.innerHTML = (+nombres[0]) - (+nombres[1])
        }
        else {
            if (fExiste > -1) {
                //Il y a un fois, on découpe la chaine avec X et on multiplie
                let nombres = resultat.innerHTML.split('X')
                resultat.innerHTML = (+nombres[0]) * (+nombres[1])
            }
            else {
                if (dExiste > -1) {
                    //Il y a un diviser, on découpe la chaine avec / et on divise
                    let nombres = resultat.innerHTML.split('/')
                    resultat.innerHTML = (+nombres[0]) / (+nombres[1])
                }
            }
        }
    }
}