import React,{useEffect} from "react";

export function RedirectToExternal(){
    useEffect(() => {
        // Redirect to the external URL
        window.location.href = "http://erp.kggeniuslabs.com:8000";
    }, []);
    return(
        <></>
    );
}