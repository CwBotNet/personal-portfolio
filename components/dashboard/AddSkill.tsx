import React from "react";
import { Form } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const AddSkill = () => {
  return (
    <>
      <div>
        <form className="flex flex-col gap-2 capitalize text-black dark:text-white">
          <label htmlFor="">skill name</label>
          <Input
            type="name"
            placeholder=""
            className="border-gray-600/45 dark:bg-gray-800/45 bg-[#0C0C0C]/90 rounded-xl"
          />
          <label htmlFor="">type</label>
          <Input
            type="type"
            className="border-gray-600/45 dark:bg-gray-800/45 bg-[#0C0C0C]/90 rounded-xl"
          />
          <Button variant={"Add"}>Add</Button>
        </form>
      </div>
    </>
  );
};

export default AddSkill;
