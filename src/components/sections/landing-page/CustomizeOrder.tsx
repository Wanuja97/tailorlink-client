import React from 'react'
import { ScissorsIcon, HeartIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Personalization',
    description:
      'Customers can customize their orders based on fabric, design elements, and measurements, ensuring tailor-made garments that match their unique style.',
    icon: ScissorsIcon,
  },
  {
    name: 'Convenience',
    description: 'The web application simplifies the ordering process, allowing customers to place custom orders anytime, anywhere, without the need for in-person visits to tailoring shops.',
    icon: HeartIcon,
  },
  {
    name: 'Communication Efficiency',
    description: 'The application facilitates seamless communication between customers and tailors, eliminating potential errors and ensuring a smooth collaboration for efficient workflow.',
    icon: ServerIcon,
  },
]

function CustomizeOrder() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32" id='customize-order'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-yellow-400">Revolutionizing Tailoring</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Empowering Customers with Custom Orders through our Web Application</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              TailorLink enables customers to place custom orders with tailors, allowing them to personalize their clothing choices according to their preferences.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-yellow-400" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="/images/customize-order-section.jpg"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}

export default CustomizeOrder