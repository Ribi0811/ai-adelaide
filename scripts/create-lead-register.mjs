import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const artifactPath = process.env.ARTIFACT_TOOL_MODULE;
const { Workbook, SpreadsheetFile } = artifactPath
  ? await import(pathToFileURL(artifactPath).href)
  : await import('@oai/artifact-tool');
const outputDir = path.resolve(process.argv[2] || 'outputs/2026-09-06-lead-register');
const headers = JSON.parse(await fs.readFile(new URL('../lib/lead-sheet-columns.json', import.meta.url), 'utf8'));
await fs.mkdir(outputDir, { recursive: true });

const wb = Workbook.create();
const sheet = wb.worksheets.add('Enquiries');
sheet.showGridLines = false;
sheet.getRange('A1:W55').format.font = { name: 'Arial', size: 11, color: '#243443' };
sheet.getRange('A1').values = [['AI Adelaide enquiries']];
sheet.getRange('A1').format.font = { name: 'Arial', size: 18, bold: true, color: '#172A3A' };
sheet.getRange('A2').values = [['Update the amber columns after each follow-up. Use New, Qualified, Quoted, Won, Lost or Spam.']];
sheet.getRange('A3').values = [['Dates are UTC. Amounts are AUD. Keep the headings unchanged. Mark test records Yes in the final column.']];
sheet.getRange('A2:W3').format.font = { name: 'Arial', size: 10, color: '#586571' };
sheet.getRange('A5:W5').values = [headers];
sheet.tables.add('A5:W6', true, 'EnquiriesTable');
sheet.getRange('A5:W5').format = {
  fill: '#233D50', font: { name: 'Arial', size: 11, bold: true, color: '#FFFFFF' },
  wrapText: true, rowHeight: 36, verticalAlignment: 'center',
};
sheet.getRange('A6:W55').format.rowHeight = 25;
sheet.getRange('G6:G1000').format.wrapText = true;
sheet.getRange('H6:O1000').format.fill = '#FFF4D9';
sheet.getRange('W6:W1000').format.fill = '#FFF4D9';
sheet.getRange('A6:A1000').setNumberFormat('yyyy-mm-dd hh:mm');
sheet.getRange('J6:J1000').setNumberFormat('yyyy-mm-dd');
sheet.getRange('K6:N1000').setNumberFormat('"$"#,##0.00');
sheet.getRange('F6:F1000').setNumberFormat('@');
sheet.getRange('H6:H1000').dataValidation = { rule: { type: 'list', values: ['New', 'Qualified', 'Quoted', 'Won', 'Lost', 'Spam'] } };
sheet.getRange('W6:W1000').dataValidation = { rule: { type: 'list', values: ['No', 'Yes'] } };
sheet.getRange('H6:H1000').conditionalFormats.add('containsText', { text: 'Won', format: { fill: '#DDF0E4' } });
const widths = [155,180,160,155,230,150,350,125,230,150,130,130,150,140,260,290,180,260,230,180,170,200,130];
widths.forEach((width, i) => { sheet.getRangeByIndexes(0, i, 55, 1).format.columnWidthPx = width; });
sheet.freezePanes.freezeRows(5);
sheet.freezePanes.freezeColumns(3);
console.log((await wb.inspect({ kind: 'table', range: 'Enquiries!A5:W6', include: 'values,formulas', tableMaxRows: 2, tableMaxCols: 23, maxChars: 5000 })).ndjson);
console.log((await wb.inspect({ kind: 'match', searchTerm: '#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A|#NUM!|#NULL!|#SPILL!|#CALC!', options: { useRegex: true, maxResults: 20 } })).ndjson);
for (const [name, range] of [['enquiry-details', 'A1:G10'], ['follow-up', 'H5:O10'], ['attribution', 'P5:W10']]) {
  const preview = await wb.render({ sheetName: 'Enquiries', range, scale: 1, format: 'png' });
  await fs.writeFile(path.join(outputDir, `${name}.png`), new Uint8Array(await preview.arrayBuffer()));
}
await (await SpreadsheetFile.exportXlsx(wb)).save(path.join(outputDir, 'AI-Adelaide-Enquiries.xlsx'));
console.log('Blank enquiry register created and checked.');
