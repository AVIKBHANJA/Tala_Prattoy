"use client";

import { useState } from "react";

const tiers = [
  {
    name: "Hobby",
    price: "12",
    frequency: "/month",
    description: "All the basics for starting a new business",
    features: [
      "Potenti felis, in cras at at ligula nunc.",
      "Orci neque eget pellentesque.",
      "Donec mauris sit in eu tincidunt etiam.",
    ],
    cta: "Buy Hobby",
    mostPopular: false,
  },
  {
    name: "Freelancer",
    price: "24",
    frequency: "/month",
    description: "All the basics for starting a new business",
    features: [
      "Potenti felis, in cras at at ligula nunc.",
      "Orci neque eget pellentesque.",
      "Donec mauris sit in eu tincidunt etiam.",
      "Faucibus volutpat magna.",
    ],
    cta: "Buy Freelancer",
    mostPopular: true,
  },
  {
    name: "Enterprise",
    price: "32",
    frequency: "/month",
    description: "All the basics for starting a new business",
    features: [
      "Potenti felis, in cras at at ligula nunc.",
      "Orci neque eget pellentesque.",
      "Donec mauris sit in eu tincidunt etiam.",
      "Faucibus volutpat magna.",
      "Id sed tellus in varius quisque.",
      "Risus egestas faucibus.",
      "Risus cursus ullamcorper.",
    ],
    cta: "Buy Enterprise",
    mostPopular: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Pricing() {
  const [annualBillingEnabled, setAnnualBillingEnabled] = useState(true);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Pricing
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Pricing plans for teams of&nbsp;all&nbsp;sizes
          </p>
        </div>{" "}
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Choose an affordable plan that&apos;s packed with the best features
          for engaging your audience, creating customer loyalty, and driving
          sales.
        </p>
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-x-3">
            <span
              className={classNames(
                annualBillingEnabled ? "text-gray-500" : "text-gray-900",
                "text-sm font-semibold"
              )}
            >
              Monthly billing
            </span>
            <button
              type="button"
              className={classNames(
                annualBillingEnabled ? "bg-indigo-600" : "bg-gray-200",
                "flex w-12 flex-none cursor-pointer rounded-full p-1 ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out"
              )}
              onClick={() => setAnnualBillingEnabled(!annualBillingEnabled)}
            >
              <span
                aria-hidden="true"
                className={classNames(
                  annualBillingEnabled ? "translate-x-5" : "translate-x-0",
                  "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                )}
              />
            </button>
            <span
              className={classNames(
                !annualBillingEnabled ? "text-gray-500" : "text-gray-900",
                "text-sm font-semibold"
              )}
            >
              Annual billing <span className="text-green-500">(Save 20%)</span>
            </span>
          </div>
        </div>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={classNames(
                tier.mostPopular
                  ? "ring-2 ring-indigo-600"
                  : "ring-1 ring-gray-200",
                "rounded-3xl p-8"
              )}
            >
              <h3
                className={classNames(
                  tier.mostPopular ? "text-indigo-600" : "text-gray-900",
                  "text-lg font-semibold leading-8"
                )}
              >
                {tier.name}
              </h3>
              <p className="mt-4 text-sm leading-6 text-gray-600">
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  $
                  {annualBillingEnabled
                    ? (parseInt(tier.price) * 12 * 0.8).toString()
                    : tier.price}
                </span>
                <span className="text-sm font-semibold leading-6 text-gray-600">
                  {annualBillingEnabled ? "/year" : tier.frequency}
                </span>
              </p>
              <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <svg
                      className="h-6 w-5 flex-none text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={classNames(
                  tier.mostPopular
                    ? "bg-indigo-600 text-white shadow-sm hover:bg-indigo-500"
                    : "text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300",
                  "mt-8 block w-full rounded-md py-2 px-3 text-center text-sm font-semibold leading-6"
                )}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
