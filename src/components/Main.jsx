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

                {/* Add buttons */}
                {
                    languages.map((thisLanguage) => (
                        <button key={thisLanguage.id} className="btn btn-primary">
                            {thisLanguage.title}
                        </button>
                    ))
                }
            </div>

            {/* Card */}
            <div className="card mt-5">
                <div className="card-body">
                    <h5 className="card-title">
                        HTML
                    </h5>
                    <p className="card-text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, beatae!
                    </p>

                </div>
            </div>
        </div>
        
  

        </>
    )
}