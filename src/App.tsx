import GlobalStyle from './styles/global'
import { HashRouter } from 'react-router-dom';

import { initializeFireBase } from './services/Firebase';
import { AppProvider } from './hooks/index';
import { AppRoutes } from './routes';

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