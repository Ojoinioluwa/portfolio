import React, { useState } from "react";
import { FaGithub, FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import emailjs from "@emailjs/browser";

interface ContactPageProps {
  darkMode: boolean;
}

interface ContactFormState {
  name: string;
  email: string;
  message: string;
  status: "idle" | "submitting" | "success" | "error";
  errorMessage: string;
}

const ContactPage: React.FC<ContactPageProps> = ({ darkMode }) => {
  const [form, setForm] = useState<ContactFormState>({
    name: "",
    email: "",
    message: "",
    status: "idle",
    errorMessage: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prevForm) => ({
      ...prevForm,
      [e.target.name]: e.target.value,
      status: "idle",
      errorMessage: "",
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setForm((prevForm) => ({
      ...prevForm,
      status: "submitting",
      errorMessage: "",
    }));

    setTimeout(async () => {
      try {
        const serviceID = "service_wvadaig";
        const templateID = "template_tt7iw1r";
        const publicKey = "iCU1Eq2oWaWLmnW4s"; // Add this back in properly

        const templateParams = {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        };

        const response = await emailjs.send(
          serviceID,
          templateID,
          templateParams,
          publicKey
        );

        if (response.status === 200) {
          setForm({
            name: "",
            email: "",
            message: "",
            status: "success",
            errorMessage: "",
          });
          console.log("✅ Email sent successfully");
        } else {
          throw new Error("Failed to send message");
        }
      } catch (error: any) {
        console.error("❌ Email sending failed:", error);
        setForm((prevForm) => ({
          ...prevForm,
          status: "error",
          errorMessage:
            error?.text ||
            error?.message ||
            "An unexpected error occurred. Please try again.",
        }));
      }
    }, 150);
  };

  return (
    <section
      id="contact"
      className={`min-h-screen py-16 px-4 sm:px-6 md:px-12 lg:px-24 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-800"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 relative pb-4">
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
            Get In Touch
          </span>
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></span>
        </h2>

        {/* Contact Options Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 text-center sm:text-left">
          {/* Email */}
          <a
            href="mailto:ojoinioluwa05@gmail.com" // Updated to a more professional example email
            className="flex items-center justify-center sm:justify-start space-x-3 p-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md
                       border border-transparent hover:border-blue-300
                       ${darkMode ? 'bg-gray-800 hover:bg-gray-700 text-gray-300 border-gray-700 hover:border-blue-600' : 'bg-white hover:bg-gray-100 text-gray-700'}"
            aria-label="Send email to Ojay"
          >
            <FaEnvelope className="text-blue-500 w-6 h-6 flex-shrink-0" />
            <span className="truncate">ojoinioluwa05@gmail.com</span>
          </a>

          {/* Phone */}
          <a
            href="tel:+2349019802305"
            className="flex items-center justify-center sm:justify-start space-x-3 p-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md
                       border border-transparent hover:border-green-300
                       ${darkMode ? 'bg-gray-800 hover:bg-gray-700 text-gray-300 border-gray-700 hover:border-green-600' : 'bg-white hover:bg-gray-100 text-gray-700'}"
            aria-label="Call Ojay"
          >
            <FaPhone className="text-green-500 w-6 h-6 flex-shrink-0" />
            <span className="truncate">+2349019802305</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/2349019802305"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center sm:justify-start space-x-3 p-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md
                       border border-transparent hover:border-teal-300
                       ${darkMode ? 'bg-gray-800 hover:bg-gray-700 text-gray-300 border-gray-700 hover:border-teal-600' : 'bg-white hover:bg-gray-100 text-gray-700'}"
            aria-label="Message Ojay on WhatsApp"
          >
            <FaWhatsapp className="text-teal-500 w-6 h-6 flex-shrink-0" />
            <span className="truncate">WhatsApp Me</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Ojoinioluwa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center sm:justify-start space-x-3 p-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md
                       border border-transparent hover:border-gray-400
                       ${darkMode ? 'bg-gray-800 hover:bg-gray-700 text-gray-300 border-gray-700 hover:border-gray-500' : 'bg-white hover:bg-gray-100 text-gray-700'}"
            aria-label="Visit Ojay's GitHub profile"
          >
            <FaGithub className="text-gray-600 dark:text-gray-300 w-6 h-6 flex-shrink-0" />
            <span className="truncate">github.com/Ojoinioluwa</span>
          </a>
        </div>

        <form
          onSubmit={handleSubmit}
          className={`p-8 rounded-2xl shadow-xl space-y-7 transition-colors duration-300 ${
            darkMode
              ? "bg-gray-800 border border-gray-700"
              : "bg-white border border-gray-200"
          }`}
        >
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className={`mb-2 font-semibold ${
                darkMode ? "text-gray-200" : "text-gray-700"
              }`}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className={`p-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
                  : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500"
              }`}
              placeholder="Your Name"
              aria-label="Your Name"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="email"
              className={`mb-2 font-semibold ${
                darkMode ? "text-gray-200" : "text-gray-700"
              }`}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className={`p-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
                  : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500"
              }`}
              placeholder="you@example.com"
              aria-label="Your Email"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="message"
              className={`mb-2 font-semibold ${
                darkMode ? "text-gray-200" : "text-gray-700"
              }`}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              value={form.message}
              onChange={handleChange}
              className={`p-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-y ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
                  : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500"
              }`}
              placeholder="Your message here..."
              aria-label="Your Message"
            ></textarea>
          </div>

          {form.status === "submitting" && (
            <div className="text-center text-blue-500 dark:text-blue-400">
              Sending your message...
            </div>
          )}
          {form.status === "success" && (
            <div className="text-center text-green-600 dark:text-green-400 font-medium">
              Message sent successfully! Thanks for reaching out.
            </div>
          )}
          {form.status === "error" && (
            <div className="text-center text-red-600 dark:text-red-400 font-medium">
              Error: {form.errorMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={form.status === "submitting"}
            className={`w-full py-3 px-6 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              form.status === "submitting"
                ? "opacity-70 cursor-not-allowed"
                : ""
            }`}
            aria-label="Send Message"
          >
            {form.status === "submitting" ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              <>
                Send Message <FiSend className="ml-2 w-5 h-5" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
