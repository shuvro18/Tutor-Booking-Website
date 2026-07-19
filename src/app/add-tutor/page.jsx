"use client"

import { toast } from "react-toastify";
import { createUser } from "../lib/actions";
import { useRouter } from "next/navigation";
import { authClient } from "../lib/auth-client";





const AddTutor = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    if (session?.user?.email) {
      user.createdBy = session.user.email;
    } else {
      return
    }




    let isSuccess = false;
    try {
      const sendUser = await createUser(user);

      if (sendUser && (sendUser.success || sendUser.insertedId || sendUser.id)) {
        toast.success("Tutor added successfully");
        isSuccess = true;
      } else {
        toast.error("sorry something is not okay");
      }
    } catch (error) {

      console.log("This is error", error)
      toast.error("Network error. Please try again");

    }
    if (isSuccess) {
      router.push("/tutors");
    }

    // console.log("Submitted Tutor Data:", formData);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center transition-colors duration-300">
      <div className="max-w-3xl w-full bg-white dark:bg-zinc-900 p-6 sm:p-10 rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-sm transition-all">

        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-zinc-100">
            Add New Tutor
          </h2>
          <p className="mt-2 text-sm text-gray-500 dark:text-zinc-400">
            Fill up the form below to register a tutor on MediQueue.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Tutor Name */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-zinc-300 mb-2">
              Tutor Name
            </label>
            <input
              type="text"
              name="tutorName"

              placeholder="Shuvro biswas"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 text-slate-900 dark:text-zinc-100 placeholder-gray-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 focus:border-blue-500 dark:focus:border-blue-400 text-sm transition-all"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-zinc-300 mb-2">
              Photo URL
            </label>
            <input
              type="url"
              name="photoUrl"

              placeholder="imgbb / postimage link"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 text-slate-900 dark:text-zinc-100 placeholder-gray-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 focus:border-blue-500 dark:focus:border-blue-400 text-sm transition-all"
            />
          </div>

          {/* Subject / Category & Teaching Mode (Responsive Row) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-zinc-300 mb-2">
                Subject / Category
              </label>
              <select
                name="subject"

                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-slate-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 focus:border-blue-500 dark:focus:border-blue-400 text-sm transition-all"
              >
                <option value="" className="dark:bg-zinc-900 hidden">Select Subject</option>
                <option value="biology" className="dark:bg-zinc-900">Physics</option>
                <option value="chemistry" className="dark:bg-zinc-900">Chemistry</option>
                <option value="biochemistry" className="dark:bg-zinc-900">Math</option>
                <option value="pharmacology" className="dark:bg-zinc-900">Biology</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-zinc-300 mb-2">
                Teaching Mode
              </label>
              <select
                name="teachingMode"

                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-slate-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 focus:border-blue-500 dark:focus:border-blue-400 text-sm transition-all"
              >
                <option value="" className="dark:bg-zinc-900 hidden">Select Mode</option>
                <option value="online" className="dark:bg-zinc-900">Online</option>
                <option value="offline" className="dark:bg-zinc-900">Offline</option>
                <option value="hybrid" className="dark:bg-zinc-900">Hybrid</option>
              </select>
            </div>
          </div>

          {/* Available Days and Time */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-zinc-300 mb-2">
              Available Days and Time
            </label>
            <input
              type="text"
              name="availableTime"

              placeholder="Sun - Thu 5:00 PM - 8:00 PM"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 text-slate-900 dark:text-zinc-100 placeholder-gray-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 focus:border-blue-500 dark:focus:border-blue-400 text-sm transition-all"
            />
          </div>

          {/* Hourly Fee & Total Slot (Responsive Row) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-zinc-300 mb-2">
                Hourly Fee ($)
              </label>
              <input
                type="number"
                name="hourlyFee"

                placeholder="500"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 text-slate-900 dark:text-zinc-100 placeholder-gray-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 focus:border-blue-500 dark:focus:border-blue-400 text-sm transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-zinc-300 mb-2">
                Total Slot
              </label>
              <input
                type="number"
                name="totalSlot"

                placeholder="10"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 text-slate-900 dark:text-zinc-100 placeholder-gray-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 focus:border-blue-500 dark:focus:border-blue-400 text-sm transition-all"
              />
            </div>
          </div>

          {/* Session Start Date */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-zinc-300 mb-2">
              Session Start Date
            </label>
            <input
              type="date"
              name="startDate"

              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 text-slate-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 focus:border-blue-500 dark:focus:border-blue-400 text-sm transition-all scheme-light dark:scheme-dark"
            />
          </div>

          {/* Institution & Location (Responsive Row) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-zinc-300 mb-2">
                Institution
              </label>
              <input
                type="text"
                name="institution"

                placeholder="Dhaka University"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 text-slate-900 dark:text-zinc-100 placeholder-gray-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 focus:border-blue-500 dark:focus:border-blue-400 text-sm transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-zinc-300 mb-2">
                Location (Area/City)
              </label>
              <input
                type="text"
                name="location"

                placeholder="Khulna"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 text-slate-900 dark:text-zinc-100 placeholder-gray-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 focus:border-blue-500 dark:focus:border-blue-400 text-sm transition-all"
              />
            </div>
          </div>

          {/* Experience */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-zinc-300 mb-2">
              Experience
            </label>
            <textarea
              name="experience"

              rows="4"
              placeholder="3 years teaching experience..."
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 text-slate-900 dark:text-zinc-100 placeholder-gray-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 focus:border-blue-500 dark:focus:border-blue-400 text-sm transition-all resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full py-3.5 px-4 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-950/20 text-slate-700 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-blue-400 font-semibold rounded-xl text-sm transition-all duration-300 shadow-sm active:scale-[0.98]"
            >
              Submit Tutor
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddTutor;