import React from "react";

export function newLineStr(html) {
  if (!html) return null;

  const lines = html.split("\n");

  if (lines.length === 0) {
    return html;
  }

  return lines.map((line, index) =>
    React.createElement(
      "span",
      {
        key: index,
      },
      line,
      React.createElement("br")
    )
  );
}
