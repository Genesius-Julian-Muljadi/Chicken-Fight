export function Wobble(id: string): void {
    const element = document.getElementById(id);
    if (element == null) {
        console.log('element input null');
        return;
    };
    element.style.animation = 'wobble 0.8s ease 0s 1 normal forwards';
};

export function SwingInBottom(id: string): void {
    const element = document.getElementById(id);
    if (element == null) {
        console.log('element input null');
        return;
    };
    element.style.animation = 'swingInBottom 0.8s ease 0s 1 normal forwards';
};

export function DoublePulse(id: string): void {
    const element = document.getElementById(id);
    if (element == null) {
        console.log('element input null');
        return;
    };
    element.style.animation = 'doublePulse 0.4s ease 0s 2 normal forwards';
};

export function AnimReset(id: string): void {
    const element = document.getElementById(id);
    if (element == null) {
        console.log('element input null');
        return;
    };
    element.style.animation = '';
}

export function WobbleRight(id: string): void {
    const element = document.getElementById(id);
    if (element == null) {
        console.log('element input null');
        return;
    };
    element.style.animation = 'wobbleRight 0.8s ease 0s 1 normal forwards';
};