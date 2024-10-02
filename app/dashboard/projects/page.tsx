import Image from 'next/image';

export default function Page() {
  return (
    <>
      <div className=" uppercase text-[#ff671d] font-bold text-center mb-5">
        <h1 className="text-6xl border-b-4 border-[#1f3354] inline">
          Wisconsin Center
        </h1>
      </div>

      <div className="flex flex-row justify-evenly text-center py-5">
        {/* Project Completion */}
        <div className="border-1 bg-white rounded flex flex-col justify-center flex flex-col items-center">
          <h1 className="text-5xl text-[#ff671d] font-bold mb-5">
            Project Completion
          </h1>
          <Image
            className="rounded-full"
            src="/solar/test-solar.png"
            width={500}
            height={500}
            alt="test solar"
          />
        </div>

        {/* Project Experts */}
        <div className="border-1 bg-white rounded flex flex-col justify-center content-center ">
          <h1 className="text-5xl text-[#ff671d] font-bold mb-5">
            Your Project Experts
          </h1>
          <table className="table-auto">
            <thead className="bg-gray-50">
              <tr className="text-center bg-cyan-950 border-1 text-white">
                <th className="px-4 py-2 ">Department</th>
                <th className="px-4 py-2 ">Contact</th>
                <th className="px-4 py-2 ">Phone</th>
                <th className="px-4 py-2 ">Email</th>
              </tr>
            </thead>
            <tbody className="font-bold">
              <tr className="text-center">
                <td className="border border-gray-300 px-4 py-2  text-[#1f3354]">
                  Admin
                </td>
                <td className="border border-gray-300 px-4 py-2  text-[#1f3354]">
                  Jillian Rooker
                </td>
                <td className="border border-gray-300 px-4 py-2  text-[#ff671d]">
                  555-555-5555
                </td>
                <td className="border border-gray-300 px-4 py-2  text-[#ff671d]">
                  jr@archsolar
                </td>
              </tr>
              <tr className="text-center">
                <td className="border border-gray-300 px-4 py-2  text-[#1f3354]">
                  Field
                </td>
                <td className="border border-gray-300 px-4 py-2  text-[#1f3354]">
                  Ryan Hakala
                </td>
                <td className="border border-gray-300 px-4 py-2  text-[#ff671d]">
                  555-555-5555
                </td>
                <td className="border border-gray-300 px-4 py-2  text-[#ff671d]">
                  rh@archsolar
                </td>
              </tr>
              <tr className="text-center">
                <td className="border border-gray-300 px-4 py-2  text-[#1f3354]">
                  Safety
                </td>
                <td className="border border-gray-300 px-4 py-2  text-[#1f3354]">
                  Josh Hooper
                </td>
                <td className="border border-gray-300 px-4 py-2  text-[#ff671d]">
                  555-555-5555
                </td>
                <td className="border border-gray-300 px-4 py-2  text-[#ff671d]">
                  jh@archsolar
                </td>
              </tr>
              <tr className="text-center">
                <td className="border border-gray-300 px-4 py-2  text-[#1f3354]">
                  Marketing
                </td>
                <td className="border border-gray-300 px-4 py-2  text-[#1f3354]">
                  JD Smith
                </td>
                <td className="border border-gray-300 px-4 py-2  text-[#ff671d]">
                  555-555-5555
                </td>
                <td className="border border-gray-300 px-4 py-2  text-[#ff671d]">
                  jd@archsolar
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Progress Table */}
      <div className="flex flex-col rounded-full py-10 my-5 px-5">
        <table className="table-fixed">
          <thead className="bg-gray-50 ">
            <tr className="text-center bg-cyan-950 border-1 text-white text-3xl">
              <th className="px-4 py-2 w-1/4">Admin</th>
              <th className="px-4 py-2 w-1/4">Engineering</th>
              <th className="px-4 py-2 w-1/4">Field</th>
              <th className="px-4 py-2 w-1/4">Marketing</th>
            </tr>
          </thead>

          <tbody className="bg-cyan-950">
            {/* Top Row */}
            <tr className="text-center">
              <td className="p-2">
                <p className="text-white text-left">Monitoring</p>
                <div className="w-full bg-white rounded-full">
                  <div
                    className="bg-[#ff671D] text-white text-center py-1 leading-none rounded-full my-.25"
                    style={{ width: '25%' }}
                  >
                    {'25%'}
                  </div>
                </div>
              </td>
              <td className="p-2">
                <p className="text-white text-left">Materials Procurement</p>
                <div className="w-full bg-white rounded-full">
                  <div
                    className="bg-[#ff671D] text-white text-center py-1 leading-none rounded-full my-.25"
                    style={{ width: '25%' }}
                  >
                    {'25%'}
                  </div>
                </div>
              </td>
              <td className="p-2">
                <p className="text-white text-left">Cleanup</p>
                <div className="w-full bg-white rounded-full">
                  <div
                    className="bg-[#ff671D] text-white text-center py-1 leading-none rounded-full my-.25"
                    style={{ width: '25%' }}
                  >
                    {'25%'}
                  </div>
                </div>
              </td>
              <td className="p-2">
                <p className="text-white text-left">Photography</p>
                <div className="w-full bg-white rounded-full">
                  <div
                    className="bg-[#ff671D] text-white text-center py-1 leading-none rounded-full my-.25"
                    style={{ width: '25%' }}
                  >
                    {'25%'}
                  </div>
                </div>
              </td>
            </tr>
            {/* 2nd Row */}
            <tr className="text-center">
              <td className="p-2">
                <p className="text-white text-left">Scheduling</p>
                <div className="w-full bg-white rounded-full">
                  <div
                    className="bg-[#ff671D] text-white text-center py-1 leading-none rounded-full my-.25"
                    style={{ width: '50%' }}
                  >
                    {'50%'}
                  </div>
                </div>
              </td>
              <td className="p-2">
                <p className="text-white text-left">Monitoring</p>
                <div className="w-full bg-white rounded-full">
                  <div
                    className="bg-[#ff671D] text-white text-center py-1 leading-none rounded-full my-.25"
                    style={{ width: '50%' }}
                  >
                    {'50%'}
                  </div>
                </div>
              </td>
              <td className="p-2">
                <p className="text-white text-left">Inspection</p>
                <div className="w-full bg-white rounded-full">
                  <div
                    className="bg-[#ff671D] text-white text-center py-1 leading-none rounded-full my-.25"
                    style={{ width: '50%' }}
                  >
                    {'50%'}
                  </div>
                </div>
              </td>
              <td className="p-2">
                <p className="text-white text-left">Case Study</p>
                <div className="w-full bg-white rounded-full">
                  <div
                    className="bg-[#ff671D] text-white text-center py-1 leading-none rounded-full my-.25"
                    style={{ width: '50%' }}
                  >
                    {'50%'}
                  </div>
                </div>
              </td>
            </tr>
            {/* 3rd Row */}
            <tr className="text-center">
              <td className="p-2">
                <p className="text-white text-left">Permitting</p>
                <div className="w-full bg-white rounded-full">
                  <div
                    className="bg-[#ff671D] text-white text-center py-1 leading-none rounded-full my-.25"
                    style={{ width: '75%' }}
                  >
                    {'75%'}
                  </div>
                </div>
              </td>
              <td className="p-2">
                <p className="text-white text-left">Engineering Docs</p>
                <div className="w-full bg-white rounded-full">
                  <div
                    className="bg-[#ff671D] text-white text-center py-1 leading-none rounded-full my-.25"
                    style={{ width: '75%' }}
                  >
                    {'75%'}
                  </div>
                </div>
              </td>
              <td className="p-2">
                <p className="text-white text-left">Commissioning</p>
                <div className="w-full bg-white rounded-full">
                  <div
                    className="bg-[#ff671D] text-white text-center py-1 leading-none rounded-full my-.25"
                    style={{ width: '75%' }}
                  >
                    {'75%'}
                  </div>
                </div>
              </td>
              <td className="p-2">
                <p className="text-white text-left">Closeout Meetings</p>
                <div className="w-full bg-white rounded-full">
                  <div
                    className="bg-[#ff671D] text-white text-center py-1 leading-none rounded-full my-.25"
                    style={{ width: '75%' }}
                  >
                    {'75%'}
                  </div>
                </div>
              </td>
            </tr>
            {/* Bottom Row */}
            <tr className="text-center">
              <td className="p-2">
                <p className="text-white text-left">Happy Smiles</p>
                <div className="w-full bg-white rounded-full">
                  <div
                    className="bg-[#ff671D] text-white text-center py-1 leading-none rounded-full my-.25"
                    style={{ width: '100%' }}
                  >
                    {'100%'}
                  </div>
                </div>
              </td>
              <td className="p-2">
                <p className="text-white text-left">Sad Frowns</p>
                <div className="w-full bg-white rounded-full">
                  <div
                    className="bg-[#ff671D] text-white text-center py-1 leading-none rounded-full my-.25"
                    style={{ width: '0%' }}
                  >
                    {'0%'}
                  </div>
                </div>
              </td>
              <td className="p-2">
                <p className="text-white text-left">High Fives</p>
                <div className="w-full bg-white rounded-full">
                  <div
                    className="bg-[#ff671D] text-white text-center py-1 leading-none rounded-full my-.25"
                    style={{ width: '100%' }}
                  >
                    {'100%'}
                  </div>
                </div>
              </td>
              <td className="p-2">
                <p className="text-white text-left">Pizza Parties</p>
                <div className="w-full bg-white rounded-full">
                  <div
                    className="bg-[#ff671D] text-white text-center py-1 leading-none rounded-full my-.25"
                    style={{ width: '100%' }}
                  >
                    {'100%'}
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <p>Location</p>
        <p>Point of Contact</p>
        <p>mW</p>
        <p># of Panels</p>
      </div>
    </>
  );
}
