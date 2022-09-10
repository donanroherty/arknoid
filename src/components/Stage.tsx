import { Game } from "../lib/game"
import BrickComponent from "./Brick"

type StageProps = {
  game: Game
}

function Stage(props: StageProps) {
  const { game } = props

  return (
    <svg width={game.width} height={game.height}>
      <rect
        x={0}
        y={0}
        width={game.width}
        height={game.height}
        fill="lightgray"
        stroke="black"
      ></rect>
      {Array.from(game.bricks).map((el) => {
        const b = el[1]
        return <BrickComponent key={b.getKey()} brick={b} />
      })}
    </svg>
  )
}

export default Stage
