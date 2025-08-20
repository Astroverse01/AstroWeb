"use client"
import { useState } from "react"

export default function FeedbackSection() {
  const [formData, setFormData] = useState({
    service: "",
    experience: "",
    feedback: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Thank you for your feedback!")
    setFormData({ service: "", experience: "", feedback: "" })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="feedback" className="bg-[#23252b] rounded-xl p-6 md:p-8 mx-4 md:mx-8 mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Share Your Experience</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="form-group">
          <label htmlFor="service" className="block mb-2 font-medium text-white">
            Which service are you interested in?
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full bg-[#23252b] text-white border border-[#444] rounded-lg p-3 text-base"
            required
          >
            <option value="">Select a service</option>
            <option value="personal-horoscope">Personal Horoscope</option>
            <option value="compatibility">Compatibility Reading</option>
            <option value="birth-chart">Birth Chart Analysis</option>
            <option value="consultation">Personal Consultation</option>
          </select>
        </div>

        <div className="form-group">
          <label className="block mb-3 font-medium text-white">
            How would you rate your experience with astrology?
          </label>
          <div className="radio-group space-y-3">
            {["Beginner - New to astrology", "Intermediate - Some knowledge", "Advanced - Very experienced"].map(
              (option, index) => (
                <label
                  key={index}
                  className="flex items-center bg-[#23252b] border border-[#444] rounded-lg p-4 cursor-pointer hover:border-[#b3e0ff] hover:bg-[#232b33] transition-all duration-200"
                >
                  <input
                    type="radio"
                    name="experience"
                    value={option}
                    checked={formData.experience === option}
                    onChange={handleChange}
                    className="w-5 h-5 mr-3 accent-[#b3e0ff]"
                    required
                  />
                  <span className="text-white font-medium">{option}</span>
                </label>
              ),
            )}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="feedback" className="block mb-2 font-medium text-white">
            Tell us what you're looking for or any questions you have:
          </label>
          <textarea
            id="feedback"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            rows="4"
            className="w-full bg-[#23252b] text-white border border-[#444] rounded-lg p-3 text-base resize-none"
            placeholder="Share your thoughts, questions, or what you hope to discover..."
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="submit-btn bg-[#dbeafe] text-[#222] border-none rounded-full px-8 py-3 font-semibold cursor-pointer text-base hover:bg-[#b3e0ff] transition-colors duration-200 w-full md:w-auto"
        >
          Submit Feedback
        </button>
      </form>
    </section>
  )
}
