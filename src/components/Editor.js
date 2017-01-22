import React, {Component, PropTypes} from 'react';

import codemirror from 'codemirror';
import 'codemirror/mode/gfm/gfm';
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/base16-light.css'

class Editor extends Component {
  handleInputFile = () => {
    const input = this.refFileInput;
    const file = input.files[0];
    const textType = /markdown/;

    if (file.type.match(textType)) {
      const reader = new FileReader();
      reader.onload = () => this.editor.setValue(reader.result);
      reader.readAsText(file);

      input.value = input.defaultValue;
    } else {
      alert('Invalid file type.\nOnly markdown files.');
      this.refFileInput.value = this.refFileInput.defaultValue;
    }
  }
  
  handleChange = () => {
    this.props.handleChange(this.editor.getValue())
  }

  componentDidMount() {
    this.editor = codemirror.fromTextArea(this.refEditor, {
      forceTextArea: true,
      mode: 'gfm',
      lineNumbers: true,
      matchBrackets: true,
      lineWrapping: true,
      tabSize: 2,
      allowDropFileTypes: ['text/markdown']
    });
    this.editor.on('change', this.handleChange);
  }

  render() {
    const editor = <textarea ref={textarea => this.refEditor = textarea} defaultValue={this.props.textarea}></textarea>;

    return (
      <div>
        <input type="file" ref={input => this.refFileInput = input} id='fileInput' onChange={this.handleInputFile} />
        <label htmlFor="fileInput"><figure><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/></svg></figure></label>
        {editor}
      </div>
    );
  }

  static propTypes = {
    textarea: PropTypes.string
  }
}

export default Editor;
