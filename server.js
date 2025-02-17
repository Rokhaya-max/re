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

// Servir les fichiers statiques (HTML, CSS, etc.)
app.use(express.static(__dirname));

// Gérer les connexions des clients
io.on('connection', (socket) => {
    console.log('Un utilisateur est connecté');

    socket.on('chat message', (data) => {
        io.emit('chat message', data);
    });

    socket.on('disconnect', () => {
        console.log('Un utilisateur est déconnecté');
    });
});
// Démarrer le serveur
server.listen(3000, '0.0.0.0', () => {
    console.log('Serveur démarré sur http://192.168.149.130:3000');
});

// Gérer proprement l'arrêt du serveur
process.on('SIGINT', () => {
    console.log('\nFermeture du serveur...');
    server.close(() => {
        console.log('Serveur fermé proprement.');
        process.exit(0);
    });
});

