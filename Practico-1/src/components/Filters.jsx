import { getIconPathFiltered } from "../utils/iconUtils";

const RARITIES = ["5","4","3","2","1","0"];

const CLASSES = [
    ["saber","Saber"], ["lancer","Lancer"], ["archer","Archer"],
    ["rider","Rider"], ["caster","Caster"], ["assassin","Assassin"],
    ["berserker","Berserker"], ["ruler","Ruler"], ["avenger","Avenger"],
    ["moonCancer","Moon Cancer"], ["foreigner","Foreigner"],
    ["pretender","Pretender"], ["alterEgo","Alter Ego"],
    ["beast","Beast"], ["shielder","Shielder"]
];

function Filters({ rarity, setRarity, className, setClassName }) {

    return (
        <div className="flex flex-wrap gap-3">

            <select
                value={rarity}
                onChange={(e) => setRarity(e.target.value)}
                className="px-3 py-2 rounded-lg border border-gray-300"
            >
                <option value="all">Todas las rarezas</option>
                {RARITIES.map(r => (
                    <option key={r} value={r}>
                        {r === "0" ? "Sin rareza" : `${r} ★`}
                    </option>
                ))}
            </select>

            <div className="flex gap-2 flex-wrap">
                <button
                    onClick={() => setClassName("all")}
                    className={`px-3 py-2 rounded-lg border ${
                        className === "all" ? "bg-blue-600 text-white" : "bg-white"
                    }`}
                >
                    Todas
                </button>

                {CLASSES.map(([value, label]) => (
                    <button
                        key={value}
                        onClick={() => setClassName(value)}
                        className={`
                            flex items-center gap-2 px-3 py-2 rounded-lg border
                            ${className === value
                                ? "bg-blue-600 text-white"
                                : "bg-white hover:bg-gray-100"}
                        `}
                    >
                        <img
                            src={getIconPathFiltered(value)}
                            alt={label}
                            className="w-5 h-5"
                        />
                        {label}
                    </button>
                ))}
            </div>

        </div>
    );
}

export default Filters;