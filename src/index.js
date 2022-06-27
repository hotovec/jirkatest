import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


import { LanguageProvider, ThemeProvider } from '@george-labs.com/design-system';
import 'react-dates/lib/css/_datepicker.css'; // Optional if you want to use DateInput/DateRangeInput
import '@george-labs.com/design-system/dist/bootstrap.min.css';
import '@george-labs.com/design-system/dist/gds-main.min.css'; // or gds-store.min.css
import '@george-labs.com/design-system/dist/gds-components.min.css';

ReactDOM.render(
   <React.StrictMode>
    <ThemeProvider theme={ThemeProvider.THEME.BS4}>
     <App />
    </ThemeProvider>
   </React.StrictMode>,
   document.getElementById('root')
 );