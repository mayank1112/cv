import { useRef, useState } from 'react';
import handleViewport from 'react-in-viewport';
import { useScroll } from './useScroll';

const OFFSET = 0;

const AnimatedSection = ({ children }) => {
    const ref = useRef();
    const [inViewport, setInViewport] = useState(false);
    const detectViewport = () => {
        if (ref && ref.current) {
            const top = ref.current.getBoundingClientRect().top;
            const inViewportValue = (top + OFFSET) >= 0 && (top - OFFSET) <= window.innerHeight;
            if (!inViewport && inViewportValue) {
                setInViewport(true);
            }
            if (document.documentElement.scrollTop === 0) {
                setInViewport(false);
            }
        }
    }
    useScroll(detectViewport, []);
    return (
        <div className="section-item-details" ref={ref} className={inViewport ? 'fadeIn' : 'invisible'}>
            {children}
        </div>
    );
}

const AnimatedSectionHoc = handleViewport(AnimatedSection);

export default AnimatedSectionHoc;