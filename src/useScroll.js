import { useEffect } from "react";

export const useScroll = (listenToScroll, dependencies) => useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => { window.removeEventListener('scroll', listenToScroll) };
}, dependencies);
