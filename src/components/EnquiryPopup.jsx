"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

const FIRST_DELAY = 7000;
const SECOND_DELAY = 15000;
const SUBMITTED_KEY = "apex_popup_submitted";
const SESSION_DONE_KEY = "apex_popup_done";

const safeGet = (storage, key) => {
  try {
    return window[storage].getItem(key);
  } catch {
    return null;
  }
};

const safeSet = (storage, key, value) => {
  try {
    window[storage].setItem(key, value);
  } catch {}
};

export default function EnquiryPopup() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const closeCount = useRef(0);
  const timer = useRef(null);

  useEffect(() => {
    // Already submitted, or popup already shown twice in this session
    if (
      safeGet("localStorage", SUBMITTED_KEY) ||
      safeGet("sessionStorage", SESSION_DONE_KEY)
    ) {
      return;
    }

    timer.current = setTimeout(() => setOpen(true), FIRST_DELAY);

    return () => clearTimeout(timer.current);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (e) => e.key === "Escape" && handleClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleClose = () => {
    setOpen(false);
    closeCount.current += 1;

    if (safeGet("localStorage", SUBMITTED_KEY)) return;

    if (closeCount.current === 1) {
      // First close: show again after 15 seconds
      timer.current = setTimeout(() => setOpen(true), SECOND_DELAY);
    } else {
      safeSet("sessionStorage", SESSION_DONE_KEY, "1");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus({
      type: "",
      message: "",
    });

    const form = e.target;
    const formData = new FormData(form);

    formData.append(
      "access_key",
      "976a7a78-137f-4943-b629-612dc4da5830"
    );

    formData.append(
      "subject",
      "New Popup Enquiry - Apex Machinery Technology"
    );

    formData.append(
      "from_name",
      "Apex Machinery Technology Website"
    );

    formData.append("page_url", window.location.href);

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setStatus({
          type: "success",
          message:
            "Thank you! Your enquiry has been submitted. Our team will contact you shortly.",
        });

        safeSet("localStorage", SUBMITTED_KEY, "1");
        clearTimeout(timer.current);
        form.reset();
      } else {
        setStatus({
          type: "error",
          message: "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error("Web3Forms Error:", error);

      setStatus({
        type: "error",
        message: "Unable to send your enquiry. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4"
      onClick={handleClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-popup-title"
        className="relative w-full max-w-lg bg-white shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}

        <div className="bg-[#141b39] px-6 py-5 pr-14">
          <h2
            id="enquiry-popup-title"
            className="text-2xl font-bold text-white"
          >
            Get a Free Quote
          </h2>

          <div className="w-20 h-[3px] bg-red-600 mt-3"></div>

          <p className="mt-3 text-sm text-gray-300">
            Share your requirement and our Laser Expert team will contact you
            promptly.
          </p>
        </div>

        <button
          type="button"
          onClick={handleClose}
          aria-label="Close"
          className="absolute top-4 right-4 text-white hover:text-red-500 transition"
        >
          <X size={26} />
        </button>

        {/* Form */}

        <div className="p-6">
          {status.type === "success" ? (
            <div className="p-4 border text-sm font-medium bg-green-50 border-green-200 text-green-700">
              {status.message}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full border border-gray-300 p-3 outline-none focus:border-red-600"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full border border-gray-300 p-3 outline-none focus:border-red-600"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Mobile"
                required
                className="w-full border border-gray-300 p-3 outline-none focus:border-red-600"
              />

              <textarea
                name="message"
                rows={3}
                placeholder="Your Requirement"
                className="w-full border border-gray-300 p-3 outline-none resize-none focus:border-red-600"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-red-600 text-white px-8 py-3 text-lg font-semibold hover:bg-red-700 transition disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>

              {status.message && (
                <div className="p-3 border text-sm font-medium bg-red-50 border-red-200 text-red-700">
                  {status.message}
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
