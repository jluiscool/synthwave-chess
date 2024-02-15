import { useAtom } from "jotai"
import { showHistory } from '../../atoms.ts'


export default function Gameboard() {
  const [show] = useAtom(showHistory)
  return (
    <div className={`flex flex-col items-center w-full aspect-square ${show ? "max-w-[55vh]" : "max-w-[73vh]"} tablet:max-w-[75vh] desktop:max-w-[80vh] bg-[url('/images/board.png')] bg-no-repeat bg-cover`}>
    </div>
  )
}