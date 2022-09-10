import { useState, useRef, useEffect } from "react"
import { colors, BlockColor } from "../lib/colors"
import { Brick, BrickState } from "../lib/brick"

type BrickProps = {
  brick: Brick
}

function BrickComponent(props: BrickProps) {
  const { brick } = props
  useEffect(() => {
    brick.setStateChangedCallback(updateState)
  }, [])

  const [brickState, setBrickState] = useState(brick.state)

  const [color, setColor] = useState<BlockColor>(colors.green)
  const [strokeColor, setStrokeColor] = useState("#231F20")
  const [width, setWidth] = useState(51.2)

  function updateState(newState: BrickState) {
    setBrickState(newState)
  }

  return (
    <g>
      <svg
        x={brick.x}
        y={brick.y}
        width={width}
        height={width * 0.5}
        viewBox={"0 0 512 256"}
        enableBackground="new 0 0 512 256"
        overflow="hidden"
        visibility={brickState === BrickState.Alive ? "visible" : "hidden"}
        // xml:space="preserve"
      >
        {/* Middle */}
        <rect x="14.998" y="14.997" fill={color.default} width="482.003" height="226.004" />

        {/* Right */}
        <polygon
          fill={color.highlight}
          stroke={strokeColor}
          strokeWidth="0.25"
          strokeMiterlimit="10"
          vectorEffect="non-scaling-stroke"
          points="512,0 497.001,14.997 497.001,241.001 512,256 "
        />

        {/* Bottom */}
        <polygon fill={color.dark} points="512,256 0,256 14.998,241.001 497.001,241.001 " />

        {/* Left */}
        <polygon
          fill={color.light}
          stroke={strokeColor}
          strokeWidth="0.25"
          strokeMiterlimit="10"
          vectorEffect="non-scaling-stroke"
          points="0,256 0,0 14.998,14.997 14.998,241.001 "
        />

        {/* Top */}
        <polygon
          fill={color.light}
          stroke={strokeColor}
          strokeWidth="0.25"
          strokeMiterlimit="10"
          vectorEffect="non-scaling-stroke"
          points="0,0 512,0 497.001,14.997 14.998,14.997 "
        />
      </svg>
    </g>
  )
}

export default BrickComponent
