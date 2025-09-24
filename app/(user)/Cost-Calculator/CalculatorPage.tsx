"use client";
import React, { useState } from "react";
import Heading from "@/app/App_Chunks/Components/Heading";
import Button from "@/app/App_Chunks/Components/Button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FourthSection from "../App_Chunks/Components/FourthSection";
import Banner from "../App_Chunks/Components/Banner";
import { useRouter } from "next/navigation";
const CalculatorPage = () => {
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
  const regions = [
    {
      name: "Mainland",
      data: [
        "100 % Ownership",
        "Diverse Business Opportunities",
        "Unrestricted trade",
        "Access to Government Contracts",
        "Simplified Procedures",
        "Unlimited Fund transfer",
        "Access to Readymade Office space",
      ],
      icon: "https://static.thenounproject.com/png/5201539-200.png",
    },
    {
      name: "Freezone",
      data: [
        "100% Foreign Ownership",
        "Tax benefits",
        "Easy Setup & Operations",
        "Visa Benefits",
        "No Currency Restriction",
        "Duty-free Imports & Exports",
        "Government Support",
      ],
      icon: "https://cdn-icons-png.flaticon.com/512/3798/3798583.png",
    },
    {
      name: "Offshore",
      data: [
        "100% Foreign Ownership",
        "Confidentiality",
        "Asset Protection",
        "Strong Legal Framework",
        "Minimal Reporting Requirements",
        "Global Business Opportunities",
        "Strategic Location",
      ],
      icon: "https://cdn-icons-png.flaticon.com/512/1/1803.png",
    },
  ];
  interface ErrorState {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    visas: string;
    businessDescription: string;
    businessActivity: string;
  }
  const [formData, setFormData] = useState<ErrorState>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    visas: "",
    businessDescription: "",
    businessActivity: "",
  });

  // State for error messages

  const [errors, setErrors] = useState<ErrorState>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    visas: "",
    businessDescription: "",
    businessActivity: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [resp, setResp] = useState<{ status: number; text: string } | null>(
    null
  );
  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Update the form data
    setFormData({ ...formData, [name]: value });

    // Remove the specific error for the field being changed
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "", // Clears the error for the specific field
    }));
  };

  // Validation logic
  const validate = () => {
    const formErrors: {
      firstName: string;
      lastName: string;
      phone: string;
      email: string;
      visas: string;
      businessDescription: string;
      businessActivity: string;
    } = {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      visas: "",
      businessDescription: "",
      businessActivity: "",
    };
    let isValid = true;

    if (!formData.firstName) {
      formErrors.firstName = "First name is required.";
      isValid = false;
    }

    if (!formData.lastName) {
      formErrors.lastName = "Last name is required.";
      isValid = false;
    }

    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
      formErrors.phone = "Please enter a valid phone number (10 digits).";
      isValid = false;
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (
      !formData.visas ||
      isNaN(parseInt(formData.visas, 10)) ||
      parseInt(formData.visas, 10) <= 0
    ) {
      formErrors.visas = "Please enter a valid number of visas.";
      isValid = false;
    }

    if (!formData.businessActivity) {
      formErrors.businessActivity = "Please select a business activity.";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };
  const handleBusinessActivityChange = (value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      businessActivity: value,
    }));
  };
  const router = useRouter();
  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    const payload = {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      businessActivity: formData.businessActivity,
      contact: formData.phone,
      message: formData.businessDescription,
      visas: formData.visas,
    };
    try {
      const response = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
      });
      const text = await response.text();
      setResp({ status: response.status, text });

      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        visas: "",
        businessDescription: "",
        businessActivity: "",
      });
      setErrors({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        visas: "",
        businessDescription: "",
        businessActivity: "",
      });
      if (response.status === 200) {
        router.push("/Form-Submitted");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full mt-16 ">
      <div id={"calculator"} className={`container w-full`}>
        <div
          className={`w-full grid grid-cols-1 items-center gap-12 lg:grid-cols-2`}
        >
          <div className={" py-2  px-5 rounded-lg "}>
            <Heading className="font-bold !text-5xl">
              <span className="text-indigo-500">Expenses for Starting</span> and{" "}
              <span className="text-lime-500">Registering a Business</span> in
              Dubai and the UAE
            </Heading>
            <p className={"font-Satoshi text-lg mt-7"}>
              To begin, kindly share some key details about yourself and your
              business. Once we have this information, we`ll provide an instant
              quote and give you the option to schedule a meeting with one of
              our setup specialists if you require further assistance.
            </p>
            <p className={"mt-6 font-Synonym font-[600]"}>
              Ready to take the next step? Share your details now and let’s get
              started!
            </p>
          </div>

          <div
            className={
              "w-full bg-indigo-50 transition-all duration-300 hover:shadow-md rounded-xl p-7 font-SplineSans"
            }
          >
            <form className="w-full" onSubmit={handleSubmit}>
              <div>
                <h2
                  className={
                    "w-full text-center text-xl lg:text-2xl  font-[600]"
                  }
                >
                  Cost Calculator
                </h2>
              </div>

              <div
                className={"grid mt-4 grid-cols-1 lg:grid-cols-2 mb-3 gap-4"}
              >
                <div className="relative">
                  <input
                    name="firstName"
                    placeholder={"First name*"}
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`py-2 border ${
                      errors.firstName ? "border-red-500" : "border-lime-300"
                    }  font-Satoshi placeholder:text-slate-700 bg-gray-50 text-lime-800 focus:outline-indigo-300 font-[500] shadow-sm w-full px-5 rounded-lg`}
                  />
                  {errors.firstName && (
                    <span className="text-red-500  text-sm">
                      {errors.firstName}
                    </span>
                  )}
                </div>

                <div className=" w-full">
                  <input
                    name="lastName"
                    placeholder={"Last name*"}
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`py-2 border ${
                      errors.lastName ? "border-red-500" : "border-lime-300"
                    }  font-Satoshi placeholder:text-slate-700 bg-gray-50 text-lime-800 focus:outline-indigo-300 font-[500] shadow-sm w-full px-5 rounded-lg`}
                  />
                  {errors.lastName && (
                    <span className="text-red-500 text-sm">
                      {errors.lastName}
                    </span>
                  )}
                </div>
              </div>

              <div className={"grid grid-cols-1 lg:grid-cols-2 mb-3 gap-4"}>
                <div className="w-full">
                  <Select
                    value={formData.businessActivity}
                    onValueChange={handleBusinessActivityChange}
                    name="businessActivity"
                  >
                    <SelectTrigger
                      className={`w-full h-10 bg-gray-50 text-indigo-950 font-[400] ${
                        errors.businessActivity
                          ? "border-red-500"
                          : "border-lime-300"
                      } border focus:outline-indigo-300 rounded-lg`}
                    >
                      <SelectValue
                        className="placehodler:text-slate-600"
                        placeholder="Select Business Activity"
                      />
                    </SelectTrigger>
                    <SelectContent className="bg-indigo-100 text-slate-950">
                      <SelectGroup>
                        {businessActivities.map((activity, index) => (
                          <SelectItem key={index} value={activity}>
                            {activity}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {errors.businessActivity && (
                    <span className="text-red-500 text-sm">
                      {errors.businessActivity}
                    </span>
                  )}
                </div>

                <div className="w-full">
                  <input
                    name="phone"
                    type="number"
                    placeholder={"Phone*"}
                    value={formData.phone}
                    onChange={handleChange}
                    className={`py-2 border ${
                      errors.phone ? "border-red-500" : "border-lime-300"
                    }  font-Satoshi placeholder:text-slate-700 bg-gray-50 text-lime-800 focus:outline-indigo-300 font-[500] shadow-sm w-full px-5 rounded-lg`}
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-sm">{errors.phone}</span>
                  )}
                </div>
              </div>

              <div className={"grid grid-cols-1 lg:grid-cols-2 mb-4 gap-4"}>
                <div className="w-full">
                  <input
                    name="email"
                    placeholder={"Email*"}
                    value={formData.email}
                    onChange={handleChange}
                    className={`py-2 border ${
                      errors.email ? "border-red-500" : "border-lime-300"
                    }  font-Satoshi placeholder:text-slate-700 bg-gray-50 text-lime-800 focus:outline-indigo-300 font-[500] shadow-sm w-full px-5 rounded-lg`}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">{errors.email}</span>
                  )}
                </div>

                <div className="w-full">
                  <input
                    name="visas"
                    type="number"
                    placeholder={"Number of Visas*"}
                    value={formData.visas}
                    onChange={handleChange}
                    className={`py-2 border ${
                      errors.visas ? "border-red-500" : "border-lime-300"
                    }  font-Satoshi placeholder:text-slate-700 bg-gray-50 text-lime-800 focus:outline-indigo-300 font-[500] shadow-sm w-full px-5 rounded-lg`}
                  />
                  {errors.visas && (
                    <span className="text-red-500 text-sm">{errors.visas}</span>
                  )}
                </div>
              </div>

              <div className="w-full">
                <textarea
                  name="businessDescription"
                  placeholder={"Describe your business"}
                  value={formData.businessDescription}
                  onChange={handleChange}
                  className={`py-2 h-28 resize-none border ${
                    errors.businessDescription
                      ? "border-red-500"
                      : "border-lime-300"
                  }  font-Satoshi placeholder:text-slate-700 bg-gray-50 text-lime-800 focus:outline-indigo-300 font-[500] shadow-sm w-full px-5 rounded-lg`}
                />
                {errors.businessDescription && (
                  <span className="text-red-500 text-sm">
                    {errors.businessDescription}
                  </span>
                )}
              </div>
              {resp && resp.status === 200 ? (
                <Button disabled={true} className="px-5 mt-4" type="submit">
                  Submitted
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="mt-4 justify-center !w-full lg:!w-28"
                  loading={isSubmitting}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Calculate"}
                </Button>
              )}
            </form>
          </div>
        </div>
      </div>
      <div className=" w-full my-24 bg-gradient-to-r from-lime-500 via-green-500 to-emerald-500">
        <div className="container w-full  py-20">
          <Heading className="!text-center text-slate-50">
            Where Should You Register Your Business in Dubai?
          </Heading>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8 ">
            {regions.map((region, index) => (
              <Card key={index} region={region} target={"calculator"} />
            ))}
          </div>
        </div>
      </div>
      <div className=" w-full mt-24 ">
        <div className="container w-full  py-20">
          <Heading className="!text-center text-slate-50">
            Our Exclusive Corporate Service
          </Heading>
          <FourthSection />
        </div>
      </div>
      <Banner
        title={"Get Started Now"}
        desc={
          "Provide your details and receive an instant, personalized quote to start your business in Dubai. Our experts are here to guide you every step of the way—let's turn your vision into reality!"
        }
      />
    </div>
  );
};

const Card = ({ region, target }: { region: any; target: string }) => {
  const handleScroll = () => {
    const targetElement = document.getElementById(target);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full flex flex-col justify-between items-start bg-lime-200 border  border-slate-200 rounded-xl p-7 ">
      <div>
        <div className="size-16 bg-lime-500 rounded-full p-1">
          <img src={region.icon} className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="mt-7">
        <h1 className="text-xl lg:text-2xl font-[600] text-lime-950 font-SplineSans">
          Dubai {region.name}
        </h1>

        <div className="mt-4">
          {region.data.map((item: string, index: number) => (
            <div
              key={index}
              className="flex items-start gap-3 font-Synonym mt-2 font-[500]"
            >
              <div className="mt-[2px]">
                <div className="size-5">
                  <img src={"media/mainland/checked.png"} />
                </div>
              </div>
              {item}
            </div>
          ))}
        </div>

        <button
          onClick={handleScroll}
          className="mt-6 bg-blue-500 text-slate-50 py-2 px-4 font-Synonym font-[600] rounded-lg"
        >
          Calculate now
        </button>
      </div>
    </div>
  );
};
export default CalculatorPage;
