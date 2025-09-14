import { useState } from "react";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", reason: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  const inputClasses =
    "w-full bg-slate-900 text-white text-sm px-3 py-2 rounded-xl border border-white/20 hover:border-blue-400/40 focus:outline-none focus:ring-2 focus:ring-blue-500 transition";

  return (
    <section
      id="contact"
      className="flex items-center justify-center min-h-screen py-16 bg-slate-900"
    >
      <div className="px-4 w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent text-center">
          Get In Touch
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="text-white ml-3 mb-1 block font-medium text-sm"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              className={inputClasses}
              placeholder="Enter your name"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="text-white mb-1 block ml-3 font-medium text-sm"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              className={inputClasses}
              placeholder="example@gmail.com"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          {/* Reason Field */}
          <div>
            <label
              htmlFor="reason"
              className="text-white mb-1 ml-3 block font-medium text-sm"
            >
              Reason for Contact
            </label>
            <select
              id="reason"
              name="reason"
              required
              value={formData.reason}
              className={inputClasses}
              onChange={(e) =>
                setFormData({ ...formData, reason: e.target.value })
              }
            >
              <option value="">Select a reason</option>
              <option value="Freelance">Freelance Project</option>
              <option value="FullTime">Full-time Hiring</option>
              <option value="SpecialProject">Special Project</option>
            </select>
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="text-white ml-3 mb-1 block font-medium text-sm"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              className={inputClasses}
              placeholder="Your Message..."
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded text-sm font-medium transition hover:scale-105 hover:shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
