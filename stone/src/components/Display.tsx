import { Container } from "@mui/material";
import React from "react";
import HomeDisplayCard from "./HomeDisplayCard";
import SearchBar from "./SearchBar";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import { Home } from "@mui/icons-material";
import { flexbox } from '@mui/system';


const Display = () => {
    return (
        <Container>
            <Box sx={{ display: "flex", justifyContent: 'center', my: 4 }}>
                <SearchBar />
            </Box>
            <HomeDisplayCard />
        </Container>

    )
}

export default Display