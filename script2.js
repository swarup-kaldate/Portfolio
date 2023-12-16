document.getElementById("download-button").addEventListener("click", function () {
    // Replace 'resume.pdf' with the actual file name and path
    const fileURL = 'Resume.pdf';

    const link = document.createElement('a');
    link.href = fileURL;
    link.download = 'Resume.pdf';
    link.click();
});
