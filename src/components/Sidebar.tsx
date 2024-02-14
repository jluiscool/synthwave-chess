import Controls from "./Controls";
import History from "./History";

export default function Sidebar() {
    return (
        <div className="px-mobileMargin flex flex-col gap-[16px] text-white">
            <History />
            <Controls />
        </div>
    )
}