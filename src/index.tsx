import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { App } from './components/app';
import './styles/index.scss';

const domNode = document.getElementById('root') as HTMLElement;
const root = createRoot(domNode);

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
