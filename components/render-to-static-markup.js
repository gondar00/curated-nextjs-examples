import React from 'react'
import ReactDOMServer from 'react-dom/server'

export default function Noscript (props) {
  const staticMarkup = ReactDOMServer.renderToStaticMarkup(props.children)
  return <div dangerouslySetInnerHTML={{ __html: staticMarkup }} />
}
