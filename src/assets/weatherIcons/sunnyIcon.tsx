import { FunctionComponent } from 'react';

export const SunnyIcon: FunctionComponent<{}> = ({}) => (
    <svg width='225' height='225' viewBox='0 0 260 193' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <g filter='url(#filter0_f_3_1610)'>
            <circle cx='129.871' cy='62.6262' r='29.7942' fill='#FFC701' fillOpacity='0.35' />
        </g>
        <circle
            cx='129.871'
            cy='63.603'
            r='27.8173'
            fill='url(#paint0_linear_3_1610)'
            stroke='url(#paint1_linear_3_1610)'
            strokeWidth='2'
        />
        <mask
            id='mask0_3_1610'
            //style='mask-type:alpha'
            maskUnits='userSpaceOnUse'
            x='101'
            y='51'
            width='58'
            height='42'>
            <path
                d='M158.688 63.6031C158.688 79.5185 145.786 92.4204 129.871 92.4204C113.956 92.4204 101.054 79.5185 101.054 63.6031C101.054 47.6877 111.758 51.3924 127.673 51.3924C143.589 51.3924 158.688 47.6877 158.688 63.6031Z'
                fill='url(#paint2_linear_3_1610)'
            />
        </mask>
        <g mask='url(#mask0_3_1610)'>
            <g filter='url(#filter1_f_3_1610)'>
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M173.83 116.354C173.83 127.953 164.427 137.356 152.827 137.356C152.746 137.356 152.664 137.356 152.583 137.355V137.356H78.8303L78.831 137.355C78.7494 137.356 78.6677 137.356 78.5859 137.356C66.9866 137.356 57.5835 127.953 57.5835 116.354C57.5835 104.755 66.9866 95.3515 78.5859 95.3515C88.5841 95.3515 96.9506 102.338 99.0698 111.695L106.182 102.678L128.406 95.3511H152.583V95.3525C152.664 95.3515 152.746 95.3511 152.827 95.3511C164.427 95.3511 173.83 104.754 173.83 116.354Z'
                    fill='#E18700'
                />
            </g>
        </g>
        <defs>
            <filter
                id='filter0_f_3_1610'
                x='0.0766602'
                y='-67.168'
                width='259.588'
                height='259.588'
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'>
                <feFlood floodOpacity='0' result='BackgroundImageFix' />
                <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
                <feGaussianBlur stdDeviation='50' result='effect1_foregroundBlur_3_1610' />
            </filter>
            <filter
                id='filter1_f_3_1610'
                x='43.5835'
                y='81.3511'
                width='144.246'
                height='70.0054'
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'>
                <feFlood floodOpacity='0' result='BackgroundImageFix' />
                <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
                <feGaussianBlur stdDeviation='7' result='effect1_foregroundBlur_3_1610' />
            </filter>
            <linearGradient
                id='paint0_linear_3_1610'
                x1='129.871'
                y1='34.7856'
                x2='129.871'
                y2='92.4203'
                gradientUnits='userSpaceOnUse'>
                <stop stopColor='#FFE600' />
                <stop offset='1' stopColor='#FF7A00' />
            </linearGradient>
            <linearGradient
                id='paint1_linear_3_1610'
                x1='129.871'
                y1='34.7856'
                x2='129.871'
                y2='92.4203'
                gradientUnits='userSpaceOnUse'>
                <stop stopColor='white' />
                <stop offset='1' stopColor='white' stopOpacity='0' />
            </linearGradient>
            <linearGradient
                id='paint2_linear_3_1610'
                x1='129.871'
                y1='34.7858'
                x2='129.871'
                y2='92.4204'
                gradientUnits='userSpaceOnUse'>
                <stop stopColor='#FFD600' />
                <stop offset='1' stopColor='#FF7A00' />
            </linearGradient>
        </defs>
    </svg>
);
