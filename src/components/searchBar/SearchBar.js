import React, { useState } from "react";
import './SearchBar.css';
import { articleIndex } from '../../content/articles/index';
import { Autocomplete, InputAdornment, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import Filter from '../filter/Filter';

const SearchBar = () => {
    const navigate = useNavigate();
    const [minimumValidity, setMinimumValidity] = useState(0);
    const [dateRange, setDateRange] = useState(null);

    const onKeyDown = (event) => {
      if (event.keyCode !== 13) return;
      onEnter(null, event.nativeEvent.srcElement.value);
    }

    const onEnter = (event, value) => {
      if (!value) return;
      console.log(value);
        const minValidityQuery = minimumValidity ? `&v=${minimumValidity}` : '';
        const dateRangeQuery = dateRange ? `&sd=${dateRange.startDate}&ed=${dateRange.endDate}` : '';
        navigate(`/search?q=${value}${minValidityQuery}${dateRangeQuery}`);
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
                    onKeyDown={onKeyDown}
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <>
                          <InputAdornment position="start">
                            <SearchIcon htmlColor="white" />
                          </InputAdornment>
                          {params.InputProps.startAdornment}
                        </>
                      ),
                      endAdornment: (
                        <Filter 
                          validity={minimumValidity} setValidity={setMinimumValidity}
                          dateRange={dateRange} setDateRange={setDateRange}
                        />
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