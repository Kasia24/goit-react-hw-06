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
    <form onSubmit={handleSubmit} className="classForm">
      <label className="classLabel">
        Name
        <input type="text" name="name" required className="classField" />
      </label>
      <label className="classLabel">
        Number
        <input type="text" name="number" required className="classField" />
      </label>
      <button type="submit" className="classBtn">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
