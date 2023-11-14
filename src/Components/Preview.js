import { marked } from 'marked';

export default function Preview({ markdown, renderer }) {
    const html = marked(markdown, { renderer: renderer });
    return (
        <div
            dangerouslySetInnerHTML={{
                __html: html,
            }}
        ></div>
    );
}