import { jsPDF } from 'jspdf';
// Declare jsPDF globally
declare global {
  interface Window {
    jspdf: any;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('resume-form') as HTMLFormElement;
  const resumeContent = document.getElementById('resume-content') as HTMLElement;
  const shareOptions = document.getElementById('share-options') as HTMLElement;
  const resumeLink = document.getElementById('resume-link') as HTMLAnchorElement;
  const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;

  form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // Prevent form from reloading the page

    // Capture user input
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;

    // Generate the resume content
    resumeContent.innerHTML = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Education:</strong> ${education}</p>
      <p><strong>Skills:</strong> ${skills}</p>
      <p><strong>Experience:</strong> ${experience}</p>
    `;

    // Generate a unique URL based on the username
    const uniqueUrl = `https://${username}.vercel.app/resume`;
    resumeLink.href = uniqueUrl;
    resumeLink.textContent = uniqueUrl;

    // Show share options
    shareOptions.style.display = 'block';
  });

  // Function to download the resume as a PDF
  downloadPdfButton.addEventListener('click', () => {
    // Access jsPDF from the global window object
    const { jsPDF } = window.jspdf;

    // Create the PDF document
    const doc = new jsPDF();

    // Capture the resume content as plain text (basic PDF generation)
    const resumeText = resumeContent.innerText || '';

    // Add the text to the PDF
    doc.text(resumeText, 10, 10);

    // Save the PDF file
    doc.save('resume.pdf');
  });
});
