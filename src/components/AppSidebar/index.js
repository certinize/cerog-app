import React from 'react'
import { Icon } from 'semantic-ui-react'

import './index.css'

const AppSidebar = () => {
  return (
    <div className="sidebar">
      <h1>Cerog</h1>
      <div className="divider"></div>
      <div className="menu-item">
        <Icon name="table" size="large" />
        <div className="menu-item-text">Logs</div>
      </div>
    </div>
  )
}

export default AppSidebar
