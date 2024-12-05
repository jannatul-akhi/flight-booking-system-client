import { useState } from "react";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the feedback details.
    console.log({ email, message, feedback });
    alert("Thank you for your feedback!");
    setEmail("");
    setMessage("");
    setFeedback("");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4">We Value Your Feedback</h2>
      <form onSubmit={handleSubmit}>
        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Your Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
            placeholder="Enter your email"
          />
        </div>

        {/* Feedback Selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">How was your experience?</label>
          <select
            required
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
          >
            <option value="">Select feedback</option>
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Average">Average</option>
            <option value="Poor">Poor</option>
          </select>
        </div>

        {/* Message Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Your Message</label>
          <textarea
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
            rows="4"
            placeholder="Tell us about your experience"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default Feedback;
