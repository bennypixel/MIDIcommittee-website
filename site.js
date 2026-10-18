const copyReport = document.querySelector('#copy-report');
const reportTemplate = document.querySelector('#report-template');
const copyStatus = document.querySelector('#copy-status');

if (copyReport && reportTemplate && copyStatus) {
  copyReport.addEventListener('click', async () => {
    if (!navigator.clipboard?.writeText) {
      copyStatus.textContent = 'Select and copy the template above.';
      reportTemplate.focus();
      return;
    }
    try {
      await navigator.clipboard.writeText(reportTemplate.textContent);
      copyStatus.textContent = 'Copied. Review it before sharing.';
    } catch {
      copyStatus.textContent = 'Select and copy the template above.';
      reportTemplate.focus();
    }
  });
}
