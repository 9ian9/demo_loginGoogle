export default function Table({ dataSource, columns, onRowClick }) {
  return (
    <div className="overflow-x-auto bg-base-100">
      <table className="table custom-table cursor-pointer text-base">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key}>{col.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataSource.map((row) => (
            <tr key={row.id} onClick={() => onRowClick?.(row.id)}>
              {columns.map((col) => (
                <td key={col.key}>{row[col.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
