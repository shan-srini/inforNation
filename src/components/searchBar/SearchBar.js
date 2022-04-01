import React from "react";
import './SearchBar.css';
import { articleIndex } from '../../content/articles/index';
import { Autocomplete, InputAdornment, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    const navigate = useNavigate();

    const onEnter = (event, value) => {
        if (!value) return;
        navigate(`/search?q=${value}`);
    }

    return (
        <Autocomplete
            freeSolo
            options={Object.values(articleIndex).map(article => article.title)}
            renderInput={params => {
                return (
                  <TextField
                    {...params}
                    variant="standard"
                    placeholder="Search..."
                    fullWidth
                    color='primary'
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <>
                          <InputAdornment position="start">
                            <SearchIcon htmlColor="white" />
                          </InputAdornment>
                          {params.InputProps.startAdornment}
                        </>
                      )
                    }}
                  />
                );
              }}
            onChange={onEnter}
            classes={{
                option: 'autocomplete-option',
            }}
        />
    )
}

export default SearchBar;