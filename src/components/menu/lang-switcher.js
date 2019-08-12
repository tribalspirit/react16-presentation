import React from 'react'

const LANG_LIST = [
    {
        label: 'English',
        value: 'en'
    },
    {
        label: 'Chinese',
        value: 'cn'
    },
    {
        label: 'Japanese',
        value: 'jp'
    }
]


class LangSwitcher extends React.Component {
    state = { selected: LANG_LIST[0] }

    _onClick = val => this.setState({ selected: val })

    _renderOptions = options => options.map(i => (<li className={i.value} key={i.value}>{i.label}</li>))

    render() {
        return (<div className='dropdown'>
            <span className={this.state.selected.value}>{this.state.selected.label}</span>
            <ul>{this._renderOptions(LANG_LIST)}</ul>
        </div>)
    }
}

export default LangSwitcher