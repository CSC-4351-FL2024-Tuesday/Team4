"use client";

import { useRef, useState } from "react";

export default function DragAndDrop() {
    const [dragActive, setDragActive] = useState<boolean>(false);
    const inputRef = useRef<any>(null);
    const [files, setFiles] = useState<any>([]);

    const handleDragEnter = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(true);
    };

    const handleDragLeave = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
    };

    const handleDragOver = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(true);
    };

    const handleDrop = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if(e.dataTransfer.files && e.dataTransfer.files[0]){
            for(let i = 0; i < e.dataTransfer.files["length"]; i++){
                setFiles((prevState: any) => [...prevState, e.dataTransfer.files[i]]);
            }
        }
    };

    const openFileExplorer = () => {
        inputRef.current.value = "";
        inputRef.current.click();
    };

    const handleFileChange = (e: any) => {
        e.preventDefault();
        console.log("File has been added");
        if(e.target.files && e.target.files[0]){
            for(let i = 0; i < e.target.files["length"]; i++){
                setFiles((prevState: any) => [...prevState, e.target.files[i]]);
            }
        }
    };

    function handleSubmitFile(e: any) {
        if(files.length === 0){
            // Show error message
        }
        else{
            // Perform file upload logic here
        }
    };

    const removeFile = (name: any, index: any) => {
        let newFiles = files.filter((file: any) => file.name !== name);
        setFiles(newFiles);
    };

    return (
        <div className="flex items-center justify-center min-h-max min-w-max">
            <form 
                className={`${
                    dragActive ? "bg-blue-600" : "bg-blue-400"
                } p-4 rounded-lg min-h-[10rem] text-center flex flex-col items-center justify-center`}
                onDragEnter={handleDragEnter}
                onSubmit={(e) => e.preventDefault()}
                onDrop={handleDrop}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
            >
                <input
                    placeholder="fileInput"
                    className="hidden"
                    ref={inputRef}
                    type="file"
                    multiple={true}
                    onChange={handleFileChange}
                    accept=".pdf, .doc, .docx"
                />
                <p>
                    Drag & Drop your files here or {" "}
                    <span
                        className="text-blue-600 cursor-pointer"
                        onClick={openFileExplorer}
                    >
                        <u>Select Files</u>
                    </span>{" "}
                    to upload
                </p>
                <div className="flex flex-col items-center p-3">
                    {files.map((file: any, index: any) => (
                        <div key={index} className="flex flex-row space-x-5">
                            <span>{file.name}</span>
                            <span className="text-red-500 cursor-pointer"
                                onClick = {() => removeFile(file.name, index)}
                            >
                                remove
                            </span>
                        </div>
                    ))}
                </div>
            </form>
        </div>
    );
}