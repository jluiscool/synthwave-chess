import Controls from "./Controls";
import History from "./History";

export default function Sidebar() {
    return (
        <div className="px-mobileMargin flex flex-col gap-[8px] text-white tablet:flex-grow-[0] flex-grow-[1] justify-evenly tablet:p-0 tablet:w-[25%] items-center">

            <History/>
            <Controls />
        </div>
    )
}