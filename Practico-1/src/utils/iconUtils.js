export function getRarityColor(rarity) {
    if (rarity >= 4) return "Gold";
    if (rarity === 3) return "Silver";
    if (rarity === 2 || rarity === 1) return "Bronze";
    return "Black";
}

export function getRarityStyles(rarity) {

    const styles = {
        5: {
            border: 'border-yellow-500',
            color: 'yellow-500',
            text: 'text-yellow-500',
            stars: '★★★★★'
        },
        4: {
            border: 'border-yellow-500',
            color: 'yellow-500',
            text: 'text-yellow-500',
            stars: '★★★★'
        },
        3: {
            border: 'border-gray-400',
            color: 'gray-400',
            text: 'text-gray-400',
            stars: '★★★'
        },
        2: {
            border: 'border-orange-500',
            color: 'orange-500',
            text: 'text-orange-500',
            stars: '★★'
        },
        1: {
            border: 'border-orange-800',
            color: 'orange-800',
            text: 'text-orange-800',
            stars: '★'
        },
        0: {
            border: 'border-gray-700',
            color: 'gray-700',
            text: 'text-gray-700',
            stars: ''
        }
    };

    return styles[rarity] || styles[0];
}

export function getClassNameFixed(className) {
    switch (className) {
        case 'saber': return 'Saber';
        case 'archer': return 'Archer';
        case 'lancer': return 'Lancer';
        case 'rider': return 'Rider';
        case 'caster': return 'Caster';
        case 'assassin': return 'Assassin';
        case 'berserker': return 'Berserker';
        case 'ruler': return 'Ruler';
        case 'avenger': return 'Avenger';
        case 'moonCancer': return 'Moon Cancer';
        case 'foreigner': return 'Foreigner';
        case 'pretender': return 'Pretender';
        case 'alterEgo': return 'Alter Ego';
        case 'beast': return 'Beast';
        case 'shielder': return 'Shielder';
        case 'loreGrandCaster': return 'Grand Caster';
        case 'beastI': return 'Beast I';
        case 'beastII': return 'Beast II';
        case 'beastIIIR': return 'Beast IIIR';
        case 'beastIIIL': return 'Beast IIIL';
        case 'beastIV': return 'Beast IV';
        case 'uOlgaMarieFlareCollection': return 'Beast';
        case 'uOlgaMarieAquaCollection': return 'Beast';
        default: return className;
    }
}

export function getIconPath(className, rarity) {
    const color = getRarityColor(rarity);

    return `src/assets/Icons/${className}/${className}${color}Icon.webp`;
}

export function getIconPathFiltered(className) {

    return `src/assets/Icons/${className}/${className}GoldIcon.webp`;

}

export function getIconUrl(className, rarity) {
    return getIconPath(className, rarity);
}