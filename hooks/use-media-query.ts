import {useEffect, useLayoutEffect, useState} from 'react';

type UseMediaQueryOptions = {
    defaultValue?: boolean;
    initializeWithValue?: boolean;
};

const useIsomorphicLayoutEffect =
    typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const IS_SERVER = typeof window === 'undefined';

export function useMediaQuery(
    query: string,
    options?: boolean | UseMediaQueryOptions,
): boolean {
    // TODO: Refactor this code after the deprecated signature has been removed.
    const defaultValue =
        typeof options === 'boolean' ? options : options?.defaultValue ?? false;
    const initializeWithValue =
        typeof options === 'boolean'
            ? undefined
            : options?.initializeWithValue ?? undefined;

    const [matches, setMatches] = useState<boolean>(() => {
        if (initializeWithValue) {
            return getMatches(query);
        }
        return defaultValue;
    });

    const getMatches = (query: string): boolean => {
        if (IS_SERVER) {
            return defaultValue;
        }
        return window.matchMedia(query).matches;
    };

    /** Handles the change event of the media query. */
    function handleChange() {
        setMatches(getMatches(query));
    }

    useIsomorphicLayoutEffect(() => {
        const matchMedia = window.matchMedia(query);

        // Triggered at the first client-side load and if query changes
        handleChange();

        // Use deprecated `addListener` and `removeListener` to support Safari < 14 (#135)
        if (matchMedia.addListener) {
            matchMedia.addListener(handleChange);
        } else {
            matchMedia.addEventListener('change', handleChange);
        }

        return () => {
            if (matchMedia.removeListener) {
                matchMedia.removeListener(handleChange);
            } else {
                matchMedia.removeEventListener('change', handleChange);
            }
        };
    }, [query]);

    return matches;
}
