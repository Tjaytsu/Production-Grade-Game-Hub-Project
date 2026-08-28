import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <div className="card h-100 rounded-2 overflow-hidden border-0 shadow-sm">
      {children}
    </div>
  );
};

export default GameCardContainer;
