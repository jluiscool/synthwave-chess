import Captures from "./Captures"
import Timer from "./Timer"

type PlayerBarProps = {
    player: string
}

export default function PlayerBar({ player }: PlayerBarProps) {
    return (
        <div className="w-full flex justify-around px-mobileMargin">
            <h2 className={`${player === "White" ? "text-synthTeal" : "text-synthPink"}`}>{player}</h2>
            <Captures />
            <Timer />
        </div>
    )
}