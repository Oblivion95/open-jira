import type { AppProps } from 'next/app'
import { ThemeProvider, createTheme } from '@mui/material';
import { lightTheme } from '../core/styles/themes';


export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || (page => page)

  return (
    <ThemeProvider theme={lightTheme}>
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}
