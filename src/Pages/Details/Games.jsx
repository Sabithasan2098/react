import { Link } from "react-router-dom";

const Games = ({ game }) => {
  console.log(game);
  const { _id, title, img, details, price_money, rating } = game;

  return (
    <div className=" card w-[550px] bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="title" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-4xl font-bold text-red-400">{title}</h2>
        <p className="text-red-700 font-semibold text-2xl text-start">
          {details.length > 50 ? (
            <p>
              {details.slice(0, 100)}
              <Link to={`/game/${_id}`} className="text-blue-400">
                {" "}
                read more.....
              </Link>{" "}
            </p>
          ) : (
            <p>{details}</p>
          )}
        </p>
        <div className="flex gap-28 text-lg font-medium">
          <p className="text-lime-700">Price Money: {price_money}</p>
          <p className="text-green-500">Rating: {rating}</p>
        </div>
      </div>
    </div>
  );
};

export default Games;
