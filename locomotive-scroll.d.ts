declare module 'locomotive-scroll' {
  interface LocomotiveScrollOptions {
    el?: HTMLElement | null;
    name?: string;
    offset?: number | [number, number] | [string, string];
    repeat?: boolean;
    smooth?: boolean | number;
    smoothMobile?: boolean;
    smoothDesktop?: boolean;
    direction?: 'horizontal' | 'vertical';
    gestureDirection?: 'vertical' | 'horizontal' | 'both';
    tablet?: { smooth: boolean } | boolean;
    smartphone?: { smooth: boolean } | boolean;
    scrollbarClass?: string;
    scrollingClass?: string;
    draggingClass?: string;
    smoothClass?: string;
    initClass?: string;
    getSpeed?: boolean | number;
    getDirection?: boolean;
    resetNativeScroll?: boolean;
    lerp?: number;
    class?: string;
    initPosition?: { x: number; y: number };
    reloadOnContextChange?: boolean;
    firefoxMultiplier?: number;
    touchMultiplier?: number;
    multiplier?: number;
    // Mobile options
    mobile?: {
      smooth?: boolean;
      breakpoint?: number;
      getDirection?: boolean;
      getSpeed?: boolean;
    };
    // Other options
    inertia?: number;
    touchInertiaMultiplier?: number;
    // Add other options as needed
  }

  export default class LocomotiveScroll {
    constructor(options?: LocomotiveScrollOptions);
    init(): void;
    update(): void;
    start(): void;
    stop(): void;
    scrollTo(target: string | HTMLElement | number, options?: any): void;
    on(event: string, callback: Function): void;
    off(event: string, callback: Function): void;
    destroy(): void;
    // Adicione outros métodos conforme necessário
  }
}
