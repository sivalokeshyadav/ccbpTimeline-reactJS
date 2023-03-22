// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {courseDetails} = props

  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <>
      <div className="course-container">
        <div className="time-container">
          <h1 className="course-heading">{courseTitle}</h1>
          <div className="duration">
            <AiFillClockCircle color="#1e293b" />
            <p className="para">{duration}</p>
          </div>
        </div>
        <p className="description">{description}</p>
        <div className="tag-list">
          {tagsList.map(eachTag => (
            <p className="tag-item" key={eachTag.id}>
              {eachTag.name}
            </p>
          ))}
        </div>
      </div>
    </>
  )
}
export default CourseTimelineCard
