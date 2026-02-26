import React, { useEffect, useState } from "react";
import Papa from "papaparse";

const STATUS_MAP = {
  SUCCESS:  { color: "#16a34a", bg: "#dcfce7" },
  SETTLED:  { color: "#16a34a", bg: "#dcfce7" },
  FAILED:   { color: "#dc2626", bg: "#fee2e2" },
  PENDING:  { color: "#d97706", bg: "#fef3c7" },
  REFUNDED: { color: "#7c3aed", bg: "#ede9fe" },
};
const STATUS_COLS = ["payment_status", "settlement_status", "status"];

function StatusBadge({ val }) {
  const s = STATUS_MAP[String(val).toUpperCase()];
  if (!s) return <span>{val}</span>;
  return (
    <span style={{
      background: s.bg, color: s.color,
      border: `1px solid ${s.color}30`,
      borderRadius: 999, padding: "1px 9px",
      fontSize: 11, fontWeight: 700, display: "inline-block",
    }}>{val}</span>
  );
}

function detectType(rows, col) {
  const vals = rows.map(r => r[col]).filter(v => v !== null && v !== undefined && v !== "");
  const numCount = vals.filter(v => typeof v === "number" && !isNaN(v)).length;
  return numCount >= vals.length * 0.6 ? "numeric" : "categorical";
}

function MiniBar({ values }) {
  const nums = values.filter(v => typeof v === "number" && !isNaN(v));
  if (!nums.length) return null;
  const max = Math.max(...nums, 1);
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 1.5, height: 44, width: "100%" }}>
      {nums.slice(0, 22).map((v, i) => (
        <div key={i} style={{
          flex: 1, borderRadius: "2px 2px 0 0",
          height: `${Math.max(6, (v / max) * 100)}%`,
          background: "#3b82f6", opacity: 0.8,
        }} />
      ))}
    </div>
  );
}

