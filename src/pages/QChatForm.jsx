import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const questions = [
  "Does your child look at you when you call his/her name?",
  "How easy is it for you to get eye contact with your child?",
  "Does your child point to indicate that he/she wants something?",
  "Does your child point to share interest with you?",
  "Does your child pretend play, e.g., care for dolls, talk on a toy phone?",
  "Does your child follow where you're looking?",
  "If you or someone else in the family is visibly upset, does your child show signs of wanting to comfort them?",
  "Would you describe your child's first words as typical for his/her age?",
  "Does your child use simple gestures, e.g., wave goodbye?",
  "Does your child stare at nothing with no apparent purpose?",
];

const options = ["Never", "Rarely", "Sometimes", "Often", "Always"];

const QChatForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setIsSubmitted(true);
    toast.success("Form submitted successfully!");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-2">Q-CHAT Simplified Form</h1>
      <p className="text-center text-gray-600 mb-8">Early Autism Screening Test</p>

      {isSubmitted ? (
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Thank you for submitting the form!</h2>
          <p>Your responses have been recorded.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {questions.map((question, index) => (
            <div key={index} className="space-y-2">
              <Label htmlFor={`q${index + 1}`} className="text-lg font-medium">
                {index + 1}. {question}
              </Label>
              <RadioGroup
                id={`q${index + 1}`}
                className="flex flex-wrap gap-4"
                {...register(`q${index + 1}`, { required: "This field is required" })}
              >
                {options.map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <RadioGroupItem value={option} id={`q${index + 1}-${option}`} />
                    <Label htmlFor={`q${index + 1}-${option}`}>{option}</Label>
                  </div>
                ))}
              </RadioGroup>
              {errors[`q${index + 1}`] && (
                <p className="text-red-500 text-sm">{errors[`q${index + 1}`].message}</p>
              )}
            </div>
          ))}
          <Button type="submit" className="w-full">Submit</Button>
        </form>
      )}
    </div>
  );
};

export default QChatForm;