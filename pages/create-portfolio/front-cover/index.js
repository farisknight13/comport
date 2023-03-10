import React, { useState } from "react";
import Breadcrumb from "@components/Breadcrumb";
import StateCreate from "@components/StateCreate";
import MoveToTop from "@components/MoveToTop";
import Link from "next/link";

const CreateFrontCover = () => {
  const coverImage = "/assets/images/portfolio/portfolio-4.png";

  const route = [
    {
      title: "หน้าหลัก",
      link: "/member",
    },
    {
      title: "สร้างแฟ้มสะสมผลงาน",
      link: "/create-portfolio",
    },
  ];

  return (
    <div className="px-[104px] py-[29px]">
      <MoveToTop />
      <Breadcrumb route={route} />
      <div className="text-center text-[28px] font-semibold my-12">
        สร้างแฟ้มสะสมผลงาน
      </div>
      <StateCreate state={2} />
      <div className="my-[72px] mx-auto max-w-[1232px]">
        <div className="text-xl font-bold mb-[30px]">หน้าปก</div>
        <div className="flex justify-between">
          <div className="shrink-0 relative w-[170px] h-[246px]">
            <img
              src={coverImage}
              alt={coverImage}
              className="rounded-[6px] cursor-pointer h-full"
            />
            <div className="absolute right-0 bottom-0 flex justify-center items-center w-[38px] h-[38px] bg-black rounded-[6px]">
              <img
                src="/assets/icons/zoom.svg"
                alt="icon-zoom"
                width="18"
                height="18"
              />
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col mr-[45px]">
              <div className="flex justify-center items-center self-end mb-[20px] w-[500px] h-[500px] bg-yellow rounded-[6px]">
                <img
                  src="/assets/icons/camera-icon.svg"
                  alt="/assets/icons/camera-icon.svg"
                />
              </div>
              <div className="flex items-center mb-2">
                <label
                  for="first_name_thai"
                  className="w-[224px] text-lg font-bold pr-3 text-end"
                >
                  ชื่อ-นามสกุล ภาษาไทย
                </label>
                <input
                  className="shadow appearance-none border rounded w-[500px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="first_name_thai"
                  type="text"
                  placeholder="เช่น สุธิดา มานะยิ่ง"
                />
              </div>
              <div className="flex mb-2">
                <label
                  for="first_name_eng"
                  className="w-[224px] text-lg font-bold pr-3 text-end"
                >
                  ชื่อ-นามสกุล ภาษาอังกฤษ
                </label>
                <input
                  className="shadow appearance-none border rounded w-[500px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="first_name_eng"
                  type="text"
                  placeholder="เช่น suthida"
                />
              </div>
              <div className="flex">
                <label
                  for="school_name"
                  className="w-[224px] text-lg font-bold pr-3 text-end"
                >
                  โรงเรียน
                </label>
                <input
                  className="shadow appearance-none border rounded w-[500px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="school_name"
                  type="text"
                  placeholder="เช่น สวนกุหลาบวิทยาลัย"
                />
              </div>
            </div>
            <div>
              <div className="text-lg font-bold">คำแนะนำ</div>
              <ul className="list-disc ml-[30px] mb-[20px]">
                <li>สำหรับรูปหน้าปก</li>
                <li>ขนาดรูปไม่เกิน 10 MB png หรือ jpg</li>
              </ul>
              <label
                for="dropzone-file"
                className="px-[30px] py-[9px] w-[165px] border-[1px] rounded-[20px] font-bold cursor-pointer"
              >
                อัพโหลดรูป
              </label>
              <input id="dropzone-file" type="file" className="hidden" />
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-4 mb-4" />
      <div className="flex justify-center items-center">
        <Link href="/create-portfolio/introduction">
          <button className="flex items-center bg-[#D9D9D9] px-5 py-2.5 rounded-[20px]">
            บันทึกข้อมูล
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CreateFrontCover;
