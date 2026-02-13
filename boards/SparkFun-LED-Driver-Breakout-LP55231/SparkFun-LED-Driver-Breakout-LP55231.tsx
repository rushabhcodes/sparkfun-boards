import { sel } from "tscircuit"
import { XL_5050SURC } from "./C2843864"
import { LP55231 } from "./LP55231"

export default () => {
  return (
    <board width={"22.86mm"} height={"30.48mm"}>

      <LP55231 name="U1" pcbX={-1.27} pcbY={0} pcbRotation={-90}
      connections={{
        pin4: sel.net().GND,
      }}
      />

      <XL_5050SURC name="LED1" pcbX={5.08} pcbY={10.16} pcbRotation={90} />
      <XL_5050SURC name="LED2" pcbX={5.08} pcbY={0} pcbRotation={90} />
      <XL_5050SURC name="LED3" pcbX={5.08} pcbY={-10.16} pcbRotation={90} />

      <capacitor name="C1" capacitance={"1.0uF"} footprint="cap0402" connections={{pin1: sel.U1.pin3 ,pin2: sel.net().GND}}/>
      <capacitor name="C4" capacitance={"1.0uF"} footprint="cap0402" connections={{pin1: sel.U1.pin22 ,pin2: sel.net().GND}} />
      <capacitor name="C2" capacitance={"0.47uF"} footprint="cap0603"  connections={{pin1: sel.U1.pin24 ,pin2: sel.U1.pin2}}/>
      <capacitor name="C3" capacitance={"0.47uF"} footprint="cap0603" connections={{pin1: sel.U1.pin23 ,pin2: sel.U1.pin1}} />

      <jumper
        name="J1"
        footprint="pinrow8_id1.016_od1.880_p2.54_nosquareplating_pinlabelorthogonal_pinlabeltextalignleft_doublesidedpinlabel"
        pcbX={-10.16}
        pcbRotation={90}
        connections={{
          pin1: sel.net().GND,
          pin2: sel.net().VCC,
          pin3: sel.net().SDA,
          pin4: sel.net().SCL,
          pin5: sel.net().EN,
          pin6: sel.net().INT,
          pin7: sel.net().TRIG,
          pin8: sel.net().VOUT,
        }}
      />
      <jumper
        name="J2"
        footprint="pinrow4_id1.016_od1.880_p2.54_nosquareplating_pinlabelorthogonal_pinlabeltextalignleft_doublesidedpinlabel"
        pcbX={10.16}
        pcbY={10}
        pcbRotation={90}
      />
      <jumper
        name="J3"
        footprint="pinrow4_id1.016_od1.880_p2.54_nosquareplating_pinlabelorthogonal_pinlabeltextalignleft_doublesidedpinlabel"
        pcbX={10.16}
        pcbY={0}
        pcbRotation={90}
      />
      <jumper
        name="J4"
        footprint="pinrow4_id1.016_od1.880_p2.54_nosquareplating_pinlabelorthogonal_pinlabeltextalignleft_doublesidedpinlabel"
        pcbX={10.16}
        pcbY={-10}
        pcbRotation={90}
      />

      <solderjumper
        schRotation={180}
        // connections={{
        //   pin3: sel.R4.pin2,
        //   pin1: sel.R3.pin2,
        //   pin2: sel.net().V3_3,
        // }}
        bridgedPins={[["2"], ["3"]]}
        schX={8}
        schY={2}
        // pcbX={11.201}
        // pcbY={-7.264}
        name="JP1"
        footprint="solderjumper3_bridged23_pw0.66_pl1.270_p1"
        pcbRotation={-90}
        layer="bottom"
      />
      <solderjumper
        schRotation={180}
        // connections={{
        //   pin3: sel.R4.pin2,
        //   pin1: sel.R3.pin2,
        //   pin2: sel.net().V3_3,
        // }}
        bridgedPins={[["2"], ["3"]]}
        schX={8}
        schY={2}
        // pcbX={11.201}
        // pcbY={-7.264}
        name="JP2"
        footprint="solderjumper3_bridged23_pw0.66_pl1.270_p1"
        pcbRotation={-90}
        layer="bottom"
      />

      <solderjumper
        schRotation={180}
        // connections={{
        //   pin3: sel.R4.pin2,
        //   pin1: sel.R3.pin2,
        //   pin2: sel.net().V3_3,
        // }}
        bridgedPins={[["1"], ["2"], ["3"]]}
        schX={8}
        schY={2}
        // pcbX={11.201}
        // pcbY={-7.264}
        name="JP3"
        footprint="solderjumper3_bridged123_pw0.66_pl1.270_p1"
        pcbRotation={-90}
        layer="bottom"
      />

      <resistor name="R1" resistance={"150K"} footprint={"0603"} />
      <resistor name="R2" resistance={"150K"} footprint={"0603"} />
      <resistor name="R3" resistance={"150K"} footprint={"0603"} />

      <resistor name="R4" resistance={"4.7K"} footprint={"0603"} />
      <resistor name="R5" resistance={"4.7K"} footprint={"0603"} />

      <copperpour connectsTo="net.GND" layer="top" />
      <copperpour connectsTo="net.GND" layer="bottom" />

    </board>
  )
}
