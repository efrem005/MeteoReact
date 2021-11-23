import React, {useState} from "react";
import {Container, Card, Switch} from "@mui/material";



const Dallas = () => {

    const [value] = useState({color: 'info', disabled: false})
    const [count, setCount] = useState(false)

    return (
        <Container>
            <Card variant="outlined">Cart</Card>
            <Switch {...value} value={count} onChange={() => setCount(!count)} />
        </Container>
    )
}

export default Dallas