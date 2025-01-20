"use client";
import React, { useState } from "react";
import Button from "../App_Chunks/Components/Button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
const ContactPage = () => {
  const social = [
    { icon: <FaFacebook />, id: 0 },
    { icon: <FaSquareInstagram />, id: 1 },
    { icon: <FaSquareXTwitter />, id: 2 },
    {
      icon: <FaYoutube />,
      id: 3,
    },
  ];
  const [resp, setResp] = useState<{ status: number; text: string } | null>(
    null
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessActivity: "",
    contact: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    businessActivity: "",
    contact: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
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
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Validate form fields
  const validateForm = () => {
    let formErrors = {
      name: "",
      email: "",
      businessActivity: "",
      contact: "",
      message: "",
    };

    if (!formData.name) formErrors.name = "Full Name is required";
    if (!formData.email) formErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      formErrors.email = "Email is invalid";
    if (!formData.businessActivity)
      formErrors.businessActivity = "Please select a business activity";
    if (!formData.contact) formErrors.contact = "Contact is required";
    if (!formData.message) formErrors.message = "Message is required";

    setErrors(formErrors);
    return Object.values(formErrors).every((error) => !error); // If no errors, return true
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await emailjs.send(
        "service_redgvmv",
        "template_zfsvreg",
        formData,
        "3Ug2fqjRf9toTQ9s6"
      );
      setResp(response);

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
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className=" mb-20">
      <div className="container  mt-1">
        <div className="w-full py-12 px-5 text-slate-950 border border-lime-300 overflow-hidden font-Satoshi font-semibold flex flex-col justify-center items-center rounded-xl relative">
          <div className="absolute w-full h-full -z-10">
            <img
              src={"/media/gggrain.svg"}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-xl lg:text-3xl text-center">
            Get Personalized Assistance to set up your business in UAE!
          </h1>
          <h2 className="mt-4 text-sm lg:text-lg font-[500] text-center">
            We’re here to help you navigate the process of setting up your
            business and support services in the UAE. Whether you’re just
            starting out or looking to expand, our team of experts is ready to
            provide personalized, professional support every step of the way.
          </h2>
        </div>
      </div>
      <div className="container mt-10 grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-lime-100 flex flex-col justify-between items-start w-full p-7 h-full rounded-l-lg">
          <h1 className="text-3xl font-SplineSans font-[500]">
            Please fill out the form below
          </h1>
          <p className="mt-2">
            Get in touch with us today to discuss your business needs, ask
            questions, or schedule a consultation!
          </p>

          <form onSubmit={handleSubmit} className="mt-6">
            <div className="mt-2">
              <label>
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Name"
                className="border border-dashed bg-gray-950/10 mt-1 border-gray-400 placeholder:text-slate-600 rounded-lg w-full p-2"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            <div className="mt-4">
              <label>
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email"
                className="border border-dashed bg-gray-950/10 mt-1 border-gray-400 placeholder:text-slate-600 rounded-lg w-full p-2"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div className="grid mt-4 grid-cols-1 lg:grid-cols-2 gap-3">
              <div className="grid grid-cols-1">
                <label>Select business activity</label>
                <div className="w-full">
                  <Select
                    value={formData.businessActivity}
                    onValueChange={(value) =>
                      setFormData({ ...formData, businessActivity: value })
                    }
                  >
                    <SelectTrigger className="w-full mt-1 h-10 bg-slate-950/10 border-0">
                      <SelectValue placeholder="Select Business Activity" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#c7c7c7] text-slate-950">
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
                  <p className="text-red-500 text-sm">
                    {errors.businessActivity}
                  </p>
                )}
              </div>
              <div>
                <label>
                  Contact <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="Enter your Contact"
                  className="border border-dashed bg-gray-950/10 mt-1 border-gray-400 placeholder:text-slate-600 rounded-lg w-full p-2"
                />
                {errors.contact && (
                  <p className="text-red-500 text-sm">{errors.contact}</p>
                )}
              </div>
            </div>
            <div className="mt-4">
              <label>
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message here"
                className="border h-40 resize-none border-dashed bg-gray-950/10 mt-1 border-gray-400 placeholder:text-slate-600 rounded-lg w-full p-2"
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>
            <div className="mt-4">
              {resp && resp.status === 200 ? (
                <Button disabled={true} className="px-5" type="submit">
                  Submitted
                </Button>
              ) : (
                <Button className="px-5" type="submit">
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              )}
            </div>
          </form>
          <div></div>
        </div>
        <div className="h-[700px] flex flex-col justify-between p-3 lg:p-7 items-center bg-gradient-to-tr from-green-300 to-yellow-300 rounded-r-lg">
          <div className="w-full flex items-center justify-end ">
            <p className="px-4 py-2 text-slate-600 font-Satoshi font-[500] rounded-full ">
              Get in Touch
            </p>
          </div>

          <div className="lg:px-4 flex w-full px-2 lg:w-[500px] flex-col bg-slate-100/30  border border-lime-400 py-3 gap-4 rounded-xl justify-center  items-center">
            <div className=" w-full gap-2 flex  items-start">
              <div className="mt-1 text-lg">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="text-lg font-Satoshi">
                  <span className="font-Synonym font-[500]">Address :</span>{" "}
                  3307 Churchill Towers, Business Bay, Dubai - UAE
                </p>
              </div>
            </div>
            <div className=" w-full gap-2 flex   items-start">
              <div className="mt-1 text-lg">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="text-lg font-Satoshi">
                  <span className="font-Synonym font-[500]">Phone :</span> +97
                  15593 91238
                </p>
              </div>
            </div>
            <div className=" w-full gap-2 flex   items-start">
              <div className="mt-1 text-lg">
                <MdEmail />
              </div>
              <div>
                <p className="text-lg font-Satoshi">
                  <span className="font-Synonym font-[500]">Email :</span>{" "}
                  info@bizgrowthconsultancy.com
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center gap-3">
            {social.map((item) => {
              return (
                <div
                  className="size-10 text-2xl text-[#244010] flex items-center justify-center rounded-full bg-green-400"
                  key={item.id}
                >
                  {item.icon}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
