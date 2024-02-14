import BoardRow from "./BoardRow"
import { useAtom } from "jotai"
import { showHistory } from '../../atoms.ts'


export default function Gameboard() {
  const [show] = useAtom(showHistory)

  const rows = 8
  function renderRows(rowNum: number) {
    const rowArray = []
    for (let i = 0; i < rowNum; i++) {
      rowArray.push(<BoardRow key={i} index={i} />)
    }
    return rowArray
  }
  return (
    <div className={`flex flex-col items-center w-full aspect-square ${show ? "max-w-[55vh]" : "max-w-[73vh]"} tablet:max-w-[75vh]`}>
      {renderRows(rows)}
    </div>
  )
}

//max-w-[55vh] tablet:max-w-[78vh]