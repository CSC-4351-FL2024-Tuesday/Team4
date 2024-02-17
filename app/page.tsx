import StudentProfile from "./student/profile/student_profile";
import StudentLoginPage from "./login/student_login";
import ResumeUpload from "./student/signup/resume_upload";
import { ResultsList } from "./utils/result_list";
import { results } from "./utils/data";
import StudentInfo from "./components/common/student_info";
import Results from "./recruiter/results/results";
import { Result } from "postcss";
import RecruiterDashboard from "./recruiter/recruiter_dashboard";
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
