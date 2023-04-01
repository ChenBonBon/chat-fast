export default function MenuIconBtn({ children, onClick }) {
  return (
    <button
      className="btn btn-square w-10 h-10 min-h-0 rounded-md"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
