import React, { useState, useEffect } from "react";
//import { cookievalue } from "../cookievalue/cookievalue";
import dynamic from "next/dynamic";
import { cookievalue } from "cookievalue";
const Querycomponent = dynamic(() => import("../components/query"), {
  loading: () => (
    <div>
      {" "}
      <div className="wait">Wait</div>
    </div>
  ),
  /* suspense: true, */
  ssr: false,
});

import Head from "next/head";

const mongoosequery = () => {
  const [selected, setSelected] = useState("find");
  const [sort, setsort] = useState("nosort");
  const [sortname, setsortname] = useState("");
  const [fieldname, setfieldname] = useState("");
  const [fieldvalue, setfieldvalue] = useState("");
  const [updatefield, setupdatefield] = useState("");
  const [updatevalue, setupdatevalue] = useState("");
  const [modelname, setmodelname] = useState("");
  const [iscookieset, setiscookieset] = useState("");
  const [limit, setlimit] = useState("");
  const selection = (e) => {
    setSelected(e.target.value);
  };

  const themodel = (e) => {
    const capitalizeFirst = (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    };
    var name = capitalizeFirst(modelname);
    var cookiedate = Date.getDate;
    var cookie =
      (document.cookie = `mname=${name}; expires=Thu, 18 Dec 2023 12:00:00 UTC;`);
    cookies();
  };

  const updatemodel = (e) => {
    const capitalizeFirst = (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    };
    var name = capitalizeFirst(iscookieset);
    var cookiedate = Date.getDate;
    var cookie =
      (document.cookie = `mname=${name}; expires=Thu, 18 Dec 2023 12:00:00 UTC;`);
  };

  const cookies = () => {
    if (window !== "undefined") {
      var x = document.cookie;
      var cookie = cookievalue("mname", x);
      setiscookieset(cookie);
    }
  };

  useEffect(() => {
    cookies();
  }, []);
  return (
    <>
      <Head>
        <title>Mongoose Query Builder</title>
        <meta charset="utf-8" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="application-name" content="Mongoose query builder" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          name="description"
          content="Mongoose query builder for developers "
        />
      </Head>{" "}
      <div>
        <div className="logo">
          <h1>Mongoose Query Builder</h1>
        </div>
        <div className="controls">
          {iscookieset ? (
            <>
              <div className="ffg">
                <label htmlFor="modelname">Model Name </label>
                <div className="innergroup">
                  <input
                    type="text"
                    value={iscookieset}
                    onChange={(e) => setiscookieset(e.target.value)}
                  />{" "}
                  <button onClick={updatemodel}>Update Model</button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="ffg">
                <label htmlFor="setcookie">Model Name</label>
                <div className="innergroup">
                  <input
                    type="text"
                    value={modelname}
                    onChange={(e) => setmodelname(e.target.value)}
                  />
                  <button onClick={themodel}> Save Model</button>
                </div>
              </div>
            </>
          )}

          {/* model name end */}
          <div className="ffg">
            <label htmlFor="Query">Query</label>
            <select onChange={(e) => selection(e)} value={selected}>
              <option value="save">Save</option>
              <option value="find">Find</option>
              <option value="findbyid">FindById</option>
              <option value="findone">FindOne</option>
              <option value="findbyidandupdate">FindByIdandUpdate</option>
              <option value="findoneandupdate">FindoneandUpdate</option>
              <option value="findbyidanddelete">FindbyidandDelete</option>
              <option value="findoneanddelete">FindoneandDelete</option>
              <option value="findbyidandremove">FindbyidandRemove</option>
              <option value="findoneandremove">FindoneandRemove</option>
              <option value="remove">Remove</option>
              <option value="deleteone">Delete One</option>
              <option value="deletemany">Delete Many</option>
              <option value="updateone">Update One</option>
              <option value="updatemany">Update Many</option>
            </select>
          </div>

          {selected == "findone" ||
          selected == "findoneandremove" ||
          selected == "findoneanddelete" ||
          selected == "deleteone" ||
          selected == "deletemany" ||
          selected == "remove" ||
          selected == "updatemany" ||
          selected == "findoneandupdate" ? (
            <>
              {" "}
              <div className="ffg">
                <label htmlFor="field Name">Field Name</label>
                <input
                  type="text"
                  value={fieldname}
                  onChange={(e) => setfieldname(e.target.value)}
                />{" "}
              </div>
            </>
          ) : null}

          {selected == "findone" ||
          selected == "findoneandremove" ||
          selected == "findoneanddelete" ||
          selected == "deleteone" ||
          selected == "deletemany" ||
          selected == "remove" ||
          selected == "updatemany" ||
          selected == "findoneandupdate" ? (
            <>
              {" "}
              <div className="ffg">
                <label htmlFor="field value">Field Value</label>
                <input
                  type="text"
                  value={fieldvalue}
                  onChange={(e) => setfieldvalue(e.target.value)}
                />{" "}
              </div>
            </>
          ) : null}

          {selected == "findoneandupdate" ||
          selected == "updatemany" ||
          selected == "updateone" ||
          selected == "findbyidandupdate" ? (
            <>
              {" "}
              <div className="ffg">
                <label htmlFor="update Name">Update Field</label>
                <input
                  type="text"
                  value={updatefield}
                  onChange={(e) => setupdatefield(e.target.value)}
                />{" "}
              </div>
            </>
          ) : null}

          {selected == "findoneandupdate" ||
          selected == "updatemany" ||
          selected == "updateone" ||
          selected == "findbyidandupdate" ? (
            <>
              {" "}
              <div className="ffg">
                <label htmlFor="update value">Update Value</label>
                <input
                  type="text"
                  value={updatevalue}
                  onChange={(e) => setupdatevalue(e.target.value)}
                />{" "}
              </div>
            </>
          ) : null}

          {selected == "find" ? (
            <>
              {" "}
              <div className="ffg">
                <label htmlFor="limits">Limit</label>
                <input
                  type="number"
                  value={limit}
                  onChange={(e) => setlimit(e.target.value)}
                />
              </div>
            </>
          ) : null}

          {selected == "find" ? (
            <>
              {" "}
              <div className="ffg">
                <label htmlFor="sort">Sort</label>
                <select onChange={(e) => setsort(e.target.value)} value={sort}>
                  <option value="nosort">Not Sort</option>
                  <option value="sortasc">Ascending</option>
                  <option value="sortdesc">Descindg</option>
                </select>{" "}
              </div>
            </>
          ) : null}

          <div className="ffg">
            {sort == "nosort" ||
            selected == "findbyidandupdate" ||
            selected == "save" ||
            selected == "findone" ||
            selected == "findbyidanddelete" ||
            selected == "findoneandupdate" ||
            selected == "findbyidandremove" ||
            selected == "findoneandremove" ||
            selected == "findoneanddelete" ||
            selected == "deleteone" ||
            selected == "deletemany" ||
            selected == "remove" ||
            selected == "updateone" ||
            selected == "updatemany" ||
            selected == "findbyid" ? null : (
              <>
                <label htmlFor="Sort Field">Sort by Field Name</label>
                <input
                  type="text"
                  value={sortname}
                  onChange={(e) => setsortname(e.target.value)}
                />
              </>
            )}
          </div>
        </div>

        {modelname || iscookieset ? (
          <Querycomponent
            themodelname={iscookieset}
            query={selected}
            limit={limit}
            sortby={sort}
            sortname={sortname}
            thename={fieldname}
            thevalue={fieldvalue}
            fieldupdate={updatefield}
            valueupdate={updatevalue}
          />
        ) : (
          <div className="showerror">To use the app first save Model Name</div>
        )}
      </div>
      <div className="developer">
        Made with <span className="red">❤</span> by{" "}
        <a href="https://instagram.com/amanp_30"> Aman Pareek</a>
        <br></br>
        github - <a href="https://github.com/Amanp30"> Amanp30</a>
      </div>
    </>
  );
};

export default mongoosequery;
