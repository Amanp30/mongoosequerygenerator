import React from "react";
import { copy } from "../cookievalue/copy";
function query({
  themodelname,
  query,
  limit,
  sortby,
  sortname,
  thename,
  thevalue,
  fieldupdate,
  valueupdate,
}) {
  var execline = ` .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      res.json(data);
    });`;

  var sorting =
    `${sortby === "sortasc" ? `.sort({ ${sortname} : 1 })` : ""}` +
    `${sortby === "sortdesc" ? `.sort({ ${sortname} : -1 })` : ""}`;

  var thelimits = ` ${limit > 0 ? `.limit(${limit})` : ""}`;

  return (
    <>
      {sortby !== "nosort" && sortname == "" && query == "find" ? (
        <div className="sortfield">Enter Sort field</div>
      ) : null}
      <div className="codediv">
        <div className="copycode" onClick={(e) => copy("codethis")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 pointer-events-none copy-code-icon text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
              className="copy-code-icon-path-1 block"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
              className="copy-code-icon-path-2 hidden"
            ></path>
          </svg>
        </div>

        <pre className="thecodeupper">
          {/* save data */}
          {themodelname && query == "save" ? (
            <code id="codethis">
              {`var { name, bio } = req.body;` + "\n"}
              {`/* getting name and bio from user */` + "\n"}
              {"\n"}
              {`let new${themodelname} = new ${themodelname}({name, bio });` +
                "\n"}
              {`new${themodelname}` +
                `.save((err, data) => {
                    if (err) {
                    return res.status(400).json({
                        error: err,
                    });
                    } else {
                    res.json(data);
                    console.log(data);
                    }
                });`}
            </code>
          ) : null}

          {/*  simple find */}
          {themodelname && query == "find" ? (
            <code id="codethis">
              {themodelname + ".find({})" + sorting + thelimits + execline}
            </code>
          ) : null}

          {/*  findbyid */}
          {themodelname && query == "findbyid" ? (
            <code id="codethis">
              {"var id = req.params.id;" + "\n"}
              {"/* Getting id from url */ " + "\n"}
              {themodelname + ".findById(id)" + execline}
            </code>
          ) : null}

          {/*  findbyidandupdate */}
          {themodelname && query == "findbyidandupdate" ? (
            <code id="codethis">
              {"var id = req.params.id;" + "\n"}
              {"/* Getting id from url */ " + "\n"}
              {themodelname +
                `.findByIdAndUpdate(id, {
                        ${fieldupdate}: "${valueupdate}",
                    })` +
                execline}
            </code>
          ) : null}

          {/*  findone */}
          {themodelname && query == "findone" ? (
            <code id="codethis">
              {themodelname +
                `.findOne( {
    ${thename}: "${thevalue}",
  })` +
                execline}
            </code>
          ) : null}

          {/*  findoneandupdate */}
          {themodelname && query == "findoneandupdate" ? (
            <code id="codethis">
              {themodelname +
                `.findOneAndUpdate( {
    ${thename}: "${thevalue}",
  }, {${fieldupdate}: "${valueupdate}"})` +
                execline}
            </code>
          ) : null}

          {/*  findbyidanddelete */}
          {themodelname && query == "findbyidanddelete" ? (
            <code id="codethis">
              {`var id = req.params.id;` + "\n"}
              {"/* Getting id from url */ " + "\n"}

              {themodelname + `.findByIdAndDelete(id)` + execline}
            </code>
          ) : null}
          {/*  findbyidanddelete */}
          {themodelname && query == "findbyidandremove" ? (
            <code id="codethis">
              {`var id = req.params.id;` + "\n"}
              {"/* Getting id from url */ " + "\n"}

              {themodelname + `.findByIdAndRemove(id)` + execline}
            </code>
          ) : null}

          {/*  findoneandremove */}
          {themodelname && query == "findoneandremove" ? (
            <code id="codethis">
              {themodelname +
                `.findOneAndRemove( {
    ${thename}: "${thevalue}",
  })` +
                execline}
            </code>
          ) : null}

          {/*  findoneanddelete */}
          {themodelname && query == "findoneanddelete" ? (
            <code id="codethis">
              {themodelname +
                `.findOneAndDelete( {
    ${thename}: "${thevalue}",
  })` +
                execline}
            </code>
          ) : null}

          {/*  deleteone */}
          {themodelname && query == "deleteone" ? (
            <code id="codethis">
              {themodelname +
                `.deleteOne( {
    ${thename}: "${thevalue}",
  })` +
                execline}
            </code>
          ) : null}

          {/*  deletemany */}
          {themodelname && query == "deletemany" ? (
            <code id="codethis">
              {themodelname +
                `.deleteMany( {
    ${thename}: "${thevalue}",
  })` +
                execline}
            </code>
          ) : null}

          {/*  updatemany */}
          {themodelname && query == "updatemany" ? (
            <code id="codethis">
              {themodelname +
                `.updateMany( { ${thename}: "${thevalue}", }
    , {${fieldupdate}: "${valueupdate}"})` +
                execline}
            </code>
          ) : null}

          {/*  remove */}
          {themodelname && query == "remove" ? (
            <code id="codethis">
              {themodelname +
                `.remove( {
    ${thename}: "${thevalue}",
  })` +
                execline}
            </code>
          ) : null}

          {/*  update */}
          {themodelname && query == "updateone" ? (
            <code id="codethis">
              {themodelname +
                `.updateOne( {
    ${fieldupdate}: "${valueupdate}",
  })` +
                execline}
            </code>
          ) : null}
        </pre>
      </div>
    </>
  );
}

export default query;
