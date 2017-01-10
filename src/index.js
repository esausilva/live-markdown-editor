import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import MarkdownEditor from './components/MarkdownEditor';

// Remove next two lines after cloning ====
import {GoogleAnalytics} from './GoogleAnalytics';
GoogleAnalytics();
// ========================================

ReactDOM.render(
  <MarkdownEditor />,
  document.getElementById('root')
);
