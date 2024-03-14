import ApiClient from "twitch";
import ClientCredentialsAuthProvider from "twitch-auth";

// Remplacez 'CLIENT_ID' et 'CLIENT_SECRET' par vos propres identifiants d'application Twitch
const clientId = "dkli55f6f0gijol1iaiyrhn1b9n3em";
const clientSecret = "42hdibb7abrbtihi5v3vcpcylosirn";

// Remplacez 'VIDEO_ID' par l'ID de la vidéo dont vous voulez récupérer les messages
const videoId = "2074453186";

// Initialisez l'authentification avec les informations d'identification de l'application
const authProvider = new ClientCredentialsAuthProvider(clientId, clientSecret);
const apiClient = new ApiClient({ authProvider });

// Initialisez l'API Helix Video
const helixVideoApi = new ApiClient.default(apiClient);

(async () => {
  try {
    // Obtenez les messages de la vidéo
    const videoMessages = await helixVideoApi.getVideos(videoId);

    // Affichez les messages
    console.log(videoMessages);
  } catch (error) {
    console.error(
      "Une erreur s'est produite lors de la récupération des messages de la vidéo :",
      error
    );
  }
})();
