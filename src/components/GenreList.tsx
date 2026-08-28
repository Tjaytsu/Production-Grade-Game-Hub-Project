import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <GenreListSkeleton />;
  return (
    <ul className="list-group list-group-flush">
      {data.map((genre) => (
        <li
          className="list-group-item bg-transparent border-0 d-flex align-items-center gap-2 py-2 px-0"
          key={genre.id}
        >
          <img
            src={getCroppedImageUrl(genre.image_background)}
            alt={genre.name}
            className="rounded-3"
            style={{ width: "32px", height: "32px", objectFit: "cover" }}
          />
          <button
            className="btn btn-link text-body text-decoration-none p-0 fs-6 fw-normal"
            onClick={() => console.log("Selected:", genre.name)}
          >
            {genre.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
