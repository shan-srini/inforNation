import React, { useState } from 'react';
import './Filter.css';
import { Popover, Slider, Stack, Divider } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import { DateRangePicker } from "materialui-daterange-picker";
import DateRangeIcon from '@mui/icons-material/DateRange';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ClearIcon from '@mui/icons-material/Clear';

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
        <button className='button' title='Filter' style={{ borderRadius: '0.5rem', backgroundColor: 'white' }} onClick={handleClick}>
            <FilterListIcon />
        </button>
        <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            }}
        >
          <div style={{ width: 'fit-content', paddingLeft: '50px', paddingRight: '50px', paddingTop: '10px', paddingBottom: '10px' }}>
            <FilterSlide title={<Stack direction='row' alignItems='center'><CheckBoxIcon /> &nbsp;Minimum Validity</Stack>} value={validity} setValue={setValidity} />
            <Divider className='divider' />
            <FilterDate dateRange={dateRange} setDateRange={setDateRange} />
            <Divider className='divider' />
          </div>
        </Popover>
        </div>
    )
}

const FilterSlide = ({ title, value, setValue }) => {
    const handleSliderChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <Stack direction='column' style={{width: '300px'}}>
            <span style={{ color: 'black' }}>{title}</span>
            <span className='slider-input'>
              <Slider aria-label={title} 
              value={typeof value === 'number' ? value : 0}
              onChange={handleSliderChange}
              className='slider'
              />
              <span className='slider-text-box'>{value}</span>
            </span>
        </Stack>
    )
}

const FilterDate = ({ dateRange, setDateRange }) => {
  const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
    
      const open = Boolean(anchorEl);

  return (
    <>
    <Stack style={{ color: 'black', cursor: 'pointer', paddingTop: '10px' }} direction='row' alignItems='center' onClick={handleClick}>
      <DateRangeIcon />
      <span> &nbsp; {dateRange?.startDate.toLocaleDateString() || 'start date'} - {dateRange?.endDate.toLocaleDateString() || 'end date'} </span>
      <ClearIcon style={{position: 'absolute', right: 50}} onClick={() => setDateRange(null)} />
    </Stack>
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      >
      <DateRangePicker
      open={true}
      initialDateRange={dateRange}
      toggle={handleClose}
      onChange={(range) => setDateRange(range)}
      />
      </Popover>
      </>
  )
}

export default Filter;
