import { sel } from "tscircuit"
import { JST_2_SMD } from "./JST_2_SMD"
import { MAX17043G_T } from "./MAX17043"

export default () => (
  <board width="10.16mm" height="24.13mm" routingDisabled>
    <MAX17043G_T
      name="U2"
      pcbRotation={-180}
      pcbX={0}
      pcbY={-4.445}
      schX={-1.2}
      schY={-0.3}
      connections={{
        // pin1: sel.net.GND,
        // pin2: sel.net().CELL,
        // pin3: sel.net.VDD,
        // pin4: sel.net.GND,
        // pin5: sel.net().ALT,
        // pin6: sel.net().QST,
        // pin7: sel.net.SCL,
        // pin8: sel.net.SDA,
        // pin9: sel.net.GND,
      }}
    />

    <JST_2_SMD
      name="JP1"
      pcbX={0}
      pcbY={7.565}
      schX={11.2}
      schY={-1.8}
      pcbRotation={180}
      connections={{
        pin1: sel.net.GND,
        pin2: sel.net().V_BATT,
      }}
    />

    <capacitor
      name="C1"
      capacitance="1uF"
      footprint="0402"
      pcbX={-0.6}
      pcbY={2.8}
      pcbRotation={90}
      schX={-6.2}
      schY={-1.3}
      schRotation={-90}
      connections={{
        pin1: sel.net.CELL,
        pin2: sel.net.GND,
      }}
    />

    <capacitor
      name="C2"
      capacitance="10nF"
      footprint="0402"
      pcbX={-2.8}
      pcbY={0.4}
      pcbRotation={90}
      schX={-4.7}
      schY={-1.3}
      schRotation={-90}
      connections={{
        pin1: sel.net.VDD,
        pin2: sel.net.GND,
      }}
    />

    <resistor
      name="R1"
      resistance="1k"
      footprint="0402"
      pcbX={1.27}
      pcbY={-1.905}
      pcbRotation={180}
      schX={-6.2}
      schY={1.2}
      schRotation={-90}
      connections={{
        pin1: sel.net().V_BATT,
        pin2: sel.net.CELL,
      }}
    />

    <resistor
      name="R2"
      resistance="100"
      footprint="0402"
      pcbX={-1.27}
      pcbY={-1.905}
      pcbRotation={180}
      schX={-4.7}
      schY={1.2}
      schRotation={90}
      connections={{
        pin1: sel.net.VDD,
        pin2: sel.net().V_BATT,
      }}
    />

    <resistor
      name="R3"
      resistance="2.2k"
      footprint="0402"
      pcbX={-3}
      pcbY={-11.7}
      schX={8.4}
      schY={0.8}
      schRotation={90}
      connections={{
        pin2: sel.U2.pin5,
      }}
    />

    <resistor
      name="R4"
      resistance="2.2k"
      footprint="0402"
      pcbX={-2}
      pcbY={-8.4}
      schX={4.8}
      schY={-2.4}
      schRotation={90}
      connections={{
        pin1: sel.net.GND,
        pin2: sel.U2.QST,
      }}
    />

    <resistor
      name="R5"
      resistance="2.2k"
      footprint="0402"
      pcbX={2}
      pcbY={-11.7}
      pcbRotation={180}
      schX={7.0}
      schY={0.8}
      schRotation={-90}
      connections={{
        pin2: sel.U2.SCL,
      }}
    />

    <resistor
      name="R6"
      resistance="2.2k"
      footprint="0402"
      pcbX={3}
      pcbY={-8.4}
      pcbRotation={180}
      schX={4.8}
      schY={0.8}
      schRotation={-90}
      connections={{
        pin2: sel.U2.SDA,
      }}
    />

    <chip
      name="JP2"
      pcbX={3.81}
      pcbY={-4.445}
      pcbRotation={90}
      schX={17.6}
      schY={-1.3}
      schWidth={0.6}
      pinLabels={{
        pin1: ["pin1"],
        pin2: ["pin2"],
        pin3: ["pin3"],
      }}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["pin3", "pin2", "pin1"],
        },
      }}
      footprint="pinrow3_p2.54_id1.016_od1.8796_nosquareplating_nopinlabels"
    />

    <chip
      name="JP4"
      pcbX={-3.81}
      pcbY={-4.445}
      pcbRotation={90}
      schX={17.6}
      schY={2.2}
      schWidth={0.6}
      pinLabels={{
        pin1: ["pin1"],
        pin2: ["pin2"],
        pin3: ["pin3"],
      }}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["pin3", "pin2", "pin1"],
        },
      }}
      footprint="pinrow3_p2.54_id1.016_od1.8796_nosquareplating_nopinlabels"
      connections={{
        pin2: sel.net.GND,
        pin3: sel.net.VCC,
      }}
    />

    <chip
      name="JP5"
      pcbX={0}
      pcbY={0.635}
      schX={12.8}
      schY={2.3}
      schWidth={0.6}
      pinLabels={{
        pin1: ["pin1"],
        pin2: ["pin2"],
      }}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["pin2", "pin1"],
        },
      }}
      footprint="pinrow2_p2.54_id1.016_od1.8796_nosquareplating_nopinlabels"
      connections={{
        pin1: sel.net().V_BATT,
        pin2: sel.net.GND,
      }}
    />

    <solderjumper
      name="I2C"
      pcbX={0}
      pcbY={-10.16}
      pcbRotation={180}
      layer="bottom"
      pinCount={3}
      bridgedPins={[["1", "2", "3"]]}
      footprint="solderjumper3_bridged123_p1.0414_pw0.6604_ph1.27"
      schX={6.0}
      schY={1.8}
      schRotation={180}
      connections={{
        pin1: sel.R5.pin1,
        pin2: sel.net().VCC,
        pin3: sel.R6.pin1,
      }}
    />

    <netlabel
      net="GND"
      anchorSide="top"
      schX={-2.6}
      schY={-2.7}
      connectsTo={[sel.U2.GND, sel.U2.EP, sel.C1.pin2, sel.C2.pin2]}
    />
    <netlabel
      net="VDD"
      anchorSide="left"
      schX={-3.5}
      schY={-0.2}
      connectsTo={[sel.U2.VDD, sel.C2.pin1, sel.R2.pin1]}
    />
    <netlabel
      net="CELL"
      anchorSide="left"
      schX={-3.5}
      schY={0.5}
      connectsTo={[sel.U2.CELL, sel.C1.pin1, sel.R1.pin2]}
    />

    <netlabel
      net="VCC"
      anchorSide="bottom"
      schX={6}
      schY={3.2}
      connectsTo={[sel.R3.pin2]}
    />
    <netlabel
      net="V_BATT"
      anchorSide="bottom"
      schX={-5.4}
      schY={2.2}
      connectsTo={[sel.R1.pin1, sel.R2.pin2]}
    />

    <netlabel
      net="V_BATT"
      anchorSide="bottom"
      schX={13}
      schY={3.5}
      connectsTo={sel.JP5.pin1}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      schX={13}
      schY={1.1}
      connectsTo={sel.JP5.pin2}
    />
    <netlabel
      net="VCC"
      anchorSide="bottom"
      schX={16}
      schY={3.5}
      connectsTo={sel.JP4.pin1}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      schX={17.7}
      schY={1.1}
      connectsTo={sel.JP4.pin2}
    />
    <netlabel net="SDA" anchorSide="right" connectsTo={sel.JP2.pin1} />
    <netlabel net="SCL" anchorSide="right" connectsTo={sel.JP2.pin2} />
    <netlabel net="QST" anchorSide="right" connectsTo={sel.JP2.pin3} />
    <netlabel
      net="V_BATT"
      anchorSide="bottom"
      schX={11.4}
      schY={0}
      connectsTo={sel.JP1.pin2}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      schX={11.4}
      schY={-3.6}
      connectsTo={sel.JP1.pin1}
    />

    <schematictext
      text="Fuel Gauge"
      schX={-2.8}
      schY={8.0}
      fontSize={0.7}
      anchor="center"
    />
    <schematictext
      text="Connectors"
      schX={15.7}
      schY={8.0}
      fontSize={0.7}
      anchor="center"
    />
    <schematicrect
      schX={-2.6}
      schY={5.3}
      width={6.2}
      height={2.2}
      color="gray"
      strokeWidth={0.02}
    />
    <schematictext
      text="WARNING"
      schX={-2.7}
      schY={5.95}
      color="gray"
      fontSize={0.22}
      anchor="center"
    />
    <schematictext
      text="Only use with single cell LiPo"
      schX={-2.7}
      schY={5.35}
      color="gray"
      fontSize={0.22}
      anchor="center"
    />
    <schematictext
      text="batteries! This chip is not"
      schX={-2.7}
      schY={4.85}
      color="gray"
      fontSize={0.22}
      anchor="center"
    />
    <schematictext
      text="intended for multi-cell batteries!"
      schX={-2.7}
      schY={4.35}
      color="gray"
      fontSize={0.22}
      anchor="center"
    />
    <schematictext
      text="V_BATT Range:"
      schX={-7.7}
      schY={2.9}
      color="gray"
      fontSize={0.24}
      anchor="left"
    />
    <schematictext
      text="2.5V-4.5V"
      schX={-6.8}
      schY={2.2}
      color="gray"
      fontSize={0.24}
      anchor="left"
    />
    <schematictext
      text="VCC Max:"
      schX={4.8}
      schY={4.0}
      color="gray"
      fontSize={0.24}
      anchor="center"
    />
    <schematictext
      text="5.5V"
      schX={5.6}
      schY={3.3}
      color="gray"
      fontSize={0.24}
      anchor="center"
    />
    <schematictext
      text="Cut traces to"
      schX={2.2}
      schY={2.0}
      color="gray"
      fontSize={0.22}
      anchor="center"
    />
    <schematictext
      text="remove I2C pullups"
      schX={1.7}
      schY={1.45}
      color="gray"
      fontSize={0.22}
      anchor="center"
    />

    <silkscreentext
      text="Fuel"
      layer="bottom"
      fontSize={1.27}
      pcbX={1.93}
      pcbY={10.033}
    />
    <silkscreentext
      text="Gauge"
      layer="bottom"
      fontSize={1.27}
      pcbX={2.819}
      pcbY={8.484}
    />
    <silkscreentext text="+" pcbX={2.667} pcbY={1.905} fontSize={1.778} />
    <silkscreentext text="-" pcbX={-2.286} pcbY={1.905} fontSize={1.778} />
  </board>
)
