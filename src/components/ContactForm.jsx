import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "..//components/contactsSlice";
import { nanoid } from "nanoid";
import "./ContactForm.css";

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    dispatch(addContact({ id: nanoid(), name, number }));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name" required />
      </label>
      <label>
        Number
        <input type="text" name="number" required />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
