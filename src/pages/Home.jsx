
import React from "react";
import Header from "../components/Header"
import { Box, Button, Typography } from '@mui/material';
import AddInvoice from "../components/AddInvoice";

const Home = () => {

    return (
        <>
            <Header />
            <Box style = {{margin :20}}>
                <Typography variant ="h4">Pending Invoices</Typography>
                <Button variant = "contained" style ={{marginTop: 20}}>Add Invoice</Button>
                <AddInvoice></AddInvoice>
            </Box>
        </>
    )
}

export default Home;