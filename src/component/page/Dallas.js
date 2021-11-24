import React, {useState} from "react";
import {Button, Card, Container, FormControl, InputLabel, MenuItem, Select, Switch} from "@mui/material";



const Dallas = () => {

    const [value] = useState({color: 'info', disabled: false})
    const [count, setCount] = useState(false)
    const [num, setNum] = useState(1)

    const a = (e) => setNum(e.target.value)

    if (false) {

        return (
            <Container>
                <Card variant="elevation">Cart</Card>
                <Switch {...value} value={count} onChange={() => setCount(!count)}/>
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
                <FormControl sx={{m: 1, minWidth: 80}}>
                    <InputLabel id="demo-simple-select-autowidth-label">кол.</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={num}
                        onChange={a}
                        autoWidth
                        label="Age"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Twenty</MenuItem>
                        <MenuItem value={21}>Twenty one</MenuItem>
                        <MenuItem value={22}>Twenty one and a half</MenuItem>
                    </Select>
                </FormControl>
            </Container>
        )
    } else {
        return (
            <div className="container">
                <h4 className="alert alert-success text-center">В разработке</h4>
            </div>
        )
    }
}

export default Dallas