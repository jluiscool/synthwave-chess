import { Provider } from "jotai"
import Game from "./components/Game"
import Sidebar from "./components/Sidebar"

function App() {


  return (
    <Provider>
      <div className="w-[100vw] h-[100vh] bg-[url('/images/bg1280.jpg')] bg-no-repeat bg-cover bg-top py-mobileMargin flex flex-col justify-around items-center tablet:gap-0 tablet:justify-normal ">
        <h1 className="hidden tablet:block text-h1Mobile text-center text-synthPink">Synthwave Chess</h1>
        <div className="w-full flex flex-col tablet:flex-row h-[100%] tablet:h-auto tablet:px-mobileMargin tablet:gap-x-[16px] tablet:w-full tablet:justify-center tablet:flex-grow-[1]">
          <Game />
          <Sidebar />
        </div>
      </div>
    </Provider>
  )
}

export default App
