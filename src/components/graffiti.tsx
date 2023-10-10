import React, { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';

interface Props {
    delay: number;      // 再生開始までの遅延時間（ミリ秒）
    loopInterval?: number; // ループの間隔（ミリ秒）
}

const LottieAnimationFooter: React.FC<Props> = ({ delay, loopInterval = 0 }) => {
    const containerRef = useRef(null);
    const [animation, setAnimation] = useState(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const anim = lottie.loadAnimation({
            container: containerRef.current,
            renderer: 'svg',
            loop: true,
            autoplay: false,
            path: '/animations/graffiti_footer_full.json'
        });

        setAnimation(anim);

        const timeoutId = setTimeout(() => {
            anim.play();
        }, delay);

        return () => clearTimeout(timeoutId);
    }, [containerRef]);

    useEffect(() => {
        if (animation) {
            animation.onLoopComplete = () => {
                if (loopInterval > 0) {
                    animation.stop();
                    setTimeout(() => {
                        animation.play();
                    }, loopInterval);
                }
            };
        }
    }, [animation, loopInterval]);
    

    return <div ref={containerRef}></div>;
};

export default LottieAnimationFooter;