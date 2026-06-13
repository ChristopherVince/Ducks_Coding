import React from 'react';
import { Code2 } from 'lucide-react';

export function Brand({ size = 26 }) {
  return (
    <div className="wf-brand" style={{ fontSize: size, display: 'flex', alignItems: 'center', gap: 8 }}>
      <Code2 size={size * 0.85} strokeWidth={2.2} />
      Coding Ducks
    </div>
  );
}

export function Logo({ children }) {
  return <div className="wf-logo">{children}</div>;
}

export function Lines({ short }) {
  return <div className={"wf-lines" + (short ? " short" : "")}><i></i><i></i><i></i></div>;
}

interface FieldProps {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  area?: boolean;
  select?: boolean;
  options?: string[];
}

export function Field({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  area,
  select,
  options = []
}: FieldProps) {
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
