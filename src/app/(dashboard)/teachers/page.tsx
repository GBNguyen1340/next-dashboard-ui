import Announcements from "@/app/components/Announcements"
import BigCalendar from "@/app/components/BigCalendar"

const TeacherPage = () => {
  return (
    <div className='flex-1 p-4 flex gap-4 fle-col xl:flex-row'>
      {/* LEFT */}
      <div className="w-full lg:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule</h1>
          <BigCalendar></BigCalendar>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3">
        <Announcements></Announcements>
      </div>
    </div>
  )
}

export default TeacherPage