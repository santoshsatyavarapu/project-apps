import './index.css'

const TabItem = props => {
  const {tabDetails, changeOfActiveId, isActive} = props
  const {displayText, tabId} = tabDetails

  const activeTabClassName = isActive ? 'active-tab-btn' : ''

  const categorySelection = () => {
    changeOfActiveId(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={categorySelection}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
