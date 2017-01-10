import React, {Component, PropTypes} from 'react';

import codemirror from 'codemirror';
import 'codemirror/mode/gfm/gfm';
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/base16-light.css'

class Editor extends Component {
  componentDidMount() {
    this.editor = codemirror.fromTextArea(this.refs.editor, {
      forceTextArea: true,
      mode: 'gfm',
      lineNumbers: true,
      matchBrackets: true,
      lineWrapping: true,
      tabSize: 2
    });
    this.editor.on('change', this.handleChange)
  }

  handleChange = () => {
    this.props.handleChange(this.editor.getValue())
  }

  render() {
    let editor = <textarea ref='editor' defaultValue={this.props.textarea}></textarea>;

    return (
      <div>
        {editor}
      </div>
    );
  }

  static propTypes = {
    textarea: PropTypes.string
  }
}

export default Editor;
