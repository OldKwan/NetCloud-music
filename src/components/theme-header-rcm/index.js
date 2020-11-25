import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { HeaderWrapper } from './style'

const HYThemeHeaderRCM = memo(function(props) {
    const { title, keywords, onMore } = props
    return (
        <HeaderWrapper className="sprite_02">
            <div className="left">
                <h3 className="title">{title}</h3>
                <div className="keyword">
                    {
                        keywords.map((item, index) => (
                            <div className="item" key={index}>
                                <a href="#" >{item}</a>
                                <span className="divider">|</span>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="right">
                <a className="todo" onClick={onMore || null}>更多</a>
                <i className="icon sprite_02" />
            </div>
        </HeaderWrapper>
    )
})

HYThemeHeaderRCM.propTypes = {
    title: PropTypes.string.isRequired,
    keywords: PropTypes.array,
    onMore: PropTypes.func,
}

HYThemeHeaderRCM.defaultProps = {
    keywords: [],
}


export default HYThemeHeaderRCM