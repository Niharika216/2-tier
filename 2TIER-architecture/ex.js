const os = require("node:os");
const path = require("node:path");
let moment = require("moment");

let internalModules = () => {
  console.log(os.platform());
  console.log(os.type());
  console.log(os.release());
  console.log(os.version());
  console.log(os.totalmem() / 1024 / 1024 / 1024);
  console.log(os.freemem() / 1024 / 1024);

  console.log(path.parse("C:UsersNiharika ReddyDesktopmernReact"));
  console.log(path.dirname("C:UsersNiharika ReddyDesktopmernReact"));
  console.log(
    path.extname(
      "C:UsersNiharika ReddyDesktopmerncss,htmls7-display,visibilityindex.html"
    )
  );
};

module.exports = { internalModules };
