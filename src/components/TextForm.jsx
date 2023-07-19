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

    const cleatTextClick = () =>{
        let newText = '';
        setText(newText);
        props.showTheAlert('Text cleared', 'warning')
    }

    const copyTextClick = ()=>{
        const inputElement = document.getElementById('textarea');
        const textToCopy = inputElement.value;
        navigator.clipboard.writeText(textToCopy)
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

 


    return (
    <div className="container mt-3" style={{color: props.mode === 'light' ? 'dark' : 'light'}}>
        <h3>{props.heading}</h3>
        <div className="mb-3">
        <textarea style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#212529', color: props.mode === 'light' ? 'black' : 'white'}} className="form-control" value={text} onChange={handleOnChange} id="textarea" rows="8"></textarea>
        <button className="btn btn-primary mt-3" onClick={upperCaseClick}>UPPERCASE</button>
        <button className="btn btn-primary mt-3 ms-2" onClick={lowerCaseClick}>LOWECASE</button>
        <button className="btn btn-primary mt-3 ms-2" onClick={cleatTextClick}>CLEAR TEXT</button>
        <button className="btn btn-primary mt-3 ms-2" onClick={copyTextClick}>COPY TEXT</button>
        <button className="btn btn-primary mt-3 ms-2" onClick={removeSpaceClick}>REMOVE SPACE</button>
    </div>  
    <div className="container-mt-5">
        <h4>Text Summary</h4>
        <p>{text.split(/\s/).length} Words and {text.length} Character</p>

        <h3>Preview your Text here</h3>
        <details>
            <summary>{text.length > 0 ? 'Preview' : 'Enter text to preview here'}</summary>
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
