export const rutFormatter = rut => {
    if (!rut) return rut;
    // NN.NNN.NNN-N
    rut = rut.split('.').join('');
    rut = rut.split('-').join('');
    if (rut.length > 8) {
      return `${rut.substring(0, 2)}.${rut.substring(2, 5)}.${rut.substring(5, 8)}-${rut.substring(8)}`;
    } else if (rut.length === 8) {
      return `${rut.substring(0, 1)}.${rut.substring(1, 4)}.${rut.substring(4, 7)}-${rut.substring(7)}`;
    } else if (rut.length > 5) {
      return `${rut.substring(0, 2)}.${rut.substring(2, 5)}.${rut.substring(5)}`;
    } else if (rut.length > 2) {
      return `${rut.substring(0, 2)}.${rut.substring(2, 5)}`;
    }
    return rut;
  };
  