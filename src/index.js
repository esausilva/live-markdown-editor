import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';

import './utils/GoogleAnalytics'; // Remove after cloning
import './utils/DownloadMarkdownFile';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
