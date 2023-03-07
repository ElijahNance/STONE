
import * as React from 'react';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { Box } from '@mui/material';

export default function SearchBar() {
    return (
        <form>
            <TextField
                id="search-bar"
                className="text"
                label="Enter a city name"
                variant="outlined"
                placeholder="Search..."
                size="small"
                
            />
            
            <IconButton type="submit" aria-label="search">
                <SearchIcon style={{ fill: "blue" }} />
            </IconButton>
        </form>
    )
}