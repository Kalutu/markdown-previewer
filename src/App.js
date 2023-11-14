import React from 'react';
import { marked } from 'marked';
import Preview from './Components/Preview';
import './style.css';

export default function App() {
    const [text, setText] = React.useState("# Header\n## Sub header\nThis is a [link](https://example.com)\nHere is some inline `code`.\n```\ncode block\n```\n- List item 1\n- List item 2\n\n> This is a blockquote.\n\n![Image](https://example.com/image.jpg)\n\n**This text is bolded.**");

    const renderer = new marked.Renderer();

    React.useEffect(() => {
        marked.setOptions({
            breaks: true
        });
    }, [text]);


    return (
       <div className="text-center px-4">
            <h1 className="p-2">Markdown Previewer</h1>
            <textarea name="text" id="editor" rows="10" value={text} className="textarea" onChange={(e) => setText(e.target.value)}></textarea>
            <h2 className="m-3">Output</h2>
            <div className="preview-container">
                <Preview markdown={text} renderer={renderer}/>
            </div>
       </div>
    );
}
