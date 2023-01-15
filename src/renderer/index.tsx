/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(<App />);

window.electron.ipcRenderer.sendMessage('ipc-example', ['auctionPrice']);
