import React, {useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import {fetchTemp} from '../store/tempSlice'
import TempLive from "./Sidebar/TempLive"
import TempMax from "./Sidebar/TempMax"
import TempMin from "./Sidebar/TempMin"
import Nav from "./Nav";
import {Outlet} from "react-router-dom";

export const Main = () => {

    const {loading, min, max} = useSelector(state => state.temp)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTemp({count: 15}))
    }, [dispatch])


    return (
            <div className="container">
                <Nav />
                <div className="row">
                    <div className="col-lg-3 mb-2 barMenu">
                        <div className="col-md-12 mb-2 justify-content-center">
                            <div className="card">
                                <div className="card-body text-center bg-success text-white">
                                    Меню
                                </div>
                            </div>
                        </div>

                        <div className="myapp card text-dark mb-3" style={loading ? {opacity: .5} : {}}>
                            {loading?"":<TempLive />}
                        </div>

                        <div className="myapp mt-4">
                            <div className="card border-secondary mb-3">
                                <div className="card-header bg-warning text-white">Max температура</div>
                                <div className="card-body bg-light" style={loading ? {opacity: .5} : {}}>
                                    <TempMax item={max}/>
                                </div>
                            </div>
                        </div>

                        <div className="myapp mt-4">
                            <div className="card border-secondary mb-3">
                                <div className="card-header bg-secondary text-white">Min температура</div>
                                <div className="card-body bg-light" style={loading ? {opacity: .5} : {}}>
                                    <TempMin item={min}/>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-9 col-md-12">
                        <div className="row myone" style={loading ? {'color': 'red'} : {}}>
                            <div className="col-md-12 mb-2 justify-content-center ">
                                <div className="card">
                                    <div className="card-body text-center bg-success text-white">
                                        Температура на улице
                                    </div>
                                </div>
                            </div>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        )
}