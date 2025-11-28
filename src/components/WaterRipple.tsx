import { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'jquery.ripples';

// Extend JQuery interface to include ripples method
declare global {
    interface JQuery {
        ripples(options?: any): JQuery;
    }
}

const WaterRipple = () => {
    const rippleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const $el = $(rippleRef.current!);

        const generateBackgroundImage = (isDark: boolean) => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            if (!ctx) return '';

            // Set canvas to window size for full coverage
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            if (isDark) {
                // Dark mode background
                // --background: 220 26% 6% -> hsl(220, 26%, 6%)
                ctx.fillStyle = 'hsl(220, 26%, 6%)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                // Dot pattern
                // radial-gradient(circle at 1px 1px, hsl(220 26% 18% / 0.4) 1px, transparent 0)
                // background-size: 40px 40px
                ctx.fillStyle = 'hsla(220, 26%, 18%, 0.4)';
                for (let x = 0; x < canvas.width; x += 40) {
                    for (let y = 0; y < canvas.height; y += 40) {
                        ctx.beginPath();
                        ctx.arc(x + 1, y + 1, 1, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }
            } else {
                // Light mode background
                // --background: 0 0% 100% -> white
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                // Grid pattern
                // linear-gradient(to right, hsl(214 32% 91% / 0.3) 1px, transparent 1px)
                // linear-gradient(to bottom, hsl(214 32% 91% / 0.3) 1px, transparent 1px)
                // background-size: 40px 40px
                ctx.strokeStyle = 'hsla(214, 32%, 91%, 0.3)';
                ctx.lineWidth = 1;

                for (let x = 0; x < canvas.width; x += 40) {
                    ctx.beginPath();
                    ctx.moveTo(x, 0);
                    ctx.lineTo(x, canvas.height);
                    ctx.stroke();
                }

                for (let y = 0; y < canvas.height; y += 40) {
                    ctx.beginPath();
                    ctx.moveTo(0, y);
                    ctx.lineTo(canvas.width, y);
                    ctx.stroke();
                }
            }

            return canvas.toDataURL();
        };

        const initRipples = () => {
            const isDark = document.documentElement.classList.contains('dark');
            const bgImage = generateBackgroundImage(isDark);

            // Destroy existing ripples if any
            try {
                $el.ripples('destroy');
            } catch (e) {
                // Ignore error if not initialized
            }

            // Set background image manually first to ensure it's visible
            if (rippleRef.current) {
                rippleRef.current.style.backgroundImage = `url(${bgImage})`;
            }

            // Initialize ripples
            $el.ripples({
                resolution: 256,
                perturbance: 0.01,
                imageUrl: bgImage, // Explicitly pass the image URL
            });
        };

        // Initial setup
        initRipples();

        // Observer for theme changes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    initRipples();
                }
            });
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class'],
        });

        // Handle resize
        let resizeTimeout: NodeJS.Timeout;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(initRipples, 200);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            observer.disconnect();
            window.removeEventListener('resize', handleResize);
            try {
                $el.ripples('destroy');
            } catch (e) {
                // Ignore
            }
        };
    }, []);

    return (
        <div
            ref={rippleRef}
            className="fixed inset-0 z-[-1] h-screen w-screen bg-cover bg-center pointer-events-none"
            style={{
                // Default fallback
                backgroundColor: 'var(--background)',
            }}
        />
    );
};

export default WaterRipple;
