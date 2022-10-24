import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import About from "../../Pages/About/About";
import Blogs from "../../Pages/Blogs/Blogs";
import CourseSubjects from "../../Pages/Courses/CourseSubjects/CourseSubjects";
import CourseSubjectsDetails from "../../Pages/Courses/CourseSubjectsDetails/CourseSubjectsDetails";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/courses',
                element: <CourseSubjects></CourseSubjects>
            },
            {
                path: '/courseDetails/:id',
                element: <CourseSubjectsDetails></CourseSubjectsDetails>
            }
        ]
    }
])