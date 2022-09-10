import { useCallback, useState } from "react"
import createGame, { Game } from "../lib/game"
import Stage from "./Stage"

const WIDTH = 1024
const HEIGHT = 768

function App() {
  const [game, setGame] = useState<Game>()

  const ref = useCallback((app: HTMLDivElement) => {
    setGame(createGame())
  }, [])

  return <div ref={ref}>{game !== undefined && <Stage game={game} />}</div>
}

export default App
