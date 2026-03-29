import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["GND"],
  pin2: ["V_BATT"],
  pin3: ["NC1"],
  pin4: ["NC2"],
} as const

export const JST_2_SMD = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C9900141337"],
      }}
      schWidth={0.9}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["V_BATT", "GND"],
        },
      }}
      footprint={
        <footprint>
          <smtpad
            portHints={["pin2"]}
            pcbX="0.9999979999998914mm"
            pcbY="2.7499500499999385mm"
            width="0.9999979999999999mm"
            height="3.4999930000000004mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.999998000000005mm"
            pcbY="2.7499500499999385mm"
            width="0.9999979999999999mm"
            height="3.4999930000000004mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-3.3500060000000076mm"
            pcbY="-2.799949950000041mm"
            width="1.499997mm"
            height="3.3999932mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="3.3500060000000076mm"
            pcbY="-2.799949950000041mm"
            width="1.499997mm"
            height="3.3999932mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -2.374163400000043, y: -4.548943150000127 },
              { x: 2.3741633999999294, y: -4.548943150000127 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -3.9499539999999342, y: 2.750051649999932 },
              { x: -3.9499539999999342, y: -0.8688133500000959 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 3.950030199999901, y: 2.750051649999932 },
              { x: 3.950030199999901, y: -0.8688133500000959 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.7311369999999897, y: 2.750051649999932 },
              { x: 3.950030199999901, y: 2.750051649999932 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.2688590000001341, y: 2.750051649999932 },
              { x: 0.2688590000000204, y: 2.750051649999932 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -3.9499539999999342, y: 2.750051649999932 },
              { x: -1.7311369999999897, y: 2.750051649999932 },
            ]}
          />
        </footprint>
      }
      {...props}
    />
  )
}
