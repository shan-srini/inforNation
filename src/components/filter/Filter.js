import React, { useState, useEffect } from "react";
import "./Filter.css";
import { Popover, Slider, Stack, Divider, TextField } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import DateIcon from "@mui/icons-material/DateRangeOutlined";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const Filter = ({ validity, setValidity, dateRange, setDateRange }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <button
        className="button"
        title="Filter"
        style={{ borderRadius: "0.5rem", backgroundColor: "white" }}
        onClick={handleClick}
      >
        <FilterListIcon />
      </button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div className="filter-popover">
          <FilterSlide
            title={
              <Stack direction="row" alignItems="center">
                <CheckBoxIcon /> &nbsp;Minimum Validity
              </Stack>
            }
            value={validity}
            setValue={setValidity}
          />
          <Divider className="divider" />
          <FilterDate dateRange={dateRange} setDateRange={setDateRange} />
          <Divider className="divider" />
        </div>
      </Popover>
    </div>
  );
};

const FilterSlide = ({ title, value, setValue }) => {
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack direction="column">
      <span style={{ color: "black" }}>{title}</span>
      <span className="slider-input">
        <Slider
          aria-label={title}
          value={typeof value === "number" ? value : 0}
          onChange={handleSliderChange}
          className="slider"
        />
        <span className="slider-text-box">{value}</span>
      </span>
    </Stack>
  );
};

const FilterDate = ({ dateRange, setDateRange }) => {
  const setStartDate = (date) => {
    setDateRange((prev) => {
      return { startDate: date, ...prev };
    });
  };

  const setEndDate = (date) => {
    setDateRange((prev) => {
      return { endDate: date, ...prev };
    });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <span className="date-title">
        <DateIcon />
        &nbsp;Dates
      </span>
      <div className="date">
        <MobileDatePicker
          label="Start Date"
          inputFormat="MM/dd/yyyy"
          value={dateRange?.startDate || ""}
          onChange={setStartDate}
          renderInput={(params) => <TextField {...params} error={false} />}
        />
        <span style={{ display: "flex", alignItems: "center" }}>
          &nbsp;-&nbsp;
        </span>
        <MobileDatePicker
          label="End Date"
          inputFormat="MM/dd/yyyy"
          value={dateRange?.endDate || ""}
          onChange={setEndDate}
          renderInput={(params) => <TextField {...params} error={false} />}
        />
      </div>
    </LocalizationProvider>
  );
};

export default Filter;
