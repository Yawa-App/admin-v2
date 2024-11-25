"use client";
import React from "react";
// components/Tabs.tsx
import { useState } from "react";

const Tabs: React.FC = () => {
  const [newCategory, setNewCategory] = useState<string>("");


  const submitNewCategory = () => {
    // addNewSkill({ name: newSkill }).then((res) => {
    //   console.log(res);
    // });
  };

  return (
    <div className="flex flex-col">
      <div className="mt-2">
        <>
        <div className="w-[50%] pt-10">
            {/* <Skills /> */}
            <div className="">
            <label
                htmlFor="username"
                className="font-medium leading-6 text-gray-900 mb-4"
            >
                Add New Category
            </label>
            <input
                type="text"
                name="category"
                id="category"
                className="w-[100%] border-0 py-2 px-3 mt-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 capitalize"
                placeholder="Report category"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
            />
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
