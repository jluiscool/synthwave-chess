import Controls from "./Controls";
import History from "./History";
import { showHistory } from '../../atoms.ts'
import { useAtom } from "jotai";

export default function Sidebar() {
    const [show] = useAtom(showHistory)
    return (
        <div className={`px-mobileMargin flex flex-col gap-[8px] text-white tablet:flex-grow-[0] flex-grow-[1] desktop:flex-grow-[1] justify-evenly tablet:p-0 tablet:w-[25%] items-center  tablet:max-h-[90vh] desktop:max-h-[90vh] ${!show ? "tablet:justify-end" : "tablet:justify-between"}`}>
            <History />
            <Controls />
        </div>
    )
}