import React, {Component, PropTypes} from 'react';
import marked from 'marked';

import  '../styles/hljs-github.css';
import hljs from 'highlight.js';

class MarkedOutput extends Component {
  componentWillMount() {
    marked.setOptions({
      highlight: function (code) {
        return hljs.highlightAuto(code).value;
      }
    });
  }

  render() {
    return (
      <div id='output' dangerouslySetInnerHTML={{__html: marked(this.props.textarea)}} />
    );
  }

  static propTypes = {
    textarea: PropTypes.string
  }
}

export default MarkedOutput;
