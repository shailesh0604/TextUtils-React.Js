import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUp = () =>{
    // console.log("you clicked on button")
    let newText = text.toUpperCase()
    setText(newText)  
    props.showAlert("Text Convert in Uppercase", "success");
  }
  
  const handleLo = () =>{
    // console.log("you clicked on button")
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert("Text Convert in Lowercase", "success");
  }
  
  const handleClear = () =>{
    // console.log("you clicked on button"); 
    let newText = ""
    setText(newText)
    props.showAlert("TextArea is Cleared! Enter New Text", "warning");
  }

  const handleonChange = (event) =>{
    // console.log("you clicked on onchange")
    setText(event.target.value)
  }

  const handleCopy = () =>{
    let Text = document.getElementById("myBox");
    Text.select();
    navigator.clipboard.writeText(Text.value)
    document.getSelection().removeAllRanges();
    props.showAlert("Text is Copied! Paste Were You Want", "success");
  }

  const handleRemove = () =>{
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Extra Spaces Removed", "success");
  }


  const [text,setText] = useState('')
  return (
    <>
    <div className="container my-4" style={{color:props.mode==='dark'?'white':'#1f2f40'}}>
      <h2>{props.heading}</h2>
      <div className="form-group my-4">
      <textarea className="form-control" value = {text} onChange={handleonChange} style={{backgroundColor:props.mode==='dark'?'#394c4f':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUp}>Convert To Uppercase</button>

      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLo}>Convert To Lowercase</button>

      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>

      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
      
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleRemove}>Remove Extra Spaces</button>

    </div>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Some detail about your text</h2>
        <p>words in text : {text.split(" ").filter((element)=>{return element.length!==0}).length} and characters in text {text.length}</p>
        <p> It will take {0.008 * text.split(" ").length} minute to read your text</p>
      
      <h3>Preview</h3>
      <p>{text.length>0?text:"Nothing to preview..!"}</p>
      </div>
    </>
  )
}
