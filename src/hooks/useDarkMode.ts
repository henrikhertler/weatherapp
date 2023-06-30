// copied over from:
// https://github.com/craig1123/react-recipes/blob/master/src/useDarkMode.js

import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';
import useMedia from './useMedia';

// Hook
export default function useDarkMode(): [boolean, (darkMode: boolean) => void] {
    // Use our useLocalStorage hook to persist state through a page refresh.
    const [enabledState, setEnabledState] = useLocalStorage('dark-mode-enabled');

    // See if user has set a browser or OS preference for dark mode.
    const prefersDarkMode = useMedia(['(prefers-color-scheme: dark)'], [true], false);

    // If enabledState is defined use it, otherwise fallback to prefersDarkMode.
    // This allows user to override OS level setting on our website.
    const enabled = typeof enabledState !== 'undefined' ? enabledState : prefersDarkMode;

    // Fire off effect that add/removes dark mode class
    useEffect(() => {
        const className = 'dark';
        const element = window.document.body;
        if (enabled) {
            element.classList.add(className);
        } else {
            element.classList.remove(className);
        }
    }, [enabled]);

    return [enabled, setEnabledState];
}
