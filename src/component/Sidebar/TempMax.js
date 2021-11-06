export default function TempMax({item: {date, value}}) {
    return (
        <>
            <h5 className="card-title">дата: {date}</h5>
            <h6 className="card-text">Температура: {value}°</h6>
        </>
    )
}