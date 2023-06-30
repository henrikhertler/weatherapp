import React from 'react';
import { render, RenderOptions, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const Providers = ({ children }: any) => {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

const customRender = async (ui: React.ReactElement, options: RenderOptions = {}) => {
    await waitFor(() => render(ui, { wrapper: Providers, ...options }));
};

export * from '@testing-library/react';
export { customRender as render };
