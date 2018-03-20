import React from 'react'

const Preview = (props) => {
    let previewClass = 'hidden'
    
    if (props.showPreview === true) { 
         previewClass = ''
    }
    if (props.showPreview === false) {
         previewClass = 'hidden'
    }

    return (
        <div>
            <p id="message">&nbsp;</p>
            <button id="preview-toggle" onClick={props.clicked}>Show Preview</button>
            <section id="application-preview" className={previewClass}>{props.text}</section>
        </div>
       
    )
}

export default Preview