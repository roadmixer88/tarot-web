import { CardComponent, type CardDeal } from './Card';
export function CardRow({ spread }: { spread: CardDeal[] }) {
    return (
        <div className='flex justify-center gap-1' >
            {spread.map((deal) => (
                <CardComponent deal={deal} />
            ))}
        </div>
    )
}