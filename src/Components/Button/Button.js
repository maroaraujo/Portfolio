import React from 'react'
import Pdf from "../../documents/Maria Roberta CV test 2 pages.pdf";

function Button(props) {

  function onResumeClick() {window.open(Pdf)}
  
  return (
 <div className='App'>
     <button className='cv' onClick={onResumeClick}>Download CV</button> 
     </div>
  )
}

export default Button