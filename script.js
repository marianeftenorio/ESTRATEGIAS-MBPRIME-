document.addEventListener('DOMContentLoaded', () => {
    Reveal.initialize({
        controls: true,
        progress: true,
        center: true,
        hash: true,
        transition: 'fade', // fade, slide, convex, concave, zoom
        transitionSpeed: 'slow',
        backgroundTransition: 'fade',
        
        // Auto-animate elements
        autoAnimateEasing: 'ease-out',
        autoAnimateDuration: 0.8,
        autoAnimateUnmatched: false,

        // Responsive scaling settings
        width: 1080,
        height: 720,
        margin: 0.1,
        minScale: 0.2,
        maxScale: 2.0,

        // Optional libraries
        dependencies: []
    });
});
