import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {error && <p className="text-danger">{error}</p>}

      {/* Grid container specifying column counts across breakpoints */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 p-3">
        {isLoading &&
          skeletons.map((skeleton) => (
            <div className="col" key={skeleton}>
              <GameCardContainer>
                <GameCardSkeleton />
              </GameCardContainer>
            </div>
          ))}
        {games.map((game) => (
          /* Wrap EACH card in its own column */
          <div className="col" key={game.id}>
            <GameCardContainer>
              <GameCard game={game} />
            </GameCardContainer>
          </div>
        ))}
      </div>
    </>
  );
};

export default GameGrid;
