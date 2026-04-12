// ============================================================
//  CONNEXION SOCKET.IO
// ============================================================
const socket = io();

// ============================================================
//  ÉTAT LOCAL
// ============================================================
let modeProf = false;   // true = ce client est le professeur

// ============================================================
//  INITIALISATION À LA CONNEXION
//  Le serveur envoie l'état courant (page active, stats quiz,
//  nombre de connectés) dès qu'un client se connecte.
// ============================================================
socket.on('init', (data) => {
    // Synchroniser la page affichée
    allerPage(data.page);

    // Restaurer les stats de quiz déjà enregistrées
    Object.entries(data.quiz).forEach(([question, stats]) => {
        afficherStats(question, stats);
    });

    // Afficher le nombre de connectés
    document.getElementById('nb-connectes').textContent = data.connectes;
});

// ============================================================
//  NOMBRE DE CONNECTÉS (mis à jour en temps réel)
// ============================================================
socket.on('connectes', (nb) => {
    document.getElementById('nb-connectes').textContent = nb;
});

// ============================================================
//  NAVIGATION SYNCHRONISÉE
// ============================================================

/**
 * Reçu du serveur → changer la page localement sans réémettre.
 */
socket.on('changer page', (nomPage) => {
    allerPage(nomPage);
});

/**
 * Appelé par les boutons de navigation : onclick="afficher('html', this)"
 * Si mode professeur → diffuse le changement à tous les clients.
 */
function afficher(nom, btn) {
    allerPage(nom);
    if (modeProf) {
        socket.emit('changer page', nom);
    }
}

/**
 * Navigation locale pure (sans émettre d'événement socket).
 */
function allerPage(nom) {
    // Cacher toutes les pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('actif'));

    // Désactiver tous les boutons nav
    document.querySelectorAll('nav button').forEach(b => b.classList.remove('actif'));

    // Afficher la bonne page
    const page = document.getElementById('page-' + nom);
    if (page) page.classList.add('actif');

    // Activer le bon bouton nav (en cherchant le nom dans l'attribut onclick)
    document.querySelectorAll('nav button').forEach(b => {
        const onclick = b.getAttribute('onclick') || '';
        if (onclick.includes("'" + nom + "'")) {
            b.classList.add('actif');
        }
    });

    window.scrollTo(0, 0);
}

// ============================================================
//  MODE PROFESSEUR
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('mode-prof');
    if (checkbox) {
        checkbox.addEventListener('change', () => {
            modeProf = checkbox.checked;
            console.log('🎓 Mode professeur :', modeProf);
        });
    }
});

// ============================================================
//  QUIZ — ENVOYER UNE RÉPONSE
// ============================================================

/**
 * Appelé par les boutons de quiz :
 * onclick="repondre(this, false, 'feedback...', 'q1')"
 *
 * @param {HTMLElement} btn       - Le bouton cliqué
 * @param {boolean}     correct   - La réponse est-elle correcte ?
 * @param {string}      feedback  - Texte explicatif à afficher
 * @param {string}      questionId - Identifiant de la question (ex: 'q1')
 */
function repondre(btn, correct, feedback, questionId) {
    const question = btn.closest('.question');

    // Bloquer tous les boutons de cette question
    question.querySelectorAll('button').forEach(b => {
        b.disabled = true;
        b.style.cursor = 'default';
    });

    // Affichage local : colorer le bouton choisi
    btn.classList.add(correct ? 'bon' : 'faux');

    // Afficher le feedback
    const rep = question.querySelector('.reponse');
    rep.textContent = feedback;
    rep.style.color = correct ? '#4ade80' : '#ef4444';

    // Envoyer la réponse au serveur pour mise à jour des stats
    socket.emit('quiz reponse', {
        question : questionId,
        reponse  : btn.textContent.trim()
    });
}

// ============================================================
//  QUIZ — RECEVOIR LES STATS EN TEMPS RÉEL
// ============================================================

/**
 * Le serveur diffuse les nouvelles stats après chaque vote.
 */
socket.on('quiz stats', (data) => {
    afficherStats(data.question, data.stats);
});

/**
 * Affiche ou met à jour les barres de progression sous une question.
 *
 * @param {string} questionId - ex: 'q1'
 * @param {Object} stats      - ex: { "Vrai": 3, "Faux": 7 }
 */
function afficherStats(questionId, stats) {
    const question = document.getElementById(questionId);
    if (!question) return;

    // Créer le bloc stats si absent
    let bloc = question.querySelector('.quiz-stats');
    if (!bloc) {
        bloc = document.createElement('div');
        bloc.className = 'quiz-stats';
        question.appendChild(bloc);
    }

    // Calcul du total des votes
    const total = Object.values(stats).reduce((a, b) => a + b, 0);

    // Reconstruire les barres
    bloc.innerHTML = Object.entries(stats).map(([label, count]) => {
        const pct = total > 0 ? Math.round((count / total) * 100) : 0;
        return `
        <div class="barre">
          <span class="label">${label}</span>
          <div class="fond">
            <div class="remplissage" style="width:${pct}%"></div>
          </div>
          <span class="count">${count}</span>
        </div>`;
    }).join('');
}

// ============================================================
//  QUIZ — RESET (PROFESSEUR UNIQUEMENT)
// ============================================================

/**
 * Appelé par le bouton "🔄 Reset Quiz" de la barre temps réel.
 */
function resetQuiz() {
    if (!modeProf) {
        alert('⚠️ Activez le mode Professeur pour réinitialiser le quiz.');
        return;
    }
    socket.emit('reset quiz');
}

/**
 * Reçu du serveur → remettre toutes les questions à zéro.
 */
socket.on('quiz reset', () => {
    // Supprimer les barres de stats
    document.querySelectorAll('.quiz-stats').forEach(b => b.remove());

    // Réactiver tous les boutons
    document.querySelectorAll('.question button').forEach(b => {
        b.disabled = false;
        b.style.cursor = 'pointer';
        b.classList.remove('bon', 'faux');
    });

    // Effacer les feedbacks
    document.querySelectorAll('.reponse').forEach(r => {
        r.textContent = '';
        r.style.color = '';
    });
});

// ============================================================
//  DÉMO CSS — appliquer couleur et taille en direct
// ============================================================
function appliquerCSS() {
    var couleur = document.getElementById('css-couleur').value;
    var taille  = document.getElementById('css-taille').value;
    var res     = document.getElementById('css-resultat');
    res.style.color    = couleur;
    res.style.fontSize = taille;
}

// ============================================================
//  DÉMO JS — calculer le double d'un nombre
// ============================================================
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
