import { useState, useMemo } from "react";

const CLASS_GROUPS = {
    beast: [
        "beast",
        "beastI",
        "beastII",
        "beastIIIL",
        "beastIIIR",
        "beastIV",
        "uOlgaMarieFlareCollection",
        "uOlgaMarieAquaCollection"
    ],
    caster: [
        "caster",
        "loreGrandCaster"
    ]
};

export function useFilters(data) {
    const [search, setSearch] = useState("");
    const [rarity, setRarity] = useState("all");
    const [className, setClassName] = useState("all");

    const filteredData = useMemo(() => {
        return data.filter((item) => {

            const matchesSearch =
                item.name.toLowerCase().includes(search.toLowerCase());

            const matchesRarity =
                rarity === "all" || String(item.rarity) === rarity;

            let matchesClass = true;

            if (className !== "all") {
                if (CLASS_GROUPS[className]) {
                    matchesClass = CLASS_GROUPS[className].includes(item.className);
                } else {
                    matchesClass = item.className === className;
                }
            }

            return matchesSearch && matchesRarity && matchesClass;
        });
    }, [data, search, rarity, className]);

    return {
        search,
        setSearch,
        rarity,
        setRarity,
        className,
        setClassName,
        filteredData
    };
}