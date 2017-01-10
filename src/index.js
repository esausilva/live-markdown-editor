import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import MarkdownEditor from './components/MarkdownEditor';

import './GoogleAnalytics'; // Remove after cloning

ReactDOM.render(
  <MarkdownEditor />,
  document.getElementById('root')
);
