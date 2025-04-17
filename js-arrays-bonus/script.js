const teachers = [
    'Nathan',
    'Ed',
    'Fabio',
    'Phil',
    'Carlo',
    'Lewis',
    'Luca'
  ]; // NON MODIFICARE QUESTA VARIABILE
  
  // 1. Inverti l'ordine degli insegnanti nell'array teachers
  // e salva il risultato nella variabile reversedTeachers
  // METODO SEMPLIFICATO
  const reversedTeachers = teachers.reverse();
  console.log(teachers)

// METODO PRIMARIO
  for (let i = teachers.length - 1; i >= 0; i--) {
    const curElem = teachers[i];
    reversedTeachers.push(curElem);
  }
  console.log(reversedTeachers)
  
  // 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
  // con un nome di lunghezza maggiore o uguale a 5 caratteri
  const longNames = null;


  for (let i = 0; i < teachers.length; i++) {
    const curElem = teachers[i]
    if (curElem.length >= 5) {
      longNames.push(curElem);
    }
  }
  console.log(longNames);
  
  
  // 3. Rimuovi 'Ed' dall'array teachers