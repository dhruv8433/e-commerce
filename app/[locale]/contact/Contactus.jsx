"use client";
import React, { useState } from "react";
import { contactService } from "@/app/services/contactService";
import { useTranslations } from "next-intl";
import { Box, Grid } from "@mui/material";
import Lottie from "lottie-react";
import contactAnimation from "@/app/json/animations/contact.json";
import Breadcrumb from "@/app/common/Breadcrumbs";
import toast from "react-hot-toast";
// import { httpAxios } from "../helper/httpAxios";

const ContactForm = () => {
  const t = useTranslations("contact");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
    try {
      const submit = await contactService(formData);
      toast.success("your message recived success, we get in touch soon!!");
      console.log("contact submitted success");
    } catch (error) {
      toast.error("something went wrong!!");
      console.log(error);
    }
  };

  return (
    <>
      <Box sx={{ pt: { xs: "4rem", md: "5rem" } }}>
        <Breadcrumb title={"Contact"} breadcrumb={"contact"} />
      </Box>
      <Grid container>
        <Grid item xs={12} md={6}>
          <div className="min-h-full flex justify-center items-center">
            <Lottie animationData={contactAnimation} style={{ height: 600 }} />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="min-h-full flex items-center justify-center bg-theme py-2">
            <div className="w-96 p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">{t("contact")}</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-600 font-medium"
                  >
                    {t("name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-600 font-medium"
                  >
                    {t("email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-600 font-medium"
                  >
                    {t("message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="py-2 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:ring-blue-500 focus:ring-offset-blue-200 focus:outline-none"
                  >
                    {t("submit")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactForm;
