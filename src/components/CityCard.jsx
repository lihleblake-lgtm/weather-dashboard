const CityCard = ({ city, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-white p-4 rounded-xl shadow text-center hover:scale-105 transition"
    >
      <h2 className="font-semibold">{city}</h2>
    </button>
  );
};

export default CityCard;

