import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["A1"],
  pin2: ["A2"],
  pin3: ["A3"],
  pin4: ["K1"],
  pin5: ["K2"],
  pin6: ["K3"],
} as const

export const XL_5050SURC = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C2843864"],
      }}
      manufacturerPartNumber="XL_5050SURC"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-2.4500840000000608mm"
            pcbY="1.4999969999998939mm"
            width="2.4999949999999997mm"
            height="1.0999978mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-2.4500840000000608mm"
            pcbY="-0.00012700000002041634mm"
            width="2.4999949999999997mm"
            height="1.0999978mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-2.4500840000000608mm"
            pcbY="-1.4999969999998939mm"
            width="2.4999949999999997mm"
            height="1.0999978mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="2.4500840000000608mm"
            pcbY="1.4999969999998939mm"
            width="2.4999949999999997mm"
            height="1.0999978mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="2.4500840000000608mm"
            pcbY="-0.00012700000002041634mm"
            width="2.4999949999999997mm"
            height="1.0999978mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="2.4500840000000608mm"
            pcbY="-1.4999969999998939mm"
            width="2.4999949999999997mm"
            height="1.0999978mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 2.0319999999999254, y: -2.7940507999999227 },
              { x: 2.158999999999992, y: -2.7940507999999227 },
              { x: 2.793237999999974, y: -2.794634999999971 },
              { x: 2.793237999999974, y: -2.2866350000000466 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.3809999999999718, y: 1.1429491999999755 },
              { x: -0.3809999999999718, y: -1.143050799999969 },
              { x: 0.7620000000000573, y: -0.00005079999993995443 },
              { x: -0.3809999999999718, y: 1.1429491999999755 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.576220400000011, y: 2.2300692000001163 },
              { x: -2.576220400000011, y: 2.576169600000071 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.576220400000011, y: 0.7300976000000219 },
              { x: -2.576220400000011, y: 0.7697978000001058 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.576220400000011, y: -0.7698993999999857 },
              { x: -2.576220400000011, y: -0.730173799999875 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.576220400000011, y: -2.576271199999951 },
              { x: -2.576220400000011, y: -2.2301707999999962 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.576220400000011, y: -2.2301707999999962 },
              { x: 2.576220400000011, y: -2.576271199999951 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.576220400000011, y: -0.730173799999875 },
              { x: 2.576220400000011, y: -0.7698993999999857 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.576220400000011, y: 0.7697978000001058 },
              { x: 2.576220400000011, y: 0.7300976000000219 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.576220400000011, y: 2.576169600000071 },
              { x: 2.576220400000011, y: 2.2300692000001163 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.576220400000011, y: -2.576271199999951 },
              { x: -2.576220400000011, y: -2.576271199999951 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.576220400000011, y: 2.576169600000071 },
              { x: -2.576220400000011, y: 2.576169600000071 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=2dbfcf6c02a3492385843c194fc5e309&pn=C2843864",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
