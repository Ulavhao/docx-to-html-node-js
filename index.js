const mammoth = require("mammoth");
const fs = require("fs");
mammoth.convertToHtml({ path: "./input.docx" }).then((result) => {
  fs.writeFile("output.html", result.value, ["utf8"], () => {
    console.log("done");
  });
});
