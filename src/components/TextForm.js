import React, { useState } from 'react'

export const TextForm = (props) => {
    let [text, setText] = useState('');
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    };
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handlelowerClick = () => {
        let newText1 = text.toLowerCase();
        setText(newText1)
    }
    const handleCapitalize = () => {

        const str = text;
        const str2 = str.charAt(0).toUpperCase() + str.slice(1);
        setText(str2)
    }
    const handleCapitalizeini = () => {

        let splitedWord = text.trim().split(" ")
        console.log(splitedWord);
        let captilizedWord = ""
        for (let eachWord of splitedWord) {

            let firstWord = eachWord[0].toUpperCase()
            let secondWord = eachWord.slice(1)
            console.log(secondWord);
            captilizedWord += firstWord + secondWord + " "
            console.log(captilizedWord);

        }
        setText(captilizedWord);
    }

    return (

        <div>
            <div className=' row text-center '>
                <h2>{props.titleTextArea}</h2>
                <textarea id="mybox" rows="8" value={text} onChange={handleOnChange}></textarea>
                <p>total words {text.split(" ").length} and total characters {text.length}</p>
                <h1>Preview</h1>
                <p>{text}</p>
            </div>
            <div>

                <button className='btn btn-success m-3' onClick={handleUpClick}>upperCase</button>
                <button className='btn btn-success m-3' onClick={handlelowerClick}>lowerCase</button>
                <button className='btn btn-success m-3' on onClick={handleCapitalize}>Make first word capital</button>
                <button className='btn btn-success m-3' onClick={handleCapitalizeini}>Make first all word capital</button>
            </div>

        </div>
    )
}

TextForm.defaultProps = {
    titleTextArea: "Enter title"
}
