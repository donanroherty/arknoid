import { Brick, createBrick } from "./brick"

export type Game = {
  width: number
  height: number
  bricks: Map<string, Brick>
}

const GAME_WIDTH = 1024
const GAME_HEIGHT = 768

function createGame() {
  const rows = 6
  const cols = 20

  const bricks = new Map<string, Brick>()

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const b = createBrick(c, r)
      bricks.set(b.getKey(), b)
    }
  }

  setTimeout(() => {
    Array.from(bricks.values()).forEach((b) => {
      const k = b.getKey()
      if (k === "3_3") {
        b.destroy()
      }
    })
  }, 2000)

  const game: Game = {
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
    bricks,
  }

  return game
}

export default createGame
