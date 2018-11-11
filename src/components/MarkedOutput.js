import React, { Component } from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import emojify from 'emojify.js';
import hljs from 'highlight.js';

import 'emojify.js/dist/css/basic/emojify.min.css';
import '../styles/hljs-github.css';

class MarkedOutput extends Component {
  static propTypes = {
    textarea: PropTypes.string,
  };

  emojis() {
    return emojify.run(document.getElementById('output'));
  }

  componentWillMount() {
    // set up marked
    marked.setOptions({
      highlight: function(code) {
        return hljs.highlightAuto(code).value;
      },
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
      <div
        id="output"
        dangerouslySetInnerHTML={{ __html: marked(this.props.textarea) }}
      />
    );
  }
}

export default MarkedOutput;
