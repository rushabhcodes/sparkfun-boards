import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["C2_POS"],
  pin2: ["C1_POS"],
  pin3: ["VDD"],
  pin4: ["GND"],
  pin5: ["EN"],
  pin6: ["CLK"],
  pin7: ["INT"],
  pin8: ["SDA"],
  pin9: ["SCL"],
  pin10: ["TRIG"],
  pin11: ["D9"],
  pin12: ["D8"],
  pin13: ["D7"],
  pin14: ["D6"],
  pin15: ["D5"],
  pin16: ["D4"],
  pin17: ["D3"],
  pin18: ["D2"],
  pin19: ["D1"],
  pin20: ["ASEL0"],
  pin21: ["ASEL1"],
  pin22: ["VOUT"],
  pin23: ["pin23"],
  pin24: ["pin24"],
  pin25: ["EP"],
} as const

export const LP55231 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C544422"],
      }}
      manufacturerPartNumber="LP55231SQX_NOPB"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.2449810000000099mm"
            pcbY="-2.0250150000000104mm"
            width="0.25001219999999996mm"
            height="0.8499855999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.7440930000000066mm"
            pcbY="-2.0250150000000104mm"
            width="0.25001219999999996mm"
            height="0.8499855999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-0.24371300000001384mm"
            pcbY="-2.0250150000000104mm"
            width="0.25001219999999996mm"
            height="0.8499855999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.2566669999999931mm"
            pcbY="-2.0250150000000104mm"
            width="0.25001219999999996mm"
            height="0.8499855999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0.7545069999999896mm"
            pcbY="-2.0250150000000104mm"
            width="0.25001219999999996mm"
            height="0.8499855999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="1.2548869999999965mm"
            pcbY="-2.0250150000000104mm"
            width="0.25001219999999996mm"
            height="0.8499855999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="2.0250149999999962mm"
            pcbY="-1.2538709999999895mm"
            width="0.8499855999999999mm"
            height="0.25001219999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="2.0250149999999962mm"
            pcbY="-0.7562850000000054mm"
            width="0.8499855999999999mm"
            height="0.25001219999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="2.0250149999999962mm"
            pcbY="-0.2559049999999985mm"
            width="0.8499855999999999mm"
            height="0.25001219999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="2.0250149999999962mm"
            pcbY="0.24447499999999422mm"
            width="0.8499855999999999mm"
            height="0.25001219999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="2.0250149999999962mm"
            pcbY="0.7448550000000012mm"
            width="0.8499855999999999mm"
            height="0.25001219999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="2.0250149999999962mm"
            pcbY="1.245235000000008mm"
            width="0.8499855999999999mm"
            height="0.25001219999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="1.2551409999999805mm"
            pcbY="2.0250149999999962mm"
            width="0.25001219999999996mm"
            height="0.8499855999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="0.7545069999999896mm"
            pcbY="2.0250149999999962mm"
            width="0.25001219999999996mm"
            height="0.8499855999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="0.2566669999999931mm"
            pcbY="2.0250149999999962mm"
            width="0.25001219999999996mm"
            height="0.8499855999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="-0.24371300000001384mm"
            pcbY="2.0250149999999962mm"
            width="0.25001219999999996mm"
            height="0.8499855999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="-0.7440930000000066mm"
            pcbY="2.0250149999999962mm"
            width="0.25001219999999996mm"
            height="0.8499855999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="-1.2444730000000135mm"
            pcbY="2.0250149999999962mm"
            width="0.25001219999999996mm"
            height="0.8499855999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="-2.0250149999999962mm"
            pcbY="1.245235000000008mm"
            width="0.8499855999999999mm"
            height="0.25001219999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="-2.0250149999999962mm"
            pcbY="0.7448550000000012mm"
            width="0.8499855999999999mm"
            height="0.25001219999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="-2.0250149999999962mm"
            pcbY="0.24447499999999422mm"
            width="0.8499855999999999mm"
            height="0.25001219999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="-2.0250149999999962mm"
            pcbY="-0.2559049999999985mm"
            width="0.8499855999999999mm"
            height="0.25001219999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="-2.0250149999999962mm"
            pcbY="-0.7562850000000054mm"
            width="0.8499855999999999mm"
            height="0.25001219999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="-2.0250149999999962mm"
            pcbY="-1.2538709999999895mm"
            width="0.8499855999999999mm"
            height="0.25001219999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin25"]}
            pcbX="-0.00012700000002041634mm"
            pcbY="0.0003810000000044056mm"
            width="2.4999949999999997mm"
            height="2.4999949999999997mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -2.133701600000009, y: -1.6353028000000052 },
              { x: -2.133701600000009, y: -1.8056606000000102 },
              { x: -1.773021600000007, y: -2.16489279999999 },
              { x: -1.6460216000000116, y: -2.16489279999999 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.156358399999988, y: 1.6209771999999987 },
              { x: 2.156358399999988, y: 2.1442172 },
              { x: 1.6305783999999903, y: 2.1442172 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.156358399999988, y: -1.6302227999999985 },
              { x: 2.156358399999988, y: -2.15600280000001 },
              { x: 1.6305783999999903, y: -2.15600280000001 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.143861600000008, y: 1.6209771999999987 },
              { x: -2.143861600000008, y: 2.1442172 },
              { x: -1.620621600000021, y: 2.1442172 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=0e74e3f310c34e629d3374f75a3f8221&pn=C544422",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
