const EntryList = ({ entries, callback }) => (
  <div className="entry-list">
    {entries ? entries.map((item: any, index: number) => (
      <div
        key={index}
        className="entry-item"
        onClick={() => callback(item.ndept)}
      >
        {item.ndept}
      </div>
    )) : null}
  </div>
)

export default EntryList