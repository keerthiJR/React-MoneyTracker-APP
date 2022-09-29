import React from 'react';
import { useState } from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const [filterVisible, setFilterVisible] = useState(false)

  const filterVisibleHandler = () => {
    setFilterVisible(!filterVisible)
    if(filterVisible === false){
      props.onApplyFilter('ALL')
    }
  }
  const dropdownChangeHandlerYear = (event) => {
    props.onChangeFilterYear(event.target.value)
  };

  const dropdownChangeHandlerMonth = (event) => {
    props.onChangeFilterMonth(event.target.value)
  };


  return (
    <div className='expenses-filter'>
      <div className='checkBox__Filter' style={{ fontColor: "white" , marginBottom: "10px"}}>
        <label>
          <input type="checkbox"
            onClick={filterVisibleHandler}
          />
          Filter
        </label>
      </div>
      {filterVisible && <div className='expenses-filter'>
        <div className='expenses-filter__control'>
          <label>Filter by Year</label>
          <select onChange={dropdownChangeHandlerYear} defaultValue={'DEFAULT'}>
          <option value="DEFAULT" disabled hidden>Select</option>
            <option value='2022'>2022</option>
            <option value='2021'>2021</option>
            <option value='2020'>2020</option>
            <option value='2019'>2019</option>
          </select>
        </div>
        <div className='expenses-filter__control'>
          <label>Filter by Month</label>
          <select onChange={dropdownChangeHandlerMonth} defaultValue={'DEFAULT'}>
            <option value="DEFAULT" disabled hidden>Select</option>
            <option value='January'>January</option>
            <option value='February'>February</option>
            <option value='March'>March</option>
            <option value='April'>April</option>
            <option value='May'>May</option>
            <option value='June'>June</option>
            <option value='July'>July</option>
            <option value='August'>August</option>
            <option value='September'>September</option>
            <option value='October'>October</option>
            <option value='November'>November</option>
            <option value='December'>December</option>
          </select>
        </div>
      </div>}
    </div>
  );
};

export default ExpensesFilter;