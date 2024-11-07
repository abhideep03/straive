export default function json2html(data) {
  const headers = [...new Set(data.flatMap(Object.keys))];

  let html = `<table data-user="abhideep.2004.3@gmail.com">\n  <thead>\n    <tr>`;

  headers.forEach((header) => {
    html += `<th>${header}</th>`;
  });
  html += `</tr>\n  </thead>\n  <tbody>`;

  data.forEach((row) => {
    html += `\n    <tr>`;
    headers.forEach((header) => {
      html += `<td>${row[header] !== undefined ? row[header] : ""}</td>`;
    });
    html += `</tr>`;
  });

  html += `\n  </tbody>\n</table>`;

  return html;
}
