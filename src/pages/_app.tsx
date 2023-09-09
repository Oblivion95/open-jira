import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "../core/styles/themes";
import UIProvider from "@core/store/context/ui/ui.context";
import { EntriesProvider } from "@core/store/context/entries/entries";
import { Provider } from "react-redux";
import { store } from "@core/model";

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <EntriesProvider>
      <ThemeProvider theme={darkTheme}>
        <UIProvider>
          <Provider store={store}>
            <CssBaseline />
            {getLayout(<Component {...pageProps} />)}
          </Provider>
        </UIProvider>
      </ThemeProvider>
    </EntriesProvider>
  );
}
