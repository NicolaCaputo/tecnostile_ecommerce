export default function Container({ children, className = '' }) {
  return (
    <div
      className={className}
      style={{
        maxWidth: '1100px',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: 'clamp(24px, 6vw, 96px)',
        paddingRight: 'clamp(24px, 6vw, 96px)',
      }}
    >
      {children}
    </div>
  );
}
