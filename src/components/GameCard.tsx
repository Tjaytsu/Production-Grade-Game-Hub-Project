import type { Game } from "../hooks/useGames";

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
        <p className="card-text text-secondary">
          This is a longer card with supporting text below as a natural lead-in.
        </p>
      </div>
    </div>
  );
};

export default GameCard;
