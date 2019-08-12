import React from 'react'
import MenuLinks from './menu'
import DateIndicator from './date-indicator'
import LangSwitcher from './lang-switcher'

const Menu = () => (
    <nav>
    <ul>
        <li><span>This page was visited on: </span><DateIndicator /></li>
        <MenuLinks />

        <LangSwitcher />

    </ul>
</nav>
)

export default Menu