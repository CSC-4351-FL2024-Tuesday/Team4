import Image from "next/image";
import StudentProfile from "./components/student_profile";
import Header from "./components/header";
import StudentLoginPage from "./components/student_login";
import ResumeUpload from "./components/resume_upload";
import {SearchBar} from "./components/recruiter_search";
import { ResultsList } from "./utils/result_list";
import { results } from "./utils/data";

export default function Home() {
  return (
    <ResultsList items={results}/>
  );
}
