const GameCardSkeleton = () => {
  return (
    <div>
      {/* Image Skeleton Box */}
      <div className="placeholder-glow" style={{ height: "200px" }}>
        <span className="placeholder w-100 h-100 bg-secondary opacity-25"></span>
      </div>

      <div className="card-body">
        {/* Title Skeleton Line */}
        <h5 className="card-title placeholder-glow mb-3">
          <span className="placeholder col-8 bg-secondary rounded"></span>
        </h5>

        {/* Platform Icons & Critic Score Skeleton Row */}
        <div className="d-flex justify-content-between align-items-center placeholder-glow">
          <span className="placeholder col-5 bg-secondary rounded"></span>
          <span className="placeholder col-2 bg-secondary rounded-2 py-2"></span>
        </div>
      </div>
    </div>
  );
};

export default GameCardSkeleton;
