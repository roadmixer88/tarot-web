
export interface Card {
    arcana: 'Major' | 'Lesser';
    number: number;
    name: string;
    alternateName: string;
    facing?: 'Upright' | 'Reversed';
    image: string;
}

export function CardComponent({card}: {card: Card}) {
    return (
        <div className={`card card--facing-${card.facing}`}>
            <img src={`/cards/${card.image}`} alt={`${card.name} - ${card.alternateName} - (${card.facing})`} />
            <h2>{card.name}</h2>
            <p>{card.alternateName}</p>
        </div>
    );
}