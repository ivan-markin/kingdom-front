'use client';

import Script from 'next/script';
import {useEffect} from 'react';
import {usePathname, useSearchParams} from 'next/navigation';
import Image from 'next/image';
import {ym} from '@/services/yandex-metrica/ym';
import {YM_COUNTER} from '@/constants/ymCounter';

export function YandexMetrika() {
  const pathName = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    ym('hit', window.location.href);
  }, [pathName, searchParams]);

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
      <Script
        id='yandex-metrika-counter'
        type='text/javascript'
        dangerouslySetInnerHTML={{
          __html: `
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                    m[i].l=1*new Date();
                    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                
                    ym(${YM_COUNTER}, "init", {
                        defer: true,
                        clickmap: true,
                        trackLinks: true,
                        accurateTrackBounce: true                             
                    });
            `,
        }}
      />
      <noscript id='yandex-metrica-pixel'>
        <Image
          height='1'
          width='1'
          style={{display: 'none'}}
          src={`https://mc.yandex.ru/watch/${YM_COUNTER}`}
          alt=''
        />
      </noscript>
    </>
  );
}
