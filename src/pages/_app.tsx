import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material';
import { darkTheme } from '../core/styles/themes';
import UIProvider from '@core/store/context/ui/ui.context';


export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || (page => page)

  return (
    <ThemeProvider theme={darkTheme}>
      <UIProvider>
        {getLayout(<Component {...pageProps} />)}
      </UIProvider>
    </ThemeProvider>
  );
}
