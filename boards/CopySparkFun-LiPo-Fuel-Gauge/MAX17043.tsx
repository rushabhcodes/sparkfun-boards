import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["CTG"],
  pin2: ["CELL"],
  pin3: ["VDD"],
  pin4: ["GND"],
  pin5: ["ALT"],
  pin6: ["QST"],
  pin7: ["SCL"],
  pin8: ["SDA"],
  pin9: ["EP"],
} as const

export const MAX17043G_T = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      schWidth={2.6}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["pin1", "pin2", "pin3", "pin4"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["pin8", "pin7", "pin6", "pin5"],
        },
      }}
      supplierPartNumbers={{
        jlcpcb: ["C5369209"],
      }}
      manufacturerPartNumber="MAX17043G_T"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.7500619999999572mm"
            pcbY="-1.4075409999999238mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.24993600000016158mm"
            pcbY="-1.4075409999999238mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.24993599999982052mm"
            pcbY="-1.4075409999999238mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.7500619999999572mm"
            pcbY="-1.4075409999999238mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0.7500619999999572mm"
            pcbY="1.4075410000000375mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.24993599999982052mm"
            pcbY="1.4075410000000375mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-0.24993600000016158mm"
            pcbY="1.4075410000000375mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-0.7500619999999572mm"
            pcbY="1.4075410000000375mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="0mm"
            pcbY="0.00012700000013410317mm"
            width="1.6299942mm"
            height="1.7500091999999998mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -1.0761980000000904, y: -1.5761969999999792 },
              { x: -1.0761980000000904, y: 1.5762478000000328 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.076248799999803, y: -1.5761969999999792 },
              { x: 1.076248799999803, y: 1.5762478000000328 },
            ]}
          />
        </footprint>
      }
      {...props}
    />
  )
}
