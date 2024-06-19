import { useRouteError } from "react-router-dom";

const Error=()=>{
    const err=useRouteError();

    return(
        <div>
            <h1>Something went wrong try after sometime!!!</h1>
            <h2>Ooopss!!!</h2>
            <h3>
                {err.status}: {err.statusText}
            </h3>
        </div>
    )
}
export default Error;