// ============================================================
//  NAVIGATION — fonctionne AVEC ou SANS Socket.io
// ============================================================

let modeProf = false;
let socket = null;

// ---- Navigation locale (appelée par les boutons nav) -------
function afficher(nom, btn) {
    // 1. Masquer toutes les pages
    document.querySelectorAll('.page').forEach(function(p) {
        p.classList.remove('actif');
    });

    // 2. Désactiver tous les boutons nav
    document.querySelectorAll('nav button').forEach(function(b) {
        b.classList.remove('actif');
    });

    // 3. Afficher la page demandée
    var page = document.getElementById('page-' + nom);
    if (page) page.classList.add('actif');

    // 4. Activer le bouton cliqué
    if (btn) btn.classList.add('actif');

    window.scrollTo(0, 0);

    // 5. Si socket connecté et mode prof → diffuser
    if (socket && modeProf) {
        socket.emit('changer page', nom);
    }
}

// ---- Navigation déclenchée par le serveur ------------------
function allerPage(nom) {
    document.querySelectorAll('.page').forEach(function(p) {
        p.classList.remove('actif');
    });
    document.querySelectorAll('nav button').forEach(function(b) {
        b.classList.remove('actif');
    });

    var page = document.getElementById('page-' + nom);
    if (page) page.classList.add('actif');

    // Trouver et activer le bon bouton nav
    document.querySelectorAll('nav button').forEach(function(b) {
        var oc = b.getAttribute('onclick') || '';
        if (oc.indexOf("'" + nom + "'") !== -1) {
            b.classList.add('actif');
        }
    });

    window.scrollTo(0, 0);
}

// ============================================================
//  QUIZ — répondre à une question
// ============================================================
function repondre(btn, correct, feedback, questionId) {
    var question = btn.closest('.question');

    // Bloquer tous les boutons de la question
    question.querySelectorAll('button').forEach(function(b) {
        b.disabled = true;
        b.style.cursor = 'default';
    });

    // Colorier le bouton choisi
    btn.classList.add(correct ? 'bon' : 'faux');

    // Afficher le feedback
    var rep = question.querySelector('.reponse');
    rep.textContent = feedback;
    rep.style.color = correct ? '#4ade80' : '#ef4444';

    // Envoyer au serveur si socket connecté
    if (socket && questionId) {
        socket.emit('quiz reponse', {
            question: questionId,
            reponse: btn.textContent.trim()
        });
    }
}

// ============================================================
//  QUIZ — afficher les stats reçues du serveur
// ============================================================
function afficherStats(questionId, stats) {
    var question = document.getElementById(questionId);
    if (!question) return;

    var bloc = question.querySelector('.quiz-stats');
    if (!bloc) {
        bloc = document.createElement('div');
        bloc.className = 'quiz-stats';
        question.appendChild(bloc);
    }

    var total = Object.values(stats).reduce(function(a, b) { return a + b; }, 0);

    bloc.innerHTML = Object.entries(stats).map(function(entry) {
        var label = entry[0], count = entry[1];
        var pct = total > 0 ? Math.round((count / total) * 100) : 0;
        return '<div class="barre">' +
            '<span class="label">' + label + '</span>' +
            '<div class="fond"><div class="remplissage" style="width:' + pct + '%"></div></div>' +
            '<span class="count">' + count + '</span>' +
            '</div>';
    }).join('');
}

// ============================================================
//  QUIZ — reset
// ============================================================
function resetQuiz() {
    if (!modeProf) {
        alert('Activez le mode Professeur pour réinitialiser le quiz.');
        return;
    }
    if (socket) socket.emit('reset quiz');
}

function appliquerResetQuiz() {
    document.querySelectorAll('.quiz-stats').forEach(function(b) { b.remove(); });
    document.querySelectorAll('.question button').forEach(function(b) {
        b.disabled = false;
        b.style.cursor = 'pointer';
        b.classList.remove('bon', 'faux');
    });
    document.querySelectorAll('.reponse').forEach(function(r) {
        r.textContent = '';
        r.style.color = '';
    });
}

// ============================================================
//  DÉMO CSS
// ============================================================
function appliquerCSS() {
    var couleur = document.getElementById('css-couleur').value;
    var taille  = document.getElementById('css-taille').value;
    var res     = document.getElementById('css-resultat');
    res.style.color    = couleur;
    res.style.fontSize = taille;
}

// ============================================================
//  DÉMO JS — double
// ============================================================
function calculerDouble() {
    var nombre   = document.getElementById('js-nombre').value;
    var resultat = document.getElementById('js-resultat');
    if (nombre === '') {
        resultat.textContent = "Entrez un nombre d'abord.";
        resultat.style.color = '#ef4444';
        return;
    }
    resultat.textContent = 'Le double de ' + nombre + ' est : ' + (Number(nombre) * 2);
    resultat.style.color = '#4ade80';
}

// ============================================================
//  SOCKET.IO — chargement optionnel
//  Si io() est disponible (serveur Node lancé), on connecte.
//  Sinon, toutes les fonctions marchent quand même en local.
// ============================================================
document.addEventListener('DOMContentLoaded', function() {

    // Mode professeur checkbox
    var checkbox = document.getElementById('mode-prof');
    if (checkbox) {
        checkbox.addEventListener('change', function() {
            modeProf = checkbox.checked;
        });
    }

    // Tenter la connexion Socket.io
    if (typeof io !== 'undefined') {
        try {
            socket = io();

            // État initial envoyé par le serveur
            socket.on('init', function(data) {
                allerPage(data.page);
                Object.entries(data.quiz).forEach(function(entry) {
                    afficherStats(entry[0], entry[1]);
                });
                var el = document.getElementById('nb-connectes');
                if (el) el.textContent = data.connectes;
            });

            // Mise à jour du compteur
            socket.on('connectes', function(nb) {
                var el = document.getElementById('nb-connectes');
                if (el) el.textContent = nb;
            });

            // Page changée par le prof
            socket.on('changer page', function(nomPage) {
                allerPage(nomPage);
            });

            // Stats quiz temps réel
            socket.on('quiz stats', function(data) {
                afficherStats(data.question, data.stats);
            });

            // Reset quiz
            socket.on('quiz reset', function() {
                appliquerResetQuiz();
            });

        } catch(e) {
            console.warn('Socket.io non disponible, mode hors-ligne.');
        }
    } else {
        // Cacher la barre temps réel si pas de serveur
        var barre = document.getElementById('barre-connectes');
        if (barre) barre.style.display = 'none';
    }
});
