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

  // Genera numeri casuali per punti fatti e falli subiti
squadre.forEach(squadra => {
    squadra.puntiFatti = getRandomNumber(1, 100);
    squadra.falliSubiti = getRandomNumber(1, 50);
  });
  
  // Nuovo array con solo nomi e falli subiti
  const nuovoArray = squadre.map(({ nome, falliSubiti }) => ({ nome, falliSubiti }));
  
  console.log('Array di squadre:', squadre);
  console.log('Nuovo array con nomi e falli subiti:', nuovoArray);
  