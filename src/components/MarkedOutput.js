import React, {Component, PropTypes} from 'react';
import marked from 'marked';

import emojify from 'emojify.js';
import 'emojify.js/dist/css/basic/emojify.min.css'

import  '../styles/hljs-github.css';
import hljs from 'highlight.js';

class MarkedOutput extends Component {
  emojis() {
    return emojify.run(document.getElementById('output'));
  }

  componentWillMount() {
    // set up marked
    marked.setOptions({
      highlight: function (code) {
        return hljs.highlightAuto(code).value;
      }
    });
  }

  componentDidMount() {
    this.emojis();
  }

  componentDidUpdate(prevProps, prevState) {
    this.emojis();
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
