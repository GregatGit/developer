import React from 'react'
import Section from './Section'
import { connect } from 'react-redux'

const Pages = ({ pages }) => {
  const renderPages = (pagesArr) => {
    return pagesArr.map((page) => (
      <Section
        title={page.name}
        subtitle={dummyText}
        dark={true}
        id={page.name}
      />
    ))
  }
  return (
    <div className="flex-container">
      {renderPages(pages)}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    pages: state.pages,
  }
}

export default connect(mapStateToProps)(Pages)
