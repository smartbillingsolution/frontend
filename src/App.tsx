import './App.css';
import { observer } from "mobx-react-lite";
import { unstable_HistoryRouter as HistoryRouter }  from 'react-router-dom';
import { history } from './helpers/common';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import ErrorBoundary from './components/ErrorBoundaries';
import GlobalStyle from './styles/globalStyle';
import { ToastContainer } from 'react-toastify';



// state management solution
import AppContext from './stores/useStore';
import AppStore from './stores/appStore';
import AppApi from './apis/appApi';


// temp import
import Home from './views/Home'


const store = new AppStore();
const api = new AppApi(store);

const App = observer(() => {    
  return (
    <AppContext.Provider value={{ store, api }}>
    <HistoryRouter history={history}>
        <ThemeProvider theme={theme}>
          <ErrorBoundary>
            <GlobalStyle />
            <ToastContainer
              position="bottom-right"
              autoClose={5000}
            />

            <Home />
            
          </ErrorBoundary>
        </ThemeProvider>
        </HistoryRouter>
        </AppContext.Provider>
  );
});

export default App;
