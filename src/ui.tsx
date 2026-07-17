import React from 'react';
import logoUrl from './assets/ducks-systems-horizontal-compacto.svg';
import { BRAND_NAME } from './site';

export function Brand({ size = 32 }: { size?: number }) {
  return (
    <img
      src={logoUrl}
      alt={BRAND_NAME}
      style={{ height: size, width: 'auto', display: 'block' }}
    />
  );
}

export function Logo({ children }: { children: React.ReactNode }) {
  return <div className="wf-logo">{children}</div>;
}

export function Lines({ short }: { short?: boolean }) {
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
  required?: boolean;
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
  required,
  options = []
}: FieldProps) {
  return (
    <div className="wf-field">
      <label>{label}</label>
      <div className={"ctrl" + (area ? ' area' : '') + (select ? ' select' : '')}>
        {area ? (
          <textarea placeholder={placeholder} value={value} onChange={onChange} required={required}></textarea>
        ) : select ? (
          <select value={value} onChange={onChange} required={required}>
            <option value="">{placeholder}</option>
            {options.map(o => <option key={o}>{o}</option>)}
          </select>
        ) : (
          <input type={type} placeholder={placeholder} value={value} onChange={onChange} required={required} />
        )}
      </div>
    </div>
  );
}
