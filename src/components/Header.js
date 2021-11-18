import React from 'react';

const Header = () => {
  /* HeaderStyle */

  const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.5em',
  };

  return (
    <div style={headerStyle}>
      <h1
        style={{
          fontSize: '6rem',
          fontWeight: '600',
          marginBottom: '2rem',
          lineHeight: '1em',
          color: 'gray',
          textTransform: 'lowercase',
          textAlign: 'center',
        }}
      >
        Todo List
      </h1>
    </div>
  );
};

export default Header;
