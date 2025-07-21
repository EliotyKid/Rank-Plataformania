const PersonScore = ({ id, name, score, rounds, position }) => {
  // Medalhas para os três primeiros
  const medals= {
    1: "🥇",
    2: "🥈",
    3: "🥉",
  };

  // Estilos personalizados
  const isFirst = position === 1;
  const isSecond = position === 2;
  const isThird = position === 3;

  const baseStyle = "flex items-center justify-between w-full px-6 py-4";

  const styleByPosition = isFirst
    ? "bg-yellow-200 text-yellow-900 shadow-lg font-bold rounded-lg scale-105 border border-yellow-400"
    : isSecond
    ? "bg-gray-200 text-gray-800 shadow-md font-semibold"
    : isThird
    ? "bg-orange-100 text-orange-900 shadow-md font-medium"
    : "bg-white text-gray-800";

  const nameStyle = isFirst ? "text-xl font-bold" : "text-base";
  const scoreStyle = isFirst ? "text-lg font-bold" : "text-sm font-semibold";

  return (
    <div className={`${baseStyle} ${styleByPosition}`}>
      <div className="flex items-center gap-4">
        <span className="text-xl w-6 text-right">
          {medals[position] || `${position}.`}
        </span>
        <h2 className={nameStyle}>{name}</h2>
      </div>
      <div className="text-right">
        <p className={scoreStyle}>{score} pts</p>
        <p className="text-xs text-gray-600">{rounds} rodadas</p>
      </div>
    </div>
  );
};

export default PersonScore;
