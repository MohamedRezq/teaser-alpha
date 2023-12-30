"use client";
import React, { useCallback, useState } from "react";
import { ReactTags } from "react-tag-autocomplete";

const FormSection = () => {
  const [selected, setSelected] = useState<
    {
      label: string;
      value: string | number | symbol | null;
    }[]
  >([]);

  const onAdd = useCallback(
    (newTag: { label: string; value: string | number | symbol | null }) => {
      setSelected([...selected, newTag]);
    },
    [selected]
  );

  const onDelete = useCallback(
    (tagIndex: number) => {
      setSelected(selected.filter((_, i) => i !== tagIndex));
    },
    [selected]
  );
  return (
    <div className="border w-full border-solid border-apple rounded-[49px] px-[6vw] py-[9vw] sm:px-[9vw] flex flex-col md:flex-row items-center justify-center gap-[10vw]">
      <div className="flex flex-col gap-y-[5vw] text-3xl md:text-4xl w-full md:w-1/2">
        <div>
          Discover Your <br />
          Software <span className="text-apple">Potential</span>
        </div>
        <p className="text-sm md:text-base">
          Dive into your software landscape. Share at least one app you use, and
          let us guide you to potential savings, efficiency, and success.
        </p>
      </div>
      <div className="w-full md:w-1/2">
        <form>
          <div className="mb-5">
            <label
              htmlFor="username"
              className="block mb-2 mx-5 text-sm font-medium text-white opacity-70"
            >
              User Name
            </label>
            <input
              type="text"
              id="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full py-2.5 px-5"
              placeholder="User Name"
              required
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full py-2.5 px-5"
              placeholder="Email"
              required
            />
          </div>
          <fieldset className="mb-5">
            <legend className="text-sm mx-5 font-medium text-white opacity-70 mb-2">
              Applications
            </legend>
            <div className="flex items-center mb-4">
              <textarea
                placeholder="Ex: Zoho"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full py-2.5 h-32 px-5"
              >
                <ReactTags
                  labelText="Select countries"
                  selected={selected}
                  suggestions={[{ label: "One", value: "One" }]}
                  onAdd={onAdd}
                  onDelete={onDelete}
                  noOptionsText="No matching countries"
                />
              </textarea>
            </div>
          </fieldset>
          <button
            type="submit"
            className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 rounded-lg text-base font-bold w-full px-5 py-3.5 text-center"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormSection;
