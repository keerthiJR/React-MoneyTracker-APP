import React, { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const [filterVisibleYear, setFilterVisibleYear] = useState(false)
  const [filterVisibleMonth, setFilterVisibleMonth] = useState(false)
  const [bgColorSortButton, setBgColorSortButton] = useState(true);

  const filterVisibleHandlerYear = () => {
    setFilterVisibleYear(!filterVisibleYear)

  }
  const filterVisibleHandlerMonth = () => {
    setFilterVisibleMonth(!filterVisibleMonth)
  }
  const dropdownChangeHandlerYear = (event) => {
    props.onChangeFilterYear(event.target.value)
  };

  const dropdownChangeHandlerMonth = (event) => {
    props.onChangeFilterMonth(event.target.value)
  };

  const sortPriceHandler = useCallback(() => {
    setBgColorSortButton(!bgColorSortButton)
    console.log(bgColorSortButton)
    props.onApplysortPrice(bgColorSortButton)
  },[bgColorSortButton])


  useEffect(() => {
    if (filterVisibleYear === false) {
      props.onApplyFilterYear('ALL')
    }
    if (filterVisibleMonth === false) {
      props.onApplyFilterMonth('ALL')
    }
  }, [filterVisibleYear, filterVisibleMonth])



  return (
    <div className='expenses-filter-sort'>
      <div className='expenses-filter'>
        <div className='expenses-filter__control'>
          <label><input type="checkbox" onClick={filterVisibleHandlerYear} />
            Filter by Year
          </label>
          {filterVisibleYear && <select onChange={dropdownChangeHandlerYear} defaultValue={'DEFAULT'}>
            <option value="DEFAULT" disabled hidden>Select</option>
            <option value='2022'>2022</option>
            <option value='2021'>2021</option>
            <option value='2020'>2020</option>
            <option value='2019'>2019</option>
          </select>}
        </div>
        <div className='expenses-filter__control'>
          <label><input type="checkbox" onClick={filterVisibleHandlerMonth} />
            Filter by Month
          </label>
          {filterVisibleMonth && <select onChange={dropdownChangeHandlerMonth} defaultValue={'DEFAULT'}>
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
          </select>}
        </div>
      </div>
      <div className='expenses-sort'>
        <div className='expenses-sort__control'>
          <button onClick={sortPriceHandler} style={{ backgroundColor: bgColorSortButton ? "#ffffff" : "#a71c1c" }}>Price Ascending (A-Z)</button>
        </div>
      </div>
    </div>
  );
};

export default ExpensesFilter;