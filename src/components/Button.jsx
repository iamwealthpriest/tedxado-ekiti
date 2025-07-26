const Button = ({ text, icon = null, className = "" }) => {
  return <button 
  className={`btn ${className}`}>{icon && <span>{icon}</span>}{text}</button>;
};

export default Button;
