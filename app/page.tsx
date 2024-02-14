import StudentProfile from "./components/student_profile";
import StudentLoginPage from "./components/student_login";
import ResumeUpload from "./components/resume_upload";
import {SearchBar} from "./components/recruiter_search";
import { ResultsList } from "./utils/result_list";
import { results } from "./utils/data";
import StudentInfo from "./components/common/student_info";
import Results from "./components/results";
import { Result } from "postcss";
import StudentDashboard from "./components/student_dashboard";
import RecruiterDashboard from "./components/recruiter_dashboard";

export default function Home() {
  return (
    <RecruiterDashboard/>
  );
}
