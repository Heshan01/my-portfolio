import ParticlesBackground from "../components/ParticlesBackground";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Astra from "../assets/Astra.png";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
  };

  const validateForm = () => {
    const required = ["name", "email", "message"];
    const newErrors = {};

    required.forEach((f) => {
      if (!formData[f].trim()) newErrors[f] = "Fill this field";
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus("sending");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          ...formData,
          form_name: formData.name,
          reply_to: formData.email,
        },
        PUBLIC_KEY
      );

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen relative bg-black overflow-hidden text-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10"
    >
      <ParticlesBackground />

      <div className="relative z-10 w-full flex flex-col md:flex-row items-center gap-10">
        {/* Left Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.img
            src={Astra}
            alt="Contact"
            className="w-72 md:w-140 rounded-2xl shadow-lg object-cover"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Right Form */}
        <motion.div
          className="w-full md:w-1/2 bg-white/5 p-8 rounded-2xl shadow-lg border border-white/10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6">
            For more information Contact me...
          </h2>

          {/* Status Messages */}
          {status === "success" && (
            <p className="mb-3 p-2 bg-green-600/20 text-green-400 text-sm rounded">
              ✔ Message sent successfully!
            </p>
          )}

          {status === "error" && (
            <p className="mb-3 p-2 bg-red-600/20 text-red-400 text-sm rounded">
              ✘ Failed to send message. Try again.
            </p>
          )}

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="flex flex-col">
              <label className="mb-1">
                Your Name <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={`p-3 rounded-md bg-white/10 border ${
                  errors.name ? "border-red-500" : "border-gray-500"
                } text-white focus:outline-none focus:border-blue-500`}
              />

              {errors.name && (
                <p className="text-red-500 text-xs">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="mb-1">
                Your Email <span className="text-red-500">*</span>
              </label>

              <input
                type="email"
                name="email"
                placeholder="example@mail.com"
                value={formData.email}
                onChange={handleChange}
                className={`p-3 rounded-md bg-white/10 border ${
                  errors.email ? "border-red-500" : "border-gray-500"
                } text-white focus:outline-none focus:border-blue-500`}
              />

              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email}</p>
              )}
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label className="mb-1">
                Your Message <span className="text-red-500">*</span>
              </label>

              <textarea
                name="message"
                rows="5"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                className={`p-3 rounded-md bg-white/10 border ${
                  errors.message ? "border-red-500" : "border-gray-500"
                } text-white focus:outline-none focus:border-blue-500`}
              ></textarea>

              {errors.message && (
                <p className="text-red-500 text-xs">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 transition rounded-md font-semibold"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
