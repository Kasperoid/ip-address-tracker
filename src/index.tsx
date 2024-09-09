import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'normalize.css';
import './styles/header/header.css';
import './styles/main/main.css';
import './styles/infoCard/infoCard.css';
import { ConfigProvider } from 'antd';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          fontFamily: '"Rubik", sans-serif',
        },
        components: {
          Button: {
            colorPrimary: '#000',
            algorithm: true,
          },
          Input: {
            colorPrimary: 'hsl(0, 0%, 59%)',
            algorithm: true,
          },
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
