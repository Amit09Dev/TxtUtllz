import PropTypes from 'prop-types'


export default function About(props){

let myStyle= {
    color: props.mode === 'dark' ? 'white' : 'black',
    backgroundColor: props.mode === 'dark' ? '#212529' : 'white',
}
    return (
        <div className="container mt-4 p-5" style={myStyle}>
            <h3>About Us</h3>
          <div className="accordion" id="accordionExample" >
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>Text Formatting and Manipulation:</button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" >The primary functionality of the Text Utility app should be to provide users with a range of tools for formatting and manipulating text. This includes features like text case conversion (uppercase, lowercase, title case), removing unnecessary spaces, adding line breaks or paragraph breaks, and handling special characters. These text manipulation options are useful for cleaning up messy text, ensuring consistent formatting, and preparing text for specific purposes such as writing emails, articles, or programming code.</div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>Word and Character Count:</button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">Another crucial feature of the app is the ability to perform word and character count on the given text. Users should be able to paste their text into the app and quickly find out how many words and characters are present. This feature can be valuable for writers, bloggers, students, and professionals who need to adhere to specific word limits in their work. Additionally, the word and character count feature could also be handy for proofreading and checking for any unexpected changes in the text length during editing.</div>
                </div>
            </div>
            </div>
        </div>
    )
}

About.propTypes = {
    mode: PropTypes.string
}