import {Strip} from "@/components/strip";


export default function Strips() {

    return (<div className="p-3">

        <h1 className="text-3xl font-bold">Flightstrips</h1>

        <div className={"grid grid-cols-3 gap-2"}>
            <Strip></Strip>
            <Strip></Strip>
            <Strip></Strip>
            <Strip></Strip>
            <Strip></Strip>
            <Strip></Strip>
        </div>

        </div>)

}