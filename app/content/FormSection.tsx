"use client";
import React, { useState, useEffect, useCallback } from "react";
import { createCustomer } from "@/lib/helpers/customer";
import { IApplication } from "@/lib/models/ApplicationModel";
import { ReactTags, Tag } from "react-tag-autocomplete";
import Image from "next/image";
import loader from "@/public/images/loader.gif";

interface Itag {
  id: number;
  name: string;
}

interface TagSuggestion {
  label: string;
  value: number;
}

const FormSection = ({ applications }: { applications: IApplication[] }) => {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(0); // 0: Not Submitted Yet || 1: Success || -1: Failed
  const [showSnackbar, setShowSnackbar] = useState(false);
  const suggestions: TagSuggestion[] = applications?.map((app) => {
    return { label: app?.label, value: app?.id };
  });

  // Snackbar timeout function
  useEffect(() => {
    let timer: any = null;
    if (showSnackbar) {
      timer = setTimeout(() => {
        setShowSnackbar(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [showSnackbar]);

  const handleDelete = useCallback(
    (i: number) => {
      const tags = selectedTags.slice(0);
      tags.splice(i, 1);
      setSelectedTags(tags);
    },
    [selectedTags]
  );

  const handleAddition = useCallback(
    (newTag: Tag) => {
      setSelectedTags([...selectedTags, newTag]);
    },
    [selectedTags]
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const requestData = {
        name,
        email,
        applications: selectedTags.map((tag) => ({
          id: Number(tag?.value),
          label: tag?.label,
        })),
      };

      // Make a POST request to your API route
      const createCustomerResponse = await fetch("/api/customer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      // Make a POST request to your API route
      // const sendEmailResponse = await fetch("/api/email", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     email: email,
      //     subject: "Welcome to AlphaSaas",
      //     text: "Thank you for sharing your information! <br /> Our SaaS experts will reach out to you shortly to help you optimize your SaaS investments.",
      //   }),
      // });

      if (
        createCustomerResponse.status === 200
        // sendEmailResponse.status === 200
      ) {
        setSubmitStatus(1); // 1: Successful Submit
        setShowSnackbar(true); // Show snackbar
        // Trigger email sending function here (e.g., sendEmail function)
      } else {
        setSubmitStatus(-1); // -1: Failed Submit
      }
    } catch (error) {
      setSubmitStatus(-1); // -1: Failed Submit
    }
    setLoading(false);
  };

  // Example sendEmail function (requires server-side implementation)
  const sendEmail = async () => {
    // Implementation depends on your backend setup
  };

  return (
    <div
      id="welcome-to-alphasaas"
      className="border w-full border-solid border-apple rounded-[49px] px-[4vw] py-[49px] lg:p-[7vw] flex flex-col lg:flex-row items-center justify-center gap-[8vw]"
    >
      <div className="flex flex-col gap-y-[27px] lg:gap-y-[54px] text-3xl sm:text-4xl lg:text-6xl w-full lg:w-7/12">
        <div>
          Discover Your <br />
          Software <span className="text-apple">Potential</span>
        </div>
        <p className="text-sm sm:text-base lg:text-lg w-full lg:w-9/12">
          Dive into your software landscape. Share at least one app you use, and
          let us guide you to potential savings, efficiency, and success.
        </p>
      </div>
      <div className="w-full lg:w-5/12">
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block mb-2 mx-5 text-sm font-medium text-white opacity-70"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              disabled={submitStatus == 1}
              className="bg-gray-50 input-area border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-green-500 focus:border-green-500 block w-full py-2.5 px-5"
              placeholder="First Name/ Last Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 mx-5 text-sm font-medium text-white opacity-70"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              disabled={submitStatus == 1}
              className="bg-gray-50 input-area border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-green-500 focus:border-green-500 block w-full py-2.5 px-5"
              placeholder="Work Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <fieldset disabled={submitStatus == 1} className="mb-5">
            <legend className="text-sm mx-5 font-medium text-white opacity-70 mb-2">
              Applications and Suites
            </legend>
            <div className="bg-gray-50 input-area border border-gray-300 text-gray-900 text-sm rounded-2xl focus-within:border focus-within:border-black w-full py-2.5 h-32 px-5 mb-4">
              <ReactTags
                // tags={selectedTags}
                id="applications-selector"
                allowBackspace
                activateFirstOption={false}
                isInvalid={false}
                collapseOnSelect={false}
                isDisabled={false}
                labelText=""
                allowNew={true}
                selected={selectedTags}
                suggestions={suggestions}
                onAdd={handleAddition}
                onDelete={handleDelete}
                noOptionsText="Suggest New Application"
                placeholderText="Type and select applications / suites ..."
              />
            </div>
            {submitStatus == -1 && (
              <div className="flex h-5 mt-3 justify-center items-center text-xs text-red-400">
                Please check your internet connection!
              </div>
            )}
          </fieldset>
          {submitStatus != 1 && (
            <button
              type="submit"
              className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 rounded-2xl text-base font-bold w-full px-5 py-3.5 text-center"
            >
              Submit
            </button>
          )}
          {submitStatus == 1 && (
            <button
              disabled
              className="text-apple text-center rounded-lg text-xs sm:text-sm font-bold w-full py-3.5"
            >
              Thank you for sharing your information! <br />
              Our SaaS experts will reach out to you shortly to help you
              optimize your SaaS investments.
            </button>
          )}
          {loading && <Image width={40} src={loader} alt="Loading..." />}
        </form>
      </div>

      {showSnackbar && (
        <div className="fixed flex gap-2 text-xs top-5 z-50 left-1/2 transform -translate-x-1/2 bg-green-600 text-white py-2 px-4 rounded-md">
          Thank you for sharing your information!
          <button onClick={() => setShowSnackbar(false)}>
            <svg
              className="h-4 w-4 opacity-60 cursor-pointer hover:opacity-90"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default FormSection;
