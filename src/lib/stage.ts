function createStage(svg: SVGSVGElement) {
  makeBox({ x: 0, y: 0, w: 1024, h: 768, fill: "white", stroke: "black", strokeWidth: 1 }, svg)
}

type RectOpts = {
  x: number
  y: number
  w: number
  h: number
  fill: string
  stroke: string
  strokeWidth: number
}

function makeBox(opts: RectOpts, svg: SVGSVGElement) {
  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect")
  rect.setAttribute("x", opts.x.toString())
  rect.setAttribute("y", opts.y.toString())
  rect.setAttribute("width", opts.w.toString())
  rect.setAttribute("height", opts.h.toString())
  rect.setAttribute("fill", opts.fill)
  rect.setAttribute("stroke", opts.stroke)
  rect.setAttribute("stroke-width", opts.strokeWidth.toString())

  svg.appendChild(rect)
}

export { createStage }
