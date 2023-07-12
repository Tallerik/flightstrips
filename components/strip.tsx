import Delete from "@/components/misc/deletebutton";
import {Flightstrip} from "@/types";
import SelectState from "@/components/misc/select-state";

export function Strip({strip}: { strip: Flightstrip }) {

    return (<>
        <div className={"flex flex-row border-2 border-gray-400 rounded me-2 p-1 pb-2"}>

            <div className={"basis-2/6 text-center"}>
                <span className={"font-bold text-3xl"}>{strip.destination}</span> <br/>

                <select className={"bg-black border-2 border-gray-500 ml-2 me-2 w-10/12"}><option>LS_CTR</option></select>
            </div>
            <div className={"basis-2/6  text-center"}>
                {strip.company}<br/>
                <span className={"font-bold text-3xl"}>{strip.callsign}</span>
            </div>
            <div className={"basis-2/6  text-center"}>
                A {strip.altitude}
                <br/>
                <SelectState state={strip.current_state}></SelectState>
            </div>

            <Delete></Delete>



    </div>

    </>)
}