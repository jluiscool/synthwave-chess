import Gameboard from "./Gameboard";
import PlayerBar from "./PlayerBar";

export default function Game() {
    return (
        <div className="flex flex-col gap-[8px] items-center w-full tablet:w-auto tablet:flex-grow-[2]">
            <PlayerBar player={"Black"} />
            <Gameboard />
            <PlayerBar player={"White"} />
        </div>
    )
}