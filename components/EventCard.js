export default function EventCard({ title, lines = [] }){
  return (
    <div className="event-card">
      <h4>{title}</h4>
      {lines.map((l,i)=>(<p key={i}>{l}</p>))}
    </div>
  )
}
