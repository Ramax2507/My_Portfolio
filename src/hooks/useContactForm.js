 import { useState } from 'react';

const useContactForm = (initialValues = { name: '', email: '', message: '' }) => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Simple validation function
  const validate = (data) => {
    const errors = {};
    if (!data.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email is invalid';
    }
    if (!data.message.trim()) {
      errors.message = 'Message is required';
    }
    return errors;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = async (e, onSubmitCallback) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      try {
        await onSubmitCallback(formData);
        setIsSubmitted(true);
        setFormData(initialValues);
      } catch (error) {
        // Handle submit error here if needed
        console.error('Submit error:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // Reset form
  const resetForm = () => {
    setFormData(initialValues);
    setErrors({});
    setIsSubmitted(false);
  };

  return {
    formData,
    errors,
    isSubmitting,
    isSubmitted,
    handleChange,
    handleSubmit,
    resetForm,
  };
};

export default useContactForm;

