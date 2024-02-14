type SquareProps = {
    index: number;
    row: number
}

export default function Square({ index, row }: SquareProps) {
    function getSquareColor(index: number, rowIndex : number) {
        const size = 8
        const column = index % size
        if ((rowIndex + column) % 2 === 0) {
            return "shadow-lightSquarePhone"
        } else {
            return "shadow-darkSquarePhone"
        }
    }
    return (
        <div className={`${getSquareColor(index, row)} w-[calc(100%/8)] aspect-square bg-darkSquares border-solid border-squareBorder border-synthTeal`} />
    )
}

//w-[calc(100vw/8)] h-[calc(100vw/8)] max-w-[8vh] max-h-[8vh]