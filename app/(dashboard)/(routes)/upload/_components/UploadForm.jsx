"use client";
import React, { useState } from "react";
import AlertMessage from "./AlertMessage";
import FilePreview from "./FilePreview";
import ProgressBar from "./ProgressBar";
import { useSelector } from "react-redux";
import AlertComp from "../_components/AlertComp";

function UploadForm({ uploadBtnClick }) {
  const progress = useSelector((state) => state.file.progress);
  const [file, setfile] = useState();
  const [ferr, setferr] = useState();
  const [showalert, setalert] = useState(true);
  const checkfile = (file) => {
    if (file && file.size > 2000000) {
      setferr("MAX size is 2 MB");
      setfile(null);
      return;
    } else {
      setferr(null);
      setfile(file);
      return;
    }
  };
  return (
    <div>
      <div className="text-center">
        <div className="flex items-center justify-center w-full text-center">
          <label
            // for="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800  hover:bg-gray-100 "
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-blue-600 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-lg text-gray-500  md:text-2xl">
                <span class="font-semibold">
                  Click to <strong className="text-blue-600">upload</strong>
                </span>{" "}
                or drag and drop
              </p>
              <p className="text-xs text-gray-500 md:text-sm">
                SVG, PNG, JPG or GIF (MAX size : 2 MB)
              </p>
            </div>
            <input
              onChange={(event) => {
                checkfile(event.target.files[0]);
              }}
              id="dropzone-file"
              type="file"
              class="hidden"
            />
          </label>
        </div>
        {ferr && <AlertMessage msg={ferr} />}
        {file && <FilePreview file={file} removfile={() => setfile(null)} />}
        {file && progress > 0 ? <ProgressBar /> : null}
        <button
          onClick={() => uploadBtnClick(file)}
          disabled={!file}
          className="mt-8 px-12 py-3 bg-blue-500 rounded-full  text-white disabled:bg-gray-400"
        >
          upload
        </button>
      </div>
    </div>
  );
}

export default UploadForm;

//
