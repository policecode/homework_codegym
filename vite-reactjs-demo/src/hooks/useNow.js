import { useEffect, useState } from "react";

export default function useNow() {
    const [now, setNow] = useState();
    useEffect(() => {
        setNow(new Date());
    }, []);
    let hour = now.getHours();
    let minute = now.getHours();
    let hour = now.getHours();

}