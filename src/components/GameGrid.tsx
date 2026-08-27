import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <p className="text-danger">{error}</p>}

      {/* Grid container specifying column counts across breakpoints */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 p-3">
        {games.map((game) => (
          /* Wrap EACH card in its own column */
          <div className="col" key={game.id}>
            <GameCard game={game} />
          </div>
        ))}
      </div>
    </>
  );
};

export default GameGrid;
