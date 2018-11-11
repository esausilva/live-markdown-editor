import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import codemirror from 'codemirror';
import 'codemirror/mode/gfm/gfm';

import { matchMarkdown } from '../utils/helpers';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/base16-light.css';

function Editor({ textarea, handleChange }) {
  const fileEl = useRef(null);
  const editorEl = useRef();

  let editor = <textarea ref={editorEl} defaultValue={textarea} />;

  // componentDidMount
  useEffect(
    () => {
      // code mirror setup
      editor = codemirror.fromTextArea(editorEl.current, {
        forceTextArea: true,
        mode: 'gfm',
        lineNumbers: true,
        matchBrackets: true,
        lineWrapping: true,
        tabSize: 2,
      });
      editor.on('change', () => handleChange(editor.getValue()));

      // empty editor
      window.addEventListener('keyup', handleEmptyEditor);

      // clean up
      return () => {
        window.removeEventListener('keyup', handleEmptyEditor);
      };
    },
    [editorEl],
  );

  // stopped working after Hooks rewrite.
  // editor is coming in as a plain React component as opposed
  // to a Codemirror instance, so 'editor.setValue' is undefined
  const handleInputFile = () => {
    const input = fileEl.current;
    const file = input.files[0];
    const isMarkdown = matchMarkdown(file);

    if (isMarkdown) {
      const reader = new FileReader();
      reader.onload = () => editor.setValue(reader.result);
      reader.readAsText(file);

      input.value = input.defaultValue;
    } else {
      alert('Invalid file type.\nOnly markdown files.');
      fileEl.current.value = fileEl.current.defaultValue;
    }
  };

  const handleEmptyEditor = e => {
    // keyCode 69 = e
    if (e.ctrlKey && e.shiftKey && e.keyCode === 69) {
      e.preventDefault();
      e.stopPropagation();

      editor.setValue('');
    }
  };

  return (
    <div>
      <input
        type="file"
        ref={fileEl}
        id="fileInput"
        onChange={handleInputFile}
        disabled
      />
      <label htmlFor="fileInput">
        <figure>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="17"
            viewBox="0 0 20 17"
          >
            <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z" />
          </svg>
        </figure>
      </label>
      {editor}
    </div>
  );
}

Editor.propTypes = {
  textarea: PropTypes.string,
};

export default Editor;
