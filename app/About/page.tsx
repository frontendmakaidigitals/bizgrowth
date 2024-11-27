"use client";
import React from "react";
import { motion } from "framer-motion";
import Button from "../App_Chunks/Components/Button";
import Heading from "../App_Chunks/Components/Heading";
const Page = () => {
  const selfPraise = [
    {
      title: "Expertise and Experience",
      color: "#FFF59D",
      img: "/icon/reputation.png",
      desc: "With years of experience in the UAE’s Investment Potential, we understand the intricacies of local laws and regulations, giving you the confidence to move forward with your business plans.",
    },
    {
      title: "Tailored Solutions",
      img: "/icon/solution.png",
      desc: "Every business is different, and we pride ourselves on offering customized services that align with your business goals. From free zone setups to mainland and offshore company formations, we have the expertise to advise you on the best option for your business.",
    },
    {
      title: "End-to-End Service",
      img: "/icon/travel.png",
      desc: "From the initial consultation to post-setup support, we handle every aspect of your company formation process. This includes documentation, visas, banking assistance, office space, and more—ensuring a hassle-free experience.",
    },
    {
      title: "Local and International Knowledge",
      img: "/icon/idea.png",
      desc: "Our team combines deep local insights with international best practices, ensuring that we provide solutions that are both practical and in line with global standards.",
    },
    {
      title: "Commitment to Your Success",
      img: "/icon/success.png",
      desc: "At BIZ Growth, your success is our priority. We go above and beyond to provide ongoing support as your business evolves in the UAE market.",
    },
    {
      title: "Personalized Service",
      img: "/icon/customer-service.png",
      desc: "We are committed to delivering high-quality services and exceeding your expectations.",
    },
    {
      title: "Cost-Effective Solutions",
      img: "/icon/finance-and-business.png",
      desc: "We offer competitive pricing and transparent fee structures to get your business running.",
    },
  ];
  const histories = [
    {
      id: 0,
      title: "Our Mission",
      desc: (
        <p>
          At BizGrowth, our mission is to empower upcoming business by providing
          comprehensive and personalized set-up solutions that accelerate growth
          and success. We attempt to simplify the process of setting up and
          registering businesses by offering expert guidance, tailored
          solutions, and unparalleled customer support. Our goal is to help
          professionals and companies navigate the complexities of company
          formation which helps them to focus on their core objectives and
          achieve long-term success. Through innovation, integrity, and a
          commitment to excellence, we aim to be the trusted partner in every
          step of your business journey.
        </p>
      ),
    },
    {
      id: 1,
      title: "Our Vision",
      desc: (
        <p>
          At BizGrowth, to be the leading provider of business setup services in
          the UAE, recognized for our expertise, reliability, and customer
          satisfaction. We envision a future where every business, regardless of
          the size or industry of the company, can easily navigate the
          complexities of registration and compliance with government policies,
          and empowering the companies to thrive in a global marketplace.
          Through continuous innovation, expert support, and a commitment to
          customer success, we aim to help turn ideas into reality, enabling
          entrepreneurs to focus on building their empire while we take care of
          the details.
        </p>
      ),
    },
    {
      id: 2,
      title: "Our Commitment",
      desc: (
        <p>
          At BIZ Growth, we are committed to providing exceptional service and
          unwavering support to our clients throughout their business Set up and
          ongoing journey. We commit to deliver efficient, transparent, and
          hassle-free solutions tailored to each company’s unique needs. Our
          team of expert consultants is dedicated to ensuring that every process
          is completed accurately, on time, and in full compliance with all
          legal requirements. We are passionate about empowering entrepreneurs
          and businesses with the knowledge, tools, and resources they need to
          succeed. By upholding the highest standards of integrity,
          professionalism, and customer service, we aim to be a trusted partner
          in helping you bring your business vision to life.
        </p>
      ),
    },
    {
      id: 3,
      title: "Our Work Culture",
      desc: (
        <p>
          At Biz Growth, our work culture is fabricated on collaboration,
          innovation, and a deep commitment to customer success. We encourage an
          environment where teamwork flourish, where each team member’s
          expertise and ideas are valued, and where we continuously learn and
          grow together. Our culture emphasizes transparency, uprightness, and
          accountability, ensuring that we always act in the best interest of
          our clients. We celebrate diversity, creativity, and proactive
          problem-solving, empowering our team to take initiative and drive
          positive change. With a shared vision of supporting investors,
          entrepreneurs and businesses, we strive to create a positive,
          inclusive, and dynamic workplace that inspires excellence in every
          aspect of our work.
        </p>
      ),
    },
  ];
  return (
    <div className=" my-14">
      <div className="container font-Satoshi">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="order-2 lg:order-1">
            <p className=" px-3 text-slate-900 flex items-center gap-2 font-medium mb-4 bg-[#dcedc8] w-fit py-1 rounded-lg ">
              <div className="size-2 rounded-full bg-[#244010]"></div>
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
      <div className="w-full py-14  my-20 relative bg-lime-50">
        <Heading className="w-full !text-center relative z-10">Title</Heading>
        <div className="container mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {histories.map((item) => (
            <motion.div
              whileHover={{ scale: 1.03, background: "#c1daa5" }}
              transition={{ type: "spring", duration: 0.6, bounce: 0.5 }}
              key={item.id}
              className=" p-6 rounded-xl border border-[#488020] relative overflow-hidden "
            >
              <div className="relative z-10">
                <h1 className="text-3xl text-[#1a2e0c] font-Satoshi font-bold flex items-center gap-3">
                  <span>{item.id + 1}.)</span> {item.title}
                </h1>
                <div className="mt-3 font-Satoshi ">{item.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container my-20 font-Satoshi">
        <h1 className="text-center text-4xl font-semibold">Why Choose Us?</h1>

        <div className="grid grid-cols-1 my-16 lg:grid-cols-3 gap-4">
          {selfPraise.map((item, index) => (
            <div
              key={index}
              className="bg-slat-50 p-4 text-[#244010] rounded-xl bg-[#dcedc8]"
            >
              <div className="size-14 p-2 rounded-full bg-[#c5e1a5] mb-3">
                <img className="w-full h-full object-contain" src={item.img} />
              </div>
              <h1 className="font-semibold text-2xl ">{item.title}</h1>
              <p className="mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
