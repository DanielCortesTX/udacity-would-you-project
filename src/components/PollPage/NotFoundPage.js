import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className="display-component">
      <h1 className="display-2 pb-4">404 page not found</h1>
			<h2 className="display-4">The page you are looking for doesn't appear to exist. Either the url is incorrect or the poll id does not match those in our records
      </h2>
      <Link to="/" className="btn btn-primary">Return to Polls feed</Link>
    </div>
  )
}

export default NotFoundPage