import React from 'react';
import { ShieldCheck, Calendar, CreditCard } from 'lucide-react';

const WhyChoose = () => {
  const features = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-blue-600" />,
      iconBg: "bg-blue-50",
      title: "Verified Tutors",
      description: "Every educator undergoes a rigorous vetting process to ensure high-quality, professional standards."
    },
    {
      icon: <Calendar className="h-6 w-6 text-emerald-600" />,
      iconBg: "bg-emerald-50",
      title: "Easy Scheduling",
      description: "Our intuitive booking queue system allows you to manage sessions across different time zones seamlessly."
    },
    {
      icon: <CreditCard className="h-6 w-6 text-amber-600" />,
      iconBg: "bg-amber-50",
      title: "Secure Payments",
      description: "Protected transactions with encrypted processing for total peace of mind during your learning journey."
    }
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-[#0a2540] sm:text-4xl">
            Why Choose MediQueue?
          </h2>
          <p className="mt-3 text-sm text-gray-500 max-w-xl mx-auto">
            The premier platform for structured academic mentorship.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Icon Container */}
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${feature.iconBg} mb-5`}>
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#0a2540] mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;