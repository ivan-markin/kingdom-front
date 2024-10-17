'use client';
import {YM_COUNTER} from '@/constants/ymCounter';

export function ym(action: string, param: any) {
  if (typeof window === 'undefined') {
    return;
  }

  // @ts-ignore
  window.ym(YM_COUNTER, action, param);
}
