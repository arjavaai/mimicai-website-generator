import { useEffect } from 'react';
import SEO from '@/components/SEO';

const TermsAndConditions = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-threeAtoms-darkgray text-white pt-28">
      <SEO 
        title="Terms and Conditions - ThreeAtoms"
        description="Read ThreeAtoms' terms and conditions for using our AI solutions and services. Understand your rights and obligations when working with our AI development team."
        keywords="terms and conditions, legal terms, ThreeAtoms, AI services, user agreement, service terms, intellectual property"
        canonical="https://threeatoms.com/terms-and-conditions/"
      />
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-threeAtoms-black p-8 rounded-xl shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Terms and Conditions</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">Last Updated: April 2, 2024</p>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">1. Introduction</h2>
              <p className="text-gray-300">
                Welcome to ThreeAtoms. These Terms and Conditions govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the website.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">2. Definitions</h2>
              <p className="text-gray-300">
                Throughout these Terms and Conditions, the terms "we", "us", and "our" refer to ThreeAtoms. "Service" refers to the company's website and all services provided by ThreeAtoms. "You" refers to the user or viewer of our website and services.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">3. Use License</h2>
              <p className="text-gray-300">
                Permission is granted to temporarily download one copy of the materials on ThreeAtoms's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mt-2 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on ThreeAtoms's website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
              <p className="text-gray-300 mt-3">
                This license shall automatically terminate if you violate any of these restrictions and may be terminated by ThreeAtoms at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">4. Services</h2>
              <p className="text-gray-300">
                ThreeAtoms provides various AI-related services. We reserve the right to modify, suspend, or discontinue any part of our services at any time without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of our services.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">5. User Accounts</h2>
              <p className="text-gray-300">
                When you create an account with us, you guarantee that the information you provide is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on the service.
              </p>
              <p className="text-gray-300 mt-3">
                You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account and/or password.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">6. Intellectual Property</h2>
              <p className="text-gray-300">
                The Service and its original content, features, and functionality are and will remain the exclusive property of ThreeAtoms and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of ThreeAtoms.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">7. Disclaimer</h2>
              <p className="text-gray-300">
                The materials on ThreeAtoms's website are provided on an 'as is' basis. ThreeAtoms makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              <p className="text-gray-300 mt-3">
                Further, ThreeAtoms does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">8. Limitations</h2>
              <p className="text-gray-300">
                In no event shall ThreeAtoms or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ThreeAtoms's website, even if ThreeAtoms or a ThreeAtoms authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">9. Governing Law</h2>
              <p className="text-gray-300">
                These Terms shall be governed and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">10. Changes to Terms</h2>
              <p className="text-gray-300">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
              <p className="text-gray-300 mt-3">
                By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
