import { useState } from "react"

{/* Import the array */}
import languages from "../assets/languages";

{/* Import the markup of card */}
import Card from "./Card";




export default function Main() {

    {/* Array of languages */}
    <languages />
    
    {/* Destructing the array of useState */}
    const [selection, setSelection] = useState(0)

    

    let language = languages[selection]

    return (
        <>

        <div className="container mt-5">

            {/* Buttons */}
            <div className="d-flex gap-3">

                {/* Add buttons */}
                {
                    languages.map((thisLanguage) => (
                        <button key={thisLanguage.id} className="btn btn-primary" onClick={handleClick}>
                            {thisLanguage.title}
                        </button> 
                    ))
                }
            </div>

            {/* Card */}
            <Card 
                title={language.title}
                description={language.description}
            />
            
            

        </div>
        
  

        </>
    )
}