import React, {Component} from "react"
import Nav from './component/Nav'
import Main from "./component/Main"

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            oneTemp: [],
            count: 15,
            loading: false,
            max: [],
            min: [],
            absTemp: [],
            oldTemp: []
        }
        this.onDataList = this.onDataList.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    tempLop(data){
        const newTemp = data[0].value
        const oldTemp = data[data.length - 1].value

        const result = Math.abs(oldTemp - newTemp).toFixed(1)

        if (newTemp === oldTemp) return `0`
        else if (newTemp < oldTemp) return `+${result}`
        else return `-${result}`
    }

    saveState(data){
        this.setState({
            loading: false,
            data: data,
            oneTemp: data[0],
            oldTemp: data[data.length - 1],
            absTemp: this.tempLop(data),
            max: data.sort((prev, next) => next.value - prev.value)[0],
            min: data.sort((prev, next) => prev.value - next.value)[0],
        })
    }

    async onDataList() {
        this.setState({
            loading: true
        })
        const app = await fetch('https://php-array-app.herokuapp.com/get/temp/', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'id': this.state.count}),
        })
        return await app.json()
    }

    componentDidMount() {
        this.onDataList()
            .then(data => this.saveState(data))
    }

    handleSubmit(event) {
        this.setState({loading: true})
        this.onDataList()
            .then(data => this.saveState(data))
        event.preventDefault()
    }

    handleChange(event) {
        this.setState({count: +event.target.value});
    }

    render() {
    return (
        <>
            <div className="container">
                <Nav count={this.state.count} handleChange={this.handleChange} handleSubmit={this.handleSubmit} loading={this.state.loading} />
                <Main item={this.state} />
            </div>)
        </>
    );
  }
}