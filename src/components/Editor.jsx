import { useState } from "react"

const Editor = () => {
  const [content, setContent] = useState('')

  const handleTextAreaChange = (event) => {
    setContent(event.target.value)
  }

  return (
    <div className="wrapper">
      <h1>Markdown previewer</h1>
        <textarea 
        id='editor' 
        value={content}
        onChange={handleTextAreaChange}
        />

        <div className="previewer">
          <div id="preview">
            {content}
          </div>
        </div>
    </div>
  )
}

export default Editor