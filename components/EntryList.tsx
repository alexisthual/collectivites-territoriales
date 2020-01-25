const EntryList = ({ entries }) => (
  <div className="entry-list">
    {entries ? entries.map((item: any, index: number) => (
      <div key={index} className="entry-item">{item.ndept}</div>
    )) : null}
  </div>
)

export default EntryList