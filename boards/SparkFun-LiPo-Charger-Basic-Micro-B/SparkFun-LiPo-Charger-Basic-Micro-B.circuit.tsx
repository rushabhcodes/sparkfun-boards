import { MCP73831T_2ACI_OT } from "./C424093"
import { JST04_1MM_RA } from "./JST04_1MM_RA"
import { USB_MICRO_XNJ_JB } from "./USB_MICRO_XNJ_JB"

export default () => {
    return (
        <board width={"29.21mm"} height={"10.16mm"}>
            <MCP73831T_2ACI_OT name="U1" />
            <resistor name="R1" resistance={"30k"} footprint={"axial_p2.54mm_id0.7mm_od1.4mm"} cadModel={null}/>
            <resistor name="R3" resistance={"330"} footprint={"0603"}/>
            <resistor name="R4" resistance={"2k"} footprint={"0603"}/>

            <USB_MICRO_XNJ_JB name="J1" pcbRotation={-90} />
            <JST04_1MM_RA name="JP1" pcbRotation={-90} />
            <jumper name="J2" footprint={"pinrow2_nosquareplating"} cadModel={null} />
            <hole name="H1" diameter={"3.302mm"} pcbX={"0"} pcbY={"0"} />
        </board>
    )
}