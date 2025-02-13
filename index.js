let peer;
let myStream;

/**
 * Fonction pour afficher les erreurs de PeerJS
 */
function handlePeerErrors() {
    peer.on('error', (err) => {
        console.error("Erreur PeerJS :", err.message);
        alert("Erreur PeerJS : " + err.type);
    });
}

/**
 * Ajoute une vidéo à la liste des participants
 */
function ajoutVideo(stream) {
    try {
        const video = document.createElement('video');
        video.autoplay = true;
        video.controls = true;
        video.srcObject = stream;
        document.getElementById('participants').appendChild(video);
    } catch (error) {
        console.error("Erreur lors de l'ajout de la vidéo :", error.message);
    }
}

/**
 * Inscription de l'utilisateur au service PeerJS
 */
function register() {
    const name = document.getElementById('name').value.trim();
    if (!name) return alert("Veuillez entrer un nom !");
    
    try {
        peer = new Peer(name, {
            debug: 2, 
            config: {
                iceServers: [
                    { urls: "stun:stun.l.google.com:19302" },
                    { urls: "stun:stun1.l.google.com:19302" },
                    { urls: "turn:relay1.expressturn.com:3478", username: "user", credential: "password" }
                ]
            }
        });

        handlePeerErrors();

        peer.on('open', (id) => {
            console.log("Connexion établie avec PeerJS. ID :", id);
        });

        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .then((stream) => {
                myStream = stream;
                ajoutVideo(stream);

                document.getElementById('register').style.display = 'none';
                document.getElementById('userAdd').style.display = 'block';
                document.getElementById('userShare').style.display = 'block';

                // Écoute les appels entrants
                peer.on('call', (call) => {
                    console.log("Appel entrant reçu !");
                    call.answer(myStream);
                    call.on('stream', (remoteStream) => ajoutVideo(remoteStream));
                });
            })
            .catch((err) => {
                console.error("Erreur lors de l'accès à la caméra/microphone :", err.message);
                alert("Impossible d'accéder à votre caméra et microphone.");
            });
    } catch (error) {
        console.error("Erreur lors de l'inscription PeerJS :", error.message);
    }
}

/**
 * Appeler un autre utilisateur
 */
function appelUser() {
    const name = document.getElementById('add').value.trim();
    if (!name) return alert("Veuillez entrer le nom de l'utilisateur !");
    
    if (!peer || !peer.open) {
        return alert("Vous devez être connecté avant d'appeler quelqu'un !");
    }

    if (!myStream) {
        return alert("Aucun flux vidéo disponible !");
    }

    try {
        console.log(`Tentative d'appel à ${name}...`);
        const call = peer.call(name, myStream);
        
        call.on('stream', (remoteStream) => {
            console.log("Appel réussi, ajout de la vidéo...");
            ajoutVideo(remoteStream);
        });

        call.on('error', (err) => {
            console.error("Erreur lors de l'appel :", err.message);
            alert("Erreur lors de l'appel : " + err.message);
        });

    } catch (error) {
        console.error("Erreur lors de l'appel :", error.message);
        alert("Échec de l'appel.");
    }
}

/**
 * Partager son écran avec un utilisateur
 */
function addScreenShare() {
    const name = document.getElementById('share').value.trim();
    if (!name) return alert("Veuillez entrer le nom de l'utilisateur !");
    
    if (!peer || !peer.open) {
        return alert("Vous devez être connecté avant de partager l'écran !");
    }

    navigator.mediaDevices.getDisplayMedia({ video: { cursor: "always" }, audio: true })
        .then((stream) => {
            console.log(`Partage d'écran avec ${name}...`);

            // Ajouter la vidéo du partage d'écran à l'affichage
            ajoutVideo(stream);

            try {
                const call = peer.call(name, stream);
                
                call.on('error', (err) => {
                    console.error("Erreur lors du partage d'écran :", err.message);
                    alert("Erreur lors du partage d'écran.");
                });

                // Gérer la fermeture du partage d'écran
                stream.getVideoTracks()[0].onended = () => {
                    console.log("Partage d'écran arrêté.");
                    alert("Vous avez arrêté le partage d'écran.");
                };

            } catch (error) {
                console.error("Erreur lors du partage d'écran :", error.message);
                alert("Impossible de partager l'écran.");
            }
        })
        .catch((error) => {
            console.error("Erreur lors de la capture d'écran :", error.message);
            alert("Impossible de partager l'écran.");
        });
}
const socket = io();
let pendingMessages = []; // Stocke temporairement les messages en attente

function sendMessage() {
    const messageInput = document.getElementById("message");
    const message = messageInput.value.trim();

    if (message !== "") {
        socket.emit("chat message", message);
        displayMessage(message, "sent");
        messageInput.value = "";
    }
}

// Stocke les messages reçus au lieu de les afficher immédiatement
socket.on("chat message", (msg) => {
    pendingMessages.push(msg);
});

function receiveMessages() {
    if (pendingMessages.length > 0) {
        pendingMessages.forEach(msg => displayMessage(msg, "received"));
        pendingMessages = []; // Vide la liste des messages après réception
    } else {
        alert("Aucun nouveau message !");
    }
}

function displayMessage(msg, type) {
    const chatBox = document.getElementById("chat-box");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("chat-message", type === "sent" ? "sent" : "received");
    messageDiv.textContent = msg;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroller vers le bas automatiquement
}
