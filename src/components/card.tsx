
import { useState } from 'react';
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



export function CardComponent({ deal }: { deal: CardDeal }) {
    const [isFlipped, setIsFlipped] = useState(false);
    // Function to cause the card to flip when clicked
    function flipCard(event: React.MouseEvent<HTMLDivElement>) {
        const cardElement = event.currentTarget;
        cardElement.classList.toggle('flipped');
        setIsFlipped(!isFlipped);
    }
    const { card, facing, position } = deal;
    const imageSrc = facing === 'Reverse' ? `/cards/${card.image}-reverse.gif` : `/cards/${card.image}.gif`;

    return (
        <div >
            <div className="card-wrapper" onClick={flipCard}>
                <div className="card-flipper">
                    <div className={`card-back`}>
                        <img src={imageSrc} alt={`${card.name} - ${card.alternateName} - (${facing})`} />
                    </div>
                    <div className="card-front">
                        <img src={`/cards/X-RL.gif`} alt="Card Back" />
                    </div>
                </div>

            </div>
            <div className={`text-sm text-center ${isFlipped ? 'visible' : 'hidden'}`}>
                {`${card.name} - ${card.alternateName}`}
            </div>
            <div className="text-sm font-bold text-center">{position}</div>
        </div>

    );
}