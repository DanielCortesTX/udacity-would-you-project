import React from 'react'

const LeadUserDisplay = ({userData, userAnswers}) => {
  const { name, avatarURL } = userData
  const question = userData.questions.length
  const total = question + userAnswers
  return (
    <div className="card leaderDisplay mb-4">
      <div className="card-body">
        <img
          src={avatarURL}
          alt={'?'}
          className="avatar"
        />
      </div>
      <div className="card-body">
        <h1 className="leaderFont">{`${name} has:`}</h1>
        <p className="lead">{`${question} question(s) and ${userAnswers} answer(s)`}</p>
      </div>
			<div className="card-body bg-dark text-white col-3">
				<h4 className="leaderFont">
					{`Score: ${total}`}
				</h4>
			</div>
    </div>
  )
}

export default LeadUserDisplay