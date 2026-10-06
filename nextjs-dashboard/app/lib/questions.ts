// data/questions.ts
type Question = {
  id: string;
  question: string;
  answer: string[];
  explanation?: string;
  options: string[];
};
export const questions_reflexes = [
  {
    id: "1",
    question: "Les attaquants opèrent à distance, il faut donc que:",
    options: ['je débranche le cable réseau', 'je ferme mon navigateur', 'je ferme mon pc', 'je coupe le WIFI'],
    answer: ['je débranche le cable réseau', 'je coupe le WIFI'],
    explanation: "Les attaquants opèrent à distance, il faut donc que je débranche le cable réseau et que je coupe le WIFI pour les empêcher d'accéder à mon système.",
  },
  {
    id: '2',
    question: "Certains éléments de preuve sont contenus dans la mémoire vive de l'ordinateur, il faut donc que:",
    options: ['je ne ferme pas mon navigateur', 'j\'éteigne mon pc','je n\'éteigne pas mon pc','j\'arrête d\'utiliser mon pc'],
    answer: ['je n\'éteigne pas mon pc','j\'arrête d\'utiliser mon pc','je ne ferme pas mon navigateur'],
    explanation: "La mémoire vive se vide lorsque l'ordinateur est éteint. Utiliser le pc et fermer le navigateur pourrait effacer des éléments de preuve contenus dans la mémoire vive",
  },
  {
    id: '3',
    question: "Je dois prévenir qu'il y a une attaque, il faut donc que:",
    options: ['je mette un mot qui précise de ne pas l\'utiliser', 'je prévienne mes collègues', 'j\'alerte le support informatique', 'je prévienne ma maman'],
    answer: ['je mette un mot qui précise de ne pas l\'utiliser','je prévienne mes collègues', 'j\'alerte le support informatique'],
    explanation: "Le support informatique est joignable au 505.",
  } 
  
];

export const questions_detection: Question[] = [];

export const questions_phishing = [
  {
    id: "1",
    question_options: "Vous recevez un mail suspect, quels sont les premiers indices à surveiller:",
    options: ['Vérifier l\'adresse de l\'expéditeur', 'Ne pas cliquer sur les éventuels liens présents', 'En cas de contact téléphonique, ne pas diffuser d’informations personnelles', 'Etre vigilant et prendre du recul quant au sentiment d’urgence généré'],
    answer: ['Vérifier l\'adresse de l\'expéditeur', 'Ne pas cliquer sur les éventuels liens présents', 'En cas de contact téléphonique, ne pas diffuser d’informations personnelles', 'Etre vigilant et prendre du recul quant au sentiment d’urgence généré'],
    
  }, 
  {
    id: "2",
    question_fraude: "Ce mail vous semble-t-il frauduleux ?",
    fraude:['Oui', 'Non'],
    question_options: "Si oui, quels sont les indices que vous avez observés ?",
    options: ['Urgence et menace', 'Prétexte technique douteux', 'Url douteuse', 'Fautes d\'orthographe'],
    answer: ['Oui','Urgence et menace', 'Prétexte technique douteux', 'Url douteuse'],
    explanation: "Le mot 'immédiatement' provoque un sentiment d'urgence, ce qui incite à agir sans réfléchir. L'url ne présente aucun lien avec la poste et le chemin '/cliquez.ici.*******/index.html' est étrange (les astérisques remplacent l'adresse réel dans notre exemple).  ",
    image:'mail-1-1.png',
    source:'Image tirée du livre « Cybersécurité et hygiène numérique au quotidien » de Gildas Avoine, INSA Rennes, utilisée avec son autorisation.',
  },
  {
    id: "3",
    question_fraude: "Ce mail vous semble-t-il frauduleux ?",
    fraude:['Oui', 'Non'],
    question_options: "Si oui, quels sont les indices que vous avez observés ?",
    options: ['Maladresses gramaticalles', 'Absence de mise en forme professionnelle typique','Prétexte technique douteux', 'Url douteuse'],
    answer: ['Oui','Absence de mise en forme professionnelle typique', 'Maladresses gramaticalles', 'Url douteuse'],
    explanation: "Ces maladresses gramaticalles sont typiques de textes rédigés par des non-francophones ou générés via une traduction automatique peu soignée. \"sites.google.com\" n'est ici que la plateforme d'hébergement et permet de créer des pages gratuitement et si on regarde la suite de l'url, elle n'a encore aucun lien avec la messagerie prénomée zimbra. ",
    image:'mail-2-1.png',
    source:'Image tirée du livre « Cybersécurité et hygiène numérique au quotidien » de Gildas Avoine, INSA Rennes, utilisée avec son autorisation.',
  },
  {
    id: "4",
    question_fraude: "Ce mail vous semble-t-il frauduleux ?",
    fraude:['Oui', 'Non'],
    question_options: "Si oui, quels sont les indices que vous avez observés ?",
    options: ['Fautes d\'orthographe', 'Mail court', 'Absence de mise en forme typique', 'Demande d\'actions risquées'],
    answer: ['Non'],
    image:'mail-3-1.png',
    explanation: "Donner ces coordonnées (numéro de téléphone, adresse email) ne présente pas de risque immédiat, aucun vecteur d'attaque est présent sur ce mail. Il faut pour autant rester vigilant, car c'est un mail non-nominatif, l'adresse mail est chez hotmail, et elle demande les coordonnées dès le premier échange, avant même de demander des informations sur la voiture.",
    source:'Image tirée du livre « Cybersécurité et hygiène numérique au quotidien » de Gildas Avoine, INSA Rennes, utilisée avec son autorisation.',
  },
  {
    id: "5",
    question_fraude: "Ce mail vous semble-t-il frauduleux ?",
    fraude:['Oui', 'Non'],
    question_options: "Si oui, quels sont les indices que vous avez observés ?",
    options: ['Fautes d\'orthographe', 'Trop de justifications inutiles', 'Sentiment d\'urgence', 'Faux numéro de téléphone'],
    answer: ['Non'],
    explanation: "Le mail n'est pas générique, il possède des éléments précis (comme la mention d'une ville). La personne propose de venir voir le véhicule. Pas de présence de lien suspect ou de demande de coordonnées personnelles.",
    image:'offre-2.png',
    source:'Image tirée du livre « Cybersécurité et hygiène numérique au quotidien » de Gildas Avoine, INSA Rennes, utilisée avec son autorisation.',
  },
  {
    id: "6",
    question_fraude: "Ce mail vous semble-t-il frauduleux ?",
    fraude:['Oui', 'Non'],
    question_options: "Si oui, quels sont les indices que vous avez observés ?",
    options: ['Appel à la « confiance mutuelle »', 'Trop de justifications inutiles', 'Sentiment d\'urgence', 'La société d\'export qui récupère la voiture.'],
    answer: ['Oui','Appel à la « confiance mutuelle »', 'Sentiment d\'urgence', 'La société d\'export qui récupère la voiture.'],
    explanation: "La phrase « basée sur le signe de la confiance mutuelle » sert à vous faire baisser votre garde et à vous culpabiliser si vous demandez des garanties. L'acheteur étant à l'étranger, il n'y aura jamais de rencontre physique, et il faut donc faire confiance à distance. La société d'export qui récupère la voiture est une arnaque connu: Une fois l'argent 'reçu', un transporteur vient chercher le véhicule, la transaction est finalement refusée et l'acheteur disparait",
    image:'offre-3.png',
    source:'Image tirée du livre « Cybersécurité et hygiène numérique au quotidien » de Gildas Avoine, INSA Rennes, utilisée avec son autorisation.',
  },

]
