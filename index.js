// ---- Navigation entre les pages ----
function afficher(nom, btn) {
  document.querySelectorAll('.page').forEach(function(p) {
    p.classList.remove('actif');
  });
  document.querySelectorAll('nav button').forEach(function(b) {
    b.classList.remove('actif');
  });
  document.getElementById('page-' + nom).classList.add('actif');
  btn.classList.add('actif');
  window.scrollTo(0, 0);
}

// ---- Démo CSS : appliquer couleur et taille ----
function appliquerCSS() {
  var couleur = document.getElementById('css-couleur').value;
  var taille  = document.getElementById('css-taille').value;
  var res     = document.getElementById('css-resultat');
  res.style.color    = couleur;
  res.style.fontSize = taille;
}

// ---- Démo JS : calculer le double ----
function calculerDouble() {
  var nombre   = document.getElementById('js-nombre').value;
  var resultat = document.getElementById('js-resultat');
  if (nombre === '') {
    resultat.textContent = "Entrez un nombre d'abord.";
    resultat.style.color = '#ef4444';
    return;
  }
  var double = Number(nombre) * 2;
  resultat.textContent = 'Le double de ' + nombre + ' est : ' + double;
  resultat.style.color = '#4ade80';
}

// ---- Quiz : vérifier une réponse ----
function repondre(btn, correct, feedback) {
  var question = btn.closest('.question');
  question.querySelectorAll('button').forEach(function(b) {
    b.disabled = true;
    b.style.cursor = 'default';
  });
  btn.classList.add(correct ? 'bon' : 'faux');
  var rep = question.querySelector('.reponse');
  rep.textContent = feedback;
  rep.style.color = correct ? '#4ade80' : '#ef4444';
}
