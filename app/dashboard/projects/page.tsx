import Image from 'next/image';

export default function Page() {
  return (
    <>
      <div className="flex flex-row justify-evenly text-center">
        {/* Project Completion */}
        <div className="border-1 bg-white rounded flex flex-col justify-center flex flex-col items-center">
          <h1 className="text-6xl uppercase text-[#ff671d] font-bold mb-5">
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
          <h1 className="text-6xl uppercase text-[#ff671d] font-bold mb-5">
            Your Project Experts
          </h1>
          <table className="table-auto">
            <thead className="bg-gray-50">
              <tr className="text-center bg-cyan-950 border-1 text-white">
                <th className="px-4 py-2">Department</th>
                <th className="px-4 py-2">Contact</th>
                <th className="px-4 py-2">Phone</th>
                <th className="px-4 py-2">Email</th>
              </tr>
            </thead>
            <tbody className="font-bold">
              <tr className="text-center">
                <td className="border border-gray-300 px-4 py-2 text-[#1f3354]">
                  Admin
                </td>
                <td className="border border-gray-300 px-4 py-2 text-[#1f3354]">
                  Jillian Rooker
                </td>
                <td className="border border-gray-300 px-4 py-2 text-[#ff671d]">
                  555-555-5555
                </td>
                <td className="border border-gray-300 px-4 py-2 text-[#ff671d]">
                  jr@archsolar
                </td>
              </tr>
              <tr className="text-center">
                <td className="border border-gray-300 px-4 py-2 text-[#1f3354]">
                  Field
                </td>
                <td className="border border-gray-300 px-4 py-2 text-[#1f3354]">
                  Ryan Hakala
                </td>
                <td className="border border-gray-300 px-4 py-2 text-[#ff671d]">
                  555-555-5555
                </td>
                <td className="border border-gray-300 px-4 py-2 text-[#ff671d]">
                  rh@archsolar
                </td>
              </tr>
              <tr className="text-center">
                <td className="border border-gray-300 px-4 py-2 text-[#1f3354]">
                  Safety
                </td>
                <td className="border border-gray-300 px-4 py-2 text-[#1f3354]">
                  Josh Hooper
                </td>
                <td className="border border-gray-300 px-4 py-2 text-[#ff671d]">
                  555-555-5555
                </td>
                <td className="border border-gray-300 px-4 py-2 text-[#ff671d]">
                  jh@archsolar
                </td>
              </tr>
              <tr className="text-center">
                <td className="border border-gray-300 px-4 py-2 text-[#1f3354]">
                  Marketing
                </td>
                <td className="border border-gray-300 px-4 py-2 text-[#1f3354]">
                  JD Smith
                </td>
                <td className="border border-gray-300 px-4 py-2 text-[#ff671d]">
                  555-555-5555
                </td>
                <td className="border border-gray-300 px-4 py-2 text-[#ff671d]">
                  jd@archsolar
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Progress Table */}
      <div className="flex flex-col w-full rounded p-10 my-5">
        <table className="table-fixed ">
          <thead className="bg-gray-50 ">
            <tr className="text-center bg-cyan-950 border-1 text-white ">
              <th className="px-4 py-2">Admin</th>
              <th className="px-4 py-2">Engineering</th>
              <th className="px-4 py-2">Field</th>
              <th className="px-4 py-2">Marketing</th>
            </tr>
          </thead>

          <tbody className="bg-[#1f3354] ">
            <tr className="text-center">
              <td>
                <div className="w-full bg-white rounded-full dark:bg-gray-700">
                  <div
                    className="bg-blue-600 text-white text-center p-0.5 leading-none rounded-full"
                    style={{ width: '25%' }}
                  >
                    {'25%'}
                  </div>
                </div>
              </td>
              <td>
                <div className="w-full bg-white rounded-full dark:bg-gray-700">
                  <div
                    className="bg-blue-600 text-white text-center p-0.5 leading-none rounded-full"
                    style={{ width: '25%' }}
                  >
                    {'25%'}
                  </div>
                </div>
              </td>
              <td>
                <div className="w-full bg-white rounded-full dark:bg-gray-700">
                  <div
                    className="bg-blue-600 text-white text-center p-0.5 leading-none rounded-full"
                    style={{ width: '25%' }}
                  >
                    {'25%'}
                  </div>
                </div>
              </td>
              <td>
                <div className="w-full bg-white rounded-full dark:bg-gray-700">
                  <div
                    className="bg-blue-600 text-white text-center p-0.5 leading-none rounded-full"
                    style={{ width: '25%' }}
                  >
                    {'25%'}
                  </div>
                </div>
              </td>
            </tr>
            <tr className="text-center">
              <td>
                <div className="w-full bg-white rounded-full dark:bg-gray-700">
                  <div
                    className="bg-blue-600 text-white text-center p-0.5 leading-none rounded-full"
                    style={{ width: '50%' }}
                  >
                    {'50%'}
                  </div>
                </div>
              </td>
              <td>
                <div className="w-full bg-white rounded-full dark:bg-gray-700">
                  <div
                    className="bg-blue-600 text-white text-center p-0.5 leading-none rounded-full"
                    style={{ width: '50%' }}
                  >
                    {'50%'}
                  </div>
                </div>
              </td>
              <td>
                <div className="w-full bg-white rounded-full dark:bg-gray-700">
                  <div
                    className="bg-blue-600 text-white text-center p-0.5 leading-none rounded-full"
                    style={{ width: '50%' }}
                  >
                    {'50%'}
                  </div>
                </div>
              </td>
              <td>
                <div className="w-full bg-white rounded-full dark:bg-gray-700">
                  <div
                    className="bg-blue-600 text-white text-center p-0.5 leading-none rounded-full"
                    style={{ width: '50%' }}
                  >
                    {'50%'}
                  </div>
                </div>
              </td>
            </tr>
            <tr className="text-center">
              <td>
                <div className="w-full bg-white rounded-full dark:bg-gray-700">
                  <div
                    className="bg-blue-600 text-white text-center p-0.5 leading-none rounded-full"
                    style={{ width: '75%' }}
                  >
                    {'75%'}
                  </div>
                </div>
              </td>
              <td>
                <div className="w-full bg-white rounded-full dark:bg-gray-700">
                  <div
                    className="bg-blue-600 text-white text-center p-0.5 leading-none rounded-full"
                    style={{ width: '75%' }}
                  >
                    {'75%'}
                  </div>
                </div>
              </td>
              <td>
                <div className="w-full bg-white rounded-full dark:bg-gray-700">
                  <div
                    className="bg-blue-600 text-white text-center p-0.5 leading-none rounded-full"
                    style={{ width: '75%' }}
                  >
                    {'75%'}
                  </div>
                </div>
              </td>
              <td>
                <div className="w-full bg-white rounded-full dark:bg-gray-700">
                  <div
                    className="bg-blue-600 text-white text-center p-0.5 leading-none rounded-full"
                    style={{ width: '75%' }}
                  >
                    {'75%'}
                  </div>
                </div>
              </td>
            </tr>
            <tr className="text-center">
              <td>
                <div className="w-full bg-white rounded-full dark:bg-gray-700">
                  <div
                    className="bg-blue-600 text-white text-center p-0.5 leading-none rounded-full"
                    style={{ width: '100%' }}
                  >
                    {'100%'}
                  </div>
                </div>
              </td>
              <td>
                <div className="w-full bg-white rounded-full dark:bg-gray-700">
                  <div
                    className="bg-blue-600 text-white text-center p-0.5 leading-none rounded-full"
                    style={{ width: '100%' }}
                  >
                    {'100%'}
                  </div>
                </div>
              </td>
              <td>
                <div className="w-full bg-white rounded-full dark:bg-gray-700">
                  <div
                    className="bg-blue-600 text-white text-center p-0.5 leading-none rounded-full"
                    style={{ width: '100%' }}
                  >
                    {'100%'}
                  </div>
                </div>
              </td>
              <td>
                <div className="w-full bg-white rounded-full dark:bg-gray-700">
                  <div
                    className="bg-blue-600 text-white text-center p-0.5 leading-none rounded-full"
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

      {/* Test */}
    </>
  );
}
