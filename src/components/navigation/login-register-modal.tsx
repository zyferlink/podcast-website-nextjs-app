import Link from "next/link";
import type React from "react";
import { type FormEvent, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

const LoginRegisterModal: React.FC<{
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  isLogin: boolean;
  setIsLogin: (value: boolean) => void;
}> = ({ showModal, setShowModal, isLogin, setIsLogin }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (isLogin) {
      // Handle login logic here
      console.log("Logging in with:", { email, password });
    } else {
      // Handle register logic here
      console.log("Registering with:", { fullName, email, password });
    }

    // Reset form (optional)
    setFullName("");
    setEmail("");
    setPassword("");
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 w-full h-screen z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative bg-[#2D333C] border border-white/10 rounded-3xl p-10 w-md md:w-125 shadow-2xl animate-fadeIn">
            {/* Close */}
            <button
              type="button"
              className="absolute top-5 right-5 text-4xl cursor-pointer text-white hover:text-primary transition-all"
              onClick={() => setShowModal(false)}
            >
              <IoCloseCircleOutline size={36} />
            </button>

            {/* Title */}
            <h2 className="text-3xl font-semibold mb-8 text-white">
              {isLogin ? "Login to Your Account" : "Register Your Account"}
            </h2>

            {/* Form */}
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              {!isLogin && (
                <input
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-gray-800 text-white border border-white px-3 py-3 rounded-xl 
                    focus:border-primary focus:outline-none transition-all"
                  required
                />
              )}

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-800 text-white border border-white px-3 py-3 rounded-xl 
                    focus:border-primary focus:outline-none transition-all"
                required
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-800 text-white border border-white px-3 py-3 rounded-xl 
                    focus:border-primary focus:outline-none transition-all"
                required
              />

              {/* Submit */}
              <button
                type="submit"
                className="w-full mt-3 bg-primary text-black py-3 rounded-xl
                  font-semibold hover:bg-orange-300 transition-all cursor-pointer"
              >
                {isLogin ? "Login Now" : "Register Now"}
              </button>
            </form>

            {/* Switch Auth */}
            <p className="text-center text-sm mt-4 text-white/70 font-semibold">
              {isLogin ? (
                <>
                  Don't have an account?{" "}
                  <button
                    type="button"
                    className="text-primary cursor-pointer hover:underline transition-all"
                    onClick={() => setIsLogin(false)}
                  >
                    Register Here
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <button
                    type="button"
                    className="text-primary cursor-pointer hover:underline transition-all"
                    onClick={() => setIsLogin(true)}
                  >
                    Login Here
                  </button>
                </>
              )}
            </p>

            {/* Footer */}
            <p className="text-center text-sm text-white/50 pt-4 mt-6 border-t border-white/10">
              By Signing in or signing up to <strong>ZyferLink</strong>, you
              agree to our{" "}
              <Link href="/" className="text-primary hover:underline">
                Terms Of Use
              </Link>{" "}
              and{" "}
              <Link href="/" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginRegisterModal;
