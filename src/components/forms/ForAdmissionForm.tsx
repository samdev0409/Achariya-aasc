import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";

import ugprogramsdatadetails from "@/data/academics/ugprogramsdatadetails.js";
import pgprogramsdatadetails from "@/data/academics/pgprogrammsdetails.js";

const BACKEND_URL = "/form-handler/Enquiry-Form.php";  

const ForAdmissionForm = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    fatherName: "",
    email: "",
    mobile: "",
    course: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      // Build normal form-data (NOT JSON)
      const params = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        params.append(key, value);
      });

      const response = await fetch(BACKEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });

      const result = await response.json();

      if (result.status === "success") {
        setStatus({
          type: "success",
          message: "Form submitted successfully! We'll contact you soon.",
        });

        setFormData({
          studentName: "",
          fatherName: "",
          email: "",
          mobile: "",
          course: "",
          message: "",
        });
      } else {
        setStatus({ type: "error", message: result.message });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Submission failed. Please try again later.",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <>
      {status.message && (
        <div
          className={`mb-4 p-4 rounded-md flex items-center gap-2 ${
            status.type === "success"
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          {status.type === "success" ? (
            <CheckCircle2 className="w-5 h-5" />
          ) : (
            <AlertCircle className="w-5 h-5" />
          )}
          <span>{status.message}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          placeholder="Student Name *"
          required
          value={formData.studentName}
          onChange={(e) =>
            setFormData({ ...formData, studentName: e.target.value })
          }
        />

        <Input
          placeholder="Father / Guardian Name *"
          required
          value={formData.fatherName}
          onChange={(e) =>
            setFormData({ ...formData, fatherName: e.target.value })
          }
        />

        <Input
          type="email"
          placeholder="Email *"
          required
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />

        <Input
          type="tel"
          placeholder="Mobile Number (10 digits) *"
          maxLength={10}
          required
          value={formData.mobile}
          onChange={(e) => {
            const digits = e.target.value.replace(/\D/g, "");
            if (digits.length <= 10) setFormData({ ...formData, mobile: digits });
          }}
        />

        <Select
          required
          value={formData.course}
          onValueChange={(value) => setFormData({ ...formData, course: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Course Interested *" />
          </SelectTrigger>
          <SelectContent>
            <p className="px-4 py-1 text-sm font-semibold text-purple-600">
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

            <p className="px-4 py-1 text-sm font-semibold text-purple-600">
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

        <Textarea
          placeholder="Message *"
          required
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          rows={4}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-purple text-white"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" /> Submitting...
            </>
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </>
  );
};

export default ForAdmissionForm;
