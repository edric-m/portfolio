import type { AppProps } from 'next/app';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiListItemIcon: {
      defaultProps: {
        sx: {
          paddingLeft: '20px',
          minWidth: '30px',
        }}
    }
  }
});
 
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>);
}
