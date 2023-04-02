import { useState, useRef } from "react";
import styles from "./ImgPreviewer.module.css";
import { CiBaseball } from "react-icons/ci";
import { CiFootball } from "react-icons/ci";
import { CiBasketball } from "react-icons/ci";
import { MdUpload } from "react-icons/md";

export default function FilePreviewer() {
  // File State
  const [imagePreview, setImagePreview] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);

  // File Picker Ref because we are not useing the standard File picker input
  const filePicekerRef = useRef(null);

  function previewFile(e) {
    // Reading New File (open file Picker Box)
    const reader = new FileReader();

    // Gettting Selected File (user can select multiple but we are choosing only one)
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      reader.readAsDataURL(selectedFile);
    }

    // As the File loaded then set the stage as per the file type
    reader.onload = (readerEvent) => {
      if (selectedFile.type.includes("image")) {
        setImagePreview(readerEvent.target.result);
      } else if (selectedFile.type.includes("video")) {
        setVideoPreview(readerEvent.target.result);
      }
    };
  }

  function clearFiles() {
    setImagePreview(null);
    setVideoPreview(null);
  }

  return (
    <>
      <div className={styles.btnContainer}>
        <input
          ref={filePicekerRef}
          accept="image/*, video/*"
          onChange={previewFile}
          type="file"
          hidden
        />
      </div>

      <div className={styles.preview}>
        {imagePreview != null && <img src={imagePreview} alt="" />}
        {videoPreview != null && <video controls src={videoPreview}></video>}
        <div className={styles.imgFooter}>
          {/* <CiBaseball size={30} />
          <CiFootball size={30} />
          <CiBasketball size={30} /> */}
          <button
            className={styles.btn}
            onClick={() => filePicekerRef.current.click()}
          >
            <MdUpload />
          </button>
          {(imagePreview || videoPreview) && (
            <button className={styles.btn} onClick={clearFiles}>
              x
            </button>
          )}
        </div>
      </div>
    </>
  );
}
