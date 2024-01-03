"use client";
import { createCustomer } from "@/lib/helpers/customer";
import { IApplication } from "@/lib/models/ApplicationModel";
import React, { useCallback, useState, useEffect } from "react";
import { ReactTags, Tag } from "react-tag-autocomplete";
import loader from "@/public/images/loader.gif";
import Image from "next/image";

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
  const suggestions: TagSuggestion[] = applications?.map((app) => {
    return { label: app?.label, value: app?.id };
  });

  const handleDelete = (i: number) => {
    const tags = selectedTags.slice(0);
    tags.splice(i, 1);
    setSelectedTags(tags);
  };

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
        applications: selectedTags?.map((tag) => {
          return { id: Number(tag?.value), label: tag?.label };
        }),
      };

      // Make a POST request to your API route
      const response = await fetch("/api/customer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      console.log("response: ", response);

      if (response.status === 200) {
        setSubmitStatus(1); // 1: Successful Submit
      } else {
        setSubmitStatus(-1); // -1: Failed Submit
      }
      setLoading(false);
    } catch (error) {
      setSubmitStatus(-1); // -1: Failed Submit
      setLoading(false);
    }
  };

  return (
    <div
      id="welcome-to-alphasaas"
      className="border w-full border-solid border-apple rounded-[49px] p-[4vw] lg:p-[7vw] flex flex-col lg:flex-row items-center justify-center gap-[8vw]"
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
              className="bg-gray-50 input-area border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full py-2.5 px-5"
              placeholder="Name"
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
              className="bg-gray-50 input-area border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full py-2.5 px-5"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <fieldset disabled={submitStatus == 1} className="mb-5">
            <legend className="text-sm mx-5 font-medium text-white opacity-70 mb-2">
              Applications
            </legend>
            <div className="bg-gray-50 input-area border border-gray-300 text-gray-900 text-sm rounded-lg focus-within:border focus-within:border-black w-full py-2.5 h-32 px-5 mb-4">
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
                placeholderText="Type and select applications..."
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
              className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 rounded-lg text-base font-bold w-full px-5 py-3.5 text-center"
            >
              Submit
            </button>
          )}
          {submitStatus == 1 && (
            <button
              disabled
              className="text-white bg-green-900 rounded-lg text-base font-bold w-full px-5 py-3.5 text-center"
            >
              Thanks For Submitting!
            </button>
          )}
          {loading && <Image width={40} src={loader} alt="Loading..." />}
        </form>
      </div>
    </div>
  );
};

export default FormSection;
