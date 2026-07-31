import { Helmet } from "react-helmet-async";
import site from "../config/site";

export default function SEO({ title, description = "AI-powered digital solutions for ambitious businesses.", path = "" }) { const fullTitle = title ? `${title} | ${site.name}` : `${site.name} | ${site.tagline}`; const url = `https://nextgenai.com${path}`; return <Helmet><title>{fullTitle}</title><meta name="description" content={description} /><link rel="canonical" href={url} /><meta property="og:title" content={fullTitle} /><meta property="og:description" content={description} /><meta property="og:type" content="website" /><meta property="og:url" content={url} /></Helmet>; }
