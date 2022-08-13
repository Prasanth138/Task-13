import React from 'react'

const Heading = () => {
  return (
    // <!-- Page Heading -->
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
      <a
        href="#"
        className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
      >
        <i
          className="fas fa-download fa-sm text-white-50"
          style={{ marginRight: '3.5px' }}
        ></i>
        Generate Report
      </a>
    </div>
  )
}

export default Heading
