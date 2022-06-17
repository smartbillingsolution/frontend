import './App.css';
import { observer } from 'mobx-react';
import { unstable_HistoryRouter as HistoryRouter }  from 'react-router-dom';
import { history } from './helpers/common';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import ErrorBoundary from './components/ErrorBoundaries';
import GlobalStyle from './styles/globalStyle';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <HistoryRouter history={history}>
        <ThemeProvider theme={theme}>
          <ErrorBoundary>
            <GlobalStyle />
              Hi mohit here           
            <ToastContainer
              position="bottom-right"
              autoClose={5000}
            />
          </ErrorBoundary>
        </ThemeProvider>
        </HistoryRouter>
  );
}

export default observer(App);
