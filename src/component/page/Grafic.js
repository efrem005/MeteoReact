import React, {useState, useEffect} from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Brush,
    ResponsiveContainer,
} from 'recharts';
import {useSelector} from "react-redux";


export const Grafic = () => {

    const {data, min, max} = useSelector(state => state.temp)
    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(
            data.map(item => item).sort((prev, next) => prev.id - next.id)
        )
    }, [data])

    return (
        <div style={{ width: '100%' }}>
            <h4 className="alert alert-success text-center">График температуры воздуха</h4>

            <ResponsiveContainer width="100%" height={400}>
                <LineChart
                    width={500}
                    height={400}
                    data={items}
                    syncId="anyId"
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 30,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis type="number" domain={[+min.value, +max.value]} />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="green" fill="#82ca9d" />
                    <Brush height={40} stroke="green"/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}