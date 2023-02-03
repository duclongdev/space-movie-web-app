
import React, { useState } from "react";


export default function MyList({ callback, data }) {
  return (
    <div className="overflow-y-auto flex-1">
      <div className="col-span-8">
        <div className="grid grid-cols-3 gap-8">
          {data.map((value, index) => {
            return (
              <div
                className="rounded-lg bg-[#272831] text-white hover:bg-[#4E4D54]"
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
                  <p className="text-base text-[#C7BA89]">{value.author}</p>
                  <p className="text-base">{value.genre}</p>
                  <div className="flex text-base">
                    <p className="mr-1">Current episode:</p>
                    <p className="text-[#C7BA89]">{value.currentEps}</p>
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
