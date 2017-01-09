export function InitialTextValue () {
  return `# Live Markdown Editor

> Responsive GitHub flavored markdown editor built with [React.js](https://facebook.github.io/react/)

You can use this editor to preview your markdown files before committing to GitHub.

Take a look at this project's [repo](https://github.com/esausilva/live-markdown-editor).
 
### Code samples

JavaScript

\`\`\`js
function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}
\`\`\`

CSS

\`\`\`css
html { 
    height: 100%;
    box-sizing: border-box;
    font-size: 100%;
}
*, *:before, *:after {
    box-sizing: inherit;
}
\`\`\`

HTML

\`\`\`html
<div>
    <h1>Hello World</h1>
</div>
\`\`\`

## Projects Used

 * [CodeMirror](https://codemirror.net/) - The code editor
 * [marked](https://github.com/chjj/marked) - The markdown parser
 * [highlight.js](https://highlightjs.org/) - The syntax highlighter in the markdown output

## (Possible) Future Enhancements

_In no particular order_

 * Download markdown file by pressing **Ctrl+m** or **Cmd+m**
 * Drag and drop markdown file to editor
 * Emojis support

## License

MIT © 2017 Esau Silva
`;
}