export default function DatasetViewer({ files = [], basePath = "/" }) {
  const [activeFile, setActiveFile] = useState(files[0] || "");
  const [tab, setTab] = useState("Detail");
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [loading, setLoading] = useState(false);
  const [selCol, setSelCol] = useState(null);

  useEffect(() => {
    if (!activeFile) return;
    setLoading(true);
    setRows([]);
    setColumns([]);

    Papa.parse(`${basePath}${activeFile}`, {
      download: true,
      header: true,
      dynamicTyping: true,        // ← auto-converts numbers, booleans
      skipEmptyLines: true,       // ← skip blank rows
      complete(results) {
        const allData = results.data.filter(row =>
          Object.values(row).some(v => v !== "" && v !== null && v !== undefined)
        );
        setTotalRows(allData.length);
        const cols = results.meta.fields || [];
        setColumns(cols);
        setRows(allData.slice(0, 30));
        setSelCol(cols[0] || null);
        setLoading(false);
      },
      error() { setLoading(false); },
    });
  }, [activeFile, basePath]);

  const colVals = selCol ? rows.map(r => r[selCol]) : [];
  const numVals = colVals.filter(v => typeof v === "number" && !isNaN(v));
  const uniqVals = [...new Set(colVals)];

  return (
    <div style={{
      fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif",
      background: "#fff",
      border: "1px solid #e2e8f0",
      borderRadius: 16,
      overflow: "hidden",
      boxShadow: "0 1px 8px rgba(0,0,0,.06)",
    }}>

      {/* ── FILE TABS ── */}
      <div style={{
        display: "flex", overflowX: "auto",
        borderBottom: "1.5px solid #e2e8f0",
        padding: "0 20px", background: "#fff",
      }}>
        {files.map(file => (
          <button key={file} onClick={() => { setActiveFile(file); setTab("Detail"); }}
            style={{
              padding: "13px 16px", fontSize: 13, whiteSpace: "nowrap",
              fontWeight: activeFile === file ? 700 : 500,
              color: activeFile === file ? "#2563eb" : "#6b7280",
              borderBottom: activeFile === file ? "2.5px solid #2563eb" : "2.5px solid transparent",
              background: "none", cursor: "pointer", border: "none",
              marginBottom: "-1.5px", transition: "color .15s",
            }}>
            {file}
          </button>
        ))}
      </div>

      {/* ── HEADER BAR ── */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "14px 22px", borderBottom: "1px solid #f1f5f9",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 15, fontWeight: 700, color: "#0f172a" }}>{activeFile}</span>
          {totalRows > 0 && (
            <span style={{
              fontSize: 12, color: "#64748b", background: "#f1f5f9",
              borderRadius: 8, padding: "3px 10px", fontWeight: 500,
            }}>
              {totalRows.toLocaleString()} rows
            </span>
          )}
        </div>

        <a
          href={`${basePath}${activeFile}`}
          download
          style={{
            display: "flex", alignItems: "center", gap: 7,
            background: "#2563eb", color: "#fff",
            borderRadius: 10, padding: "8px 18px",
            fontSize: 13, fontWeight: 600, textDecoration: "none",
          }}
          onMouseEnter={e => e.currentTarget.style.background = "#1d4ed8"}
          onMouseLeave={e => e.currentTarget.style.background = "#2563eb"}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download
        </a>
      </div>

      {/* ── SUB-TABS ── */}
      <div style={{
        display: "flex", alignItems: "center",
        borderBottom: "1px solid #e2e8f0", padding: "0 22px",
      }}>
        {["Detail", "Compact", "Column"].map(t => (
          <button key={t} onClick={() => setTab(t)}
            style={{
              fontSize: 13, padding: "10px 14px", background: "none", cursor: "pointer",
              fontWeight: tab === t ? 600 : 400,
              color: tab === t ? "#2563eb" : "#64748b",
              borderBottom: tab === t ? "2px solid #2563eb" : "2px solid transparent",
              border: "none", marginBottom: "-1px",
            }}>{t}</button>
        ))}
        <span style={{ marginLeft: "auto", fontSize: 12, color: "#94a3b8" }}>
          {columns.length} columns
        </span>
      </div>

      {/* ── LOADING ── */}
      {loading && (
        <div style={{ padding: 48, textAlign: "center", color: "#94a3b8", fontSize: 13 }}>
          Loading {activeFile}…
        </div>
      )}

      {/* ── DETAIL TAB ── */}
      {!loading && tab === "Detail" && (
        <div style={{ overflowY: "auto", maxHeight: 560 }}>
          <div style={{ padding: "14px 22px", borderBottom: "1px solid #f1f5f9" }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#1e293b", marginBottom: 2 }}>About this file</div>
            <div style={{ fontSize: 12, color: "#94a3b8" }}>
              {activeFile} · {totalRows.toLocaleString()} total rows · {columns.length} columns · showing first {rows.length}
            </div>
          </div>

          {columns.map(col => {
            const vals = rows.map(r => r[col]);
            const type = detectType(rows, col);
            const nVals = vals.filter(v => typeof v === "number" && !isNaN(v));
            const uVals = [...new Set(vals)];
            const isStatus = STATUS_COLS.includes(col.toLowerCase());

            return (
              <div key={col} style={{ borderBottom: "1px solid #f8fafc" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                  <div style={{ padding: "14px 22px", borderRight: "1px solid #f8fafc" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 5 }}>
                      <span style={{
                        fontSize: 10, fontFamily: "monospace", fontWeight: 700,
                        background: type === "numeric" ? "#eff6ff" : "#f0fdf4",
                        color: type === "numeric" ? "#3b82f6" : "#16a34a",
                        padding: "1px 6px", borderRadius: 4,
                      }}>{type === "numeric" ? "#" : "A"}</span>
                      <span style={{ fontSize: 13, fontWeight: 600, color: "#111827" }}>{col}</span>
                    </div>
                    <p style={{ fontSize: 11, color: "#94a3b8", marginBottom: 8 }}>
                      {type === "numeric" ? "Numeric column" : `${uVals.length} unique values`}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                      {uVals.slice(0, 3).map((v, i) => isStatus
                        ? <StatusBadge key={i} val={v} />
                        : <span key={i} style={{
                            fontSize: 11, background: "#f8fafc", border: "1px solid #e2e8f0",
                            borderRadius: 20, padding: "2px 9px", color: "#475569",
                            maxWidth: 160, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                          }}>{String(v)}</span>
                      )}
                    </div>
                  </div>

                  <div style={{ padding: "14px 22px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    {nVals.length > 4
                      ? <>
                          <MiniBar values={nVals} />
                          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "#94a3b8", marginTop: 4 }}>
                            <span>{Math.min(...nVals).toLocaleString()}</span>
                            <span>{Math.max(...nVals).toLocaleString()}</span>
                          </div>
                        </>
                      : <div style={{ textAlign: "center" }}>
                          <div style={{ fontSize: 28, fontWeight: 800, color: "#1e293b" }}>{uVals.length}</div>
                          <div style={{ fontSize: 11, color: "#94a3b8" }}>unique values</div>
                        </div>
                    }
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ── COMPACT TAB ── */}
      {!loading && tab === "Compact" && (
        <div style={{ overflowX: "auto", overflowY: "auto", maxHeight: 560 }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, minWidth: 700 }}>
            <thead style={{ position: "sticky", top: 0, zIndex: 5, background: "#f8fafc" }}>
              <tr>
                {columns.map(h => (
                  <th key={h} style={{
                    padding: "10px 16px", textAlign: "left", fontWeight: 600,
                    color: "#64748b", whiteSpace: "nowrap", fontSize: 12,
                    borderBottom: "1px solid #e2e8f0",
                  }}>
                    <span style={{
                      fontFamily: "monospace", fontSize: 9,
                      background: detectType(rows, h) === "numeric" ? "#eff6ff" : "#f0fdf4",
                      color: detectType(rows, h) === "numeric" ? "#3b82f6" : "#16a34a",
                      padding: "1px 4px", borderRadius: 3, marginRight: 5,
                    }}>{detectType(rows, h) === "numeric" ? "#" : "A"}</span>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} style={{ borderBottom: "1px solid #f8fafc" }}
                  onMouseEnter={e => e.currentTarget.style.background = "#f0f9ff"}
                  onMouseLeave={e => e.currentTarget.style.background = ""}>
                  {columns.map(h => (
                    <td key={h} style={{
                      padding: "8px 16px", color: "#334155",
                      whiteSpace: "nowrap", maxWidth: 200,
                      overflow: "hidden", textOverflow: "ellipsis",
                    }}>
                      {STATUS_COLS.includes(h.toLowerCase()) ? <StatusBadge val={row[h]} /> : String(row[h] ?? "")}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* ── COLUMN TAB ── */}
      {!loading && tab === "Column" && (
        <div style={{ display: "flex", height: 480 }}>
          <div style={{ width: "34%", borderRight: "1px solid #e2e8f0", overflowY: "auto" }}>
            {columns.map(h => {
              const type = detectType(rows, h);
              return (
                <button key={h} onClick={() => setSelCol(h)}
                  style={{
                    width: "100%", textAlign: "left", padding: "10px 16px",
                    borderBottom: "1px solid #f8fafc", fontSize: 12,
                    background: selCol === h ? "#eff6ff" : "transparent",
                    color: selCol === h ? "#2563eb" : "#374151",
                    fontWeight: selCol === h ? 700 : 400,
                    cursor: "pointer", border: "none",
                    display: "flex", alignItems: "center", gap: 7,
                  }}>
                  <span style={{
                    fontSize: 9, fontFamily: "monospace", fontWeight: 700,
                    background: type === "numeric" ? "#eff6ff" : "#f0fdf4",
                    color: type === "numeric" ? "#3b82f6" : "#16a34a",
                    padding: "1px 5px", borderRadius: 3,
                  }}>{type === "numeric" ? "#" : "A"}</span>
                  {h}
                </button>
              );
            })}
          </div>

          <div style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
            {selCol && <>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#0f172a", marginBottom: 3 }}>{selCol}</div>
              <div style={{ fontSize: 11, color: "#94a3b8", marginBottom: 16 }}>
                {detectType(rows, selCol) === "numeric" ? "Numeric" : "Categorical"} · {uniqVals.length} unique values
              </div>
              {numVals.length > 4 && <>
                <MiniBar values={numVals} />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#94a3b8", margin: "4px 0 16px" }}>
                  <span>Min: {Math.min(...numVals).toLocaleString()}</span>
                  <span>Avg: {(numVals.reduce((a,b)=>a+b,0)/numVals.length).toFixed(2)}</span>
                  <span>Max: {Math.max(...numVals).toLocaleString()}</span>
                </div>
              </>}
              <div style={{ fontSize: 11, fontWeight: 600, color: "#64748b", marginBottom: 8, textTransform: "uppercase", letterSpacing: 0.5 }}>
                Sample Values
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                {rows.slice(0, 12).map((row, i) => (
                  <div key={i} style={{
                    fontSize: 12, background: "#f8fafc", borderRadius: 8,
                    padding: "7px 12px", border: "1px solid #f1f5f9",
                    color: "#334155", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                  }}>
                    {STATUS_COLS.includes(selCol.toLowerCase()) ? <StatusBadge val={row[selCol]} /> : String(row[selCol] ?? "")}
                  </div>
                ))}
              </div>
            </>}
          </div>
        </div>
      )}

      {/* ── FOOTER ── */}
      {!loading && rows.length > 0 && (
        <div style={{
          display: "flex", justifyContent: "space-between",
          padding: "9px 22px", borderTop: "1px solid #f1f5f9", background: "#f8fafc",
        }}>
          <span style={{ fontSize: 11, color: "#94a3b8" }}>
            Showing {rows.length} of {totalRows.toLocaleString()} rows
          </span>
          <span style={{ fontSize: 11, color: "#94a3b8" }}>{activeFile}</span>
        </div>
      )}
    </div>
  );
}