import { useLoaderData } from "react-router-dom";
import Games from "./games";


const Details = () => {
    const games = useLoaderData();
    console.log(games);
    return (
        <div className="grid grid-rows-1 lg:grid-cols-2 max-w-7xl mx-auto gap-20 mt-10 pb-10">
            {
                games.map(game=> <Games key={game._id} game={game}></Games>)
            }
        </div>
    );
};

export default Details;