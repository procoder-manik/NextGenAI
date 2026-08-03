import { Routes, Route } from "react-router-dom";

import AdminLayout from "../admin/AdminLayout";
import AdminDashboard from "../admin/AdminDashboard";

import Blogs from "../admin/Blogs";
import Services from "../admin/Services";
import Portfolio from "../admin/Portfolio";
import FAQ from "../admin/FAQ";
import Team from "../admin/Team";
import Testimonials from "../admin/Testimonials";
import Users from "../admin/Users";
import SEO from "../admin/SEO";


export default function AdminRoutes(){

    return (

        <Routes>

            <Route 
                path="/admin"
                element={<AdminLayout />}
            >

                <Route 
                    path="dashboard"
                    element={<AdminDashboard />}
                />

                <Route 
                    path="blogs"
                    element={<Blogs />}
                />

                <Route 
                    path="services"
                    element={<Services />}
                />

                <Route 
                    path="portfolio"
                    element={<Portfolio />}
                />

                <Route 
                    path="faq"
                    element={<FAQ />}
                />

                <Route 
                    path="team"
                    element={<Team />}
                />

                <Route 
                    path="testimonials"
                    element={<Testimonials />}
                />

                <Route 
                    path="users"
                    element={<Users />}
                />

                <Route 
                    path="seo"
                    element={<SEO />}
                />

            </Route>

        </Routes>

    );

}