"use client";
import React, { useState } from "react";
import Heading from "./Heading";
import Button from "./Button";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const Form = () => {
  const businessActivities = [
    "Advertising",
    "Architecture",
    "Forex Trading",
    "Business Consultancy",
    "Cryptocurrency Activity",
    "Design Services",
    "Fashion Design Consultancy",
    "E-Commerce",
    "Event Management",
    "Food & Beverage Trading",
    "IT Consultancy",
    "Lifestyle Consultancy",
    "Human Resource Consultancy",
    "General Trading",
    "Interior Design",
    "Management Consultancy",
    "Media Services",
    "Marketing Services",
    "Online Education",
    "Photography Services",
    "Production",
    "Public Relations",
    "Project Management Consultancy",
    "Publishing",
    "Recruitment Consultancy",
    "Tax Consultancy",
    "Training Services",
    "Software Development",
    "Sports Management",
    "Wholesale of Household Goods",
    "Others",
  ];
  const [resp, setResp] = useState<{ status: number; text: string } | null>(
    null
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    businessActivity: "",
    contact: "",
    email: "",
    message: "",
  });

  // Error state
  const [errors, setErrors] = useState({
    name: "",
    businessActivity: "",
    contact: "",
    email: "",
    message: "",
  });

  // Handle form input changes
  interface FormData {
    name: string;
    businessActivity: string;
    contact: string;
    email: string;
    message: string;
  }

  interface Errors {
    name: string;
    businessActivity: string;
    contact: string;
    email: string;
    message: string;
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData: FormData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validate form
  const validateForm = () => {
    const newErrors: Errors = {
      name: "",
      businessActivity: "",
      contact: "",
      email: "",
      message: "",
    };
    if (!formData.name) newErrors.name = "Full name is required.";
    if (!formData.businessActivity)
      newErrors.businessActivity = "Business activity is required.";
    if (!formData.contact) newErrors.contact = "Contact number is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid.";
    if (!formData.message) newErrors.message = "Message is required.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) return;
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });
      const text = await response.text();
      setResp({ status: response.status, text });

      setFormData({
        name: "",
        email: "",
        businessActivity: "",
        contact: "",
        message: "",
      });

      setErrors({
        name: "",
        email: "",
        businessActivity: "",
        contact: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error); // Log any errors here
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full py-14 bg-black ">
      <div className=" container text-slate-50">
        <Heading className="!text-center w-full">
          Get in <span className="!text-lime-600 font-Synonym">touch</span> with
          us
        </Heading>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
          <div className="h-[500px] w-auto overflow-hidden rounded-xl">
            <img
              className="w-full h-full object-contain "
              src={"/media/form.jpeg"}
            />
          </div>
          <form className="font-Satoshi" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1">
              <label className="font-[500] text-xl">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className={`bg-slate-50/20 placeholder:text-slate-400 rounded-lg focus:shadow-md focus:outline-dashed px-4 py-2 mt-1 ${
                  errors.name ? "border-2 border-red-500" : ""
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
              <div className="grid grid-cols-1">
                <label className="font-[500] text-xl">
                  Select business activity
                </label>
                <div className="w-full">
                  <Select
                    name="businessActivity"
                    value={formData.businessActivity}
                    onValueChange={(value) =>
                      setFormData((prevData) => ({
                        ...prevData,
                        businessActivity: value,
                      }))
                    }
                  >
                    <SelectTrigger className="w-full mt-1 h-10 bg-slate-50/20 border-0">
                      <SelectValue
                        className="placeholder:text-slate-600"
                        placeholder="Select Business Activity"
                      />
                    </SelectTrigger>
                    <SelectContent className=" bg-[#c7c7c7] text-slate-950">
                      <SelectGroup>
                        {businessActivities.map((activity, index) => (
                          <SelectItem key={index} value={activity}>
                            {activity}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                {errors.businessActivity && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.businessActivity}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-1">
                <label className="font-[500] text-xl">Contact</label>
                <input
                  type="number"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  placeholder="Enter Contact Number"
                  className={`bg-slate-50/20 placeholder:text-slate-400 rounded-lg focus:shadow-md focus:outline-dashed px-4 py-2 mt-1 ${
                    errors.contact ? "border-2 border-red-500" : ""
                  }`}
                />
                {errors.contact && (
                  <p className="text-red-500 text-sm mt-1">{errors.contact}</p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 mt-4">
              <label className="font-[500] text-xl">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className={`bg-slate-50/20 placeholder:text-slate-400 rounded-lg focus:shadow-md focus:outline-dashed px-4 py-2 mt-1 ${
                  errors.email ? "border-2 border-red-500" : ""
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div className="grid grid-cols-1 mt-4">
              <label className="font-[500] text-xl">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Enter your message"
                className={`resize-none bg-slate-50/20 placeholder:text-slate-400 rounded-lg focus:shadow-md focus:outline-dashed h-28 px-4 py-2 mt-1 ${
                  errors.message ? "border-2 border-red-500" : ""
                }`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {resp && resp.status === 200 ? (
              <Button disabled={true} className="px-5 mt-4" type="submit">
                Submitted
              </Button>
            ) : (
              <Button
                type="submit"
                loading={isSubmitting}
                disabled={isSubmitting}
                className="px-4 mt-4 py-2 bg-blue-300 hover:bg-blue-400 rounded-lg"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
