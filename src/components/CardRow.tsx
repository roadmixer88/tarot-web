import { CardComponent, type CardDeal } from './Card';
export function CardRow({ spread }: { spread: CardDeal[] }) {
    return (
        <div className='horizontal' >
            {spread.map((deal) => (
                <CardComponent deal={deal} />
            ))}
        </div>
    )
}