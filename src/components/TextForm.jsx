import PropTypes from 'prop-types'
import {useState} from 'react'

export default function TextForm(props){

const [text, setText] = useState('');

    const upperCaseClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showTheAlert('Converted to uppercase', 'success')
    }

    const lowerCaseClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showTheAlert('Converted to lowercase', 'success')

    }

    const clearTextClick = () =>{
        let newText = '';
        setText(newText);
        props.showTheAlert('Text cleared', 'warning')
    }

    const copyTextClick = ()=>{
        navigator.clipboard.writeText(text)
        props.showTheAlert('Text copied', 'success')
   }

   const removeSpaceClick = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
    props.showTheAlert('Extra space removed', 'primary')
   }

    const handleOnChange = (event)=>{
        let newText = ''
        setText(newText + event.target.value);
    }

    const characterCount = text.replace(/\s/g, '').length
    const wordCounter = text.split(/\s+/).filter((element) =>{return element.length !== 0}).length
 


    return (
    <div className="container mt-3" style={{color: props.mode === 'light' ? 'dark' : 'light'}}>
        <h3>{props.heading}</h3>
        <div className="mb-3">
        <textarea style={{backgroundColor: props.mode === 'dark' ? '#212529' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} className="form-control" value={text} onChange={handleOnChange} id="textarea" rows="8"></textarea>
        <button disabled={text.length===0} className="btn btn-primary mt-3" onClick={upperCaseClick}>UPPERCASE</button>
        <button disabled={text.length===0} className="btn btn-primary mt-3 ms-2" onClick={lowerCaseClick}>LOWECASE</button>
        <button disabled={text.length===0} className="btn btn-primary mt-3 ms-2" onClick={clearTextClick}>CLEAR TEXT</button>
        <button disabled={text.length===0} className="btn btn-primary mt-3 ms-2" onClick={copyTextClick}>COPY TEXT</button>
        <button disabled={text.length===0} className="btn btn-primary mt-3 ms-2" onClick={removeSpaceClick}>REMOVE SPACE</button>
    </div>  
    <div className="container-mt-5">
        <h4>Text Summary</h4>
        <p>{wordCounter} Words and {characterCount} Character</p>

        <h3>Preview your Text here</h3>
        <details>
            <summary>{text.length > 0 ? 'Preview' : 'Nothing to preview'}</summary>
            <p>{text}</p>
        </details>
    </div>
</div>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string,
    mode: PropTypes.string,
    showTheAlert: PropTypes.func
}
