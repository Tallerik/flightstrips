
export default function SelectState({state}: {state: string}) {

    return (<>

        <select value={state} className={"bg-black border-2 border-gray-500 mt-2 ml-2 me-2 w-10/12"}>
            <option value={""}></option>

            <option value="aclr">Awaiting clearance</option>
            <option value="clr">Recieved clearance</option>
            <option value="push">Pushback</option>
            <option value="taxi">Taxi</option>
            <option value="ready">Ready for dep</option>
            <option value="dep">Departure</option>
            <option value="enroute">En route</option>
            <option value="app">Approach</option>
            <option value="ils">Clrd ILS</option>
            <option value="land">Clrd Land</option>
            <option value="landed">Landed</option>
            <option value="onblock">On Block</option>
        </select>


        </>);
}