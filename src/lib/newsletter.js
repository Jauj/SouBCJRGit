/**
 * Configuration de la newsletter
 * 
 * Option 1 : Utiliser Google Groups
 * - Créez un groupe Google : https://groups.google.com
 * - Le formulaire enverra une demande d'adhésion au groupe
 * - Vous pourrez ensuite envoyer des mails groupés via l'interface Google Groups
 * 
 * Option 2 : Utiliser un Google Form
 * - Créez un Google Form pour collecter les emails
 * - Le formulaire soumettra directement au Form
 * - Exportez les réponses dans une feuille de calcul
 * 
 * Option 3 : Liste locale (pour développement)
 * - Les emails sont stockés localement (nécessite un backend pour production)
 */

// Configuration actuelle : Google Groups
export const NEWSLETTER_CONFIG = {
  // Mode : 'google-groups' | 'google-form' | 'local'
  mode: 'google-form',
  
  // Pour Google Groups : URL du groupe
  googleGroupUrl: 'https://groups.google.com/g/cjr-soub',
  
  // Pour Google Form : URL du formulaire
  // Créez un Google Form avec un champ "email" et obtenez l'URL de soumission
  googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfEXEMPLE/viewform?usp=pp_url&entry.123456789={email}',
  
  // Message de confirmation
  successMessage: 'Merci pour votre inscription ! Votre email a été ajouté à notre liste de diffusion.'
};

/**
 * Soumet l'email à la newsletter
 * @param {string} email - Adresse email à inscrire
 * @returns {Promise<boolean>} - true si succès
 */
export async function subscribeToNewsletter(email) {
  const config = NEWSLETTER_CONFIG;
  
  try {
    if (config.mode === 'google-form') {
      // Soumettre au Google Form
      // Note : En frontend pur, nous redirigeons simplement vers le form
      // Pour une soumission directe, il faudrait utiliser l'API Google Forms
      window.location.href = config.googleFormUrl.replace('{email}', encodeURIComponent(email));
      return true;
    } 
    else if (config.mode === 'google-groups') {
      // Rediriger vers le groupe Google
      window.open(config.googleGroupUrl, '_blank');
      return true;
    }
    else {
      // Mode local - juste afficher un message (nécessite backend pour fonctionner)
      console.log('Email inscrit (mode local):', email);
      alert(config.successMessage);
      return true;
    }
  } catch (error) {
    console.error('Erreur newsletter:', error);
    return false;
  }
}
