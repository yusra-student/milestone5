"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resume-form');
    var resumeContent = document.getElementById('resume-content');
    var shareOptions = document.getElementById('share-options');
    var resumeLink = document.getElementById('resume-link');
    var downloadPdfButton = document.getElementById('download-pdf');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form from reloading the page
        // Capture user input
        var name = document.getElementById('name').value;
        var username = document.getElementById('username').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var education = document.getElementById('education').value;
        var skills = document.getElementById('skills').value;
        var experience = document.getElementById('experience').value;
        // Generate the resume content
        resumeContent.innerHTML = "\n      <p><strong>Name:</strong> ".concat(name, "</p>\n      <p><strong>Email:</strong> ").concat(email, "</p>\n      <p><strong>Phone:</strong> ").concat(phone, "</p>\n      <p><strong>Education:</strong> ").concat(education, "</p>\n      <p><strong>Skills:</strong> ").concat(skills, "</p>\n      <p><strong>Experience:</strong> ").concat(experience, "</p>\n    ");
        // Generate a unique URL based on the username
        var uniqueUrl = "https://".concat(username, ".vercel.app/resume");
        resumeLink.href = uniqueUrl;
        resumeLink.textContent = uniqueUrl;
        // Show share options
        shareOptions.style.display = 'block';
    });
    // Function to download the resume as a PDF
    downloadPdfButton.addEventListener('click', function () {
        // Access jsPDF from the global window object
        var jsPDF = window.jspdf.jsPDF;
        // Create the PDF document
        var doc = new jsPDF();
        // Capture the resume content as plain text (basic PDF generation)
        var resumeText = resumeContent.innerText || '';
        // Add the text to the PDF
        doc.text(resumeText, 10, 10);
        // Save the PDF file
        doc.save('resume.pdf');
    });
});
