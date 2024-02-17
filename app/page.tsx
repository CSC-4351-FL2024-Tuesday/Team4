import StudentProfile from "./components/student-facing/student_profile";
import StudentLoginPage from "./login/student_login";
import ResumeUpload from "./components/student-facing/resume_upload";
import {SearchBar} from "./components/recruiter-facing/recruiter_search";
import { ResultsList } from "./utils/result_list";
import { results } from "./utils/data";
import StudentInfo from "./components/common/student_info";
import Results from "./components/recruiter-facing/results";
import { Result } from "postcss";
import RecruiterDashboard from "./components/recruiter-facing/recruiter_dashboard";
import { Contacts } from "./messages/contacts";
import {Chat} from "./messages/chat";
import Messages from "./messages/page";
import Landing from "./components/common/landing";
import Rhetoricals from "./components/common/rhetoricals_scrolling";

export default function Home() {
  return (
    //<Contacts items={results}/>
    <Landing/>
  );
}
