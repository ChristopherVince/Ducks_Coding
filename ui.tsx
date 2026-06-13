/* ============================================================
   ui.jsx — Primitivos reutilizables del kit wireframe
   (Brand, Logo, Lines, Field). Se exponen en window.
   ============================================================ */
import React from "react";

type FieldProps = {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >;
  area?: boolean;
  select?: boolean;
  options?: string[];
};

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
  return (
    <div className={"wf-lines" + (short ? " short" : "")}>
      <i></i>
      <i></i>
      <i></i>
    </div>
  );
}

// /* Campo de formulario controlado: input / textarea / select */
// export function Field(props: FieldProps) {
//   const {
//     label,
//     placeholder = "",
//     value,
//     onChange,
//     type = "text",
//     area,
//     select,
//     options = [],
//   } = props;

//   return (
//     <div className="wf-field">
//       <label>{label}</label>

//       <div className={`ctrl ${area ? "area" : ""}`}>
//         {/* TEXTAREA */}
//         {area ? (
//           <textarea
//             placeholder={placeholder}
//             value={value}
//             onChange={onChange}
//           />
//         ) : select ? (
//           /* SELECT */
//           <select value={value} onChange={onChange}>
//             <option value="">{placeholder}</option>

//             {options.map((opt) => (
//               <option key={opt} value={opt}>
//                 {opt}
//               </option>
//             ))}
//           </select>
//         ) : (
//           /* INPUT NORMAL */
//           <input
//             type={type}
//             placeholder={placeholder}
//             value={value}
//             onChange={onChange}
//           />
//         )}
//       </div>
//     </div>
//   );
export  function Fields(props: FieldProps) {
  const {
    label,
    placeholder = "",
    value,
    onChange,
    type = "text",
    area,
    select,
    options = [],
  } = props;

  return (
    <div className="wf-field">
      <label>{label}</label>

      <div className={`ctrl ${area ? "area" : ""}`}>
        {/* TEXTAREA */}
        {area ? (
          <textarea
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        ) : select ? (
          /* SELECT */
          <select value={value} onChange={onChange}>
            <option value="">{placeholder}</option>

            {options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        ) : (
          /* INPUT NORMAL */
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        )}
      </div>
    </div>
  );

}
