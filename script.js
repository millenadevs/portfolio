const canvas = document.getElementById('fluid');

if (!(canvas instanceof HTMLCanvasElement)) {
    throw new Error('O canvas #fluid não foi encontrado.');
}

const config = {
    TRIGGER: 'hover',
    IMMEDIATE: true,
    AUTO: false,
    SIM_RESOLUTION: 128,
    DYE_RESOLUTION: 1024,
    DENSITY_DISSIPATION: 2.5,
    VELOCITY_DISSIPATION: 0.8,
    PRESSURE: 0.4,
    PRESSURE_ITERATIONS: 20,
    CURL: 20,
    SPLAT_RADIUS: 0.15,
    SPLAT_FORCE: 9000,
    SHADING: true,
    COLORFUL: false,
    SPLAT_COLOR: { r: 0.03, g: 0.2, b: 0.9 },
    BLOOM: false,
    COLOR_UPDATE_SPEED: 10,
    PAUSED: false,
    BACK_COLOR: { r: 0, g: 0, b: 0 },
    TRANSPARENT: true,
};

if (typeof WebGLFluid !== 'function') {
    throw new Error('A biblioteca WebGL Fluid não foi carregada.');
}

WebGLFluid(canvas, config);

document.addEventListener('pointermove', ({ clientX, clientY }) => {
    canvas.dispatchEvent(new MouseEvent('mousemove', { clientX, clientY }));
});