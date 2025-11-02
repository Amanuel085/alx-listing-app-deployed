const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-xl font-bold">🏡 LuxStay</div>
      <input
        type="text"
        placeholder="Search properties..."
        className="border px-4 py-2 rounded-md w-1/3"
      />
      <nav className="flex gap-4">
        <button className="text-blue-600">Sign In</button>
        <button className="text-blue-600">Sign Up</button>
      </nav>
    </header>
  );
};

export default Header;