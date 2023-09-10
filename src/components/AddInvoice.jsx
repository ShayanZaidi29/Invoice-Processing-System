import { Box, Typography, TextField, Button, styled} from "@mui/material"

const Component = styled(Box)({
    marginTop: 20,
    '& > p': {
       fontSize :26,
       marginBottom: 10 
    },
    '& > div > div': {
        marginRight: 20,
        minWidth:200
    }
})

const AddInvoice = () => {

    return (
        <Component>
            <Typography>Add Invoice</Typography>
            <Box>
                <TextField
                    variant = "standard"
                    placeholder="Enter Vender Name"
                />
                <TextField
                    variant = "standard"
                    placeholder="Enter product Name"
                />
                <TextField
                    variant = "standard"
                    placeholder="Enter amount (in Rs)"
                    type = "number"
                />
                <TextField
                    variant = "standard"
                    placeholder="Enter date"
                    type = "date"
                />
                <Button
                    variant="contained"
                >
                    AddInvoice
                </Button>
                   
            </Box>
        </Component>
    )
}

export default AddInvoice;