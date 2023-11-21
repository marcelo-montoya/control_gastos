

import { useGlobalState } from "../hooks/useGlobalState"




export const Balance = () => {

    const data = useGlobalState()

    return (
        <div>
            <h1>Balance</h1>
            <div>
                {JSON.stringify(data)}
            </div>
        </div>

    )

}
