import React from 'react'

function Footer() {
  return (
    <div className="bg-dark py-3 mt-3">
      <div className="container">
        <div className="d-flex flex-row justify-content-center">
          <i className="fas fa-cube pr-1 text-info"></i>
          <p className="text-info">Portfolio Project for Udacity React Nanodegree.</p>
        </div>
        <div className="d-flex flex-row justify-content-center">
          <i className="fas fa-archive pr-1 text-info"></i>
          <p className="text-info">Original Users and data was provided.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer