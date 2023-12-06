// Funzione per generare un numero casuale tra min e max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Array di squadre di calcio
  const squadre = [
    { nome: 'Juventus', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Roma', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Napoli', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Lazio', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Milan', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Inter', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Milan', puntiFatti: 0, falliSubiti: 0 },
  ];