import Game from "./components/Game"
import Sidebar from "./components/Sidebar"

function App() {

  return (
    <div className="w-[100vw] h-[100vh] bg-[url('/images/bg1280.jpg')] bg-no-repeat bg-cover bg-top py-mobileMargin tablet:p-tabletMargin flex flex-col tablet:gap-[16px] justify-around">
      <h1 className="hidden tablet:block text-h1Tablet text-center text-synthPink">Synthwave Chess</h1>
      <Game />
      <Sidebar />
    </div>
  )
}

export default App
