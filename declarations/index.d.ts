/// <reference types="node" />
import { EventEmitter } from 'events';
export declare class Peripheral extends EventEmitter {
    alive: boolean;
    pins: Array<number>;
    constructor(pins: string | number | Array<string | number>);
    destroy(): void;
    validateAlive(): void;
}
