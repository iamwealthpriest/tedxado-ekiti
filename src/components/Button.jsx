const Button = ({ text, icon = null, className = "", link = null, onClick = null }) => {
  const content = (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </>
  );

  return link ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn ${className} inline-flex items-center justify-center`}
    >
      {content}
    </a>
  ) : (
    <button
      onClick={onClick}
      className={`btn ${className} inline-flex items-center justify-center`}
    >
      {content}
    </button>
  );
};

export default Button;
