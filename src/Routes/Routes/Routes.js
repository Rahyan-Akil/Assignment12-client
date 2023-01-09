import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddServices from "../../Pages/AddServices";
import AllUsers from "../../Pages/AllUsers";
import Blog from "../../Pages/Blog";
import Home from "../../Pages/Home";
import Login from "../../Pages/Login";
import MyOrder from "../../Pages/MyOrder";
import Register from "../../Pages/Register";
import Single from "../../Single";




export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/category'),
            },
            {
                path:'/blog',
                element: <Blog></Blog>,
            },
            {
                path:'/login',
                element: <Login></Login>,
            },
            {
                path:'/register',
                element: <Register></Register>,
            },
            {
                path:'/addservices',
                element: <AddServices></AddServices>,
                loader: () => fetch('http://localhost:5000/category'),
            },
            {
                path: '/allmobile/:id',
                element: <Single></Single>,
                loader: async ({params}) =>  fetch(`http://localhost:5000/allmobile/${params.id}`)
            },   
            {
                path: '/allUsers',
                element: <AllUsers></AllUsers>,
                loader: async ({params}) =>  fetch(`http://localhost:5000/users`)
            }, 
            {
                path: '/myOrder',
                element: <MyOrder></MyOrder>,
                
            }, 
        ]
    },
    {path: '*', element: <div className="d-grid justify-content-center text-danger"><h1>404 Not Found Your Data</h1></div>}
])