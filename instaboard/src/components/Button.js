export  const Button = ({ onClick, disabled, children, loading, className}) => (
  <button
  className={className}
    onClick={onClick}
    disabled={disabled || loading}
    style={{
      backgroundColor: (disabled || loading) ? '#ccc':'',
      padding:'8px',
      textTransform:'uppercase',
      fontSize:'small',
      cursor: (disabled || loading) ? 'not-allowed' : '',
    }}
  >
    {children}
  </button>
);