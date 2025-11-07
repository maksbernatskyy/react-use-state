export default function Card({ title, description }) {
    return (
        <div className="card mt-5">
                <div className="card-body">
                    <h5 className="card-title">
                        {title}
                    </h5>
                    <p className="card-text">
                        {description}
                    </p>
                </div>
            </div>
    )
}