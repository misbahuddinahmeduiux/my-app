import React, {useState} from 'react'


// {useState}  yeh ek hook hai react ka 
export default function TextForm(props){

    // yeh ek hook hai jis ko use kara hai text ka state change krne mai iska code yaad krna hoga 
    // one time is tarha dena hoga or use ke andar jo value arahi hai wo by default value hai 
    // value change krne ke lye setText ka use krna hoga
   const [text, setText] = useState('');
   // setText ("new text");


    // text = "new text"; // wrong way to change the state
    // setText ("new text"); // correct way to change the text


    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text); print karwaya tha taky console mai check kr saky

        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleDownClick = ()=>{
        // console.log("Lowercase was clicked" + text); print karwaya tha taky console mai check kr saky

        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleCapsClick = ()=>{
        setText(text.replace(/\b\w/g, char => char.toUpperCase()));
    }

    const handleRevertClick = ()=>{
        setText(text.split('').reverse().join(''));
    }

    const removeExtraSpace = ()=>{
        setText(text.replace(/\s+/g, ' ').trim());
    }

    const handleClearText = ()=>{
        let newText = '';
        setText(newText)
    }

    const copyText = ()=>{
        navigator.clipboard.writeText(text);
    }

    const sentenceCase = ()=>{
        setText(text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, c => c.toUpperCase()));
    }


    const textToSpeech = (langCode = "en-US") => {
        const speech = new SpeechSynthesisUtterance(text);
        speech.lang = langCode;
        window.speechSynthesis.speak(speech);
    };


    const handleOnChange = (event)=> {
        // console.log("One change"); print karwaya tha taky console mai check kr saky
        setText(event.target.value);
    }

    return(
        <>
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-dark me-2" onClick={handleUpClick}>Convert To Uppercase</button>
            <button className="btn btn-dark me-2" onClick={handleDownClick}>Convert To Lowercase</button>
            <button className="btn btn-dark me-2" onClick={handleCapsClick}>Convert To Capitalize</button>
            <button className="btn btn-dark me-2" onClick={sentenceCase}>Sentence Case</button>
            <button className="btn btn-dark me-2" onClick={copyText}>Copy Text</button>
            <button className="btn btn-dark me-2" onClick={() => textToSpeech("ur-PK")}>Text Listens</button>

            <button className="btn btn-secondary me-2" onClick={handleRevertClick}>Text Revert</button>
            <button className="btn btn-danger me-2" onClick={removeExtraSpace}>Remove Extra Space</button>
            <button className="btn btn-danger" onClick={handleClearText}>Clear Text</button>
        </div>


        <div className="container mt-5 p-5 bg-danger-subtle">
            <h4>Results</h4>
            <p className='lh-lg'>
                Total Words <b> {text.split(" ").length} </b> <br /> 
                Totala Charactors <b> {text.length} </b> <br /> 
                Total Time To Read Per Word  <b>{0.008 * text.split(" ").length} Minuts</b>
            </p>
        </div>
        </>
    )

}