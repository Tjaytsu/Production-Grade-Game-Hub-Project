const GenreListSkeleton = () => {
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];

  return (
    <ul className="list-group list-group-flush">
      {skeletons.map((skeleton) => (
        <li
          key={skeleton}
          className="list-group-item bg-transparent border-0 d-flex align-items-center gap-2 py-2 px-0"
        >
          {/* Skeleton thumbnail */}
          <span
            className="placeholder-glow"
            style={{ width: "32px", height: "32px" }}
          >
            <span className="placeholder w-100 h-100 rounded-3 bg-secondary opacity-25"></span>
          </span>

          {/* Skeleton text line */}
          <span className="placeholder-glow flex-grow-1">
            <span className="placeholder col-8 bg-secondary rounded opacity-25"></span>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default GenreListSkeleton;
