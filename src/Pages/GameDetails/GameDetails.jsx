import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const GameDetails = () => {
  const { id } = useParams();

  const [gameData, setGameData] = useState({});
  const { img, title, details } = gameData;

  useEffect(() => {
    fetch(`/public/platForm.json`)
      .then((res) => res.json())
      .then((data) => {
        const game = data.find((game) => game._id === id);
        setGameData(game);
      });
  }, [id]);

  return (
    <div className="max-w-7xl mx-auto mt-12 mb-12 justify-center">
      <h2 className="pb-4 text-3xl font-bold text-orange-500">{title}</h2>
      <img src={img} alt="" />
      <p className="pt-5">{details}</p>
      <Link to={"/details"}>
        <button className="bg-warning px-4 py-2 rounded-xl mt-5 text-white font-bold text-lg">
          Go back
        </button>
      </Link>
    </div>
  );
};

export default GameDetails;
