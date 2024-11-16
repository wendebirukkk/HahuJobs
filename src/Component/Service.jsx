import React from 'react'

const Service = () => {
  return (
    <>
    <div className='grid grid-cols-3 ml-24 justify-evenly '>
    <div className="h-[500px] p-2 w-80 flex flex-col justify-center items-center shadow-lg border-2 border-transparent hover:border-[#009688] focus:outline-none focus:ring-2 focus:ring-[#009688]">
    <img src="/build_career_profile.svg" alt="" className="w-64 h-64 mb-2" />
    <h2 className="text-center font-bold text-2xl mb-2 text-black">Build Career Profile</h2>
    <p className="text-center text-[#9097A1]">Compose your career profile with context standards and identifers to showcase your assessed competencies in the sector of your expertise.HaHUJobs...</p>
  </div>
  <div className="h-[500px] p-2 w-80 flex flex-col justify-center items-center shadow-lg border-2 border-transparent hover:border-[#009688] focus:outline-none focus:ring-2 focus:ring-[#009688]">
    <img src="/job_application.svg" alt="" className="w-64 h-64 mb-2" />
    <h2 className="text-center font-bold text-2xl text-black mb-2">Job Application</h2>
    <p className="text-center text-[#9097A1]">Apply for jobs with just a few clicks,and track the progress of your applications through notifications on multiple platforms.
        Revolutionize your job applications with pre-prepared...</p>
  </div>
  <div className="h-[500px] w-80 flex flex-col justify-center items-center p-2 shadow-lg border-2 border-transparent hover:border-[#009688] focus:outline-none focus:ring-2 focus:ring-[#009688]">
    <img src="/vacancy_notification.svg" alt="" className="w-64 h-64 mb-2" />
    <h2 className="text-center font-bold text-2xl mb-2 text-black">Vacancy Notification</h2>
    <p className="text-center text-[#9097A1]">Compose your career profile with context standards and identifers to showcase your assessed competencies in the sector of your
 expertise.HaHUJobs...</p>
  </div>

</div>
    </>
  )
}

export default Service