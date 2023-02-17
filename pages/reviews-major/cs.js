import React, { useState } from "react";
import Breadcrumb from "@components/Breadcrumb";
import MoveToTop from "@components/MoveToTop";
import Link from "next/link";
import Cardsmall from "@components/Cardsmall";

const ReviewCs = () => {
  const route = [
    {
      title: "หน้าหลัก",
      link: "/member",
    },
    {
      title: "แนะนำคณะ",
      link: "/faculty/all-faculty",
    },
    {
      title: "วิทย์คอม",
      link: "/faculty/cs",
    },
    {
      title: "รีวิวคณะ/สาขา",
      link: "/reviews/cs",
    },
  ];

  const activity = [
    {
      image: "../assets/images/activity/activity-4.png",
      title: "SUPER COM SCI ครั้งที่ 9",
      content:
        "กลับมาอีกครั้งกับค่าย Super com sci ที่ทำ ให้น้อง ๆ ได้เรียนผ่านการลงมือปฎิบัติ On-site วางแผนระบบ สร้าง App แนะแนวกา...",
      expire_date: 4,
      link: "#",
    },
    {
      image: "../assets/images/activity/activity-2.png",
      title: "Javascript Tier 2 SS2 // C Tier 2",
      content:
        "เหมาะสำหรับน้อง ๆ ที่อยากต่อยอดความรู้ HTML CSS JS ให้เก่งยิ่งขึ้นด้วย JS TIER 2 และ ยังมีคอร์สสำหรับน้อง ๆ ที่ต้องการเ...",
      expire_date: 2,
      link: "#",
    },
    {
      image: "../assets/images/activity/activity-3.png",
      title: "CREATIVE AI CAMP 2022 🎉",
      content:
        "CREATIVE AI CAMP 2022 ปีนี้เรามาใน ธีม Anytime, Anywhere with AI 🤖 ในรูป แบบ Phenomena Work-based Learni...",
      expire_date: 3,
      link: "#",
    },
  ];

  return (
    <div className="px-[10px] py-[29px]">
      <MoveToTop />
      <Breadcrumb route={route} />
      <div class="mt-[20px] bg-cover bg-[url('https://t3.ftcdn.net/jpg/02/27/91/24/240_F_227912451_kaWIwRyRndDYUIVwY4IPOj3DNcCc5Rkg.jpg')] h-[400px] w-full">
        <div className="text-[#FED502] font-outline-2 text-center uppercase text-[50px] font-bold pt-[80px] pr-[28px]">
          รีวิวคณะ / สาขา
        </div>
        <div className="text-[#FED502] font-outline-4 text-center uppercase text-[64px] font-extrabold pt-[20px] pr-[28px]">
          computer science
        </div>
      </div>
      <div className="flex">
        <div className="w-[750px] ml-[200px]">
          <div className="text-left text-[30px] font-bold drop-shadow-2xl shadow-black mt-[48px] pl-[45px]">
            Computer Science - วิทยาการคอมพิวเตอร์
          </div>
          <div className="text-center text-[20px] font-semibold mt-[15px]">
            รีวิวสาขาวิทยาการคอมพิวเตอร์
            สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
          </div>
          <div className=" text-[18px] font-regular mt-[30px] indent-10">
            สาขาได้เล็งเห็นความเปลี่ยนแปลงที่สำคัญของงานด้านวิทยาการคอมพิวเตอร์
            จึงต้องการพัฒนาหลักสูตรให้มีประสิทธิภาพ สามารถทำให้น้องๆ
            ที่จบไปมีทักษะ ความรู้ที่ทันต่อเทคโนโลยีที่ทันสมัย
            และความยั่งยืนของอาชีพด้วย ดังนั้น ทางสาขาจึงรวบรวมปัญหาต่างๆ
            จากพันธมิตรที่หลากหลาย เช่น กระแสความเปลี่ยนแปลงของเทคโนโลยี
            ความต้องการของบริษัท การสัมมนาต่างๆ เป็นต้น
          </div>
          <div className=" text-[18px] font-regular mt-[30px] indent-10">
            ในหลักสูตรที่น้องๆ จะได้เรียนนั้น
            เป็นหลักสูตรที่อัปเกรดขึ้นจากสาขาวิทยาการคอมพิวเตอร์ทั่วไปแล้ว
            จะมีการผนวกศาสตร์จากวิชาอื่นๆ ที่จำเป็นเข้ามาด้วย คือ
            ภาควิชาคณิตศาสตร์ สถิติ และคอมฯ เพื่อขยายขอบเขตการศึกษา
            และร่วมกันพัฒนากลุ่ม Data Science
          </div>
          <div className=" text-[18px] font-regular mt-[30px] indent-10">
            วิทย์คอม ลาดกระบัง จะเรียนไปทางด้านคอม คณิตศาสตร์และภาษาอังกฤษ
            (นิดหน่อย แล้วแต่โอกาส) โดยที่สำคัญมากสุดคือ คอม+คณิต
            เพราะทั้งคู่ต้องใช้ร่วมกันไปตลอด ใครที่หนีวิชาวิทย์ตั่งต่างมา
            ยินดีด้วยค่ะ เพราะคุณจะไม่เจอฟิสิกส์ เคมี ชีวะ เลยสักตัว!!
            (ยกเว้นว่าจะลงวิชาเลือกเอาเอง) แต่ถ้าใครจะหนีคณิตล่ะก็
            สาขานี้หนีไม่พ้นแน่นอน แต่อย่าเพิ่งกลัวใจตัวเองกันค่ะ
            เพราะมันอาจไม่ยากอย่างที่คิดก็ได้ ถ้าเราตั้งใจและพยายามกับมันมากๆค่ะ
          </div>
          <div className=" text-[18px] font-regular mt-[30px]">
            ปัจจุบันตอนนี้ทางสาขามีการปรับหลักสูตรใหม่แล้วนะคะ
            รวมถึงลักษณะการเรียนต่างๆก็จะเปลี่ยนไปตามกาลเวลาและหลักสูตรค่ะ
            โดยสามารถเข้าไปดูหลักสูตรใหม่ (ปี 2564)
            <Link
              href="https://drive.google.com/file/d/127QSPc553l2g8aEuxmWIyX7x8MO3OkSu/view"
              target="_blank"
              className="flex text-blue-500 underline"
            >
              https:
              //drive.google.com/file/d/127QSPc553l2g8aEuxmWIyX7x8MO3OkSu/view
            </Link>
          </div>
          <div className="text-left text-[20px] font-semibold mt-[30px]">
            ทำไมต้องเรียน วท.บ. วิทยาการคอมพิวเตอร์ ?
          </div>
          <div className=" text-[18px] font-regular mt-[15px]">
            <ul className="list-outside">
              <li>1. หลักสูตรนี้ฝึกให้ ใจสู้ ใฝ่รู้ สู้งาน แข่งขันกับตนเอง</li>
              <li>
                2.
                หลักสูตรสร้างนักพัฒนามืออาชีพด้านดิจิทัลรองรับการพัฒนาประเทศไทย
                ในภาคธุรกิจและภาคอุตสาหกรรม
              </li>
              <li>
                3. หลักสูตรนี้ปรับปรุงวิชาให้เท่าทันเทคโนโลโลยีที่ปรับเปลี่ยนไป
              </li>
              <li>
                4. หลักสูตรนี้มีเครือข่ายผู้ประกอบการที่เข้มแข็ง
                ทำสหกิจต่อเนื่องเป็นปีที่ 7
              </li>
              <li>
                5. หลักสูตรนี้เข้าโครงการทำงาน 1
                ปีครึ่งกับเครือข่ายผู้ประกอบการเป็นปีที่ 3
              </li>
            </ul>
          </div>
          <div className=" text-[18px] font-regular mt-[30px]">
            [ ทักษะ ] สามารถทำงานแบบวงจรคุณภาพ PDCA (Plan-Do-Check-Act)
            สามารถทำงานแบบวงจรชีวิตการพัฒนาระบบงาน (SDLC : System Development
            Life Cycle) สามารถทำงานที่มีกระบวนการอย่างเป็นระบบ (Systematic
            Process) สามารถทำงานแบบ Lean ด้วย Agile Team แบบคิดเป็น ทำเป็น
            แก้ปัญหาได้ สามารถทำ Higher-order Thinking ( วิเคราะห์ สังเคราะห์
            ประเมินค่า สร้างสรรค์ได้ ) สร้างความตระหนักรู้
            ประเมินคุณค่าความน่าเชื่อถือของแหล่งข้อมูล (Social Network)
          </div>
          <div className="text-left text-[20px] font-semibold mt-[30px]">
            โอกาสในการทำงาน{" "}
          </div>
          <div className=" text-[18px] font-regular mt-[15px]">
            <ul className="list-outside">
              <li>
                - นักพัฒนาระบบงานสารสนเทศเชิงบูรณาการ (Web App.Developer,
                MobileDev.)
              </li>
              <li> - นักพัฒนาด้าน (Internet of ThingsIoT Dev.) </li>
              <li> - นักพัฒนาแบบมืออาชีพ (DevOps, Full Stack Dev.) </li>
              <li> - นักพัฒนาระบบงานธุรกิจขนาดใหญ่ (ERP Developer) </li>
              <li> - นักทดสอบระบบงาน (Tester) </li>
              <li>
                - นักออกแบบและวิเคราะห์ข้อมูลขนาดใหญ่ (ฃBig Data Analytics)
              </li>
              <li>
                - นักออกแบบและวิเคราะห์คลังข้อมูล (Business Intelligence in Data
                Warehouse)
              </li>
              <li> - นักวิเคราะห์ข้อมูล (Data Analyst) </li>
              <li> - สถาปนิกด้านข้อมูล (Data Architect) </li>
              <li> - นักวิทยาศาสตร์ข้อมูล (Data Scientist) </li>
              <li>
                {" "}
                - นักพัฒนาด้านปัญญาประดิษฐ (AI, Deep Learning in
                Business/Industrial){" "}
              </li>
              <li> - นักวิเคราะห์และออกแบบระบบงาน (Junior System Analyst) </li>
              <li> - นักพัฒนาด้าน (Blockchain Technology) </li>
              <li>
                - นักทดสอบระบบงานด้านความปลอดภัย (SecureCode Test, Penetration
                Test)
              </li>
            </ul>
          </div>
          <div className="text-center text-[18px] font-bold mt-[15px]">
            “อัตราเงินเดือนตามเกณฑ์มาตรฐานของหลักสูตรด้านคอมพิวเตอร์
            ชั้นนำของประเทศไทย อัตราการได้งานทำตรงสาขาเกิน 95%”
          </div>
        </div>
        <div className="flex w-[378px] ml-[220px]">
          <div className="h-[1274px] w-[378px] rounded-xl mt-[48px] bg-[#f3f4f6]">
            <div className="bg-[#bbf7d0] w-[378px] h-[65px] rounded-t-xl">
              <div className="font-bold text-[18px] pt-[20px] text-center">
                กิจกรรมที่กำลังจะมาถึง
              </div>
            </div>
            <div className="grid grid-rows-3 gap-10 mt-[40px] ml-[65px]">
              {activity.map((item) => {
                return <Cardsmall item={item} type="activity" />;
              })}
            </div>
            <div>
              <a href="#" className="font-regular underline ml-[255px]">
                ดูทั้งหมด
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-3.5 justify-center  mt-[50px]">
        <Link href="#">
          <button className="w-[37px] h-[37px] text-black text-[16px] font-semibold bg-[#D9D9D9] rounded-full">
            1
          </button>
        </Link>
        <Link href="#">
          <button className="w-[37px] h-[37px] text-black text-[16px] font-semibold bg-[#F5F5F5] rounded-full">
            2
          </button>
        </Link>
        <Link href="#">
          <button className="w-[37px] h-[37px] text-black text-[16px] font-semibold bg-[#F5F5F5] rounded-full">
            3
          </button>
        </Link>
        <Link href="#">
          <button className="w-[37px] h-[37px] text-black text-[16px] font-semibold bg-[#F5F5F5] rounded-full">
            4
          </button>
        </Link>
        <span className="text-[16px] font-semibold pt-4">...</span>
        <Link href="#">
          <button className="w-[37px] h-[37px] text-black text-[16px] font-semibold bg-[#F5F5F5] rounded-full">
            5
          </button>
        </Link>
      </div>
    </div>
  );
};
export default ReviewCs;
