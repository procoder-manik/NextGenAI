import Button from "../../components/ui/Button";
import SEO from "../../seo/SEO";

export default function NotFound() { return <main className="grid min-h-[70vh] place-items-center px-4 text-center"><SEO title="Page not found" path="/404" /><div><p className="text-8xl font-bold text-blue-600">404</p><div className="mx-auto mt-6 grid h-24 w-24 place-items-center rounded-full bg-blue-100 text-4xl">⌁</div><h1 className="mt-7 text-3xl font-bold">This page took a different route.</h1><p className="mx-auto mt-3 max-w-md leading-7 text-slate-600">The page you’re looking for may have moved, changed, or never existed.</p><Button to="/" className="mt-7">Return home</Button></div></main>; }
