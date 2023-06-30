import Home from '@/app/page';
import { weatherDataMock } from '../mocks/weatherDataMock';
import { locationDataMock } from '../mocks/locationDataMock';
import userEvent from '@testing-library/user-event';
import { render, screen } from '../utils/customRender';

describe('Testing  Front-Page', () => {
    const user = userEvent.setup();

    beforeEach(() => {
        jest.clearAllMocks();
        jest.restoreAllMocks();

        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: jest.fn().mockImplementation((query) => ({
                matches: false,
                media: query,
                onchange: null,
                addListener: jest.fn(), // Deprecated
                removeListener: jest.fn(), // Deprecated
                addEventListener: jest.fn(),
                removeEventListener: jest.fn(),
                dispatchEvent: jest.fn(),
            })),
        });

        global.fetch = jest.fn().mockImplementation((url) => {
            if (url.includes('api.open-meteo.com')) {
                return Promise.resolve({ ok: true, json: () => Promise.resolve(weatherDataMock) });
            }
            if (url.includes('nominatim.openstreetmap.org')) {
                return Promise.resolve({ ok: true, json: () => Promise.resolve(locationDataMock) });
            }
        });
    });

    it('should render the page', async () => {
        render(await Home());

        expect(await screen.findByRole('main')).toBeInTheDocument();
        expect(screen.getByRole('checkbox', { name: 'Light mode' })).toBeInTheDocument();
        expect(screen.getByTestId('temp')).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: locationDataMock.address.city })).toBeInTheDocument();
    });

    it('should toggle the dark mode', async () => {
        render(await Home());

        expect(await screen.findByRole('checkbox', { name: 'Light mode' })).toBeInTheDocument();
        const toggle = screen.getByRole('checkbox', { name: 'Light mode' });

        await user.click(toggle);

        expect(screen.getByRole('checkbox', { name: 'Dark mode' })).toBeInTheDocument();
    });
});
