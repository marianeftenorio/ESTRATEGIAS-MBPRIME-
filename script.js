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

        // Optional libraries
        dependencies: []
    });
});
