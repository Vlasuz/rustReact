import React, {useEffect} from 'react'

interface IConfettiFireworksProps {
    timeToEnd?: number
}

export const ConfettiFireworks: React.FC<IConfettiFireworksProps> = ({timeToEnd}) => {

    const time = timeToEnd ?? 1.5;
    const duration = time * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: any, max: any) {
        return Math.random() * (max - min) + min;
    }

    const interval: any = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        // since particles fall down, start a bit higher than random
        // @ts-ignore
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        // @ts-ignore
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    return (
        <div />
    )
}
