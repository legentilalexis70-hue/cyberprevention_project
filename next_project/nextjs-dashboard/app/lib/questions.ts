// data/questions.ts
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
    options: ['je mette un mot qui précise de ne pas l\'utiliser', 'je préviens mes collègues', 'j\'alerte le support informatique', 'je préviens ma maman'],
    answer: ['je mette un mot qui précise de ne pas l\'utiliser','je préviens mes collègues', 'j\'alerte le support informatique'],
    explanation: "Le support informatique est joignable au 505.",
  } 
  
];

export const questions_detection = [
  {
    id: "1",
    question: "Vous recevez un mail suspect, quels sont les premiers indices à surveiller:",
    options: ['je mette un mot qui précise de ne pas l\'utiliser', 'je préviens mes collègues', 'j\'alerte le support informatique', 'je préviens ma maman'],
    answer: ['je mette un mot qui précise de ne pas l\'utiliser','je préviens mes collègues', 'j\'alerte le support informatique'],
    explanation: "Le support informatique est joignable au 505.",
  } 
]

export const questions_phishing = [
  {
    id: "1",
    question_fraude: "Ce mail vous semble-t-il frauduleux ?",
    fraude:['Oui', 'Non'],
    question_options: "Si oui, quels sont les indices que vous avez observés?",
    options: ['je mette un mot qui précise de ne pas l\'utiliser', 'je préviens mes collègues', 'j\'alerte le support informatique', 'je préviens ma maman'],
    answer: ['je mette un mot qui précise de ne pas l\'utiliser','oui'],
    explanation: "Le support informatique est joignable au 505.",
    image:'mail_remboursement-1.png',
    source:'Image tirée du livre « Cybersécurité et hygiène numérique au quotidien » de Gildas Avoine, INSA Rennes, utilisée avec son autorisation.',
  } 
]