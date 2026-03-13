import { CardComponent, type CardDeal } from './Card';
export function FiveCardCross({ spread }: { spread: CardDeal[] }) {
    return (
        <div>
            <div className="single"><CardComponent deal={spread[3]} /></div>
            <div className="horizontal">
                <CardComponent deal={spread[1]} />
                <CardComponent deal={spread[4]} />
                <CardComponent deal={spread[2]} />
            </div>
            <div className="single"><CardComponent deal={spread[0]} /></div>
        </div>
    )
}