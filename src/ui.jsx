export function Brand({ size = 26 }) {
  return (
    <div className="wf-brand" style={{ fontSize: size }}>
      <span className="duck">🦆</span> Coding Ducks
    </div>
  );
}

export function Logo({ children }) {
  return <div className="wf-logo">{children}</div>;
}

export function Lines({ short }) {
  return <div className={"wf-lines" + (short ? " short" : "")}><i></i><i></i><i></i></div>;
}

export function Field({ label, type = 'text', placeholder, value, onChange, area, select, options = [] }) {
  return (
    <div className="wf-field">
      <label>{label}</label>
      <div className={"ctrl" + (area ? ' area' : '')}>
        {area ? (
          <textarea placeholder={placeholder} value={value} onChange={onChange}></textarea>
        ) : select ? (
          <select value={value} onChange={onChange}>
            <option value="">{placeholder}</option>
            {options.map(o => <option key={o}>{o}</option>)}
          </select>
        ) : (
          <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
        )}
      </div>
    </div>
  );
}
