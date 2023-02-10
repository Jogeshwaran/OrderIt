import { useEffect, useState } from "react";

const useNetworkStatus = () => {
    const [isOnline,setIsOnline] = useState(true)
    // need to clean the event listener when we move out of the body component
    useEffect (() => {

        const handleStatusOnline = () => {
            setIsOnline(true)
        }
        const handleStatusOffline = () => {
            setIsOnline(false)
        }
        window.addEventListener("online",handleStatusOnline)
        window.addEventListener("offline",handleStatusOffline)
        

        return (() => {
            window.removeEventListener("online", handleStatusOnline)
            window.removeEventListener("offline",handleStatusOffline)
        })
    },[])



//returns true or false | whether online or offline
return isOnline;

}

export default useNetworkStatus;