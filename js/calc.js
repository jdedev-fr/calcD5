let resultat = document.getElementById('resultat')

function appuisTouche(num) {
    resultat.innerHTML += num
}
function appuisSymbole(sym) {
    let pExiste = resultat.innerHTML.indexOf('+')
    let mExiste = resultat.innerHTML.indexOf('-')
    let fExiste = resultat.innerHTML.indexOf('X')
    let dExiste = resultat.innerHTML.indexOf('/')

    if (pExiste == -1 && mExiste == -1 && fExiste == -1 && dExiste == -1) {
        resultat.innerHTML += sym
    }
}

function appuisClear() {
    resultat.innerHTML = ""
}