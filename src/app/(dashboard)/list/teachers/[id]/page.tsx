import Announcements from "@/app/components/Announcements"
import BigCalendar from "@/app/components/BigCalendar"
import Image from "next/image"
import Link from "next/link"

const SingleTeacherPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      <div className="w-full xl:w-2/3">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="bg-lamaSky py-6 px-4 rounded-md flex-1 flex gap-4">
            {/* TOP */}
            <div className="w-1/3">
              <Image src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"></Image>
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-xl font-semibold">
                Bao Gia, Nguyen
              </h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/blood.png" alt="" width={14} height={14}></Image>
                  <span>A+</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/date.png" alt="" width={14} height={14}></Image>
                  <span>January 2025</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/mail.png" alt="" width={14} height={14}></Image>
                  <span>user@gmail.com</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/phone.png" alt="" width={14} height={14}></Image>
                  <span>123-456-789</span>
                </div>
              </div>
            </div>

          </div>
          <div className="flex-1">
            {/* USER INFO CARD */}
            {/* SMALL CARD */}
            <div className="flex flex-1 justify-between gap-4 flex-wrap">
              <div className="flex p-4 gap-4 bg-white rounded-md w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                <Image src={"/singleAttendance.png"} alt="" width={24} height={24} className="w-6 h-6"></Image>
                <div className="">
                  <h1 className="text-xl font-semibold">90%</h1>
                  <span className="text-sm text-gray-400">Attendance</span>
                </div>
              </div>
              <div className="flex p-4 gap-4 bg-white rounded-md w-full md:w-[48%]">
                <Image src={"/singleBranch.png"} alt="" width={24} height={24} className="w-6 h-6"></Image>
                <div className="">
                  <h1 className="text-xl font-semibold">02</h1>
                  <span className="text-sm text-gray-400">Branches</span>
                </div>
              </div>
              <div className="flex p-4 gap-4 bg-white rounded-md w-full md:w-[48%]">
                <Image src={"/singleLesson.png"} alt="" width={24} height={24} className="w-6 h-6"></Image>
                <div className="">
                  <h1 className="text-xl font-semibold">05</h1>
                  <span className="text-sm text-gray-400">Classes</span>
                </div>
              </div>
              <div className="flex p-4 gap-4 bg-white rounded-md w-full md:w-[48%]">
                <Image src={"/singleClass.png"} alt="" width={24} height={24} className="w-6 h-6"></Image>
                <div className="">
                  <h1 className="text-xl font-semibold">09</h1>
                  <span className="text-sm text-gray-400">Lessons</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <h1>Teacher 's Schedule</h1>
          <BigCalendar></BigCalendar>
        </div>


      </div>
      <div className="w-full xl:w-1/3">
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link className="p-3 rounded-md bg-lamaSkyLight" href="/">Teacher 's Classes</Link>
            <Link className="p-3 rounded-md bg-lamaPurpleLight" href="/">Teacher 's Students</Link>
            <Link className="p-3 rounded-md bg-lamaYellowLight" href="/">Teacher 's Lessons</Link>
            <Link className="p-3 rounded-md bg-pink-50" href="/">Teacher 's Exams</Link>
            <Link className="p-3 rounded-md bg-lime-50" href="/">Teacher 's Assignements</Link>
          </div>
        </div>
        <Announcements></Announcements>
      </div>
    </div>
  )
}

export default SingleTeacherPage