import Square from "./Square"

type BoardRowProps = {
    index: number
}

export default function BoardRow({ index }: BoardRowProps) {
    const squares = 8
    function renderSquares(squaresNumber: number) {
        const squaresArray = []
        for (let i = 0; i < squaresNumber; i++) {
            squaresArray.push(<Square key={i} index={i} row={index}/>)
        }
        return squaresArray
    }
    return (
        <div className="flex items-start">{renderSquares(squares)}</div>
    )
}