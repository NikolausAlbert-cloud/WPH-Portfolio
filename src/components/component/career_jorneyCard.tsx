import { careerJourneyData } from '@/constants/career_journeyData'

const Career_journeyCard = () => {
  return (
    <div>
    {careerJourneyData.map((item, i) => (
      <div key={i}>
        <h3>{item.title}</h3>
        <div className="flex-between">
          <p>{item.company}</p>
          <p>{item.time}</p>
        </div>
        {item.tasks.map((task, j) => (
          <ul key={`${i}.${j}`}>
            <li>{task.description}</li>
          </ul>
        ))}
      </div>
    ))}
    </div>
  )
}

export default Career_journeyCard