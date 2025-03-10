// withTitle.js
import React from 'react';

// Higher-Order Component yang menambahkan properti title ke WrappedComponent
export const withTitle = (WrappedComponent) => {
  // Kembalikan komponen fungsional baru
  return (props) => {
    // Anda bisa mengatur title secara default atau mengambilnya dari props
    const title = props.title || "Default Title";
    return <WrappedComponent {...props} title={title} />;
  };
};

export default withTitle;
