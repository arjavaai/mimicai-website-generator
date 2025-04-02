import { useEffect } from 'react';

const RefundPolicy = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-threeAtoms-darkgray text-white pt-28">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-threeAtoms-black p-8 rounded-xl shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Refund Policy</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">Last Updated: April 2, 2024</p>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">1. Introduction</h2>
              <p className="text-gray-300">
                At ThreeAtoms, we strive to ensure complete satisfaction with our services. This Refund Policy outlines our guidelines for refunds and cancellations. By using our services, you agree to the terms of this policy.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">2. Service Satisfaction</h2>
              <p className="text-gray-300">
                We are committed to delivering high-quality AI solutions that meet your requirements. If you are not satisfied with our services, please contact us immediately so we can address your concerns.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">3. Refund Eligibility</h2>
              <p className="text-gray-300">
                Refunds may be considered under the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mt-2 space-y-2">
                <li>Services not delivered as described in the agreed scope of work</li>
                <li>Technical issues that significantly impair the functionality of delivered services</li>
                <li>Cancellation of services before work has commenced (subject to our cancellation policy)</li>
              </ul>
              <p className="text-gray-300 mt-3">
                Refund requests must be submitted within 14 days of service delivery or the identification of issues.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">4. Non-Refundable Items</h2>
              <p className="text-gray-300">
                The following are generally not eligible for refunds:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mt-2 space-y-2">
                <li>Services that have been fully delivered and accepted by the client</li>
                <li>Custom development work that has been completed according to specifications</li>
                <li>Consulting services that have already been provided</li>
                <li>Services canceled after work has substantially commenced</li>
                <li>Subscription services after the refund eligibility period has passed</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">5. Refund Process</h2>
              <p className="text-gray-300">
                To request a refund:
              </p>
              <ol className="list-decimal pl-6 text-gray-300 mt-2 space-y-2">
                <li>Contact our customer support team at support@threeatoms.com with your order details and reason for the refund request</li>
                <li>Our team will review your request within 5 business days</li>
                <li>If approved, refunds will be processed using the original payment method</li>
                <li>Refund processing may take 5-10 business days depending on your payment provider</li>
              </ol>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">6. Cancellation Policy</h2>
              <p className="text-gray-300">
                For project-based services:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mt-2 space-y-2">
                <li>Cancellations made before work has commenced may be eligible for a full refund</li>
                <li>Cancellations made after work has commenced but before completion may be eligible for a partial refund, less costs incurred and work completed</li>
                <li>Cancellation fees may apply as outlined in your service agreement</li>
              </ul>
              
              <p className="text-gray-300 mt-4">
                For subscription services:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mt-2 space-y-2">
                <li>You may cancel your subscription at any time</li>
                <li>Refunds for the current billing period are generally not provided for subscription cancellations</li>
                <li>Cancellation will take effect at the end of the current billing cycle</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">7. Dispute Resolution</h2>
              <p className="text-gray-300">
                If you are not satisfied with our decision regarding your refund request, please contact our management team to discuss the matter further. We are committed to resolving any issues fairly and to your satisfaction.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">8. Changes to This Policy</h2>
              <p className="text-gray-300">
                ThreeAtoms reserves the right to modify this Refund Policy at any time. Changes will be effective immediately upon posting on our website. We encourage you to review this policy periodically for any updates.
              </p>
              <p className="text-gray-300 mt-4">
                If you have any questions about our Refund Policy, please contact us at:
              </p>
              <p className="text-gray-300 mt-2">
                <strong className="text-white">ThreeAtoms</strong><br />
                Email: support@threeatoms.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
