import bannerImage from "../../assets/side-view-gamer-playing-with-controller.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import BreakingNews from "./BreakingNews";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Probiders/AuthProbider";
const Home = () => {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return <span className="loading loading-bars loading-lg"></span>;
  }

  return (
    <div className="mt-10 mb-10 lg:mb-40">
      <div className="text-center lg:px-[200px] ">
        <h1 className="text-emerald-300 text-7xl font-extrabold">
          Online Gaming Hub
        </h1>
        <p className="mt-4 text-emerald-500 font-bold text-2xl">
          Join us in celebrating the champions, the dreamers, and the ultimate
          gamers of today. In the world of esports, where skill meets passion,
          you are the hero of the day. Rise to the challenge, conquer the
          virtual battlegrounds, and let your gaming prowess shine. Its not just
          a game; its your moment to become the legend of esports. Embrace
          victory, own the arena, and show the world that you are the hero of
          todays esports generation. Are you ready to seize the spotlight?
        </p>
      </div>
      <BreakingNews></BreakingNews>
      <div
        className="items-center flex gap-10
     lg:w-2/3 mx-auto lg:flex-row flex-col
      mt-40"
      >
        <div className=" ">
          <h1 className="text-5xl font-extrabold text-orange-500">
            Todays Biggest Platform of Esports
          </h1>
          <p className="text-2xl font-medium text-amber-400 py-10">
            GameHub Esports is a cutting-edge online platform designed to
            revolutionize the world of esports and gaming. It serves as a
            central hub for gaming enthusiasts, professional esports players,
            and tournament organizers, offering a seamless and immersive
            experience for all.
          </p>
          <Link to={"/details"}>
            <button className="btn btn-warning text-rose-800 font-bold ">
              Our Games <FaArrowRightLong></FaArrowRightLong>
            </button>
          </Link>
        </div>
        <div>
          <img
            className="lg:h-[600px] lg:w-[2800px] rounded-lg"
            src={bannerImage}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
