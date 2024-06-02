import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import StudentLogin from "./pages/StudentLogin";
import StudentRegister from "./pages/StudentRegister";
import TeacherLogin from "./pages/TeacherLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StudentsDashboard from "./pages/students/StudentsDashboard";
import StudentsAllStories from "./pages/students/normalQuestions/StudentsAllStories";
import ViewStory from "./pages/students/normalQuestions/ViewStory";
import NormalStudentsQuestions from "./pages/students/normalQuestions/NormalStudentsQuestions";
import Remarks from "./pages/students/normalQuestions/Remarks";
import TeachersDashboard from "./pages/teachers/TeachersDashboard";
import AddNormalQuestions from "./pages/teachers/normalQuestions/AddNormalQuestions";
import AddAssignmentsQuestions from "./pages/teachers/assignmentQuestions/AddAssignmentsQuestions";
import AllAssignments from "./pages/teachers/assignmentQuestions/AllAssignments";
import ViewAssignment from "./pages/teachers/assignmentQuestions/ViewAssignment";
import EssayAssignments from "./pages/teachers/assignmentQuestions/AssignmentsTypes/EssayAssignments";
import AddStory from "./pages/teachers/normalQuestions/story/AddStory";
import AllStories from "./pages/teachers/normalQuestions/story/AllStories";
import AssignmentsStudentsQuestions from "./pages/students/assignmentQuestions/AssignmentsStudentsQuestions";
import AssignmentsRewards from "./pages/students/assignmentQuestions/AssignmentsRewards";
import ViewAllQuestions from "./pages/teachers/normalQuestions/ViewAllQuestions";
import { user } from "./common/Common";
import TeacherViewStory from "./pages/teachers/normalQuestions/story/TeacherViewStory";
import Board from "./pages/students/Board";
import SingleEssay from "./pages/students/normalQuestions/SingleEssay";
import EssayRewards from "./pages/students/assignmentQuestions/EssayRewards";
import AllStudents from "./pages/teachers/students/AllStudents";
import ViewStudent from "./pages/teachers/students/ViewStudent";
import TeacherProfile from "./pages/teachers/TeacherProfile";
import StudentProfile from "./pages/students/StudentProfile";
import LeaderBoard from "./pages/students/LeaderBoard";
import AboutUs from "./pages/AboutUs";

