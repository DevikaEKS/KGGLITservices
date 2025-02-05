


import React from 'react';
import "./Whydm.css";

function Whydm() {
  return (
    <div className="container choosepart">
      <div className="row py-3">
        <h1 className="text-center py-5 choosehead">Why Choose Us?</h1>
        {/* Benefits */}
        {[
          {
            number: 1,
            title: "Tailored Strategies for Every Business",
            description:
              "Customized marketing solutions designed to align with your unique business goals and target audience.",
          },
          {
            number: 2,
            title: "Global Visibility, Local Focus",
            description:
              "Helping businesses enhance their presence on a global scale while staying connected to local audiences.",
          },
          {
            number: 3,
            title: "Comprehensive Service Portfolio",
            description:
              "From SEO and PPC to social media marketing and ROI analytics, we provide a full suite of services under one roof.",
          },
          {
            number: 4,
            title: "Affordable and Scalable Solutions",
            description:
              "Flexible pricing and service packages to fit businesses of all sizes, ensuring cost-effective results.",
          },
          {
            number: 5,
            title: "Data-Driven Results",
            description:
              "Leverage real-time insights and analytics to maximize your marketing ROI and drive sustainable growth.",
          },
          {
            number: 6,
            title: "Proven Success across Platforms",
            description:
              "Expertise in optimizing performance on major platforms like Google, Facebook, LinkedIn, and more.",
          },
          {
            number: 7,
            title: "Certified Experts",
            description:
              "A team of skilled professionals with expertise in the latest digital marketing trends and tools.",
          },
          {
            number: 8,
            title: "Commitment to Client Success",
            description:
              "Dedicated support and continuous optimization to ensure your campaigns deliver measurable outcomes.",
          },
        ].map((item, index) => (
          <div className="col-sm-12 col-md-6 col-lg-6 my-3" key={index}>
            <div className="d-flex flex-row align-items-center">
              <div className="numberbox d-flex justify-content-center align-items-center text-light px-3 me-3">
                {item.number}
              </div>
              <div>
                <h3 className="fw-bold">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Whydm;
