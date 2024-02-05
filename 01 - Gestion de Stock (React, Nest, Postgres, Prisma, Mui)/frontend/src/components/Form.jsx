import React from "react";
import Button from "./Button";

const Form = () => {
  return (
    <form className='border flex gap-2 items-center p-2 shadow-lg'>
      <input
        className='flex-grow p-2 rounded-full'
        type='text'
        placeholder='enter name'
      />
      <input
        className='flex-grow p-2 rounded-full'
        type='text'
        placeholder='enter prix'
      />
      <Button label={"+ add"} color={"green"} type={"submit"} />
    </form>
  );
};

export default Form;
