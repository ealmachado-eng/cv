document.addEventListener("DOMContentLoaded", function () {
    const downloadBtn = document.getElementById("download-pdf-btn");
    
    if (downloadBtn) {
        downloadBtn.addEventListener("click", function () {
            // Options for the PDF generation
            const opt = {
                margin:       10, // Margin in mm. Array [top, left, bottom, right] also works
                filename:     'my-cv.pdf',
                image:        { type: 'jpeg', quality: 0.98 },
                html2canvas:  { scale: 2, useCORS: true },
                jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
            };

            // Select the element containing the CV
            const element = document.getElementById("cv-content");
            
            // Add a temporary class to adjust styles specifically during the jsPDF rendering if needed
            element.classList.add('pdf-generating');

            // Generate the PDF
            html2pdf().set(opt).from(element).save().then(() => {
                // Cleanup
                element.classList.remove('pdf-generating');
            });
        });
    }
});
