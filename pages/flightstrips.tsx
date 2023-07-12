import Airport from "@/components/airport";
import CreateAircraftUI from "@/components/interface";


export default function Strips() {

    return (<div className="p-3">

        <h1 className="text-3xl font-bold">Flightstrips</h1>

        <Airport></Airport>

        <div className={"absolute left-0 bottom-0 w-11/12"}>
            <CreateAircraftUI></CreateAircraftUI>
        </div>

        </div>)

}