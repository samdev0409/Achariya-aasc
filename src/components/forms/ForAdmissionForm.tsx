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

// ⭐ Add your Google Web App URL
const GOOGLE_SCRIPT_URL = "https://script.google.com/a/macros/achariya.org/s/AKfycbz9DTFghmQHOH623OoTXnLwE9NLQ-dCF5dVa2Gt8ADDMlfWSL11zGvlRHRtyPiDYB4/exec";

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

      // Reset form state
      setFormData({
        studentName: "",
        fatherName: "",
        email: "",
        mobile: "",
        course: "",
        message: "",
      });

      if (formRef.current) formRef.current.reset();

      setTimeout(() => setShowSuccess(false), 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="h-full" ref={formRef}>
        <div className="space-y-2">
          <Input
            placeholder="Student Name"
            required
            value={formData.studentName}
            onChange={(e) =>
              setFormData({ ...formData, studentName: e.target.value })
            }
          />

          <Input
            placeholder="Father / Guardian Name"
            required
            value={formData.fatherName}
            onChange={(e) =>
              setFormData({ ...formData, fatherName: e.target.value })
            }
          />

          <Input
            type="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <Input
            type="tel"
            placeholder="Mobile Number"
            pattern="[0-9]{10}"
            required
            value={formData.mobile}
            onChange={(e) =>
              setFormData({ ...formData, mobile: e.target.value })
            }
          />

          <Select
            required
              value={formData.course}   
            onValueChange={(value) =>
              setFormData({ ...formData, course: value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Course Interested" />
            </SelectTrigger>

            <SelectContent>
              <p className="ps-7 text-purple font-semibold border-b border-gray-200 w-full py-2">
                UG Programme
              </p>

              {ugprogramsdatadetails.map((program) => (
                <SelectItem
                  className="text-start"
                  key={program.id}
                  value={`${program.degree} ${program.stream}`}
                >
                  {program.degree} - {program.stream}
                </SelectItem>
              ))}

              <p className="ps-7 text-purple font-semibold border-b border-t border-gray-200 w-full py-2">
                PG Programme
              </p>

              {pgprogramsdatadetails.map((program) => (
                <SelectItem
                  className="text-start"
                  key={program.id}
                  value={`${program.degree} ${program.stream}`}
                >
                  {program.degree} - {program.stream}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Textarea
            className="mb-4"
            placeholder="Message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
        </div>

        <div className="mt-5">
          <Button
            type="submit"
            className="w-full bg-purple text-white hover:bg-purple/90"
          >
            Submit
          </Button>
        </div>
      </form>

      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-30">
          <div className="bg-green-500 text-white p-4 rounded shadow-lg">
            Form submitted successfully!
          </div>
        </div>
      )}
    </>
  );
};

export default ForAdmissionForm;
