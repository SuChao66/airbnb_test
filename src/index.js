import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// 导入根组件
import App from '@/App';
// 导入样式文件
import 'antd/dist/reset.css';
import "normalize.css";
import '@/assets/css/index.less';

// store
import store from './store';
// theme
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './assets/theme';

// craco => create-react-app config
// 配置项目的别名
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={lightTheme}>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </Provider >
);
