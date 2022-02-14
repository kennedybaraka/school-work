import "../assets/sass/main.scss";
import type { AppProps } from "next/app";
import Layout from "../sections/Layout";
import { store, persistor } from "../redux/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "next-themes";
import { PersistGate } from "redux-persist/integration/react";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider enableSystem={true} attribute="class">
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
