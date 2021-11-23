import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchTemp = createAsyncThunk(
    'temp/fetchTemp',
    async ({count}) => {
        const response = await fetch('https://php-array-app.herokuapp.com/get/temp/', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'id': count}),
        })
        return await response.json();
    }
)

const tempLop = (data) => {
    const newTemp = data[0].value
    const oldTemp = data[data.length - 1].value

    const result = Math.abs(oldTemp - newTemp).toFixed(1)

    if (newTemp === oldTemp) return `0`
    else if (newTemp > oldTemp) return `+${result}`
    else return `-${result}`
}

const unixT = (data) => {
    const millisecond = new Date(data).getTime()
    const liveData = Date.now();
    const seconds = Math.round((liveData - millisecond) / 1000);
    const minutes = Math.round((liveData - millisecond) / (1000 * 60));
    const hours = Math.round((liveData - millisecond) / (1000 * 60 * 60));
    const days = Math.round((liveData - millisecond) / (1000 * 60 * 60 * 24));

    if (seconds < 60) {
        return seconds + " cекунд";
    } else if (minutes < 60) {
        return minutes + " минут";
    } else if (hours < 24) {
        return hours + " час";
    } else {
        return (days != null ? days + " день" : '')
    }
}

const tempSlice = createSlice({
    name: 'temp',
    initialState: {
        data: [],
        newData: [],
        post: 15,
        page: 1,
        oneTemp: [],
        loading: false,
        totalPage: 0,
        max: [],
        min: [],
        absTemp: [],
        oldTemp: [],
        error: null
    },
    reducers: {
        handlerIncrement(state, action){
            state.page++
            const indexPage = state.page * state.post
            const indexSlice = indexPage - state.post
            state.newData = [...state.data].slice(indexSlice,indexPage)
        },
        handlerDecrement(state, action){
            state.page--
            const indexPage = state.page * state.post
            const indexSlice = indexPage - state.post
            state.newData = [...state.data].slice(indexSlice,indexPage)
        }
    },
    extraReducers: {
        [fetchTemp.pending]: (state, action) => {
            state.loading = true
            state.error = null
        },
        [fetchTemp.fulfilled]: (state, action) => {
            state.loading = false
            const indexPage = state.page * state.post
            const indexSlice = indexPage - state.post
            state.data = [...action.payload].map(item => {return ({id: item.id, date: item.date, value: item.value, time: unixT(item.date)})})
            state.newData = [...state.data].slice(indexSlice,indexPage)
            state.totalPage = Math.ceil([...action.payload].length / state.post)
            state.oneTemp = [...state.data].sort((prev, next) => next.id - prev.id)[0]
            state.oldTemp = [...state.data][state.data.length - 1]
            state.absTemp = tempLop([...state.data])
            state.max = [...state.data].sort((prev, next) => next.value - prev.value)[0]
            state.min = [...state.data].sort((prev, next) => prev.value - next.value)[0]
        },
        [fetchTemp.rejected]: (state, action) => {
            state.error = true
        },
    }
})

export const {handlerIncrement, handlerDecrement} = tempSlice.actions

export default tempSlice.reducer