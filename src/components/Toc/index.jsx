import React from 'react'
import './style.scss'

class Toc extends React.Component {
  render() {

    const tocList = this.props.tocList;
    const visibilityClass = this.props.visibilityClass
    
    return (
      <div className={"toc-list " + visibilityClass} id="tox-box">
        <h5 className="toc-header">Table Of Contents</h5>
        <div dangerouslySetInnerHTML={{__html: tocList}} />
      </div>
    )
  }
}

export default Toc
