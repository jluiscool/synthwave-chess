import Controls from "./Controls";
import History from "./History";

export default function Sidebar() {
    return (
        <div className="px-mobileMargin flex flex-col gap-[8px] text-white flex-grow-[1] justify-around">
            <History />
            <Controls />
        </div>
    )
}