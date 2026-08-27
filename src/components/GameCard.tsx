import type { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <div className="card h-100 rounded-2 overflow-hidden border-0 shadow-sm">
      <img
        src={game.background_image}
        alt={game.name}
        className="card-img-top"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title fw-bold ">{game.name}</h5>
        <PlatformIconList platforms={game.parent_platforms.map(p => p.platform )} />
      </div>
    </div>
  );
};

export default GameCard;
