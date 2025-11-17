import React from "react";
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

const ForAdmissionForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <form onSubmit={handleSubmit} className="h-full">
      <div className="space-y-2">

     
      <Input placeholder="Student Name" required />
      <Input placeholder="Father / Guardian Name" required />
      <Input type="email" placeholder="Email" required />
      <Input type="tel" placeholder="Mobile Number" pattern="[0-9]{10}" required />

      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Course Interested" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="ba-english">B.A. – English</SelectItem>
          <SelectItem value="bsc-cs">B.Sc. – Computer Science</SelectItem>
          <SelectItem value="bcom">B.Com. – Commerce</SelectItem>
          <SelectItem value="bba">B.B.A. – Business Administration</SelectItem>
          <SelectItem value="msc-cs">M.Sc. – Computer Science</SelectItem>
          <SelectItem value="ma-english">M.A. – English</SelectItem>
        </SelectContent>
      </Select>
      <Textarea className="mb-4" placeholder="Message"/>
       </div>

     <div className="mt-5">
       <Button type="submit" className="w-full bg-purple text-white  hover:bg-purple/90">
        Submit
      </Button>
     </div>
    </form>
  );
};

export default ForAdmissionForm;
