import { CardComponent, type CardDeal } from './Card';

// The Celtic Cross spread consists of 10 cards arranged in a specific pattern. The first 6 cards form a cross, while the remaining 4 cards are placed in a vertical line to the right of the cross. The positions of the cards in the Celtic Cross spread are as follows:
// 1. The Present (center of the cross)
// 2. The Challenge (crossing the first card horizontally)
// 3. What to focus on (below the first card)
// 4. The Past (to the left of the first card)
// 5. Your Strengths (above the first card)
// 6. The Future (to the right of the first card)
// 7. Suggested Approach (first card in the vertical line)
// 8. External Influences (second card in the vertical line)
// 9. Hopes and Fears (third card in the vertical line)
// 10. Outcome (fourth card in the vertical line)
export function CelticCross({ spread }: { spread: CardDeal[] }) {
    return (
        <div className="grid grid-cols-2 ml-10">
            <div id="cross" className="">
                <div className="flex justify-center"><CardComponent deal={spread[4]} /></div>
                <div className="flex justify-center gap-1">
                    <CardComponent deal={spread[3]} />
                    <CardComponent deal={spread[0]} />
                    <CardComponent deal={spread[5]} />
                </div>
                <div className="flex justify-center rotate-90"><CardComponent deal={spread[1]} /></div>
                <div className="flex justify-center"><CardComponent deal={spread[2]} /></div>
            </div>
            <div id="staff" className="flex flex-col justify-center gap-1 items-center">
                <CardComponent deal={spread[9]} />
                <CardComponent deal={spread[8]} />
                <CardComponent deal={spread[7]} />
                <CardComponent deal={spread[6]} />
            </div>
        </div>
    )
}