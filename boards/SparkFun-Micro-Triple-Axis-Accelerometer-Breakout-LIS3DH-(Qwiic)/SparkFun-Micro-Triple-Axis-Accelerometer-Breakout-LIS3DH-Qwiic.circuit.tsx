import { LIS3DHTR } from "./LIS3DH"
import { sel } from "tscircuit"
import { SM04B_SRSS_TB_LF__SN } from "./SM04B_SRSS_TB_LF__SN"

export default () => (
  <board width="19.05mm" height="7.62mm" routingDisabled>
    <LIS3DHTR
      name="U1"
      schY={-0.5}
      pcbX={-1}
      pcbRotation={180}
      connections={{
        pin14: sel.U1.pin1,
        pin1: sel.C4.pin1,
        pin12: sel.U1.pin5,
        pin5: sel.C4.pin2,
        pin11: sel.net().INT1,
        pin7: sel.R3.pin1,
        pin10: sel.U1.pin5,
      }}
    />

    <SM04B_SRSS_TB_LF__SN
      name="J1"
      schX={-5}
      schY={-5}
      pcbX={6.5}
      pcbRotation={90}
      connections={{
        pin1: sel.net().GND,
        pin2: sel.net().VCC,
        pin3: sel.net().SDA,
        pin4: sel.net().SCL,
      }}
    />

    <silkscreentext
      text="LIS3DH"
      pcbRotation={45}
      pcbX={-9}
      pcbY={-3.7}
      fontSize={1.3}
    />
    <capacitor
      name="C3"
      capacitance="0.1uF"
      footprint="cap0402"
      schX={-3.5}
      schY={-0.5}
      schRotation={-90}
    />
    <capacitor
      name="C4"
      capacitance="10uF"
      footprint="cap0402"
      schRotation={-90}
      schX={-4.5}
      schY={-0.5}
    />
    <resistor
      name="R1"
      resistance="2.2k"
      footprint="0402"
      schX={6.5}
      schY={-6}
      schRotation={90}
      connections={{ pin1: sel.U1.pin6 }}
    />
    <resistor
      name="R6"
      resistance="2.2k"
      footprint="0402"
      pcbRotation={180}
      schX={8.5}
      schY={-6}
      schRotation={90}
      connections={{ pin1: sel.U1.pin4 }}
    />
    <led  
      name="D1"
      color="red"
      footprint="0402"
      schX={7.5}
      schY={-2}
      schRotation={90}
      connections={{ pin1: sel.net.GND }} 
    />
    <resistor
      name="R3"
      resistance="10k"
      footprint="0402"
      schX={7.5}
      schY={-0.5}
      schRotation={-90}
      connections={{  pin2: sel.D1.pin2 }}
    />
    <resistor
      name="R2"
      resistance="10k"
      footprint="0402"
      schX={4.5}
      schY={1}
      schRotation={90}
      connections={{pin1: sel.U1.pin7, pin2: sel.net().VCC }}
    />
    <solderjumper
      name="JP3"
      connections={{ pin1: sel.net().GND, pin2: sel.R2.pin1 }}
      layer="bottom"
      schRotation={90}
      schX={4.5}
      schY={-1}
      pcbRotation={-90}

      bridgedPins={[["1"], ["2"]]}
      footprint="solderjumper2_pw0.635_ph1.27_p0.9"
    />
    <solderjumper
      name="LED"
      connections={{ pin1: sel.R3.pin1, pin2: sel.net().VCC }}
      layer="bottom"
      schRotation={90}
      schX={7.5}
      schY={1}
      pcbRotation={-90}
      bridgedPins={[["1"], ["2"]]}
      footprint="solderjumper2_pw0.635_ph1.27_p0.9"
    />
    <solderjumper
      name="JP4"
      connections={{
        pin1: sel.R6.pin2,
        pin2: sel.net().VCC,
        pin3: sel.R1.pin2,
      }}
      layer="bottom"
      schRotation={180}
      schX={7.5}
      schY={-5}
      pcbRotation={180}
      pcbX={-4.623}
      pcbY={-1.651}
      bridgedPins={[["1"], ["2"], ["3"]]}
      footprint="solderjumper3_bridged123_pw0.635_ph1.27_p0.9"
    />

    <hole diameter={3.302} pcbX={-7} />

    <netlabel
      net="VCC"
      anchorSide="bottom"
      schX={-4}
      schY={0.5}
      connectsTo={[sel.C3.pin1, sel.C4.pin1]}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      schX={-4}
      schY={-1.5}
      connectsTo={[sel.C3.pin2, sel.C4.pin2]}
    />

    <schematictext
      text="Power Led"
      fontSize={0.4}
      schX={8.4}
      schY={3.6}
      anchor="left"
      color="gray"
    />
    <schematictext
      text="Cut Jumper to turn off the Power LED"
      fontSize={0.15}
      schX={8.4}
      schY={3.2}
      anchor="left"
      color="gray"
    />

    <schematictext
      text="Triple Axis Accelerometer - LIS3DH"
      fontSize={0.5}
      schX={-11}
      schY={7}
      anchor="left"
      color="gray"
    />
    <schematictext
      text="Default 7 bit unshifted address: 0x19"
      fontSize={0.4}
      schX={-5}
      schY={4}
      anchor="left"
      color="gray"
    />
     <schematictext
      text="Close the ADDR solder jumper to change the address to 0x18"
      fontSize={0.15}
      schX={4}
      schY={3.2}
      anchor="left"
      color="gray"
    />
    <schematictext
      text="User Ports"
      fontSize={0.4}
      schX={-12}
      schY={-1}
      anchor="left"
      color="gray"
    />
    <schematictext
      text="Apply regulated 1.8-3.3V to VCC"
      fontSize={0.2}
      schX={-12}
      schY={-1.5}
      anchor="left"
      color="gray"
    />

    <schematictext
      text="Closed: 0x18 (SA0 = 0)"
      anchor="left"
      fontSize={0.1}
      schX={8}
      schY={-0.4}
      color="gray"
    />
    <schematictext
      text="Open: 0x19 (SA0 = 1)"
      anchor="left"
      fontSize={0.1}
      schX={8}
      schY={-0.6}
      color="gray"
    />

    <silkscreentext
      text="PU"
      fontSize={1.4}
      pcbY={-2.5}
      pcbX={-6.5}
      layer="bottom"
    />
    <silkscreentext
      text="EN"
      fontSize={1.4}
      pcbY={-2.5}
      pcbX={-9}
      layer="bottom"
    />

    <silkscreentext
      text="CLOSED"
      fontSize={0.9}
      pcbY={1.1}
      pcbX={4}
      layer="bottom"
    />
    <silkscreentext
      text="OPEN"
      fontSize={0.9}
      pcbY={1.1}
      pcbX={-3}
      layer="bottom"
    />
    <silkscreentext
      text="0x19"
      fontSize={0.9}
      pcbY={0.1}
      pcbX={-3}
      layer="bottom"
    />
    <silkscreentext
      text="0x18"
      fontSize={0.9}
      pcbY={0.1}
      pcbX={4}
      layer="bottom"
    />

     <schematictext
        text="I2C Pull-ups"
        color="gray"
        anchor="left"
        schX={9}
        schY={-4}
        fontSize={0.4}
      />
      <schematictext
        text="Cut traces to remove\npullup resisitors from circuit."
        color="gray"
        anchor="left"
        schX={9}
        schY={-4.8}
        fontSize={0.15}
      />
  </board>
)
