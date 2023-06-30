'use client';
import { useState } from 'react';

export function DarkModeToggle() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = (checked: boolean) => {
        setDarkMode(checked);
        localStorage.setItem('darkMode', JSON.stringify(checked));
        if (checked) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    return (
        <div className={'absolute top-2 right-0 mr-3'}>
            <label className='relative inline-flex items-center mb-5 cursor-pointer'>
                <input
                    type='checkbox'
                    value=''
                    className='sr-only peer'
                    onChange={(e) => toggleDarkMode(e.target.checked)}
                />
                <div className="w-9 h-5 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className='ml-3 text-sm font-light text-slate-600 dark:text-gray-300'>
                    {darkMode ? 'Dark mode' : 'Light mode'}
                </span>
            </label>
        </div>
    );
}
