
export interface Card {
    arcana: string;
    number: number;
    name: string;
    alternateName: string;
    image: string;
}

export interface CardDeal {
    position: string;
    card: Card;
    facing: 'Upright' | 'Reverse';
}

// Function to cause the card to flip when clicked
function flipCard(event: React.MouseEvent<HTMLDivElement>) {
    const cardElement = event.currentTarget;
    cardElement.classList.toggle('flipped');
}

export function CardComponent({ deal }: { deal: CardDeal }) {
    const { card, facing, position } = deal;
    const imageSrc = facing === 'Reverse' ? `/cards/${card.image}-reverse.gif` : `/cards/${card.image}.gif`;
    return (
        <div className="card-wrapper" onClick={flipCard}>
            <div className="card-flipper">
                <div className={`card-back`}>
                    <img src={imageSrc} alt={`${card.name} - ${card.alternateName} - (${facing})`} />
                </div>
                <div className="card-front">
                    <img src={`/cards/X-RL.gif`} alt="Card Back" />
                </div>
            </div>
            <span className="card-position">{position}</span>
        </div>

    );
}