"use client";
import { useState } from "react";

export default function FeedbackSection() {
  const [formData, setFormData] = useState({
    dailyLife: "",
    category: "",
    accessibility: "",
    missing: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const DAILY_LIFE_OPTIONS = [
    "To guide personal decisions",
    "To satisfy curiosity about the universe",
    "To improve mental well-being",
    "Other",
  ];

  const CATEGORY_OPTIONS = [
    "Career guidance",
    "Love & relationships",
    "Health & wellness",
    "Financial insights",
  ];

  const ACCESSIBILITY_OPTIONS = [
    "Mobile app with daily tips",
    "Social-media micro-videos",
    "Community events & webinars",
    "Simplified free newsletters",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json().catch(() => ({}));
      if (res.ok && (result?.success || result?.result === "success")) {
        alert("✅ Thank you for your feedback!");
        setFormData({
          dailyLife: "",
          category: "",
          accessibility: "",
          missing: "",
        });
      } else {
        alert("⚠️ Submission failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("❌ There was an error. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="feedback"
      className="max-w-3xl mx-auto bg-card border border-border rounded-xl p-6 md:p-8 lg:p-10 mb-8 shadow-sm"
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 md:mb-8">
        Your Feedback Matters
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
        {/* Q1: Why do we need AstroScience in our daily life? */}
        <div className="form-group">
          <label className="block mb-4 font-medium text-foreground text-sm md:text-base">
            Why do we need AstroScience in our daily life?
          </label>
          <div className="space-y-3 md:space-y-4">
            {DAILY_LIFE_OPTIONS.map((option) => (
              <label
                key={option}
                className="flex items-center bg-background border border-border rounded-lg p-4 md:p-5 cursor-pointer hover:border-primary hover:bg-accent/50 transition-all duration-200 group"
              >
                <input
                  type="radio"
                  name="dailyLife"
                  value={option}
                  checked={formData.dailyLife === option}
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

        {/* Q2: Which AstroScience category interests you most? */}
        <div className="form-group">
          <label className="block mb-4 font-medium text-foreground text-sm md:text-base">
            Which AstroScience category interests you most?
          </label>
          <div className="space-y-3 md:space-y-4">
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

        {/* Q3: How can AstroScience be made more accessible? */}
        <div className="form-group">
          <label className="block mb-4 font-medium text-foreground text-sm md:text-base">
            How can AstroScience be made more accessible to everyone?
          </label>
          <div className="space-y-3 md:space-y-4">
            {ACCESSIBILITY_OPTIONS.map((option) => (
              <label
                key={option}
                className="flex items-center bg-background border border-border rounded-lg p-4 md:p-5 cursor-pointer hover:border-primary hover:bg-accent/50 transition-all duration-200 group"
              >
                <input
                  type="radio"
                  name="accessibility"
                  value={option}
                  checked={formData.accessibility === option}
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

        {/* Q4: What's missing in current Astrology apps? */}
        <div className="form-group">
          <label
            htmlFor="missing"
            className="block mb-3 font-medium text-foreground text-sm md:text-base"
          >
            What's missing in current Astrology apps?
          </label>
          <textarea
            id="missing"
            name="missing"
            value={formData.missing}
            onChange={handleChange}
            rows={4}
            className="w-full bg-background text-foreground border border-border rounded-lg p-3 md:p-4 text-base resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 hover:border-primary/50"
            placeholder="Share your point of view..."
            required
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6 md:px-8 py-3 md:py-4 font-semibold cursor-pointer text-base transition-all duration-200 w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background shadow-sm hover:shadow-md disabled:opacity-60"
        >
          {submitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </section>
  );
}
