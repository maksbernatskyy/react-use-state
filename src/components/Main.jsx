import { useState } from "react"

{/* Import the array */}
import languages from "../assets/languages";

{/* Import the markup of card */}
import Card from "./Card";




export default function Main() {

    {/* Array of languages */}
    <languages />
    
    {/* Destructing the array of useState */}
    let [selection, setSelection] = useState(-1)

    {/* add variable language like the object selected */}
    let language = languages[selection]

    return (
        <>

        <div className="container mt-5">

            {/* Buttons */}
            <div className="d-flex gap-3">

                {/* Add buttons */}
                {
                    languages.map((thisLanguage, i) => (
                        <button key={thisLanguage.id} className={`btn ${selection === thisLanguage.id - 1 ? "btn-warning" : "btn-primary"}`} onClick={() => {setSelection(selection = thisLanguage.id - 1)}}>
                            {thisLanguage.title}
                        </button> 
                    ))
                }
            </div>

            {/* Card with condition */}
            <Card 
                title={selection === -1 ? 'Nessun dettaglio selezionato' : language.title}
                description={selection === -1 ? '' : language.description}
            />
            
            

        </div>
        
  

        </>
    )
}