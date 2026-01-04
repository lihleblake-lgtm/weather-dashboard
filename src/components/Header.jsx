const Header = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold">Blake24 Weather</h1>

      <div className="flex gap-3">
        <button className="bg-white px-4 py-2 rounded-full shadow">
          Home
        </button>
        <button className="bg-white px-4 py-2 rounded-full shadow">
          Contact
        </button>
      </div>
    </header>
  );
};

export default Header;
