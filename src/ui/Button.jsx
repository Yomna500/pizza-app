import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ";
  const styles = {
    primary: base + " px-4 py-3 sm:px-6 sm:py-4",
    small: base + " py-2 px-4 sm:px-5 sm:py-2.5 text-xs",
    round: base + " py-2.5 px-1 sm:px-3.5 sm:py-2 text-sm",
    secondary:
      "inline-block text-sm border-2 border-bold rounded-full font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 focus:outline-none focus:text-stone-800 focus:ring foucs:ring-stone-800 hover:text-stone-800 focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 sm:px-6 sm:py-3.5",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <>
        <button onClick={onClick} disabled={disabled} className={styles[type]}>
          {children}
        </button>
      </>
    );
  return (
    <>
      <button disabled={disabled} className={styles[type]}>
        {children}
      </button>
    </>
  );
}

export default Button;
