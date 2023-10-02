import React from 'react'
import { Subheading4 } from '../../../Headings'
import { FilterSvg, GridViewSvg, ListViewSvg } from '../../../../static/icons'
import './filterView.css';

const filterView = ({view, setView, setFilterShow }) => {

  
  return (
    <div className="filter-container-view">
      <div className="filter-quantity" onClick={() => (setFilterShow(prev => !prev))}>
          <Subheading4 text={'Filter (3)'}/><FilterSvg/>
      </div>
      <div className="products-list-grid-view">
          <button className={`grid-view ${!view ? 'active' : ''}`} onClick={() => setView(false)} >
              <GridViewSvg/>
          </button>
          <button className={`list-view ${view ? 'active' : ''}`} onClick={() => setView(true)}>
              <ListViewSvg/>
          </button>
      </div>
    </div>
  )
}

export default filterView