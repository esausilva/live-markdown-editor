export function InitialTextValue () {
  return `# Live Markdown Editor

> Responsive GitHub flavored markdown editor built with [React.js](https://facebook.github.io/react/)

You can use this editor to preview your markdown files before committing to GitHub.

Take a look at this project's [repo](https://github.com/esausilva/live-markdown-editor).
 
## Useful Info

 * Download the markdown file by pressing **Ctrl+m**
 * Empty editor window by pressing **Ctrl+Shift+e**
 * [Emojis](http://www.webpagefx.com/tools/emoji-cheat-sheet/) are cool :thumbsup: :poop: :sunny: :alien:
 * Drag and Drop a markdown file to editor
 * Click on this icon ![UploadMd](http://i.imgur.com/7kCSgpzt.jpg) on the bottom left corner to browse and open a markdown file

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

### Tables

| Tables   |      Are      |  Cool |
|----------|:-------------:|------:|
| col 1 is |  left-aligned | $1600 |
| col 2 is |    centered   |   $12 |
| col 3 is | right-aligned |    $1 |

## Projects Used

 * [CodeMirror](https://codemirror.net/) - The code editor
 * [marked](https://github.com/chjj/marked) - The markdown parser
 * [highlight.js](https://highlightjs.org/) - The syntax highlighter in the markdown output
 * [emojify.js](http://hassankhan.me/emojify.js/) - Emoji support

## License

MIT © 2017 Esau Silva
`;
}

export function matchMarkdown (file) {
    const textType = /markdown/;
    // strange, in Windows 'file.type' yeilds empty string
    // so going with file extension if 'file.type' is empty
    const fileName = file.name.split('.');
    const fileExtension = fileName[fileName.length-1];
    const markdownExtensions = ['markdown','mdown','mkdn','mkd','md','mdwn','mdtxt','mdtext','text','Rmd'];
    const isExtMatch = markdownExtensions.some(ext => ext.match(new RegExp(`^${fileExtension}$`,'i')));

    if (file.type.match(textType) || isExtMatch) {
        return true;
    }

    return false;
}
