import { ITimerOptions } from "./ITimerOptions";

export interface ITimer {
    hour: number;
    minute: number;
    second: number;
    millisecond: number
    options?: ITimerOptions
}