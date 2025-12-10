import React, { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "../ui/textarea";

import ugprogramsdatadetails from "@/data/academics/ugprogramsdatadetails.js";
import pgprogramsdatadetails from "@/data/academics/pgprogrammsdetails.js";
import { CheckCircle2 } from "lucide-react";

// ⭐ Google Sheets Web App URL
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwAcTzSQA-aGA63cSzfeeDZyzkViyIYChNk-VkD1hd3JORbXQzN2H9qbqResbjhDL0/exec";

const ForAdmissionForm = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const [formData, setFormData] = useState({
    studentName: "",
    fatherName: "",
    email: "",
    mobile: "",
    course: "",
    message: "",
  });

  const formRef = useRef<HTMLFormElement | null>(null);

  // ❗ Allow ONLY alphabets for names
  const handleNameInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    const value = e.target.value.replace(/[^a-zA-Z ]/g, ""); // block numbers & special chars
    setFormData({ ...formData, [field]: value });
  };

  // ❗ Allow ONLY digits for mobile number
  const handleMobileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, ""); // remove non-digits
    if (digits.length <= 10) setFormData({ ...formData, mobile: digits });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setShowSuccess(true);

      setFormData({
        studentName: "",
        fatherName: "",
        email: "",
        mobile: "",
        course: "",
        message: "",
      });

      formRef.current?.reset();

      setTimeout(() => setShowSuccess(false), 2500);
    } catch (error) {
      console.error("Form Submission Error:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} ref={formRef} className="h-full">
        <div className="space-y-3">
          {/* Student Name */}
          <Input
            placeholder="Student Name "
            required
            value={formData.studentName}
            onChange={(e) => handleNameInput(e, "studentName")}
          />

          {/* Father Name */}
          <Input
            placeholder="Father / Guardian Name "
            required
            value={formData.fatherName}
            onChange={(e) => handleNameInput(e, "fatherName")}
          />

          {/* Email */}
          <Input
            type="email"
            placeholder="Email *"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          {/* Mobile */}
          <Input
            type="tel"
            placeholder="Mobile Number * (10 digits)"
            required
            maxLength={10}
            value={formData.mobile}
            onChange={handleMobileInput}
          />

          {/* Course Selection */}
          <Select
            required
            value={formData.course}
            onValueChange={(value) =>
              setFormData({ ...formData, course: value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Course Interested *" />
            </SelectTrigger>

            <SelectContent>
              <p className="ps-4 text-purple font-semibold border-b py-1">
                UG Programmes
              </p>

              {ugprogramsdatadetails.map((program) => (
                <SelectItem
                  key={program.id}
                  value={`${program.degree} ${program.stream}`}
                >
                  {program.degree} - {program.stream}
                </SelectItem>
              ))}

              <p className="ps-4 text-purple font-semibold border-b border-t py-1">
                PG Programmes
              </p>

              {pgprogramsdatadetails.map((program) => (
                <SelectItem
                  key={program.id}
                  value={`${program.degree} ${program.stream}`}
                >
                  {program.degree} - {program.stream}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Message */}
          <Textarea
            placeholder="Your Message *"
            required
            rows={4}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
        </div>

        {/* Submit Button */}
        <div className="mt-4">
          <Button
            type="submit"
            className="w-full bg-purple text-white hover:bg-purple/90"
          >
            Submit
          </Button>
        </div>
      </form>

      {/* ⭐ Enhanced Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white px-6 py-4 rounded-xl shadow-xl text-center animate-slideUp">
            <h3 className="text-lg font-semibold text-green-600 flex items-center justify-center gap-2">
              <CheckCircle2 className="w-6 h-6" />
              Form Submitted Successfully!
            </h3>

            <p className="text-sm text-gray-600 mt-1">
              Our team will contact you shortly.
            </p>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
        .animate-slideUp {
          animation: slideUp 0.35s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0 }
          to { opacity: 1 }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0 }
          to { transform: translateY(0); opacity: 1 }
        }
      `}</style>
    </>
  );
};

export default ForAdmissionForm;
