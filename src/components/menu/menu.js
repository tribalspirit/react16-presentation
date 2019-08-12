import React from 'react'
/*
    // PREVIOUSLY
const Menu = () => (
    <div>
        <a key='menu1'>Articles</a>
        <a key='menu2'>Articles2</a>
        <a key='menu3'>Articles3</a>
    </div>
)

*/

// 
const MenuLinks = () => ([
    <li><a className='link' key='menu1' href='#1'>Articles</a></li>,
    <li><a className='link' key='menu2' href='#1'>Articles2</a></li>,
    <li><a className='link' key='menu3' href='#1'>Articles3</a></li>,
])

export default MenuLinks