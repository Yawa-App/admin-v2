"use client";
import React from "react";
// components/Tabs.tsx
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const Tabs: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState('')

  const { handleCreateCategory } = useAuth();


  const submitNewCategory = async (event: React.FormEvent) => {
    event.preventDefault()
    await handleCreateCategory(name, description)
    setName('')
    setDescription('')
  };

  return (
    <div className="flex flex-col">
      <div className="">
        <>
        <div className="">
            {/* <Skills /> */}
            <div className="mb-3">
              <label
                htmlFor="category"
                className="font-medium leading-6 text-gray-900 mb-4"
              >Add New Category </label>
              <input
                type="text"
                name="category"
                id="category"
                className="w-[100%] border-2 border-gray-500 py-2 px-3 mt-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 capitalize"
                placeholder="Report category"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="flex justify-start items-start flex-col">
              <label htmlFor="description" className="self-start font-medium leading-6 text-gray-900 my-4">Description</label>
              <textarea value={description} placeholder="Description" onChange={(e) => setDescription(e.target.value)} className="border-2 border-gray-500 p-3 w-[100%] text-gray-900 placeholder:text-gray-400">

              </textarea>
            </div>

            <button
            className="border-0 bg-[#262626] text-[#fff] px-6 py-2 rounded mt-10 text-sm hover:opacity-90 hover:scale-[0.99] transition-all"
            onClick={submitNewCategory}
            >
            Publish
            </button>
        </div>
        </>
      </div>
    </div>
  );
};

export default Tabs;
