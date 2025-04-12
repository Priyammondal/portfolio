import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function useObserver(refs = []) {
    const [sectionInView, setSectionInView] = useState("");
    const location = useLocation();
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const target = entry.target;
                        const className = target.classList[0];
                        if (className) {
                            setSectionInView(className);
                        }
                    }
                });
            },
            { threshold: 0.5 }
        );

        refs.forEach(ref => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, [location.pathname, ...refs.map(ref => ref.current)]);

    return [sectionInView];
}
