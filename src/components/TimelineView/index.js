// Write your code here
import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'

import ProjectTimelineCard from '../ProjectTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimelineList = item => {
    if (item.categoryId === 'COURSE') {
      return <CourseTimelineCard key={item.id} courseDetails={item} />
    }
    return <ProjectTimelineCard key={item.id} projectDetails={item} />
  }

  return (
    <div className="app-container">
      <h1 className="main-heading">
        MY JOURNEY OF <br /> CCBP 4.0
      </h1>
      <div className="chrono-container">
        <Chrono
          mode="VERTICAL"
          theme={{secondary: 'white'}}
          items={timelineItemsList}
        >
          {timelineItemsList.map(eachItem => renderTimelineList(eachItem))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
