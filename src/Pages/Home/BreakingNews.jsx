import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="bg-red-500 mt-10">
      <Marquee pauseOnHover={true} speed={200}>
        <h3 className=" py-2 px-4 text-2xl font-bold text-white">
          2 Days to go of the biggest DOTA-2 Esports event.Dont miss to
          register.
        </h3>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
