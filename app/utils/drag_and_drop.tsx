"use client";

import { Button } from "@/components/ui/button";
import { FormEvent, useRef, useState } from "react";
import { useRouter } from 'next/navigation';
import { Skeleton } from "@/components/ui/skeleton";

export default function DragAndDrop() {
    const [dragActive, setDragActive] = useState<boolean>(false);
    const inputRef = useRef<any>(null);
    const [file, setFile] = useState<File | null>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter();

    //const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

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

    const handleDrop = (event: any) => {
        event.preventDefault();
        setDragActive(false);
    
        if (event.dataTransfer.files && event.dataTransfer.files[0]) {
            const newFile = event.dataTransfer.files[0];
            setFile(newFile);
        }
    };
    

    const openFileExplorer = () => {
        inputRef.current.value = "";
        inputRef.current.click();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const newFile = event.target.files[0];
            setFile(newFile);
        }
    };
    

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!file) {
          alert('Please select a file to upload.');
          return;
        }

        setIsLoading(true);
        const formData = new FormData();
        formData.append('file', file); // 'file' should match the key expected by your Django backend
    
        try {
          const response = await fetch('http://localhost:8000/api/upload/', { // Update URL to your actual endpoint
            method: 'POST',
            body: formData,
            credentials: 'include', // to include cookies (e.g., sessionid)
          });
          
            setIsLoading(false);
          if (response.ok) {
            const data = await response.json();
            router.push('/student');
          } else {
            alert('Upload failed. Please try again.');
          }
        } catch (error) {
          console.error('Error uploading file:', error);
          alert('An error occurred. Please try again.');
        }
      };
    const removeFile = () => {
        setFile(null);
    };

    return (
        <div className="flex items-center justify-center min-h-max min-w-max">
            {isLoading ? (
                <div className='flex flex-col'>
                <div className='flex gap-5 pb-5'>
                    <Skeleton className='items-center gap-2 rounded-lg border p-3 text-md transition-all hover:bg-accent py-10 px-10' />
                    <Skeleton className='items-center gap-2 rounded-lg border p-3 text-md transition-all hover:bg-accent py-10 px-10' />
                </div>
                <div className='flex gap-5'>
                    <Skeleton className='items-center gap-2 rounded-lg border p-3 text-md transition-all hover:bg-accent py-10 px-10' />
                    <Skeleton className='items-center gap-2 rounded-lg border p-3 text-md transition-all hover:bg-accent py-10 px-10' />
                </div>
                </div>
            ) : 
            (<form 
                className={`${
                    dragActive ? "bg-blue-600" : "bg-blue-400"
                } p-4 rounded-lg min-h-[10rem] text-center flex flex-col items-center justify-center`}
                onDragEnter={handleDragEnter}
                onSubmit={handleSubmit}
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
                    Drag & Drop your Resume here or {" "}
                    <span
                        className="text-blue-600 cursor-pointer"
                        onClick={openFileExplorer}
                    >
                        <u>Select Files</u>
                    </span>{" "}
                    to upload
                </p>
                <div className="flex flex-col items-center p-3">
                    {
                        file && (
                        <div>
                            <p className="text-lg font-semibold">Files to be uploaded:</p>
                            <div className="flex flex-row space-x-5">
                                <span>{file.name}</span>
                                <span className="text-red-500 cursor-pointer"
                                    onClick = {() => removeFile()}
                                >
                                    remove
                                </span>
                            </div>
                            <Button
                                type="submit"
                                className="bg-black p-2 rounded-lg text-white"
                            >
                                Upload
                            </Button>
                        </div>
                    )}
                </div>
            </form>
            )}
        </div>
    );
}