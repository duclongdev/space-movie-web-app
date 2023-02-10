
import React, { useState } from "react";


export default function MyList({ callback, data }) {
  return (
    <div className="overflow-y-auto flex-1">
      <div className="col-span-8 mr-2">
        <div className="grid grid-cols-3 gap-8">
          {data.map((value, index) => {
            return (
              <div
                className="rounded-lg bg-[#2D2E37] text-white hover:bg-[#4E4D54]"
                key={index}
                onClick={() => {callback(value);}}
              >
                <img
                  src={value.image}
                  className="rounded-t-lg h-[160.86px] w-full"
                  alt=""
                />
                <div className="p-4">
                  <h4 className="font-bold text-xl line-clamp-1">
                    {value.title}
                  </h4>
                  <p className="text-base text-[#F9E492]">{value.author}</p>
                  <p className="text-base opacity-70">{value.genre}</p>
                  <div className="flex text-base">
                    <p className="mr-1">Current episode:</p>
                    <p className="text-[#F9E492]">{value.currentEps}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
