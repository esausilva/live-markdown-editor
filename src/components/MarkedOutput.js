import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import emojify from 'emojify.js';
import hljs from 'highlight.js';

import 'emojify.js/dist/css/basic/emojify.min.css';
import '../styles/hljs-github.css';

function MarkedOutput({ textarea }) {
  marked.setOptions({
    highlight: function(code) {
      return hljs.highlightAuto(code).value;
    },
  });

  // componentDidMount & componentDidUpdate
  useEffect(() => {
    emojis();
  });

  const emojis = () => {
    return emojify.run(document.getElementById('output'));
  };

  return (
    <div id="output" dangerouslySetInnerHTML={{ __html: marked(textarea) }} />
  );
}

MarkedOutput.propTypes = {
  textarea: PropTypes.string,
};

export default MarkedOutput;
