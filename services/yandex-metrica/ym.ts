'use client';

import {isDefined} from './is-defined';

export function ym(action: string, param: any, args = {}){
  if (isDefined()) {
    // @ts-ignore
    window.ym(98465702, action, param, args)
  }
}