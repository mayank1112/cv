import { useEffect } from "react";

export const useScroll = (listenToScroll, dependencies) => useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
}, dependencies);
