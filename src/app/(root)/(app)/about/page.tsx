'use client'

import Image from 'next/image'
import Link from 'next/link'
import dedeard from '@/assets/dedeard.jpg'
import { RESUME_URL } from '@/constans/common'
import PageTitle from '../components/PageTitle'
import React, { useEffect, useRef, ReactNode } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { AnimatedSection } from './AnimatedSection'

const ExperienceTimeline = () => {
  const experiences = [
    {
      period: 'January 2023 - February 2023',
      description:
        'Internship at PUSDATIK KEMNAKER, enhancing programming fundamentals and collaborative skills in a government technology environment.',
    },
    {
      period: 'October 2023 - September 2024',
      description:
        'Developed a semi-autonomous LPG leak monitoring system at PT. Cahyo Sumber Migas, showcasing industrial safety and smart automation solutions.',
    },
    {
      period: 'June 2024 - November 2024',
      description:
        'Full Stack Developer at UD Penggilingan Padi Putra Manuaba, architected a comprehensive ERP system with advanced business management features.',
    },
    {
      period: 'August 2024 - Present',
      description:
        'Head of Hardware Division at PT Lazuardy Inovasi Teknologi, leading cross-functional IoT and industrial automation teams.',
    },
  ]

  return (
    <div className="relative ">
      {/* <div className="absolute bottom-0 left-4 top-0 w-1 opacity-75 hover:opacity-100 dark:bg-black"></div> */}
      {experiences.map((exp, index) => (
        <div key={index} className="relative mb-5 backdrop-blur-lg">
          {/* <div className="absolute -left-[26px] top-2 h-4 w-4 rounded-full opacity-100 hover:opacity-100 dark:bg-black"></div> */}
          <AnimatedSection>
            <div className="bg-white p-4 opacity-75 backdrop-blur-lg hover:opacity-100 dark:bg-black">
              <h3 className="font-white mb-2 font-bold">{exp.period}</h3>
              <p>{exp.description}</p>
            </div>
          </AnimatedSection>
        </div>
      ))}
    </div>
  )
}

const TechnologiesSection = () => {
  const technologies = ['Laravel (PHP)', 'Bootstrap', 'Next.js', 'Vue', 'Tailwind', 'TypeScript', 'Express.js', 'React']

  return (
    <div className="relative">
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <AnimatedSection key={index}>
            <div className="bg-white p-3 opacity-75 backdrop-blur-lg hover:opacity-100 dark:bg-black">
              <h3 className="font-bold text-gray-800 dark:text-gray-100">{tech}</h3>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  )
}

export default function AboutPage() {
  return (
    <>
      <PageTitle title="About" />
      <div className="md:flex">
        <AnimatedSection>
          <div className="mb-5 md:w-56">
            <Image
              src={dedeard}
              alt="Foto Ida Bagus Putu Putra Manuaba"
              className="block w-full md:aspect-square md:object-cover"
              placeholder="blur"
            />
          </div>
        </AnimatedSection>
        <div className="text-justify md:flex-1 md:pl-6">
          <AnimatedSection>
            <h2 className="mb-1 text-xl font-bold">I'm Ida Bagus Putu Putra Manuaba</h2>
            <h2 className="mb-3">Full Stack Web & Internet of Things Developer based in Semarang, Indonesia.</h2>
            <h2 className="mb-3">
              A fresh graduate in Computer Engineering from Diponegoro University with a GPA of 3.87, completed in four years (2020-2024).
              My expertise spans hardware and full-stack web development, strengthened through hands-on experience in both academic and
              professional settings.
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="mb-5 mt-5 text-xl font-bold ">Professional Experience</h2>
            <ExperienceTimeline />
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="mb-3 mt-3 text-xl font-bold">Technologies I Specialize In</h2>

            <div className="mb-6">
              <TechnologiesSection />
            </div>
          </AnimatedSection>

          <div className="flex justify-between">
            <div className="w-100 mb-4 h-14 ">
              <a
                download
                target="_blank"
                rel="nofollow"
                href={RESUME_URL}
                className=" block h-full w-40 bg-white pt-4 text-center font-bold opacity-100 hover:opacity-100 dark:bg-black"
              >
                RESUME
              </a>
            </div>
            <div className=" w-100 mb-4 h-14">
              <Link
                href="/contact"
                rel="nofollow"
                className=" block h-full w-40 bg-white pt-4 text-center font-bold opacity-100 hover:opacity-100 dark:bg-black"
              >
                CONTACT ME
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
