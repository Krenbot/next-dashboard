import Image from 'next/image';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

export default function Page() {
  return (
    <>
      <div className=" uppercase text-[#ff671d] font-bold text-center mb-5 ">
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
      <div id="progress-table" className="flex flex-col rounded-full">
        <table className="table-fixed">
          <thead className="bg-gray-50 ">
            <tr className="text-center bg-cyan-950 border-1 text-white text-3xl">
              <th className="px-4 py-2 w-1/3">Pre-Construction</th>

              <th className="px-4 py-2 w-1/3">Construction</th>
              <th className="px-4 py-2 w-1/3">Post-Construction</th>
            </tr>
          </thead>

          <tbody className="bg-cyan-950">
            {/* Top Row */}
            <tr className="text-center">
              <td id="Engineering" className="p-2">
                <p className="text-white text-left flex flex-row">
                  Engineering{' '}
                  <Tooltip title="Our team of highly trained engineers designs your system for peak performance. This includes creating electrical one-line diagrams and building analysis for permitting.">
                    <HelpOutlineIcon className="ml-2" />
                  </Tooltip>
                </p>

                <div className="w-full bg-white rounded-full">
                  <div
                    className="bg-[#ff671D] text-white text-center py-1 leading-none rounded-full my-.25"
                    style={{ width: '25%' }}
                  >
                    {'25%'}
                  </div>
                </div>
              </td>
              <td id="Racking" className="p-2">
                <p className="text-white text-left flex flex-row">
                  Racking{' '}
                  <Tooltip title="Before we place the modules, we ensure they will stay in place on your site with top-of-the-line racking. The racking is placed at an angle to maximize your solar production.">
                    <HelpOutlineIcon className="ml-2" />
                  </Tooltip>
                </p>

                <div className="w-full bg-white rounded-full">
                  <div
                    className="bg-[#ff671D] text-white text-center py-1 leading-none rounded-full my-.25"
                    style={{ width: '25%' }}
                  >
                    {'25%'}
                  </div>
                </div>
              </td>
              <td id="Outage" className="p-2">
                <p className="text-white text-left flex flex-row">
                  Outage{' '}
                  <Tooltip title="To make sure everything is correct, your utility will schedule an outage to inspect our work. NOTE: You will not have power during this timeframe. Outages tend to take a few hours – you should receive notice to plan accordingly.">
                    <HelpOutlineIcon className="ml-2" />
                  </Tooltip>
                </p>

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
              <td id="Permitting" className="p-2">
                <p className="text-white text-left flex flex-row">
                  Permitting{' '}
                  <Tooltip title="At this stage, we have submitted the necessary structural documents and are waiting on approval from your jurisdiction and utility provider.">
                    <HelpOutlineIcon className="ml-2" />
                  </Tooltip>
                </p>

                <div className="w-full bg-white rounded-full">
                  <div
                    className="bg-[#ff671D] text-white text-center py-1 leading-none rounded-full my-.25"
                    style={{ width: '25%' }}
                  >
                    {'25%'}
                  </div>
                </div>
              </td>
              <td id="Modules" className="p-2">
                <p className="text-white text-left flex flex-row">
                  Modules{' '}
                  <Tooltip title="This is when you’ll ‘see the solar’ as modules are placed in their designated racking structures.">
                    <HelpOutlineIcon className="ml-2" />
                  </Tooltip>
                </p>

                <div className="w-full bg-white rounded-full">
                  <div
                    className="bg-[#ff671D] text-white text-center py-1 leading-none rounded-full my-.25"
                    style={{ width: '25%' }}
                  >
                    {'25%'}
                  </div>
                </div>
              </td>
              <td id="Testing" className="p-2">
                <p className="text-white text-left flex flex-row">
                  Testing{' '}
                  <Tooltip title="The utility provider makes sure your system is working properly before fully bringing it online.">
                    <HelpOutlineIcon className="ml-2" />
                  </Tooltip>
                </p>

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

            {/* 3rd Row */}
            <tr className="text-center">
              <td id="Procurement" className="p-2">
                <p className="text-white text-left flex flex-row">
                  Procurement{' '}
                  <Tooltip title="Once our design is approved, we begin gathering all the materials your project needs.">
                    <HelpOutlineIcon className="ml-2" />
                  </Tooltip>
                </p>

                <div className="w-full bg-white rounded-full">
                  <div
                    className="bg-[#ff671D] text-white text-center py-1 leading-none rounded-full my-.25"
                    style={{ width: '25%' }}
                  >
                    {'25%'}
                  </div>
                </div>
              </td>
              <td id="Modules" className="p-2">
                <p className="text-white text-left flex flex-row">
                  Modules{' '}
                  <Tooltip title="Every module is wired to an inverter to capture your energy. At this point, we are making that electrical connection across your project.">
                    <HelpOutlineIcon className="ml-2" />
                  </Tooltip>
                </p>

                <div className="w-full bg-white rounded-full">
                  <div
                    className="bg-[#ff671D] text-white text-center py-1 leading-none rounded-full my-.25"
                    style={{ width: '25%' }}
                  >
                    {'25%'}
                  </div>
                </div>
              </td>
              <td id="Commissioning" className="p-2">
                <p className="text-white text-left flex flex-row">
                  Commissioning{' '}
                  <Tooltip title="When the utility approves of the outage and inspection, you receive a date to ‘turn on’ your system! Once your system is commissioned, you're producing renewable energy right from the sun.">
                    <HelpOutlineIcon className="ml-2" />
                  </Tooltip>
                </p>

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
          </tbody>
        </table>
      </div>

      {/* Testing Area */}
    </>
  );
}
