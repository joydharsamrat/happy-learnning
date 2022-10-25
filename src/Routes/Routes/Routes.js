import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import About from "../../Pages/About/About";
import Blogs from "../../Pages/Blogs/Blogs";
import CourseCategories from "../../Pages/Courses/CourseCategories/CourseCategories";
import Courses from "../../Pages/Courses/Courses/Courses";
import CourseSubjectsDetails from "../../Pages/Courses/CourseSubjectsDetails/CourseSubjectsDetails";
import Error from "../../Pages/Error/Error";
import Faq from "../../Pages/Faq/Faq";
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
                loader: () => fetch('http://localhost:5000/categories'),
                element: <Courses></Courses>,

                children: [
                    {
                        path: '/courses',
                        loader: () => fetch('http://localhost:5000/categories'),
                        element: <CourseCategories></CourseCategories>
                    },

                    {
                        path: '/courses/courseDetails/:id',
                        loader: ({ params }) => fetch(`http://localhost:5000/details/${params.id}`),
                        element: <CourseSubjectsDetails></CourseSubjectsDetails>
                    }

                ]

            },
            {
                path: 'faq',
                element: <Faq></Faq>
            }
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
])