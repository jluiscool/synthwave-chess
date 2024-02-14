import BoardRow from "./BoardRow"

export default function Gameboard() {

  const rows = 8
  function renderRows(rowNum: number) {
    const rowArray = []
    for (let i = 0; i < rowNum; i++) {
      rowArray.push(<BoardRow key={i} index={i}/>)
    }
    return rowArray
  }
  return (
    <div className="flex flex-col items-start">
      {renderRows(rows)}
    </div>
  )
}