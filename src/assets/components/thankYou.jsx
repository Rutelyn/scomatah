import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold text-teal-600">Thank You!</h1>
      <p className="text-gray-600 mt-2 text-lg">Your message has been submitted successfully.</p>
      <Link to="/" className="mt-6 bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700">
        Back to Home
      </Link>
    </div>
  );
};

export default ThankYou;
