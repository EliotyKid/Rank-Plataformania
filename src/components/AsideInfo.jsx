

const AsideInfo = ({ gameName, imageUrl, description, itchUrl }) => {
  return (
    <aside className="sticky top-8 self-start w-full max-w-xs bg-white p-4 rounded-xl shadow-lg border border-gray-200">
      <h2 className="text-xl font-bold mb-2 text-center">{gameName}</h2>
      <img
        src={imageUrl}
        alt={`Capa do jogo ${gameName}`}
        className="w-full h-auto rounded-md mb-4"
      />
      <p className="text-sm text-gray-700 mb-4">{description}</p>
      <a
        href={itchUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
      >
        Jogar agora
      </a>
    </aside>
  );
};

export default AsideInfo;
