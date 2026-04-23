export const MinecraftRecipe = ({ grid, result }) => {
  let items = {
    "andesite_alloy": {
      image: "/images/minecraft_items/create/andesite_alloy.png",
      tooltip: "create:andesite_alloy",
    },
    "electron_tube": {
      image: "/images/minecraft_items/create/electron_tube.png",
      tooltip: "create:electron_tube",
    },
    "display_board": {
      image: "/images/minecraft_items/create/display_board.png",
      tooltip: "create:display_board",
    },
    "cogwheel": {
      image: "/images/minecraft_items/create/cogwheel.png",
      tooltip: "create:cogwheel",
    },
    "transmitter": {
      image: "/images/minecraft_items/create/transmitter.png",
      tooltip: "create:transmitter",
    },
    "display_link": {
      image: "/images/minecraft_items/create/display_link.png",
      tooltip: "create:display_link",
    },
    "brass_casing": {
      image: "/images/minecraft_items/create/brass_casing.png",
      tooltip: "create:brass_casing",
    },
  }

  const resultItem = result?.item ? items[result.item] : null;
  const resultAmount = result?.amount || 1;

  return (
    <div className="flex items-center gap-4 p-4 bg-[#c6c6c6] border-[3px] border-[#555555] border-t-[#ffffff] border-l-[#ffffff] rounded max-w-fit">
      <div className="grid grid-cols-3 gap-1">
        {grid.map((itemKey, index) => {
          const item = itemKey ? items[itemKey] : null;
          
          return (
            <div
              key={index}
              className="relative group w-8 h-8 bg-[#8b8b8b] border-2 border-[#373737] border-t-[#ffffff] border-l-[#ffffff] flex items-center justify-center"
            >
              {item && item.image && (
                <>
                  <img 
                    src={item.image} 
                    alt={itemKey} 
                    className="w-7 h-7 object-contain hover:scale-110" 
                    style={{ imageRendering: 'pixelated' }} 
                  />
                  {(item.tooltip && [0,3,6].includes(index)) && (
                    <div className={`absolute hidden group-hover:block z-50 bottom-full mb-2 left-1/2 -translate-x-1/2 bg-[#110111]/95 border-2 border-[#663a09] text-[#aaaaaa] text-xs px-2 py-1 w-max shadow-lg font-mono rounded-sm pointer-events-none pl-20 text-right`}>
                      {item.tooltip}
                    </div>
                  )}
                  {(item.tooltip && ![0,3,6].includes(index)) && (
                    <div className={`absolute hidden group-hover:block z-50 bottom-full mb-2 left-1/2 -translate-x-1/2 bg-[#110111]/95 border-2 border-[#663a09] text-[#aaaaaa] text-xs px-2 py-1 w-max shadow-lg font-mono rounded-sm pointer-events-none`}>
                      {item.tooltip}
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>
      
      <div className="text-3xl text-[#555555] font-bold drop-shadow-md">➔</div>
      
      <div className="relative group w-12 h-12 bg-[#8b8b8b] border-2 border-[#373737] border-t-[#ffffff] border-l-[#ffffff] flex items-center justify-center">
        {resultItem && resultItem.image && (
          <>
            <img 
              src={resultItem.image} 
              alt={result.item} 
              className="w-8 h-8 object-contain hover:scale-110" 
              style={{ imageRendering: 'pixelated' }} 
            />
            {resultAmount > 1 && (
              <span 
                className="absolute bottom-[2px] right-[2px] text-white font-mono font-bold text-sm leading-none z-10 pointer-events-none"
                style={{ textShadow: '2px 2px 0px #3f3f3f' }}
              >
                {resultAmount}
              </span>
            )}
            {resultItem.tooltip && (
              <div className="absolute hidden group-hover:block z-50 bottom-full mb-2 left-1/2 -translate-x-1/2 bg-[#110111]/95 border-2 border-[#663a09] text-white text-sm px-2 py-1 w-max shadow-lg font-mono rounded-sm pointer-events-none">
                {resultItem.tooltip}
                {resultAmount > 1 && (` x${resultAmount}`)}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};