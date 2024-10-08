import React from 'react'
import Icons from '../components/Icons'

const Profile = () => {
  return (
    <>
        <div className="flex flex-col items-center gap-y-[30px] w-full">
            <div className="flex flex-col gap-y-[10px] items-center relative">
              <div className="absolute -left-[20px] -top-[20px]">
                <Icons string="ticket" />
              </div>
              <div className="text-sm text-[#818181] tracking-widest font-[700]">Profile</div>
              <div className="text-xl font-[600]">Booking Request</div>
            </div>
            <div className="w-[85%] bg-video-live-streaming rounded-lg">
                <div className="w-full p-[30px] bg-gradient-to-r from-black rounded-lg flex flex-col items-start">
                  <div className="text-3xl font-[900] text-white text-outfit">Mumbai Stall Booking</div>
                  <div className="text-xl text-white text-outfit">Last Date 05 December 2024</div>
                  <div className="flex p-[20px] rounded-md bg-white mt-[30px] w-full overflow-x-auto">
                    <div className="min-w-[250px] flex flex-col items-start border-r border-black gap-y-[20px]">
                      <div className="text-xl font-[700] text-outfit">Brand</div>
                      <div className="text-xl text-outfit">Indian Masala House</div>
                      <div className="text-xl text-outfit">A.R Crafts</div>
                    </div>
                    <div className="min-w-[200px] flex flex-col items-center border-r border-black gap-y-[20px]">
                      <div className="text-xl font-[700] text-outfit">Category</div>
                      <div className="text-xl text-outfit">Restaurant</div>
                      <div className="text-xl text-outfit">Other</div>
                    </div>
                    <div className="min-w-[150px] flex flex-col items-center border-r border-black gap-y-[20px]">
                      <div className="text-xl font-[700] text-outfit">Since</div>
                      <div className="text-xl text-outfit">1998</div>
                      <div className="text-xl text-outfit">2005</div>
                    </div>
                    <div className="min-w-[250px] flex flex-col items-center border-r border-black gap-y-[20px]">
                      <div className="text-xl font-[700] text-outfit">Mobile</div>
                      <div className="text-xl text-outfit">(+91) 98745-25874</div>
                      <div className="text-xl text-outfit">(+91) 36985-20014</div>
                    </div>
                    <div className="min-w-[150px] flex flex-col items-center border-r border-black gap-y-[20px]">
                      <div className="text-xl font-[700] text-outfit">Stall Qty</div>
                      <div className="text-xl text-outfit">1</div>
                      <div className="text-xl text-outfit">2</div>
                    </div>
                    <div className="min-w-[200px] flex flex-col items-center border-r border-black gap-y-[20px]">
                      <div className="text-xl font-[700] text-outfit">Stall Type</div>
                      <div className="text-xl text-outfit">Standard</div>
                      <div className="text-xl text-outfit">Basic</div>
                    </div>
                    <div className="min-w-[200px] flex flex-col items-center border-r border-black gap-y-[20px]">
                      <div className="text-xl font-[700] text-outfit">Amount</div>
                      <div className="text-xl text-outfit">20,000</div>
                      <div className="text-xl text-outfit">30,000</div>
                    </div>
                    <div className="min-w-[200px] flex flex-col items-center gap-y-[20px]">
                      <div className="text-xl font-[700] text-outfit">Status</div>
                      <div className="text-xl text-outfit">Pending</div>
                      <div className="text-xl text-outfit">Success</div>
                    </div>
                  </div>
                </div>
            </div>
            <div className="w-[85%] bg-pune rounded-lg">
                <div className="w-full p-[30px] bg-gradient-to-r from-black rounded-lg flex flex-col items-start">
                  <div className="text-3xl font-[900] text-white text-outfit">Pune Stall Booking</div>
                  <div className="text-xl text-white text-outfit">Last Date 10 December 2024</div>
                  <div className="flex p-[20px] rounded-md bg-white mt-[30px] w-full overflow-x-auto">
                    <div className="min-w-[250px] flex flex-col items-start border-r border-black gap-y-[20px]">
                      <div className="text-xl font-[700] text-outfit">Brand</div>
                      <div className="text-xl text-outfit">Indian Masala House</div>
                      <div className="text-xl text-outfit">A.R Crafts</div>
                    </div>
                    <div className="min-w-[200px] flex flex-col items-center border-r border-black gap-y-[20px]">
                      <div className="text-xl font-[700] text-outfit">Category</div>
                      <div className="text-xl text-outfit">Restaurant</div>
                      <div className="text-xl text-outfit">Other</div>
                    </div>
                    <div className="min-w-[150px] flex flex-col items-center border-r border-black gap-y-[20px]">
                      <div className="text-xl font-[700] text-outfit">Since</div>
                      <div className="text-xl text-outfit">1998</div>
                      <div className="text-xl text-outfit">2005</div>
                    </div>
                    <div className="min-w-[250px] flex flex-col items-center border-r border-black gap-y-[20px]">
                      <div className="text-xl font-[700] text-outfit">Mobile</div>
                      <div className="text-xl text-outfit">(+91) 98745-25874</div>
                      <div className="text-xl text-outfit">(+91) 36985-20014</div>
                    </div>
                    <div className="min-w-[150px] flex flex-col items-center border-r border-black gap-y-[20px]">
                      <div className="text-xl font-[700] text-outfit">Stall Qty</div>
                      <div className="text-xl text-outfit">1</div>
                      <div className="text-xl text-outfit">2</div>
                    </div>
                    <div className="min-w-[200px] flex flex-col items-center border-r border-black gap-y-[20px]">
                      <div className="text-xl font-[700] text-outfit">Stall Type</div>
                      <div className="text-xl text-outfit">Standard</div>
                      <div className="text-xl text-outfit">Basic</div>
                    </div>
                    <div className="min-w-[200px] flex flex-col items-center border-r border-black gap-y-[20px]">
                      <div className="text-xl font-[700] text-outfit">Amount</div>
                      <div className="text-xl text-outfit">20,000</div>
                      <div className="text-xl text-outfit">30,000</div>
                    </div>
                    <div className="min-w-[200px] flex flex-col items-center gap-y-[20px]">
                      <div className="text-xl font-[700] text-outfit">Status</div>
                      <div className="text-xl text-outfit">Pending</div>
                      <div className="text-xl text-outfit">Success</div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Profile