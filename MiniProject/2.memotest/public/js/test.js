document.addEventListener("DOMContentLoaded", async () => {
  const submitBtn = document.querySelector("#save");
  const fileInput = document.querySelector("#fileInput");

  submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const file = fileInput.files[0];
    console.log(file);
    const filename = file.name;
    const filepath = file.filepath;
    const filesize = file.filesize;
    const fileType = file.type;
    const lastModified = file.lastModifiedDate;
    console.log(filename, filepath, filesize, fileType, lastModified);

    const formData = new FormData();
    console.log(formData);
  });
});
