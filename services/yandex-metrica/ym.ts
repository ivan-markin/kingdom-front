'use client';

import {isDefined} from './is-defined';

export function ym(action: string, param: any) {
  if (isDefined()) {
    // @ts-ignore
    window.ym(YM_COUNTER, action, param);
  }
}
