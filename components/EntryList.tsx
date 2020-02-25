export interface Entry {
  ndept: number;
}

const EntryList = ({
  entries,
  callback
}: {
  entries: Entry[];
  callback: (index: number) => void;
}) => (
  <div className="entry-list">
    {entries
      ? entries.map((item: any, index: number) => (
          <div
            key={index}
            className="entry-item"
            onClick={() => callback(item.ndept)}
          >
            {item.ndept}
          </div>
        ))
      : null}
  </div>
);

export default EntryList;
