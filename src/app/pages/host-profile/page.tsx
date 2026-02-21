"use client";

import Image from "next/image";
import PageHeader from "@/components/page-header/page-header";
import { HostProfileData } from "@/data/host-profiles";

const HostProfile = () => {
  return (
    <>
      {/* Page Header */}
      <PageHeader title="Host Profiles" />

      <div className="dark-section pt-16">
        <div className="mt-0 md:mt-10 px-[8%] lg:px-[16%] lg:pb-20 pb-10">
          <div>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {HostProfileData.map((host) => (
                  <div key={host.id} className={`host-card relative mb-2`}>
                    <div className="host-img-wrap">
                      <div className="host-img overflow-auto rounded-2xl">
                        <Image
                          src={host.image}
                          alt={host.name}
                          width={1000}
                          height={1000}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <div
                      className="relative after:content-[''] after:absolute after:top-1/2 after:left-0 
                      after:-translate-x-1/2 after:-translate-y-1/2 after:w-[1.5px] after:h-[70%] after:bg-primary px-3 py-4"
                    >
                      <h3 className="text-xl text-white font-bold cursor-pointer">
                        {host.name}
                      </h3>
                      <p className="text-base text-gray-200 font-normal cursor-pointer">
                        {host.role}
                      </p>
                    </div>

                    <div className="host-icons absolute bottom-5 bg-gray rounded-full right-5 group">
                      {/* Plus Icon */}
                      <i
                        className="bi bi-plus-lg bg-gray w-12 h-12 flex text-primary
                    items-center justify-center rounded-full cursor-pointer border 
                    border-transparent group-hover:rounded-t-none group-hover:bg-gray-500 
                    group-hover:border group-hover:border-gray transition-all duration-300"
                      />

                      {/* Hidden Social Icons */}
                      <div
                        className="host-hidden-icon flex flex-col absolute bottom-12 right-0 
                        opacity-0 invisible translate-y-4 group-hover:opacity-100 
                        group-hover:visible group-hover:translate-y-0 transition-all duration-300 
                        ease-out bg-gray rounded-t-full p-2"
                      >
                        <i
                          className="bi bi-facebook w-8 h-8 mb-1 flex items-center 
                        justify-center rounded-full text-white bg-gray-light border border-primary 
                        hover:bg-primary transition-all duration-200 cursor-pointer"
                        />
                        <i
                          className="bi bi-dribbble w-8 h-8 mb-1 flex items-center 
                        justify-center rounded-full text-white bg-gray-light border border-primary 
                        hover:bg-primary transition-all duration-200 cursor-pointer"
                        />
                        <i
                          className="bi bi-twitter-x w-8 h-8 mb-1 flex items-center 
                        justify-center rounded-full text-white bg-gray-light border border-primary 
                        hover:bg-primary transition-all duration-200 cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HostProfile;
