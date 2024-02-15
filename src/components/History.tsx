import { useAtom } from "jotai"
import { showHistory } from '../../atoms.ts'

export default function History() {
    const [show] = useAtom(showHistory)
    const moveArray = [["c4", "d6"], ["Nc3", "f5"], ["Qxf5+", "Bf7"], ["b3", "g6"], ["Qc2", "Nc6"], ["g3", "Nb6"], ["Nd3", "a5"], ["Rb1", "Ne5"], ["Nf4", "a4"], ["Nxa4", "Nxa4"], ["bxa4", "c6"], ["d3", "d5"], ["cxd5", "g5"], ["dxc6", "gxf4"], ["cxb7", "Ra6"], ["Qc8+", "1-0"]]
    return (
        <div className={`flex ${!show && "hidden"} tablet:flex-col w-full gap-[16px] overflow-auto max-h-[80%]`}>
            <h2 className="hidden tablet:block desktop:text-[24px]">Moves</h2>
            {moveArray.map((move, index) => {
                return (
                    <div className="flex flex-col tablet:flex-row tablet:gap-x-[8px] " key={index}>
                        <h3 className="">{`${index + 1}.`}</h3>
                        <p className="">{move[0]}</p>
                        <p className="">{move[1]}</p>
                    </div>
                )
            })}
        </div>
    )
}