import{o as e,a as t,i as l}from"./app.b3f52e3a.js";const r='{"title":"Methods","description":"","frontmatter":{},"headers":[{"level":2,"title":"getEditor()","slug":"geteditor"},{"level":2,"title":"getToolbar()","slug":"gettoolbar"},{"level":2,"title":"getQuill()","slug":"getquill"},{"level":2,"title":"getContents(index, length)","slug":"getcontents-index-length"},{"level":2,"title":"setContents(content, source)","slug":"setcontents-content-source"},{"level":2,"title":"getHTML()","slug":"gethtml"},{"level":2,"title":"setHTML(html)","slug":"sethtml-html"},{"level":2,"title":"pasteHTML(html, source)","slug":"pastehtml-html-source"},{"level":2,"title":"getText(index, length)","slug":"gettext-index-length"},{"level":2,"title":"setText(text)","slug":"settext-text"}],"relativePath":"api/methods.md","lastUpdated":1621554745871}',o={},n=l('<h1 id="methods"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h1><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>We highly recommend to call method when the quill editor ready, use @ready event</p></div><h2 id="geteditor"><a class="header-anchor" href="#geteditor" aria-hidden="true">#</a> getEditor()</h2><ul><li><p><strong>Return:</strong> <code>editor: Element</code></p><p>Returns the Editor Element.</p></li></ul><h2 id="gettoolbar"><a class="header-anchor" href="#gettoolbar" aria-hidden="true">#</a> getToolbar()</h2><ul><li><p><strong>Return:</strong> <code>toolbar: Element</code></p><p>Returns the Toolbar Element.</p></li></ul><h2 id="getquill"><a class="header-anchor" href="#getquill" aria-hidden="true">#</a> getQuill()</h2><ul><li><p><strong>Return:</strong> <code>quill: Quill</code></p><p>Returns the Quill instance that backs the editor. While you can freely use this to access methods such as <code>getText()</code>, <code>focus()</code>, and much <a href="https://quilljs.com/docs/api/" target="_blank" rel="noopener noreferrer">more</a>.</p></li></ul><h2 id="getcontents-index-length"><a class="header-anchor" href="#getcontents-index-length" aria-hidden="true">#</a> getContents(index, length)</h2><ul><li><p><strong>Parameter:</strong> <code>index?: number, length?: number</code></p></li><li><p><strong>Return:</strong> <code>content: string | Delta</code></p><p>Returns the contents of the editor.</p></li></ul><h2 id="setcontents-content-source"><a class="header-anchor" href="#setcontents-content-source" aria-hidden="true">#</a> setContents(content, source)</h2><ul><li><p><strong>Parameter:</strong> <code>content: string | Delta, source: &#39;api&#39; | &#39;user&#39; | &#39;silent&#39;</code></p><p>To set the contents of the editor.</p></li></ul><h2 id="gethtml"><a class="header-anchor" href="#gethtml" aria-hidden="true">#</a> getHTML()</h2><ul><li><p><strong>Return:</strong> <code>html: string</code></p><p>Returns the full HTML contents of the editor.</p></li></ul><h2 id="sethtml-html"><a class="header-anchor" href="#sethtml-html" aria-hidden="true">#</a> setHTML(html)</h2><ul><li><p><strong>Parameter:</strong> <code>html: string</code></p><p>To set the HTML contents of the editor.</p></li></ul><h2 id="pastehtml-html-source"><a class="header-anchor" href="#pastehtml-html-source" aria-hidden="true">#</a> pasteHTML(html, source)</h2><ul><li><p><strong>Parameter:</strong> <code>html: string, source: &#39;api&#39; | &#39;user&#39; | &#39;silent&#39;</code></p><p>To import raw HTML from a non-Quill environment.</p></li></ul><h2 id="gettext-index-length"><a class="header-anchor" href="#gettext-index-length" aria-hidden="true">#</a> getText(index, length)</h2><ul><li><p><strong>Parameter:</strong> <code>index?: number, length?: number</code></p></li><li><p><strong>Return:</strong> <code>text: string</code></p><p>Returns the full text contents of the editor.</p></li></ul><h2 id="settext-text"><a class="header-anchor" href="#settext-text" aria-hidden="true">#</a> setText(text)</h2><ul><li><p><strong>Parameter:</strong> <code>text: string, source: &#39;api&#39; | &#39;user&#39; | &#39;silent&#39;</code></p><p>To set the text contents of the editor.</p></li></ul>',22);o.render=function(l,r,o,s,a,i){return e(),t("div",null,[n])};export default o;export{r as __pageData};
