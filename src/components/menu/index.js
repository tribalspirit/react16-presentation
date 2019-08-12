import React from 'react'
import MenuLinks from './menu'
import DateIndicator from './date-indicator'
import LangSwitcher from './lang-switcher'

const Menu = () => (
    <div className='nav-bar'>
        <MenuLinks />
        <span>Page visited on: <DateIndicator /></span>
        <LangSwitcher />
    </div>
)

export default Menu