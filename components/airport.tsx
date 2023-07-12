import {Strip} from "@/components/strip";
import {Flightstrip} from "@/types";

export default function Airport(data: any) {

    let strip: Flightstrip = {
        altitude: "020",
        company: "LUFTHANSA",
        callsign: "DLH2SM",
        current_state: "push",
        current_station: "KLSX_GND",
        destination: "KLSX"
    }


    return (<>


        <h1 className={"text-3xl underline"}>KLSX</h1>
        <div className={"flex flex-row rounded mt-2"}>
            <div className={"basis-1/3 border-t-2"}>
                <div>
                    <h2 className={"text-2xl"}>DEL</h2>
                </div>
                <div className={"grid grid-cols-1 gap-2 mt-1"}>
                    <Strip strip={strip}></Strip>
                    <Strip strip={strip}></Strip>
                    <Strip strip={strip}></Strip>
                    <Strip strip={strip}></Strip>
                    <Strip strip={strip}></Strip>
                </div>
            </div>
            <div className={"basis-1/3  border-t-2"}>
                <h2 className={"text-2xl"}>GND</h2>
                <div className={"grid grid-cols-1 gap-2 mt-1"}>
                    <Strip strip={strip}></Strip>
                    <Strip strip={strip}></Strip>
                    <Strip strip={strip}></Strip>
                    <Strip strip={strip}></Strip>
                </div>
            </div>
            <div className={"basis-1/3  border-t-2"}>
                <h2 className={"text-2xl"}>TWR</h2>
                <div className={"grid grid-cols-1 gap-2 mt-1"}>
                    <Strip strip={strip}></Strip>
                    <Strip strip={strip}></Strip>
                    <Strip strip={strip}></Strip>
                    <Strip strip={strip}></Strip>
                </div>
            </div>

        </div>


    </>)

}