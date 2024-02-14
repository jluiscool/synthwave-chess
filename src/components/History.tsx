import { useAtom } from "jotai"
import { showHistory } from '../../atoms.ts'

export default function History() {
    const [show] = useAtom(showHistory)
    const moveArray = [["d4", "d5"], ["c4", "c6"], ["Nf3", "Nf6"], ["Bg5", "Bf3"], ["e3", "Nbd7"], ["Bd3", "Bxd3"]]
    return (
        <div className={`flex ${!show && "hidden"} tablet:flex w-full gap-[16px] overflow-auto`}>
            {moveArray.map((move, index) => {
                return (
                    <div className="flex flex-col">
                        <h3 className="">{`${index + 1}.`}</h3>
                        <p className="">{move[0]}</p>
                        <p className="">{move[1]}</p>
                    </div>
                )
            })}
        </div>
    )
}