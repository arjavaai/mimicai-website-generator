import { useEffect } from 'react';

const PrivacyPolicy = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-threeAtoms-darkgray text-white pt-28">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-threeAtoms-black p-8 rounded-xl shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">Last Updated: April 2, 2024</p>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">1. Introduction</h2>
              <p className="text-gray-300">
                ThreeAtoms ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-gray-300 mt-3">
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">2. Information We Collect</h2>
              
              <h3 className="text-lg font-medium text-white mt-4 mb-2">Personal Data</h3>
              <p className="text-gray-300">
                We may collect personal identification information from users in various ways, including, but not limited to, when users visit our site, register on the site, fill out a form, and in connection with other activities, services, features, or resources we make available. Users may be asked for, as appropriate, name, email address, phone number, and company information.
              </p>
              
              <h3 className="text-lg font-medium text-white mt-4 mb-2">Non-Personal Data</h3>
              <p className="text-gray-300">
                We may collect non-personal identification information about users whenever they interact with our site. Non-personal identification information may include the browser name, the type of computer, and technical information about users' means of connection to our site, such as the operating system and the Internet service providers utilized and other similar information.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-300">
                We may use the information we collect from you in the following ways:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mt-2 space-y-2">
                <li>To personalize your experience and to deliver content and product offerings relevant to your interests</li>
                <li>To improve our website in order to better serve you</li>
                <li>To allow us to better service you in responding to your customer service requests</li>
                <li>To administer promotions, surveys, or other site features</li>
                <li>To send periodic emails regarding your order or other products and services</li>
                <li>To follow up with you after correspondence (live chat, email, or phone inquiries)</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">4. Protection of Your Information</h2>
              <p className="text-gray-300">
                We adopt appropriate data collection, storage, processing practices, and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our site.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">5. Sharing Your Personal Information</h2>
              <p className="text-gray-300">
                We do not sell, trade, or rent users' personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers for the purposes outlined above.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">6. Third-Party Websites</h2>
              <p className="text-gray-300">
                Users may find advertising or other content on our site that links to the sites and services of our partners, suppliers, advertisers, sponsors, licensors, and other third parties. We do not control the content or links that appear on these sites and are not responsible for the practices employed by websites linked to or from our site. These sites and services may have their own privacy policies and customer service policies. Browsing and interaction on any other website, including websites which have a link to our site, is subject to that website's own terms and policies.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">7. Changes to This Privacy Policy</h2>
              <p className="text-gray-300">
                ThreeAtoms has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the top of this page. We encourage users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">8. Your Acceptance of These Terms</h2>
              <p className="text-gray-300">
                By using this site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our site. Your continued use of the site following the posting of changes to this policy will be deemed your acceptance of those changes.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">9. Contacting Us</h2>
              <p className="text-gray-300">
                If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:
              </p>
              <p className="text-gray-300 mt-2">
                <strong className="text-white">ThreeAtoms</strong><br />
                Email: info@threeatoms.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
