import React from 'react';
import { useState } from 'react';

import Editor from './Editor';
import MarkedOutput from './MarkedOutput';
import { InitialTextValue } from '../utils/helpers';

import '../styles/ribbon.css';
import '../styles/App.css';

function App() {
  const [textarea, setTextarea] = useState(InitialTextValue());

  const handleChange = textarea => {
    setTextarea(textarea);
  };

  return (
    <div id="container">
      <div className="ribbon right red">
        <a href="https://github.com/esausilva/live-markdown-editor">
          Fork me on GitHub
        </a>
      </div>
      <Editor textarea={textarea} handleChange={handleChange} />
      <MarkedOutput textarea={textarea} />
    </div>
  );
}

export default App;
