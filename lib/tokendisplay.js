
import { useState } from "react";
export default function TokenDisplay({dtoken}) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(dtoken);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{
      background: "#1e1e1e",
      border: "1px solid #333",
      borderRadius: "8px",
      padding: "12px",
      maxWidth: "100%",
      boxSizing: "border-box",
      fontFamily: "monospace",
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "8px",
      }}>
        <span style={{ color: "#888", fontSize: "12px" }}>Copy this Token to login for CLI</span>
        <button onClick={copy} style={{
          background: copied ? "#2d6a2d" : "#2d2d2d",
          color: copied ? "#7dff7d" : "#aaa",
          border: "1px solid #444",
          borderRadius: "4px",
          padding: "3px 10px",
          fontSize: "12px",
          cursor: "pointer",
          transition: "all 0.2s",
        }}>
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <div style={{
        color: "white",
        fontSize: "13px",
        wordBreak: "break-all",
        lineHeight: "1.6",
        background: "#111",
        padding: "10px",
        borderRadius: "6px",
        userSelect: "all",
      }}>
        {dtoken.split(".").map((part, i) => (
          <span key={i}>
            <span style={{ color: i === 0 ? "#e06c75" : i === 1 ? "#61afef" : "#98c379" }}>
              {part}
            </span>
            {i < 2 && <span style={{ color: "#666" }}>.</span>}
          </span>
        ))}
      </div>
    </div>
  );
}

