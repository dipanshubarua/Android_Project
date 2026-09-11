// STATIC for now: four hand-written buttons, "All" is always active.
// TODO Stage 5: take { filter, onFilterChange, counts, total } as props.
//   - make an array of tabs like { value: 'safe', label: 'Safe' }
//   - .map() over it to make the buttons (don't forget key)
//   - active tab gets className 'tab tab-active', others just 'tab'
//   - onClick -> onFilterChange(tab.value)
//   - the little number: total for 'all', counts[tab.value] for the rest

function FilterTabs() {
  return (
    <div className="tabs">
      <button className="tab tab-active">
        All <span className="tab-count">5</span>
      </button>
      <button className="tab">
        Safe <span className="tab-count">2</span>
      </button>
      <button className="tab">
        On the edge <span className="tab-count">2</span>
      </button>
      <button className="tab">
        Danger <span className="tab-count">1</span>
      </button>
    </div>
  )
}

export default FilterTabs
