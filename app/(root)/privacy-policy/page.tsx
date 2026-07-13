import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-6 bg-white rounded-lg text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-600 text-center mb-8">
        Effective Date: 07/01/2025
      </p>

      <p className="mb-4">
        Biz Growth values your privacy. This Privacy Policy explains how we
        collect, use, and protect your information when you use our website{" "}
        <a
          href="https://www.bizgrowthconsultancy.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          www.bizgrowthconsultancy.com
        </a>{" "}
        and our services. By accessing or using our Site, you agree to this
        Privacy Policy.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          1. Information We Collect
        </h2>
        <p className="mb-4">
          We may collect the following types of information:
        </p>
        <h3 className="text-lg font-medium mb-2">a. Personal Information</h3>
        <p className="mb-2">
          When you fill out forms, sign up for services, or contact us, we may
          collect personal information, including but not limited to:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>
            Business details (e.g., business name, address, and registration
            information)
          </li>
        </ul>
        <h3 className="text-lg font-medium mb-2">
          b. Non-Personal Information
        </h3>
        <p className="mb-2">
          We may automatically collect non-personal information about your use
          of our Site, such as:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>IP address</li>
          <li>Browser type</li>
          <li>Operating system</li>
          <li>Pages visited and time spent on our Site</li>
          <li>Cookies and similar tracking technologies</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          2. How We Use Your Information
        </h2>
        <p>We use the information we collect for the following purposes:</p>
        <ul className="list-disc list-inside mb-4">
          <li>To provide and improve our services.</li>
          <li>
            To communicate with you regarding your inquiries, requests, or
            services.
          </li>
          <li>To send promotional emails and updates (with your consent).</li>
          <li>To analyze usage trends and enhance user experience.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          3. Sharing Your Information
        </h2>
        <p>
          We do not sell or rent your personal information. However, we may
          share your information in the following cases:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>With Service Providers:</strong> To facilitate our services
            (e.g., payment processors, hosting providers).
          </li>
          <li>
            <strong>With Legal Authorities:</strong> If required to comply with
            applicable laws or regulations.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          4. Cookies and Tracking Technologies
        </h2>
        <p>
          Our Site uses cookies and similar technologies to enhance your
          experience. Cookies are small data files stored on your device. You
          can control cookies through your browser settings, but disabling them
          may affect functionality.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">5. Data Security</h2>
        <p>
          We implement reasonable security measures to protect your information
          from unauthorized access, disclosure, or misuse. However, no data
          transmission or storage system is entirely secure, and we cannot
          guarantee absolute security.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">6. Third-Party Links</h2>
        <p>
          Our Site may contain links to third-party websites. We are not
          responsible for the privacy practices or content of those sites.
          Please review their privacy policies before providing any information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          7. Changes to This Privacy Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be
          posted on this page with the &quot;Effective Date&quot; updated. Your continued
          use of the Site after any changes constitutes your acceptance of the
          revised policy.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">8. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy,
          please contact us at:
        </p>
        <ul className="list-none">
          <li>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:info@bizgrowthconsultancy.com"
              className="text-blue-500 underline"
            >
              info@bizgrowthconsultancy.com
            </a>
          </li>
          <li>
            <strong>Phone:</strong> +97 15593 91238
          </li>
          <li>
            <strong>Address:</strong> Office - 3307, Churchill Towers, Business
            Bay, Dubai, UAE
          </li>
        </ul>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
