import React from 'react'

const Form = (props) => {
    return (
        <form id="application-input">
            <label>Apply Here: </label>
            <textarea id="application-text" rows="8" cols="100" onChange={props.changed}></textarea>
            <input id="submit" type="submit" value="Submit" />
        </form>
    )
}

export default Form