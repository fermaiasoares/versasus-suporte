import GlobalStyle from './styles/global'

import { initializeFireBase } from './services/Firebase';
import { AppProvider } from './hooks/index';
import { AppRoutes } from './routes';
import { HashRouter } from 'react-router-dom';

export function App() {
  initializeFireBase();

  return (
    <>
      <HashRouter>
        <AppProvider>
          <AppRoutes />
          <GlobalStyle />
        </AppProvider>
      </HashRouter>
    </>
  )
}