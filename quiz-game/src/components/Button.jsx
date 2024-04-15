export function Button({ answer, onClick }) {
  return (
    <button
      onClick={onClick}
      className="mb-2 w-64 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 active:bg-blue-700"
    >
      {answer}
    </button>
  );
}
