"use client"

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue }
  from "@/components/ui/select"

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+92) 324 989 110 5",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "ba298466@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Gulshan-e-Ravi Lahore,Pakistan",
  },
]

const contact = () => {

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleServiceChange = (value) => {
    setFormData({ ...formData, service: value });
    console.log('Selected Service:', value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

      // Validate all fields
      if (!formData.firstname || !formData.lastname || !formData.email || !formData.phone || !formData.service || !formData.message) {
        alert('Please fill in all fields.');
        return;}

    emailjs.send(
      'service_bi1o1',
      'template_itu4kaw',
      formData,
      'Am08CPOH_Ppguc8dP'
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
      // Reset form after successful submission
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }).catch((err) => {
      console.error('FAILED...', err);
      alert('Failed to send message.');
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            onSubmit={handleSubmit}>
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">If you have a project in mind and are looking for professional, paid web development services, programming assistance, or any related services, feel free to reach out to me.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                />
                <Input
                  type="lastname"
                  name="lastname"
                  placeholder="Lastname"
                  value={formData.lastname}
                  onChange={handleChange} />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange} />
                <Input
                  type="phone"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange} />
              </div>
              <Select
                name="service"
                value={formData.service}
                onValueChange={handleServiceChange}
                >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="front-end">Front-end Development</SelectItem>
                    <SelectItem value="back-end">Back-end Development</SelectItem>
                    <SelectItem value="full-Stack">Full-Stack Development</SelectItem>
                    <SelectItem value="Integration">Front & back-end Integration</SelectItem>
                    <SelectItem value="Editing">Edit Existing Websites</SelectItem>
                    <SelectItem value="others">others</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                name="message"
                placeholder="Type your message here."
                value={formData.message}
                onChange={handleChange}
                className="h-[200px]"
              />
              {/* btn */}
              <Button size="md" className="max-w-32" type="submit">Send message</Button>
            </form>
          </div>
          {/* info */}
          <div className="flex flex-1 items-center xl:justify-end order-1
        xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] 
                  bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default contact