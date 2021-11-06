export default function CartTemp ({temp: {date, value}, unixT}) {
    return (
        <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="card border-secondary mb-3">
                <div className="card-header bg-secondary text-white">{unixT(date)} назад</div>
                <div className="card-body">
                    <h5 className="card-title">{date}</h5>
                    <h6 className="card-text">Температура: {value}°</h6>
                </div>
            </div>
        </div>
    )
}