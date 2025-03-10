import React, { useMemo } from 'react';

const Jumlah = (props) => {
  // Menggunakan useMemo untuk menghitung jumlah array hanya jika props.arr berubah
  const sum = useMemo(() => {
    if (props.arr) {
      return props.arr.reduce((total, num) => total + num, 0);
    }
    return 0;
  }, [props.arr]);

  return (
    <div>
      <p>Jumlah: {sum}</p>
    </div>
  );
}

export default Jumlah;
