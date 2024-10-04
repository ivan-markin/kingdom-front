'use client';

import * as process from 'process';

export function isDefined(): boolean {
    if (typeof window === 'undefined') {
        return false;
    }

    if (process.env.ENVIRONMENT !== 'production') {
        return false;
    }

    // @ts-ignore
    return typeof window['ym'] !== 'undefined';
}
