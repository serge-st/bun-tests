/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root') as Element);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
