import '../styles/global.css'
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from "@/providers/theme-provider"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './providers/react-query';
import { MetaMaskContextProvider } from './providers/useMetaMask';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    <MetaMaskContextProvider>
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </React.StrictMode>
    </MetaMaskContextProvider>
  </ThemeProvider>
);