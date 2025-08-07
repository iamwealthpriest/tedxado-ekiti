import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function NotFound() {
  return (
    <main className="min-h-[85vh] flex items-center justify-center bg-black px-6 animate-fadeIn">
      <div className="text-center w-full">
        <h1 className="text-[15rem] font-bricolage mb-5 font-bold bg-gradient-to-br from-gray to-red bg-clip-text text-transparent animate-pulse">
          404
        </h1>

        <p className="text-2xl font-bricolage mb-2 text-white-800 animate-fadeIn delay-200">
          This page isn’t part of the talk.
        </p>
        <p className="text-xl font-bricolage text-white-500 animate-fadeIn delay-300">
          Let’s get you back to the main stage.
        </p>

        <div className="pt-3 flex mt-5 flex-col gap-3 animate-fadeIn delay-600">
          <Link to="/">
            <Button text="Back to Home" className="btn-orange" />
          </Link>
        </div>
      </div>
    </main>
  );
}
