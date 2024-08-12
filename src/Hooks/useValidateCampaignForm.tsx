import { useState, useCallback } from 'react';

interface FormErrors {
  title?: string;
  goal?: string;
  description?: string;
  endDate?: string;
  // image?: string;
}

export const useValidateCampaignForm = () => {
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = useCallback((
    title: string, 
    goal: number, 
    description: string, 
    endDate: string, 
    // image: File | null
  ) => {
    const newErrors: FormErrors = {};

    // Validate title
    if (!title.trim()) {
      newErrors.title = "Title is required";
    } else if (title.length < 3) {
      newErrors.title = "Title must be at least 3 characters long";
    }

    // Validate goal
    if (goal <= 0) {
      newErrors.goal = "Goal must be a positive number";
    }

    // Validate description
    if (!description.trim()) {
      newErrors.description = "Description is required";
    } else if (description.length < 10) {
      newErrors.description = "Description must be at least 10 characters long";
    }

    // Validate endDate
    if (!endDate) {
      newErrors.endDate = "End date is required";
    } else {
      const currentDate = new Date();
      const selectedDate = new Date(endDate);
      if (selectedDate <= currentDate) {
        newErrors.endDate = "End date must be in the future";
      }
    }

    // Validate image
    // if (!image) {
    //   newErrors.image = "Image is required";
    // } else if (image.size > 2 * 1024 * 1024) { // 2MB limit
    //   newErrors.image = "Image size must not exceed 2MB";
    // }

    setErrors(newErrors);
    return { isValid: Object.keys(newErrors).length === 0, errors: newErrors };
  }, []);

  return { errors, validateForm };
};