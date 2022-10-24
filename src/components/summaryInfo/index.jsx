import React from "react";
import { BookmarkIcon, PlayIcon } from "../../assets";
const des = `One Piece (Đảo Hải Tặc) cập nhật vietsub vào 15:00 chủ nhật hàng tuần. Gol D. Roger, vua hải tặc với khối tài sản khổng lồ đã bị xử tử, tiết lộ rằng tài sản cả cuộc đời của ông được cất giấu kỹ ở một vị trí nào đó dưới đáy đại dương. Sau này người ta đã gọi đó là Đại Kho Báu. Để giành được kho báu, mọi người đã đua nhau ra khơi để trở thành hải tặc và đã tạo ra một "Thời đại Hải tặc lớn". Vì muốn thực hiện những lời đã thỏa thuận với bạn bè, Monkey D. Luffy đã gặp gỡ nhiều đối tác cùng chí hướng trong cuộc hành trình đi tìm kho báu và cùng nhau bước vào "Con đường Vĩ đại". Liệu mục tiêu của họ có thành công và trở thành Vua Hải Tặc hay không? Mời các bạn cùng đón xem nhé!`;

function SummaryInfo() {
  return (
    <div className="h-[39rem] relative">
      <div className="absolute w-[60rem] h-[40rem] bg-gradient-to-r from-slate-800 top-0 z-10">
        <div className="absolute left-14 top-1/4 text-slate-200 w-2/4">
          <img
            src={"/assets/onepieclogo.png"}
            alt=""
            className="h-[6rem] mb-8"
          />
          <div>
            <div className="mb-4 flex h-4 items-center">
              <strong className="text-green-600">9.4</strong>
              <span className="bg-green-400 w-[0.1rem] h-5/6 mx-1"></span>
              <span>2022</span>
              <span className="bg-green-400 w-[0.1rem] h-5/6 mx-1"></span>
              <span>30 Tập</span>
            </div>

            <div className="mb-4">
              <span className="px-2 bg-slate-500 bg-opacity-50 rounded mr-2">
                Viễn tưởng
              </span>
              <span className="px-2 bg-slate-500 bg-opacity-50 rounded mr-2">
                Phiêu lưu
              </span>
              <span className="px-2 bg-slate-500 bg-opacity-50 rounded mr-2">
                Hành động
              </span>
            </div>

            <div className="mb-4 leading-4">
              <span>Miêu tả:</span>
              {des.length > 215 ? des.slice(0, 215) + "..." : des}
            </div>
          </div>
          <div>
            <button className="mr-6 bg-green-500 p-3 rounded-full">
              <PlayIcon />
            </button>
            <button className="mr-8 bg-slate-300 p-3 rounded-full">
              <BookmarkIcon />
            </button>
          </div>
        </div>
      </div>
      <img
        src={"/assets/onepiece2.webp"}
        className="right-0 bottom-0 w-full h-auto"
        alt=""
      />
      <div className="absolute w-40 h-[40rem] bg-gradient-to-l from-slate-800 top-0 z-50 right-0 "></div>
    </div>
  );
}

export default SummaryInfo;
