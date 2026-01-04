const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-[#FFD6C9] shadow">
      <h1 className="font-bold">Blake24</h1>
      <div className="space-x-4">
        <button>Home</button>
        <button>Search</button>
        <button>Contact</button>
      </div>
    </nav>
  );
};

export default Navbar;
