import React, {useState , useEffect} from "react";
import Header from "../components/Header"
import { Box, Button, Typography } from '@mui/material';
import AddInvoice from "../components/AddInvoice";
import Invoices from '../components/Invoices';
import { getAllInvoice, deleteInvoice } from "../services/api";

const Home = () => {
    const [addInvoice, setAddInvoice] = useState(false); 
    const [invoices, setInvoices] = useState([]);

    const toggleInvoice = () => {
        setAddInvoice(true);
    }

    const removeInvoice = async (id) => {
        await deleteInvoice(id);

        const updatedInvoice = invoices.filter(invoice => invoice.id !== id);
        setInvoices(updatedInvoice);
    }

    useEffect(() => {
        const getData = async ()=> {
            const response = await getAllInvoice();
            setInvoices(response.data);
        }
    getData();
},[addInvoice])



    return (
        <>
            <Header />
            <Box style = {{margin :20}}>
                <Typography variant ="h4">Pending Invoices</Typography>
                { !addInvoice && <Button 
                    variant = "contained" 
                    style ={{marginTop: 20}}
                    onClick={() => toggleInvoice()}
                >Add Invoice
                </Button>
                }
                { addInvoice && <AddInvoice setAddInvoice={setAddInvoice} /> }
            </Box>
            <Box>
                <Invoices 
                    invoices ={invoices}
                    removeInvoice={removeInvoice}
                />
            </Box>
        </>
    )
}

export default Home;