// console.log(user);
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" name="Home Page" element={<Home />} />
          <Route exact path="/about" name="Home Page" element={<AboutUs />} />

          {/* <Route exact path="/teacherRegister" name="Teacher Register Page" element={<TeacherRegister />} /> */}

          <Route
            exact
            path="/teacherLogin"
            name="Teacher Login Page"
            element={<TeacherLogin />}
          />

          {/* Routes for Teachers Dashboard */}
          {user && user.name === "teacher" ? (
            <Route
              exact
              path="/teacherDashboard"
              name="Teachers Dashboard Page"
              element={<TeachersDashboard />}
            />
          ) : (
            <Route exact path="/*" name="404 Page" element={<StudentLogin />} />
          )}

          {/* Routes for Teachers Profile */}
          {user && user.name === "teacher" ? (
            <Route
              exact
              path="/teacherProfile"
              name="Teachers Profile Page"
              element={<TeacherProfile />}
            />
          ) : (
            <Route exact path="/*" name="404 Page" element={<StudentLogin />} />
          )}

          {/* Routes for Teachers to see all students and there rewards */}
          {user && user.name === "teacher" ? (
            <Route
              exact
              path="/allStudents"
              name="Teachers All students Page"
              element={<AllStudents />}
            />
          ) : (
            <Route exact path="/*" name="404 Page" element={<StudentLogin />} />
          )}

          {user && user.name === "teacher" ? (
            <Route
              exact
              path="/viewStudent/:id"
              name="Teachers All students Page"
              element={<ViewStudent />}
            />
          ) : (
            <Route exact path="/*" name="404 Page" element={<StudentLogin />} />
          )}

          {/* Routes for Teachers Normal Questions */}
          {user && user.name === "teacher" ? (
            <Route
              exact
              path="/addNormalQuestions"
              name="Teachers Add Normal Questions"
              element={<AddNormalQuestions />}
            />
          ) : (
            <Route exact path="/*" name="404 Page" element={<StudentLogin />} />
          )}

          {user && user.name === "teacher" ? (
            <Route
              exact
              path="/allNormalQuestions"
              name="Teachers View All Normal Questions"
              element={<ViewAllQuestions />}
            />
          ) : (
            <Route exact path="/*" name="404 Page" element={<StudentLogin />} />
          )}

          {/* Routes for Teachers for Adding Stories to Normal Questions */}
          {user && user.name === "teacher" ? (
            <Route
              exact
              path="/addStory"
              name="Teachers Add Story"
              element={<AddStory />}
            />
          ) : (
            <Route exact path="/*" name="404 Page" element={<StudentLogin />} />
          )}

          {user && user.name === "teacher" ? (
            <Route
              exact
              path="/allNormalStories"
              name="Teachers All Normal Stories"
              element={<AllStories />}
            />
          ) : (
            <Route exact path="/*" name="404 Page" element={<StudentLogin />} />
          )}

          {user && user.name === "teacher" ? (
            <Route
              exact
              path="/NormalStory/:id"
              name="Teachers All Normal Stories"
              element={<TeacherViewStory />}
            />
          ) : (
            <Route exact path="/*" name="404 Page" element={<StudentLogin />} />
          )}

          {/* Routes for Teachers Assignments Questions */}
          {user && user.name === "teacher" ? (
            <Route
              exact
              path="/allAssigments"
              name="Teachers View Assignments Questions"
              element={<AllAssignments />}
            />
          ) : (
            <Route exact path="/*" name="404 Page" element={<StudentLogin />} />
          )}

          {user && user.name === "teacher" ? (
            <Route
              exact
              path="/addEssay"
              name="Teachers Add Assignments Essay"
              element={<EssayAssignments />}
            />
          ) : (
            <Route exact path="/*" name="404 Page" element={<StudentLogin />} />
          )}

          {user && user.name === "teacher" ? (
            <Route
              exact
              path="/viewAssignment/:id"
              name="Teachers View Assignment Questions"
              element={<ViewAssignment />}
            />
          ) : (
            <Route exact path="/*" name="404 Page" element={<StudentLogin />} />
          )}

          {user && user.name === "teacher" ? (
            <Route
              exact
              path="/addAssignments"
              name="Teachers Add Assignments Questions"
              element={<AddAssignmentsQuestions />}
            />
          ) : (
            <Route exact path="/*" name="404 Page" element={<StudentLogin />} />
          )}

          {/* Routes for Students */}

          <Route
            exact
            path="/studentRegister"
            name="Student Register Page"
            element={<StudentRegister />}
          />

          <Route
            exact
            path="/studentLogin"
            name="Students Login Page"
            element={<StudentLogin />}
          />

          {/* Routes for Students Dashboard */}
          {user && user.name !== "teacher" ? (
            <Route
              exact
              path="/studentDashboard"
              name="Students Dashboard Page"
              element={<StudentsDashboard />}
            />
          ) : (
            <Route exact path="/*" name="404 Page" element={<StudentLogin />} />
          )}

          {/* Routes for Students LeaderBoard */}
          {user && user.name !== "teacher" ? (
            <Route
              exact
              path="/leaderBoard"
              name="Students LeaderBoard Page"
              element={<LeaderBoard />}
            />
          ) : (
            <Route exact path="/*" name="404 Page" element={<StudentLogin />} />
          )}

          {/* Routes for Students Profile */}
          {user && user.name !== "teacher" ? (
            <Route
              exact
              path="/studentProfile"
              name="Students Profile Page"
              element={<StudentProfile />}
            />
          ) : (
            <Route exact path="/*" name="404 Page" element={<StudentLogin />} />
          )}
          {user && user.name !== "teacher" ? (
            <Route
              exact
              path="/studentRemarks"
              name="Students Remarks Page"
              element={<Board />}
            />
          ) : (
            <Route exact path="/*" name="404 Page" element={<StudentLogin />} />
          )}
          {/* Routes for Students Normal Questions All stories */}
          {user && user.name !== "teacher" ? (
            <Route
              exact
              path="/allStories"
              name="Students ALL Stories Page"
              element={<StudentsAllStories />}
            />
          ) : (
            <Route exact path="/*" name="404 Page" element={<StudentLogin />} />
          )}

          {/* Routes for Students Single Story */}
          {user && user.name !== "teacher" ? (
            <Route
              exact
              path="/story/:id"
              name="Students Single Story Page"
              element={<ViewStory />}
            />
          ) : (
            <Route exact path="/*" name="404 Page" element={<StudentLogin />} />
          )}

          {/* Routes for Students Normal Questions */}
          {user && user.name !== "teacher" ? (
            <Route
              exact
              path="/allStudentsNormalQuestions"
              name="Students ALL Normal Questions Page"
              element={<NormalStudentsQuestions />}
            />
          ) : (
            <Route exact path="/*" name="404 Page" element={<StudentLogin />} />
          )}

          {/* Routes for Students Assignments Questions */}
          {user && user.name !== "teacher" ? (
            <Route
              exact
              path="/allStudentsAssignmentsQuestions"
              name="Students ALL Assignments Questions Page"
              element={<AssignmentsStudentsQuestions />}
            />
          ) : (
            <Route exact path="/*" name="404 Page" element={<StudentLogin />} />
          )}

          {/* Routes for Students Single Normal Questions */}

          {user && user.name !== "teacher" ? (
            <Route
              exact
              path="/remarks"
              name="Students Normal Questions Remarks"
              element={<Remarks />}
            />
          ) : (
            <Route exact path="/*" name="404 Page" element={<StudentLogin />} />
          )}

          {/* Routes for Students Assignments Questions */}
          {user && user.name !== "teacher" ? (
            <Route
              exact
              path="/rewards"
              name="Students Assignments Questions Remarks"
              element={<AssignmentsRewards />}
            />
          ) : (
            <Route exact path="/*" name="404 Page" element={<StudentLogin />} />
          )}

          {user && user.name !== "teacher" ? (
            <Route
              exact
              path="/essay"
              name="Students Assignments Essays"
              element={<SingleEssay />}
            />
          ) : (
            <Route exact path="/*" name="404 Page" element={<StudentLogin />} />
          )}
          {user && user.name !== "teacher" ? (
            <Route
              exact
              path="/essayRewards"
              name="Students Assignments Essays Rewards"
              element={<EssayRewards />}
            />
          ) : (
            <Route exact path="/*" name="404 Page" element={<StudentLogin />} />
          )}
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
