import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faTelegram, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Body = () => {
  return (
    <>
      <div className="flex justify-center text-4xl text-[#444F60] mt-8 mb-2 font-bold">
        <h2>All Ethiopian Jobs in One Place.</h2>
      </div>
      <p className="text-center font-bold text-[#444F60] mb-4">Find career opportunities in Ethiopia</p>

      <div className="flex justify-center mb-6">
        <input
          className="p-2 rounded-l-lg bg-white w-96 border-2 border-transparent hover:border-[#009688] focus:outline-none focus:ring-2 focus:ring-[#009688]"
          type="text"
          placeholder="Job title, city or Keyword..." // Optional placeholder for user guidance
        />
        {/* Button with search icon */}
        <button className="ml-2 flex items-center justify-center border-2 bg-[#009688] px-8 py-3 rounded-r-lg">
          <FontAwesomeIcon icon={faSearch} className="mr-4 text-white" />
          <p className='text-white'>Find Job</p>
        </button>
      </div>

      <div className="flex justify-center m-8 font-bold space-x-16">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl text-[#009688]">734</h2>
          <h1 className="text-lg text-[#444F60]">Jobs</h1>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-3xl text-[#009688]">239</h2>
          <h1 className="text-lg text-[#444F60]">Companies</h1>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-3xl text-[#009688]">14</h2>
          <h1 className="text-lg text-[#444F60]">Sectors</h1>
        </div>
      </div>

      {/* Centered image below the numbers */}
      <div className="flex justify-center mt-8 mb-4">
        <img src="/ha.svg" alt="Icon" />
      </div>
      <div className='justify-center flex'>
        <h1 className='text-5xl font-bold text-[#444F60] mb-4'>Career sectors</h1>
      </div>
<p className='text-center mb-8'>Based on the local labor market trend in Ethiopia we categorize our vacancies into fourteen sectors</p>




<div className="grid text-black  h-auto w-full grid-cols-6 ml-16 gap-4 mb-16">
  {/* First 12 items with images, h2, and paragraph */}
  <div className="h-48 w-48 flex flex-col justify-center hover:shadow-black items-center shadow-lg">
    <img src="/natural-science.svg" alt="" className="w-24 h-24 mb-2" />
    <h2 className="text-center font-bold text-lg text-[#009688]">Natural Science</h2>
    <p className="text-center">20 Open positions</p>
  </div>
  
  <div className="h-48 w-48 flex flex-col justify-center hover:shadow-black items-center shadow-lg">
    <img src="/business.svg" alt="" className="w-24 h-24 mb-2" />
    <h2 className="text-center font-bold text-lg text-[#009688]">Business</h2>
    <p className="text-center">198 Open positions</p>
  </div>

  <div className="h-48 w-48 flex flex-col justify-center hover:shadow-black items-center shadow-lg">
    <img src="/creative-art.svg" alt="" className="w-24 h-24 mb-2" />
    <h2 className="text-center font-bold text-lg text-[#009688]">Creative Arts</h2>
    <p className="text-center">10 Open Positions</p>
  </div>

  <div className="h-48 w-48 flex flex-col justify-center hover:shadow-black items-center shadow-lg">
    <img src="/education.svg" alt="" className="w-24 h-24 mb-2" />
    <h2 className="text-center font-bold text-lg text-[#009688]">Education</h2>
    <p className="text-center">61 Open positions</p>
  </div>

  <div className="h-48 w-48 flex flex-col justify-center hover:shadow-black items-center shadow-lg">
    <img src="/hospitality.svg" alt="" className="w-24 h-24 mb-2" />
    <h2 className="text-center font-bold text-lg text-[#009688]">Hospitality</h2>
    <p className="text-center">19 Open positions</p>
  </div>

  <div className="h-48 w-48 flex flex-col justify-center hover:shadow-black items-center shadow-lg">
    <img src="/low-and-medium-skilled-work.svg" alt="" className="w-24 h-24 mb-2" />
    <h2 className="text-center font-bold text-lg text-[#009688]">Low and Medium Skilled Worker</h2>
    <p className="text-center">45 Open positions</p>
  </div>
  
  <div className="h-48 w-48 flex flex-col justify-center hover:shadow-black items-center shadow-lg">
    <img src="/transport-and-logistics.svg" alt="" className="w-24 h-24 mb-2" />
    <h2 className="text-center font-bold text-lg text-[#009688]">Transportation & Logistics</h2>
    <p className="text-center">25 Open positions</p>
  </div>
  
  <div className="h-48 w-48 flex flex-col justify-center hover:shadow-black items-center shadow-lg">
    <img src="/engineering.svg" alt="" className="w-24 h-24 mb-2" />
    <h2 className="text-center font-bold text-lg text-[#009688]">Engineering</h2>
    <p className="text-center">108 Open Positions</p>
  </div>

  <div className="h-48 w-48 flex flex-col justify-center hover:shadow-black items-center shadow-lg">
    <img src="/finance.svg" alt="" className="w-24 h-24 mb-2" />
    <h2 className="text-center font-bold text-lg text-[#009688]">Finance</h2>
    <p className="text-center">133 Open Positions</p>
  </div>

  <div className="h-48 w-48 flex flex-col justify-center hover:shadow-black items-center shadow-lg">
    <img src="/legal-service.svg" alt="" className="w-24 h-24 mb-2" />
    <h2 className="text-center font-bold text-lg text-[#009688]">Legal Services</h2>
    <p className="text-center">11 Open positions</p>
  </div>

  <div className="h-48 w-48 flex flex-col justify-center hover:shadow-black items-center shadow-lg">
    <img src="/ict.svg" alt="" className="w-24 h-24 mb-2" />
    <h2 className="text-center font-bold text-lg text-[#009688]">ICT</h2>
    <p className="text-center">40 Open positions</p>
  </div>
  <div className="h-48 w-48 flex flex-col justify-center hover:shadow-black items-center shadow-lg">
    <img src="/health-care.svg" alt="" className="w-24 h-24 mb-2" />
    <h2 className="text-center font-bold text-lg text-[#009688]">Health Care</h2>
    <p className="text-center">2 Open positions</p>
  </div>
  {/* Place 13 directly below 9 */}
  <div className="col-start-3 h-48 w-48 flex flex-col hover:shadow-black justify-center items-center shadow-lg">
    <img src="/manufacturing.svg" alt="" className="w-24 h-24 mb-2" />
    <h2 className="text-center font-bold text-lg text-[#009688]">Manufacturing</h2>
    <p className="text-center">2 Open positions</p>
  </div>

  {/* Place 14 directly below 10 */}
  <div className="col-start-4 h-48 w-48 flex flex-col justify-center hover:shadow-black items-center shadow-lg">
    <img src="/social-science.svg" alt="" className="w-24 h-24 mb-2" />
    <h2 className="text-center font-bold text-lg text-[#009688]">Social Science</h2>
    <p className="text-center">33 Open positions</p>
  </div>
</div>





<div className='justify-center flex'>
        <h1 className='text-5xl font-bold text-[#444F60] mb-4'>Services</h1>
      </div>
<p className='text-center'>HaHuJobs offers digital career profiling, job application and subscription based relevant vacancy announcement 
    

</p>
<p className='text-center mb-12'>notifications to job seekers that sign up on its primary service deployment.</p>

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
<div className=' mr-[200px] ml-[300px] flex mt-24 justify-between'>
    <div>
        <h1 className='text-5xl font-bold text-[#444F60]'>What is unique about </h1>
        <h1 className='text-5xl mb-4 font-bold text-[#444F60]'>HaHuJobs</h1>
    
        <p className='w-[500px] mb-8 font-bold text-[#9197A0]'>HaHuJobs Primary services are deployments targeting the needs of the Ethiopian jobseeker, with both online and assisted models the platform is tool intended to assist the process of looking for a job at all levels of employment. It features vacancy aggregation and posting from various sources as well as enterprises, builds career profiles, apply for jobs, and subscribe to customized alerts for each user via a channel of their choice. HaHuJobs primary also offers standardized classification of all vacancies both sourced from HaHuJobs enterprise services and other manual and digital vacancy platforms.</p>
<p className='w-[500px] mb-8 font-bold text-[#9197A0]'>Our vacancy classification follows a combination of ILOs ISCO 8 and the O*Net occupation classification with modifications to the Ethiopian labor market trend. Each vacancy will be given a four-digit occupation taxonomy identification code to determine it's overall standard requirements in terms of skill, knowledge, ability, and expected activities.</p>
    <p className='mb-8 font-bold text-[#9197A0]'>Get Social with us !</p>
    <button className="px-6 py-2 bg-[#009789] hover:bg-[#80CBC4] text-white rounded-md flex items-center space-x-2">
  <span>Explore more</span>
  <FontAwesomeIcon icon={faArrowRight} />
</button>
<div className="flex space-x-4 mt-4">
  <div className="bg-[#0088cc] p-3 rounded-full text-white hover:bg-[#007ab7] transition duration-300">
    <FontAwesomeIcon icon={faTelegram} size="lg" />
  </div>
  <div className="bg-[#4267B2] p-3 rounded-full text-white hover:bg-[#365899] transition duration-300">
    <FontAwesomeIcon icon={faFacebook} size="lg" />
  </div>
  <div className="bg-[#1DA1F2] p-3 rounded-full text-white hover:bg-[#1a91da] transition duration-300">
    <FontAwesomeIcon icon={faTwitter} size="lg" />
  </div>
  <div className="bg-[#0077B5] p-3 rounded-full text-white hover:bg-[#006097] transition duration-300">
    <FontAwesomeIcon icon={faLinkedin} size="lg" />
  </div>
</div>



    </div>
    <div>
  <img src="/hahu_robot.svg" alt="" 
       className="w-[500px] h-[500px] mb-2 transition-transform duration-300 transform hover:scale-110" />
</div>


</div>

<div className=' mr-[200px] ml-[300px] flex mt-8 justify-between'>
<div>
  <img src="/keyboard.svg" alt="" 
       className="w-[500px] h-[500px] mb-2 transition-transform duration-300 transform hover:scale-110" />
</div>
    <div>
        <h1 className='text-5xl mb-2 font-bold text-[#444F60]'>Why choose us </h1>
        <h1 className='text-3xl mb-2 font-bold text-[#009688]'>Convenience</h1>
        <h1 className='text-2xl mb-2 font-bold text-[#009688]'>You no longer look for jobs, jobs look for you</h1>
    
        <p className='w-[500px] mb-4 font-bold text-[#5C6674]'>We offer aggregated, standardized and quality assure vacancy and career-related information from various digital as well as manual sources to set them into one searchable database.

</p>
<h1 className='text-3xl mb-2 font-bold text-[#009688] '>Accessibility</h1>
<h1 className='text-2xl mb-2 font-bold text-[#009688]'>Reachable across multiple channels and platforms</h1>
<p className='w-[500px] text-[#5C6674] font-bold mb-4'>Use your mobile, tablet, or desktop to access our website, mobile app, Telegram, or Facebook bots and also get personalized job alerts via your designated medium.

</p>
<h1 className='text-3xl mb-2 font-bold text-[#009688]  '>Ease of use

</h1>
<h1 className='text-2xl mb-2 font-bold text-[#009688]'>Both online and offline service options.</h1>
<p className='w-[500px] mb-4 text-[#5C6674] font-bold '>HaHuJobs offers both in-person as well as virtual models for all its career-related service components through its employment offices across the nation and capital Addis Ababa.</p>





    </div>
   


</div>
<div className='justify-center flex mt-16'>
        <h1 className='text-5xl font-bold text-[#444F60] mb-4'>Post vacancy</h1>
      </div>
<p className='text-center ml-80 mr-80'>HaHuJobs offers dedicated enterprise cloud services for a full human resource management platform with an affordable price package. Posting vacancy is completely free, and only requires to follow the below listed steps.
    

</p>
<div className="mt-12 flex justify-center gap-16">
  {/* Button 1 with h2 and paragraph */}
  <div className="flex flex-col items-center text-center">
    <button className="rounded-full bg-[#C1E6E2] text-white p-8 w-14 h-14 flex items-center justify-center font-bold">
      1
    </button>
    <h2 className="mt-4 text-lg font-semibold text-gray-700">Receive</h2>
    <p className="mt-2 w-[300px] md:w-[400px] text-gray-600">
      You contact us through one of our outlets with the details of your vacancy. You can click the button below to review ways to share your vacancy and review the required information we need to publish your vacancy on all our outlets.
    </p>
  </div>

  {/* Button 2 with h2 and paragraph */}
  <div className="flex flex-col items-center text-center">
    <button className="rounded-full bg-[#C1E6E2] text-gray-700 p-8 w-14 h-14 flex items-center justify-center font-bold">
      2
    </button>
    <h2 className="mt-4 text-lg font-semibold text-gray-700">Validate</h2>
    <p className="mt-2 w-[300px] md:w-[400px] text-gray-600">
      Our service officers will receive the details from your organization via the channel you communicated it in. They will review the details provided to validate all required information is available and validate the legitimacy of the vacancy.
    </p>
  </div>

  {/* Button 3 with h2 and paragraph */}
  <div className="flex flex-col items-center text-center">
    <button className="rounded-full bg-[#C1E6E2] text-gray-700 p-8 w-14 h-14 flex items-center justify-center font-bold">
      3
    </button>
    <h2 className="mt-4 text-lg font-semibold text-gray-700">Publish</h2>
    <p className="mt-2 w-[300px] md:w-[400px] text-gray-600">
      All vacancy details will then go through our standardized categorization process for taxonomy identification and reorganization of information if required so it fits the publishing structure of our outlets, then will be approved for publishing.
    </p>
  </div>
</div>



<div className='mt-8  flex justify-center'>
<button className='px-6 py-2 rounded-md text-white bg-[#009688] hover:bg-[#80CBC4] hover:text-[#444F60]'>Post Vacancy</button>
</div>




<div className="flex  justify-center m-8 font-bold space-x-48">
        <div className="flex flex-col items-center">
          <h2 className="text-5xl text-[#009688]">623</h2>
          <h1 className="text-lg text-[#444F60]">Enterprises</h1>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-5xl text-[#009688]">15.8K</h2>
          <h1 className="text-lg text-[#444F60]">Users</h1>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-5xl text-[#009688]">102</h2>
          <h1 className="text-lg text-[#444F60]">Opportunities</h1>
        </div>
      </div>
      <div className='justify-center flex'>
        <h1 className='text-5xl font-bold text-[#444F60] mb-4'>News & Events</h1>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ml-24 justify-evenly">
  {/* Card 1 */}
  <div className="h-[600px] w-full md:w-96 flex flex-col justify-start items-center shadow-lg border-2 border-transparent hover:border-[#009688] focus:outline-none focus:ring-2 focus:ring-[#009688]">
    <img src="/1cf6eec9b5520b2e825c82d054f7e309af66e9d09b97ccde36f804039da87d7e6e9189b28ddd4a0175b3e400560de4956679.webp" alt="" className="w-full h-[300px] object-cover" />
    <button className='m-4 px-2 py-0 bg-green-300 rounded'>HaHuJobs News</button>
    <h2>29 Oct 2024</h2>
    <p className="text-center text-2xl">HaHuJobs to Partner with...</p>
    <p className='p-2'>Hahujobs will begun proect implementation for the STEM Education for Empowerment Project(STEEP) in Ethiopia to provide vital education and training...</p>
    <button className="px-2 mt-8 py-2 bg-[#009789] hover:bg-[#80CBC4] text-white rounded-md flex items-center space-x-2">
  <span>Read Post</span>
  <FontAwesomeIcon icon={faArrowRight} />
</button>
  </div>

  {/* Card 2 */}
  <div className="h-[600px] w-full md:w-96 flex flex-col justify-start items-center shadow-lg border-2 border-transparent hover:border-[#009688] focus:outline-none focus:ring-2 focus:ring-[#009688]">
    <img src="/hahujobs-employment-center-launch_dxmzg5.jpg" alt="" className="w-full h-[300px] object-cover" />
    <button className='m-4 px-2 py-0 bg-green-300 rounded'>HaHuJobs News</button>
    <h2>29 Oct 2024</h2>
    <p className="text-center text-2xl">HaHuJobs to Partner with...</p>
    <p className='p-2'>Hahujobs will begun proect implementation for the STEM Education for Empowerment Project(STEEP) in Ethiopia to provide vital education and training...</p>
    <button className="px-2 mt-8 py-2 bg-[#009789] hover:bg-[#80CBC4] text-white rounded-md flex items-center space-x-2">
  <span>Read Post</span>
  <FontAwesomeIcon icon={faArrowRight} />
</button>
  </div>

  {/* Card 3 */}
  <div className="h-[600px] w-full md:w-96 flex flex-col justify-start items-center shadow-lg border-2 border-transparent hover:border-[#009688] focus:outline-none focus:ring-2 focus:ring-[#009688]">
    <img src="/vacancy_post_ps61tz.jpg" alt="" className="w-full h-[300px] object-cover" />
    <button className='m-4 px-2 py-0 bg-green-300 rounded'>HaHuJobs News</button>
    <h2>29 Oct 2024</h2>
    <p className="text-center text-2xl">HaHuJobs to Partner with...</p>
    <p className='p-2'>Hahujobs will begun proect implementation for the STEM Education for Empowerment Project(STEEP) in Ethiopia to provide vital education and training...</p>
    <button className="px-2 mt-8 py-2 bg-[#009789] hover:bg-[#80CBC4] text-white rounded-md flex items-center space-x-2">
  <span>Read Post</span>
  <FontAwesomeIcon icon={faArrowRight} />
</button>
  </div>
</div>

<div className='mt-8  flex justify-center'>
<button className='px-6 py-2 rounded-md text-white bg-[#009688] hover:bg-[#80CBC4] hover:text-[#444F60]'>More Blogs</button>
</div>







    </>
  );
};

export default Body;
