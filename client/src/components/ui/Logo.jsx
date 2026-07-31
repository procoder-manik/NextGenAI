import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2"
      aria-label="NextGenAI Home"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-lg font-bold text-white">
        N
      </div>

      <div>
        <h1 className="text-xl font-bold text-gray-900">
          NextGenAI
        </h1>

        <p className="text-xs text-gray-500">
          AI & Digital Solutions
        </p>
      </div>
    </Link>
  );
}