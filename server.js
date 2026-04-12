const express = require('express');
const http = require('http');
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

// Servir les fichiers statiques (HTML, CSS, JS)
app.use(express.static(__dirname));

// ============================================================
//  État global du serveur
// ============================================================
let pageActuelle = 'html';
let quizReponses = {};   // { "q1": { "Vrai": 2, "Faux": 5 } }
let nbConnectes  = 0;

// ============================================================
//  Gestion des connexions
// ============================================================
io.on('connection', (socket) => {
    nbConnectes++;
    console.log(`✅ Connecté   : ${socket.id} | Total : ${nbConnectes}`);

    // Envoyer l'état actuel au nouvel arrivant
    socket.emit('init', {
        page      : pageActuelle,
        quiz      : quizReponses,
        connectes : nbConnectes
    });

    // Informer tout le monde du nouveau compteur
    io.emit('connectes', nbConnectes);

    // ---- Navigation (le professeur change d'onglet) --------
    socket.on('changer page', (nomPage) => {
        pageActuelle = nomPage;
        io.emit('changer page', nomPage);
        console.log(`📄 Page → ${nomPage}`);
    });

    // ---- Quiz : un étudiant soumet une réponse -------------
    socket.on('quiz reponse', (data) => {
        const { question, reponse } = data;
        if (!quizReponses[question])          quizReponses[question] = {};
        if (!quizReponses[question][reponse]) quizReponses[question][reponse] = 0;
        quizReponses[question][reponse]++;
        io.emit('quiz stats', { question, stats: quizReponses[question] });
        console.log(`🧠 Quiz [${question}] → "${reponse}" : ${quizReponses[question][reponse]} vote(s)`);
    });

    // ---- Reset quiz (professeur) ---------------------------
    socket.on('reset quiz', () => {
        quizReponses = {};
        io.emit('quiz reset');
        console.log('🔄 Quiz réinitialisé');
    });

    // ---- Déconnexion ---------------------------------------
    socket.on('disconnect', () => {
        nbConnectes--;
        io.emit('connectes', nbConnectes);
        console.log(`❌ Déconnecté : ${socket.id} | Total : ${nbConnectes}`);
    });
});

// ============================================================
//  Démarrage
// ============================================================
server.listen(3000, '0.0.0.0', () => {
    console.log('🚀 Serveur démarré sur http://192.168.149.130:3000');
});

// Arrêt propre
process.on('SIGINT', () => {
    console.log('\n🛑 Fermeture du serveur...');
    server.close(() => {
        console.log('✅ Serveur fermé proprement.');
        process.exit(0);
    });
});
