"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DeleteAccount() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    reason: "",
  });

  const [alert, setAlert] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, mobile, reason } = formData;

    if (!name || !mobile || !reason) {
      setAlert({ type: "error", message: "Please fill out all fields." });
      return;
    }

    // Form submission logic here (e.g., API call)

    setAlert({ type: "success", message: "Account deleted successfully!" });

    // Redirect after a short delay
    setTimeout(() => {
      router.push("/");
    }, 2000);
  };

  return (
    <div className="max-w-md mx-auto mt-21 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-gray-800 font-medium text-3xl mb-5 mt-5">Delete Account</h1>

      {/* Alert Box */}
      {alert.message && (
        <div
          className={`mb-4 p-3 rounded ${
            alert.type === "error" ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"
          }`}
        >
          {alert.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium text-gray-700 mb-1">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 text-gray-600"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Mobile Number:</label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 text-gray-600"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Select Reason:</label>
          <select
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 text-gray-600"
          >
            <option value="">-- Select a reason --</option>
            <option value="Privacy concern">Privacy concern</option>
            <option value="Not satisfied with service">Not satisfied with service</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition"
        >
          Delete Account
        </button>
      </form>
    </div>
  );
}
