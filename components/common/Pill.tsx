const Pill = ({ label }: { label: string }) => {
  return (
    <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition">
      {label}
    </button>
  );
};

export default Pill;