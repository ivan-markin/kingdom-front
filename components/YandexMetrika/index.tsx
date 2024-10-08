'use client'

import Script from 'next/script'
import {Suspense, useEffect, useRef} from 'react';
import {hit} from '@/services/yandex-metrica/hit';
import {usePathname, useSearchParams} from 'next/navigation';
import {isClient, sleep} from '@/helpers/helpers';
import {useMounted} from '@/hooks/use-mounted';
import Image from 'next/image';

export function YandexMetrika() {
    return (
        <>
            {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
            <Script
                id="yandex-metrika-counter"
                type="text/javascript"
                dangerouslySetInnerHTML={{
                    __html: `
                        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                         m[i].l=1*new Date();
                         for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                         k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                         (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                      
                         ym(98465702, "init", {
                              clickmap:true,
                              trackLinks:true,
                              accurateTrackBounce:true,
                              webvisor:true
                         });
                    `,
                }}
            />
            <noscript id="yandex-metrica-pixel">
                <Image
                    height="1"
                    width="1"
                    style={{ display: 'none' }}
                    src="https://mc.yandex.ru/watch/98465702"
                    alt=""
                />
            </noscript>

            <Suspense>
                <Hit />
            </Suspense>
        </>
    )
}

function Hit() {
    const pathName = usePathname();
    const searchParams = useSearchParams();
    const mounted = useMounted();
    const isFirstTimeHandleRef = useRef(false);

    useEffect(() => {
        if (!isClient() || !mounted) {
            return;
        }

        const handler = async () => {
            if (!isFirstTimeHandleRef.current) {
                // wait for yandex metrika loaded
                await sleep(2000);
                isFirstTimeHandleRef.current = true;
            }

            hit(window.location.href);
        }

        handler();
    }, [pathName, searchParams, mounted]);

    return null;
}
