interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "success" : score > 60 ? "warning" : "secondary";
  return (
    <span className={`badge text-bg-${color} px-2 py-1 rounded-2`}>
      {score}
    </span>
  );
};

export default CriticScore;
