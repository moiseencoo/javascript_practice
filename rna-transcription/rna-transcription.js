// G -> C
// C -> G
// T -> A
// A -> U 

export const toRna = (string) => {

    let rnaArray = string.split('');
    let convertedToRna = '';

    for (let i = 0; i < rnaArray.length; i++) {

        switch(rnaArray[i]) {
            case 'G':
              convertedToRna += 'C';
              break;
            case 'C':
              convertedToRna += 'G';
              break;
            case 'T':
              convertedToRna += 'A';
              break;
            case 'A':
              convertedToRna += 'U';
              break;
            default:
              throw new Error('Invalid input DNA.')
        }
    }

    return convertedToRna;
  
  };

