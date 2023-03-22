// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectDetails

  return (
    <div className="project-container">
      <img src={imageUrl} alt="project" className="project-img" />
      <div className="project-heading">
        <h1 className="heading">{projectTitle}</h1>
        <div className="time-container">
          <AiFillCalendar className="ai-calender" />
          <p className="calender">{duration}</p>
        </div>
      </div>
      <p className="project-description">{description}</p>
      <a href={projectUrl} className="project-url">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
