import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/rootLayout";
import HomePage from "../Pages/UserPage/HomePage";
import ProductsPage from "../Pages/UserPage/ProductsPage";
import ProductsDeatilsPage from "../Pages/UserPage/ProductsDeatilsPage";
import SignupPage from "../Pages/UserPage/SignupPage";
import LoginPage from "../Pages/UserPage/LoginPage";
import CustmerHomePage from "../Pages/CustmerPage/CustmerHomePage";
import CustmerLayout from "../Layout/CustmerLayout";
import CutmerProductPage from "../Pages/CustmerPage/CutmerProductPage";
import CustmerCartPage from "../Pages/CustmerPage/CustmerCartPage";
import CustmerShippingAddressPage from "../Pages/CustmerPage/CustmerShippingAddressPage";
import CustmerPaymentSuccess from "../Pages/CustmerPage/CustmerPaymentSuccess";
import CustmerCanselPage from "../Pages/CustmerPage/CustmerCanselPage";
import CustmerOrdersPage from "../Pages/CustmerPage/CustmerOrdersPage";
import CustmerProductDeatilsPage from "../Pages/CustmerPage/CustmerProductDeatilsPage";
import CustmerAboutPage from "../Pages/CustmerPage/CustmerAboutPage";
import CustmerContactPage from "../Pages/CustmerPage/CustmerContactPage";
import CustmerProfilePage from "../Pages/CustmerPage/CustmerProfilePage";
import AdminLayout from "../Layout/AdminLayout";
import AdminHomePage from "../Pages/AdminPage/AdminHomePage";
import AdminCustmerPage from "../Pages/AdminPage/AdminCustmerPage";
import AdminLoginPage from "../Pages/UserPage/AdminLoginPage";


export const router=createBrowserRouter([
    {
        path: "/",
        element:<RootLayout/>,
        children:[
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/products",
                element: <ProductsPage />
            },
            {
                path: "/productsDetails/:id",
                element: <ProductsDeatilsPage />
            },
            {
                path: "/Signup",
                element: <SignupPage/>
            },
            {
                path: "/loginPage",
                element: <LoginPage />
            },
            {
                path: "/AdminloginPage",
                element: <AdminLoginPage/>
            },
            
            
            
        ]   
    }, {
    path: "custmer",
    element:<CustmerLayout/>, //call layout
    children:[
        {    
            path: "custmer",
            element: <CustmerHomePage />
        },
        {
            path: "custmerProduct",
            element: <CutmerProductPage/>
        },
        {
            path: "custmercartpage",
            element: <CustmerCartPage/>
        },
        {
            path: "custmershipping",
            element: <CustmerShippingAddressPage/>
        },
        {
            path: "custmersuccess",
            element: <CustmerPaymentSuccess/>
        },
        {
            path: "custmercansel",
            element: <CustmerCanselPage/>
        },
        {
            path: "CustmerOrdersPage",
            element: <CustmerOrdersPage/>
        },
        
        {
            path: "CustmerProductPage/:id",
            element: <CustmerProductDeatilsPage/>
        },
        {
            path: "CustmerAbout",
            element: <CustmerAboutPage/>
        },
      
        {
            path: "CustmerContact",
            element: <CustmerContactPage/>
        },
        {
            path: "CustmerProfile",
            element: <CustmerProfilePage/>
        },



       
]},
{
    path: "admin",
    element:<AdminLayout/>, //call layout
    children:[
        {    
            path: "admin",
            element: <AdminHomePage/>
        },
        {    
            path: "admincustmer",
            element: <AdminCustmerPage/>
        },
        
       
]}

])