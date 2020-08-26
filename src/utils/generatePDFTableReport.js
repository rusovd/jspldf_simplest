import jsPDF from 'jspdf';
import moment from 'moment';

const xPositions = [];
const marginAmendment = 3.5;
const headerIndent = 25;

const pdfAction = ({ doc, action, filename }) => {
  const blob = doc.output('datauristring');
  const actions = {
    save: () => doc.save(filename),
    show: () => doc.output('dataurlnewwindow'),
    getblob: () => {
      console.log(`%c-----------------------------> BLOB: `,'color:white; background:blue;'); // eslint-disable-line
      console.log(blob);
    }
  };

  actions[action] && actions[action]();
  return blob;
};

const addPageHeader = (doc, reportName, headers, pageSettings) => {
  const {
    width = 801.89,
    height = 560.28,
    pageMargin = 50,
    padding = 15,
  } = pageSettings;

  doc.setFontSize(7);
  doc.text(
    `${reportName} ${moment(new Date()).format('YYYY-MM-DD HH:mm')}`,
    pageMargin,
    headerIndent
  );
  doc.text(
    `Page ${doc.internal.getCurrentPageInfo().pageNumber}`,
    width - pageMargin * 2,
    headerIndent
  );

  doc.setFontSize(8);
  headers.forEach((heading, index) => {
    if (heading.hasOwnProperty('xPos')) {
      doc.text(heading.display, heading.xPos, pageMargin);
      xPositions.push(heading.xPos);
    } else {
      const xPositionForCurrentHeader =
        pageMargin + index * ((width - pageMargin) / headers.length);
      const yPositionForHeaders = pageMargin;

      doc.text(
        heading.display,
        index === 0
          ? xPositionForCurrentHeader
          : xPositionForCurrentHeader + padding,
        yPositionForHeaders
      );
      xPositions.push(
        index === 0
          ? xPositionForCurrentHeader
          : xPositionForCurrentHeader + padding
      );
    }
  });

  doc.line(
    pageMargin,
    pageMargin + marginAmendment,
    width - pageMargin,
    pageMargin + marginAmendment
  );
};

const generatePDFTableReport = ({
  data,
  headers,
  reportName = 'Report',
  filename = `PanelClaw_${reportName}_${moment(new Date()).format(
    'YYYY-MM-DD_HH-mm'
  )}`,
  pageSettings = {},
  action = 'show',
}) => {
  const {
    orientation = 'l',
    unit = 'pt',
    format = 'letter',
    height = 560.28,
    width = 801.89,
    pageMargin = 50,
    padding = 15,
  } = pageSettings;

  let curPage = 1;

  const doc = new jsPDF({ orientation, unit, format });
  doc.setProperties({
    title: `${reportName} ${moment(new Date()).format('YYYY-MM-DD HH:mm')}`,
  });

  addPageHeader(doc, reportName, headers, pageSettings);

  const baseYPosForRows = pageMargin + padding;
  let nextYPos = baseYPosForRows;

  // ROWS
  data.forEach((row, rIndex) => {
    const rowHeights = [];

    /*
     *
     * Row styles go here
     *
     * */

    // COLUMNS
    headers.forEach((column, cIndex) => {
      const longText = doc.splitTextToSize(
        String(row[column.key]),
        xPositions[cIndex] - xPositions[cIndex !== 0 && cIndex - 1]
      );
      const rowHeight = longText.length * doc.getLineHeight();
      rowHeights.push(rowHeight);

      /*
       *
       *  Column styles go here
       *
       * */

      doc.text(longText, xPositions[cIndex], nextYPos);
    });

    nextYPos = nextYPos + padding + Math.max(...rowHeights, 30);
    if (nextYPos > height - pageMargin) {
      doc.setPage(curPage++);
      doc.addPage();
      addPageHeader(doc, reportName, headers, pageSettings);
      nextYPos = baseYPosForRows;
    }
  });

  return pdfAction({ doc, action: action.toLowerCase(), filename });
};

export default generatePDFTableReport;
