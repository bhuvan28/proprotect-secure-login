export function NetworkAnimation() {
  return (
    <div className="network-lines">
      {/* Animated network lines */}
      <div 
        className="network-line" 
        style={{ 
          top: '20%', 
          left: '-10%', 
          width: '60%',
          transform: 'rotate(15deg)'
        }} 
      />
      <div 
        className="network-line" 
        style={{ 
          top: '40%', 
          left: '30%', 
          width: '80%',
          transform: 'rotate(-10deg)',
          animationDelay: '1s'
        }} 
      />
      <div 
        className="network-line" 
        style={{ 
          top: '60%', 
          left: '-20%', 
          width: '70%',
          transform: 'rotate(25deg)',
          animationDelay: '2s'
        }} 
      />
      <div 
        className="network-line" 
        style={{ 
          top: '80%', 
          left: '10%', 
          width: '50%',
          transform: 'rotate(-5deg)',
          animationDelay: '3s'
        }} 
      />
      
      {/* Glowing dots */}
      <div 
        className="absolute w-2 h-2 rounded-full bg-primary/50"
        style={{ top: '25%', left: '30%', animation: 'float 4s ease-in-out infinite' }}
      />
      <div 
        className="absolute w-3 h-3 rounded-full bg-primary/30"
        style={{ top: '50%', left: '60%', animation: 'float 5s ease-in-out infinite', animationDelay: '1s' }}
      />
      <div 
        className="absolute w-2 h-2 rounded-full bg-primary/40"
        style={{ top: '70%', left: '20%', animation: 'float 6s ease-in-out infinite', animationDelay: '2s' }}
      />
    </div>
  );
}
