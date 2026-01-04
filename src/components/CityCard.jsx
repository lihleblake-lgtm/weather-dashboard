const CityCard = ({ city, icon }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow text-center">
      <img src={icon} className="w-16 mx-auto mb-2" />
      <h2 className="font-semibold">{city}</h2>
    </div>
  );
};
