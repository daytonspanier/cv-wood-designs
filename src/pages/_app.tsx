import Layout from "@/components/Layout";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {

  const theme = createTheme({

  })

  return (
    <ThemeProvider theme={theme}>
    <Layout>
      <React.Fragment>
        <CssBaseline />
        <Component {...pageProps} />
      </React.Fragment>
    </Layout>
    </ThemeProvider>
  );
}
