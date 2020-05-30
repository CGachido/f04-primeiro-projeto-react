import React from 'react';
import { BrowserRouter } from 'react-router-dom';

/**
 * BrowserRouter
 *    Acessível pela URL
 *      /contato /catalogo
 * Switch evita exibir todas as rotas ao mesmo tempo
 * garante a exibição de apenas uma rota
 */

import GlobalStyle from './styles/global';
import Routes from './routes';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
