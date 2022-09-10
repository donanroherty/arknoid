import { useCallback } from "react"
import { createStage } from "./lib/stage"

function Stage() {
  const ref = useCallback((svg: SVGSVGElement) => {
    if (!svg) return
    createStage(svg)
  }, [])

  return <svg ref={ref} id="stage" className="stage" width={1024} height={768}></svg>
}

export default Stage
