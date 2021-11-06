export default function TempLive({temp, loading, unixT, absTemp, oldTemp}) {
    return (
        <>
            <div className="card-header bg-success text-white d-flex justify-content-between">
                <span>Улица</span><span>{unixT(temp.date)} назад</span></div>
            <div className="card-body text-center bg-light" style={loading ? {opacity: .5} : {}}>
                <h1>{temp.value}<i className="fas fa-temperature-high ml-2" style={{fontSize: 1.6 + 'rem'}}></i></h1>
            </div>
            <div className="card-header bg-info text-white text-center">
                <h5 className="text-white" style={loading?{opacity: .5}:{}}>{absTemp}° за {unixT(oldTemp.date)}</h5>
            </div>
        </>
    )
}