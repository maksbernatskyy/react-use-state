import { useState } from "react"

{/* Import the array */}
import languages from "../assets/languages";




export default function Main() {

    {/* Array of languages */}
    <languages />
    
    {/* Destructing the array of useState */}
    const [selection, setSelection] = useState (0)

    return (
        <>

        <div className="container mt-5">
            <div className="d-flex gap-3">
                {
                    languages.map((thisLanguage) => (
                        <button key={thisLanguage.id} className="btn btn-primary">
                            {thisLanguage.title}
                        </button>
                    ))
                }
            </div>
        </div>
        
  

        </>
    )
}