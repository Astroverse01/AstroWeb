"use client";
import { useState } from "react";

export default function FeedbackSection() {
  const [formData, setFormData] = useState({
    service: "",
    experience: "",
    category: "",
    feedback: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your feedback!");
    setFormData({
      service: "",
      experience: "",
      category: "",
      feedback: "",
    });
  };

  const CATEGORY_OPTIONS = [
    "Career guidance",
    "Love & relationships",
    "Health & wellness",
    "Financial insights",
  ];

  const EXPERIENCE_OPTIONS = [
    "Beginner - New to astrology",
    "Intermediate - Some knowledge",
    "Advanced - Very experienced",
  ];

  return (
    <section
      id="feedback"
      className="max-w-3xl mx-auto bg-card border border-border rounded-xl p-6 md:p-8 lg:p-10 mb-8 shadow-sm"
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 md:mb-8">
        Share Your Experience
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
        {/* Service Select */}
        <div className="form-group">
          <label
            htmlFor="service"
            className="block mb-3 font-medium text-foreground text-sm md:text-base"
          >
            Which service are you interested in?
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full bg-background text-foreground border border-border rounded-lg p-3 md:p-4 text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 hover:border-primary/50"
            required
          >
            <option value="">Select a service</option>
            <option value="personal-horoscope">Personal Horoscope</option>
            <option value="compatibility">Compatibility Reading</option>
            <option value="birth-chart">Birth Chart Analysis</option>
            <option value="consultation">Personal Consultation</option>
          </select>
        </div>

        {/* Experience Radio */}
        <div className="form-group">
          <label className="block mb-4 font-medium text-foreground text-sm md:text-base">
            How would you rate your experience with astrology?
          </label>
          <div className="radio-group space-y-3 md:space-y-4">
            {EXPERIENCE_OPTIONS.map((option) => (
              <label
                key={option}
                className="flex items-center bg-background border border-border rounded-lg p-4 md:p-5 cursor-pointer hover:border-primary hover:bg-accent/50 transition-all duration-200 group"
              >
                <input
                  type="radio"
                  name="experience"
                  value={option}
                  checked={formData.experience === option}
                  onChange={handleChange}
                  className="w-4 h-4 md:w-5 md:h-5 mr-3 md:mr-4 accent-primary focus:ring-2 focus:ring-primary"
                  required
                />
                <span className="text-foreground font-medium text-sm md:text-base group-hover:text-primary transition-colors duration-200">
                  {option}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Category Radio */}
        <div className="form-group">
          <label className="block mb-4 font-medium text-foreground text-sm md:text-base">
            Which AstroScience category interests you most?
          </label>
          <div className="radio-group space-y-3 md:space-y-4">
            {CATEGORY_OPTIONS.map((option) => (
              <label
                key={option}
                className="flex items-center bg-background border border-border rounded-lg p-4 md:p-5 cursor-pointer hover:border-primary hover:bg-accent/50 transition-all duration-200 group"
              >
                <input
                  type="radio"
                  name="category"
                  value={option}
                  checked={formData.category === option}
                  onChange={handleChange}
                  className="w-4 h-4 md:w-5 md:h-5 mr-3 md:mr-4 accent-primary focus:ring-2 focus:ring-primary"
                  required
                />
                <span className="text-foreground font-medium text-sm md:text-base group-hover:text-primary transition-colors duration-200">
                  {option}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Feedback Textarea */}
        <div className="form-group">
          <label
            htmlFor="feedback"
            className="block mb-3 font-medium text-foreground text-sm md:text-base"
          >
            Tell us what you're looking for or any questions you have:
          </label>
          <textarea
            id="feedback"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            rows="4"
            className="w-full bg-background text-foreground border border-border rounded-lg p-3 md:p-4 text-base resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 hover:border-primary/50"
            placeholder="Share your thoughts, questions, or what you hope to discover..."
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6 md:px-8 py-3 md:py-4 font-semibold cursor-pointer text-base transition-all duration-200 w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background shadow-sm hover:shadow-md"
        >
          Submit Feedback
        </button>
      </form>
    </section>
  );
}
