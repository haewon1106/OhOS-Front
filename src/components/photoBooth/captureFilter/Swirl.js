export default function Swirl(ctx, video, canvas, width, height){
    canvas.style.filter = "url('#swirlFilter')";
    ctx.drawImage(video.video, 0, 0, width, height);

    return (
        <svg style={{ display: 'none' }}>
            <defs>
            <filter id="swirlFilter" x="0" y="0" width="100%" height="100%">
                <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="10" result="turbulence"/>
                <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="40" />
            </filter>
            <filter id="erode">
                <feMorphology operator="erode" radius="2"></feMorphology>
            </filter>
            </defs>
        </svg>
    )
}