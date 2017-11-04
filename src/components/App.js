import React, { Component } from 'react';

import Editor from './Editor';
import MarkedOutput from './MarkedOutput';
import { InitialTextValue } from '../utils/helpers';

import '../styles/ribbon.css';
import '../styles/App.css';

class App extends Component {
  state = {
    textarea: ''
  };

  componentWillMount() {
    this.setState({ textarea: InitialTextValue() });
  }

  handleChange = textarea => {
    this.setState({ textarea });
  };

  render() {
    return (
      <div id="container">
        <div className="ribbon right red">
          <a href="https://github.com/esausilva/live-markdown-editor">
            Fork me on GitHub
          </a>
        </div>
        <Editor
          textarea={this.state.textarea}
          handleChange={this.handleChange}
        />
        <MarkedOutput textarea={this.state.textarea} />
      </div>
    );
  }
}

export default App;
