import React from "react"
import CartTemp from "./CartTemp"
import Spiner from './Loading/Spiner'
import TempLive from "./Sidebar/TempLive"
import TempMax from "./Sidebar/TempMax"
import TempMin from "./Sidebar/TempMin"

export default class Main extends React.Component {

    unixT(date) {

        let millisec = new Date(date).getTime()

        let seconds = Math.round((Date.now() - millisec) / 1000);

        let minutes = Math.round((Date.now() - millisec) / (1000 * 60));

        let hours = Math.round((Date.now() - millisec) / (1000 * 60 * 60));

        let days = Math.round((Date.now() - millisec) / (1000 * 60 * 60 * 24));

        if (seconds < 60) {
            return seconds + " cекунд";
        } else if (minutes < 60) {
            return minutes + " минут";
        } else if (hours < 24) {
            return hours + " час";
        } else {
            return days + " день"
        }
    }

    render() {
        let {data, loading, oneTemp, min, max, absTemp, oldTemp} = this.props.item
        return (
            <div className="row">
                <div className="col-lg-3 mb-2 barMenu">
                    <div className="col-md-12 mb-2 justify-content-center">
                        <div className="card">
                            <div className="card-body text-center bg-success text-white">
                                Меню
                            </div>
                        </div>
                    </div>

                    <div className="myapp card text-dark mb-3">
                        <TempLive temp={oneTemp} loading={loading} unixT={this.unixT} absTemp={absTemp} oldTemp={oldTemp}/>
                    </div>

                    <div className="myapp mt-4">
                        <div className="card border-secondary mb-3">
                            <div className="card-header bg-warning text-white">Max температура</div>
                            <div className="card-body bg-light" style={loading?{opacity: .5}:{}}>
                                <TempMax item={max}/>
                            </div>
                        </div>
                    </div>

                    <div className="myapp mt-4">
                        <div className="card border-secondary mb-3">
                            <div className="card-header bg-secondary text-white">Min температура</div>
                            <div className="card-body bg-light" style={loading?{opacity: .5}:{}}>
                                <TempMin item={min}/>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="col-lg-9 col-md-12">
                    <div className="row myone" style={loading?{'color':'red'}:{}}>
                        <div className="col-md-12 mb-2 justify-content-center ">
                            <div className="card">
                                <div className="card-body text-center bg-success text-white">
                                    Температура на улице
                                </div>
                            </div>
                        </div>

                        {loading? <Spiner /> : data.sort((prev, next) => next.id - prev.id).map(item => <CartTemp key={item.id} temp={item} unixT={this.unixT}/>)}

                    </div>
                </div>
            </div>
        )
    }
}