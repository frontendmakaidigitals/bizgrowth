"use client";
import React from "react";

import Button from "../App_Chunks/Components/Button";
const Page = () => {
  const selfPraise = [
    {
      title: "Expertise and Experience",
      color: "#FFF59D",
      img: "https://cdn3d.iconscout.com/3d/premium/thumb/multitasking-businessman-3d-icon-download-in-png-blend-fbx-gltf-file-formats--doing-skill-work-person-financial-pack-people-icons-4703421.png?f=webp",
      desc: "With years of experience in the UAE’s Investment Potential, we understand the intricacies of local laws and regulations, giving you the confidence to move forward with your business plans.",
    },
    {
      title: "Tailored Solutions",
      img: "https://cdn3d.iconscout.com/3d/premium/thumb/business-solution-3d-icon-download-in-png-blend-fbx-gltf-file-formats--innovative-idea-creative-corporate-pack-icons-6068189.png",
      desc: "Every business is different, and we pride ourselves on offering customized services that align with your business goals. From free zone setups to mainland and offshore company formations, we have the expertise to advise you on the best option for your business.",
    },
    {
      title: "End-to-End Service",
      img: "https://cdn3d.iconscout.com/3d/premium/thumb/report-paper-3d-icon-download-in-png-blend-fbx-gltf-file-formats--analytics-logo-statistics-analysis-financial-audit-pack-business-icons-9325412.png",
      desc: "From the initial consultation to post-setup support, we handle every aspect of your company formation process. This includes documentation, visas, banking assistance, office space, and more—ensuring a hassle-free experience.",
    },
    {
      title: "Local and International Knowledge",
      img: "https://cdn3d.iconscout.com/3d/premium/thumb/knowledge-3d-icon-download-in-png-blend-fbx-gltf-file-formats--education-study-learning-book-school-technology-pack-science-icons-6308128.png",
      desc: "Our team combines deep local insights with international best practices, ensuring that we provide solutions that are both practical and in line with global standards.",
    },
    {
      title: "Commitment to Your Success",
      img: "https://cdn3d.iconscout.com/3d/premium/thumb/success-3d-icon-download-in-png-blend-fbx-gltf-file-formats--done-goal-load-successful-pack-user-interface-icons-5448958.png?f=webp",
      desc: "At BIZ Growth, your success is our priority. We go above and beyond to provide ongoing support as your business evolves in the UAE market.",
    },
    {
      title: "Personalized Service",
      img: "https://cdn3d.iconscout.com/3d/premium/thumb/customer-support-agent-rating-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--call-logo-care-review-service-pack-services-illustrations-6220942.png?f=webp",
      desc: "We are committed to delivering high-quality services and exceeding your expectations.",
    },
    {
      title: "Cost-Effective Solutions",
      img: "https://cdn3d.iconscout.com/3d/premium/thumb/money-savings-3d-icon-download-in-png-blend-fbx-gltf-file-formats--saving-hand-coin-cash-on-finance-gesture-pack-business-icons-4839935.png",
      desc: "We offer competitive pricing and transparent fee structures to get your business running.",
    },
  ];

  return (
    <div className=" my-14">
      <div className="container font-Satoshi">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="order-2 lg:order-1">
            <p className=" px-3 text-slate-900  font-medium mb-4 bg-[#dcedc8] w-fit py-1 rounded-lg ">
              About Us
            </p>

            <h1 className="text-3xl xl:text-4xl xl:mt-4">
              Welcome to BIZ Growth Consultancy, your trusted partner in setting
              up and growing your business in the UAE.
            </h1>
            <h3 className="xl:text-lg xl:mt-4">
              We simplify the complexities of company formation, ensuring a
              seamless and efficient processWe specialize in providing
              comprehensive business setup services that streamline the process
              of establishing a company in one of the world’s most dynamic and
              business-friendly environments.
              <br />
              <br /> Whether you’re a startup entrepreneur or an established
              business looking to expand into the UAE market, we offer a wide
              range of tailored solutions to meet your unique needs. Our team of
              experienced consultants is dedicated to helping you navigate the
              complexities of local regulations, licensing requirements, and
              legal formalities, ensuring a smooth and efficient business
              launch.
            </h3>
            <Button className="mt-3">Learn More</Button>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="w-full shadow-xl h-[300px] xl:h-[550px] relative overflow-hidden rounded-xl z-10">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
            <div className="shadow absolute -top-3 left-3 xxl:-top-10 xl:-top-5 xl:left-5 xxl:left-10 rounded-xl w-full bg-lime-300 h-full" />
          </div>
        </div>
      </div>
      <div className="container grid grid-cols-1 my-20 lg:grid-cols-2 gap-10">
        <div className="font-Satoshi bg-[#dcedc8] p-5 rounded-lg">
          <div className="w-full h-[300px] lg:h-[400px]  overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={
                "https://images.unsplash.com/photo-1521316730702-829a8e30dfd0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            />
          </div>
          <h1 className="text-2xl lg:text-3xl font-semibold mt-5">
            Our Mission
          </h1>

          <p className=" my-3">
            At BizGrowth, our mission is to empower upcoming business by
            providing comprehensive and personalized set-up solutions that
            accelerate growth and success. We attempt to simplify the process of
            setting up and registering businesses by offering expert guidance,
            tailored solutions, and unparalleled customer support. Our goal is
            to help professionals and companies navigate the complexities of
            company formation which helps them to focus on their core objectives
            and achieve long-term success. Through innovation, integrity, and a
            commitment to excellence, we aim to be the trusted partner in every
            step of your business journey.
          </p>
        </div>
        <div className="font-Satoshi  bg-[#dcedc8] p-5 rounded-lg">
          <div className="w-full h-[300px] lg:h-[400px]  overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={
                "https://images.unsplash.com/photo-1724525647065-f948fc102e68?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            />
          </div>
          <h1 className=" text-2xl lg:text-3xl font-semibold mt-5">
            Our Vision
          </h1>

          <p className="my-3">
            At BizGrowth, to be the leading provider of business setup services
            in the UAE, recognized for our expertise, reliability, and customer
            satisfaction. We envision a future where every business, regardless
            of the size or industry of the company, can easily navigate the
            complexities of registration and compliance with government
            policies, and empowering the companies to thrive in a global
            marketplace. Through continuous innovation, expert support, and a
            commitment to customer success, we aim to help turn ideas into
            reality, enabling entrepreneurs to focus on building their empire
            while we take care of the details.
          </p>
        </div>
      </div>

      <div className="container my-20 font-Satoshi">
        <h1 className="text-center text-4xl font-semibold">Why Choose Us?</h1>

        <div className="grid grid-cols-1 my-16 lg:grid-cols-3 gap-4">
          {selfPraise.map((item, index) => (
            <div key={index} className="bg-[#dcedc8] p-4 rounded-xl">
              <div className="w-full aspect-[4/3] bg-slate-200/80 mb-3">
                <img className="w-full h-full object-contain" src={item.img} />
              </div>
              <h1 className="font-semibold text-2xl">{item.title}</h1>
              <p className="mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
