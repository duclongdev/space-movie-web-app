import React, { useState, useEffect } from "react";
import Card from "../post/card";

const Header = () => {
  return (
    <div className="pt-32">
      <p className="text-gray-500">Quan điểm tranh luận</p>
      <h1 className="text-white text-3xl">
        Viết Cho Năm 2022: Biết Về Thứ Gì Đó và Biết Thứ Gì Đó
      </h1>
      <p className="text-gray-500 italic">
        "Có lẽ dòng hay nhất trong bài nghiên cứu học sinh gửi tôi kỳ này là
        'Kết quả phân tích này có nhiều hạn chế nghiêm trọng bởi vì tôi không
        hiểu tôi đang làm gì'" - Paul Shafer, Phó Giáo sư khoa Quản lý chính
        sách và Luật Y tế, trường Đại học Boston
      </p>
      <div className="flex flex-row">
        <img
          src="https://images.spiderum.com/sp-xs-avatar/dc5284506efd11edaa12915a4c0043eb.jpeg"
          alt=""
          className="w-14 h-14 rounded-full"
        />
        <div className="ml-4 flex flex-col justify-center ">
          <h3 className="text-white font-semibold text-base">Huskywannafly</h3>
          <span className="text-gray-500">21 tháng 1</span>
        </div>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="text-white text-xl">
      <p className="mt-6 mb-4">
        Dịch từ bài chia sẻ của nhà văn Tettyo Saito được đăng lại bằng tiếng
        Anh trên website Archyde. Người dịch có sửa lại văn phong ở một số chỗ
        để cho phù hợp với độc giả Việt Nam. Tiêu đề bài viết do người dịch đặt.
      </p>
      <div className="flex justify-center flex-col items-center">
        <img
          src="https://images.spiderum.com/sp-images/91c0d71097c111edbd871fc57f428a20.png"
          alt=""
        />
        <p className="text-sm italic">Tettyo Saiko. Ảnh từ Facebook tác giả</p>
      </div>
      <p className="mt-6">
        Năm năm trước, tâm hồn tôi là một hố sâu tăm tối vô tận. Không có công
        ăn việc làm, không có tiền, không có bạn. Không có gì cả. Không có gì
        cả. Trong con người tôi chỉ còn căn bệnh trầm cảm và hội chứng tự kỷ.
        Sống như một hikikomori trong tăm tối, mẹ và ba tôi ghét tôi cứ như tôi
        là một con bọ cánh cứng đẻ trứng trong nhà. Nhưng tôi không thể đi nơi
        khác được, do đó tôi cứ ở trong phòng giết thời gian, một vòng xoáy vô
        tận đến buồn nôn.{" "}
      </p>
      <p className="mt-6">
        Chỉ có phim ảnh mới chữa lành cho tâm hồn tôi. Chỉ khi tôi xem phim thì
        tôi mới có thể quên được những nỗi buồn đang bùng nổ, những sự lo âu có
        sức tàn phá nặng nề và những cơn giận giữ trong thầm lặng mà tôi dành
        cho thế giới. Và mỗi lần tôi viết review về một bộ phim tôi xem qua, tôi
        đều giả vờ mình là một chuyên gia phê bình phim, và tôi luôn cố gắng dìm
        lòng tự trọng của mình.
      </p>
      <p className="mt-6">
        Và rồi tôi xem một bộ phim của Romania tên là Policeman (Người cảnh
        sát), của đạo diễn Corneliu Porumboiu. Phim này là về một anh cảnh sát
        phải chịu khổ vì những xung đột với đạo đức nghề nghiệp xảy ra lúc
        Romania sắp gia nhập Liên minh châu Âu (EU), nhưng tôi rất ngạc nhiên
        bởi sự khác biệt của những cảnh quay trong phim này so với các phim tôi
        từng xem. Phim có những cảnh hài hước tăm tối, những sự chỉ trích nặng
        nề dành cho nỗi khổ mà quốc gia của ông phải gánh chịu trong thực tế, và
        trên hết ngạc nhiên nhất là những chi tiết theo chủ nghĩa hiện thực mà
        đạo diễn đã tạo ra, những thứ có một chút tinh tế giống như văn hóa Zen.
        Trong phim có nhiều khoảnh khắc hư ảo đối nghịch nhau, chủ nghĩa hiện
        thực vượt lên các hiện tượng sinh lý như lúc chớp mắt. Lòng tôi đã tràn
        đầy sự kính phục.
      </p>
      <p className="mt-6">
        Kể từ đó tôi bắt đầu xem rất nhiều phim Romania. Từ phim của các đạo
        diễn đương đại như phim của Porumboiu (Was it or was it not? và
        Treasure), của Cristi Puiu (Goods and money và Aurora) hoặc là của Radu
        Muntean (Boogie) cho đến phim của các bậc thầy, ví dụ một vài bộ của
        Lucian Pintilie (Reconstruction, Libra và The afternoon of a torturer),
        của Malvina Ursianu (Mona Lisa without a smile và A light on the tenth
        floor) và của Mircea Daneliuc (Cruise và Marital bed). Và tôi nghĩ rằng
        tôi nên học ngôn ngữ Romania nếu tôi muốn hiểu sâu hơn về phim Romania
        cũng như văn hóa của đất nước đó.
      </p>
      <p className="mt-6">
        Để học ngôn ngữ này, tôi dùng ba quyển sách giáo khoa bởi vì chỉ có duy
        nhất ba quyển sách giáo khoa tiếng Romania được viết ở Nhật Bản. Và
        trong khi tôi vẫn đọc các bài phê bình phim viết bởi Flavia Dima, Victor
        Morozov, Calin Boto và Andrei Gorzo, tôi cũng bắt đầu đọc báo trên tạp
        chí VICE ấn bản tiếng Romania. Tôi học ngữ pháp Romania và từ vựng bằng
        cách so sánh bản dịch trên báo VICE Romania so với bản gốc tiếng Anh
        trên báo VICE US và UK. Nhưng tôi cũng đọc rất nhiều bài viết về tình
        dục và khiêu dâm, cho nên số lượng từ vựng tục tĩu của tôi cũng tăng
        lên.
      </p>
      <p className="mt-6">
        Và nhờ vào cách học này, tôi bắt đầu có thể dịch các bài phê bình phim
        và các câu chuyện mà tôi đã viết trước đó khi đang học đại học. Tất
        nhiên là bản dịch của tôi lúc đó dở tệ, nhưng nó giúp tạo ra cho tôi cảm
        giác tôi đã đạt được thành tựu nào đó. Và rồi nhen nhóm trong lòng tôi
        sau đó là ham muốn được thấy người Romania đọc truyện của tôi được viết
        bằng tiếng Romania, ham muốn ấy cứ lớn lên ngày qua ngày.
      </p>
      <p className="mt-6">
        Cũng vào khoảng thời gian này, tôi đọc quyển tiểu thuyết A hourse in a
        sea of swans viết bởi Raluca Nagy, viết về một du học sinh quốc tế sống
        ở Tokyo, quê hương của tôi. Và tôi biết rằng quyển tiểu thuyết này lấy
        cảm hứng từ một shishosetsu, một loại tiểu thuyết Nhật Bản mà tôi từng
        nghiên cứu ở trường đại học. Vô cùng hứng thú với một quyển sách có văn
        phong như văn học Nhật Bản mà lại được viết bằng tiếng Romania, tôi gửi
        anh tác giả một tin nhắn: "Quyển tiểu thuyết anh viết là quyển tiểu
        thuyết Romania đầu tiên tôi đọc bằng ngôn ngữ Romania."
      </p>
      <p className="mt-6">
        Vài tháng sau, tôi gặp Raluca-san (tôi luôn gọi anh ấy như vậy) ở
        Roppongi, Tokyo. Ở trong phòng ăn với nhau, chúng tôi nói về phim ảnh và
        văn học Romania. Đây là lần đầu tiên tôi được trải nghiệm trò chuyện với
        một người Romania ngoài đời thật, do đó với tôi cái trải nghiệm thật phi
        thường. Nhưng còn phi thường hơn thế là sau khi Raluca-san đọc truyện
        của tôi viết bằng tiếng Romania, anh ấy nói: "Thật tươi mới!".
      </p>
      <p className="mt-6">
        Tôi sau đó đã dịch thêm một vài truyện với sự tự tin to lớn mà
        Raluca-san đã tạo ra cho tôi. Và trở nên liều lĩnh hơn, tôi viết một
        dòng tin lên Facebook: "Tôi, một người Nhật Bản, đang dự định viết một
        câu chuyện về mặt tối ở Nhật Bản bằng tiếng Romania, mọi người có hứng
        thú đọc không?".
      </p>
      <p className="mt-6">
        Có rất nhiều người trả lời, nhưng một trong số đó đến từ Mihail Victus,
        một nhà văn và là biên tập của tạp chí văn học LiterNautica (tạp chí văn
        học của Romania - ND). Thật sự lúc đó tim tôi như nổ tung khi nhận được
        tin nhắn: "Xin chào! Anh có thể cho tôi đọc một trong số những truyện về
        'Mặt tối của Nhậ Bản' được không?". Và ông nói rằng nếu truyện đó viết
        hay, ông sẽ xuất bản nó trên LiterNautica. Ôi đệch, DM. Sau đó tôi gửi
        truyện cho ông ấy, rồi tôi chờ đợi trong sự mơ hồ pha trộn giữa niềm vui
        và âu lo, tôi cứ chờ và chờ và chờ...
      </p>
      <p className="mt-6">
        "Hey, tôi thích những truyện anh viết đấy. Tôi sẽ đăng nó lên
        LiterNautica."
      </p>
      <p className="mt-6">
        Và thế là truyện của tôi được đăng với tiêu đề "An Ordinary Japanese"
        (Một người Nhật bình thường) và tôi trở thành người Nhật đầu tiên viết
        truyện bằng tiếng Romania. Sự kiện đó còn rơi cả vào ngày 01/04, ngày cá
        tháng Tư, bạn tin nổi không? Tôi thật sự khi đó cứ như chìm đắm trong
        giấc mơ hoang đường của một gã say.
      </p>
      <p className="mt-6">
        Một năm sáu tháng đã trôi qua kể từ khoảnh khắc định mệnh đó và tôi đã
        trải qua nhiều chuyện. Tôi đã có hai mươi truyện được xuất bản bởi các
        tạp chí văn học khác nhau, ví dụ như LiterNautica, EgoPhobia, A Thousand
        Signs và Ithaca. Tôi trở thành bạn với những nhà văn Romania như Radu
        Gavan, Cornel Balan và Teodor Bordeianu. Tôi nhận được những lời khen
        tươi đẹp từ các độc giả Romania: "Tuyệt vời!", "Đáng hoan nghênh! Đoạn
        này viết rất tốt". "Chúc mừng, đây là một đoạn văn đầy sức sống và những
        hình ảnh sống động", "Tiếng Romania của mày thật giả tạo. Đi chết đi!",
        "Mày khiến tiếng Romania trở thành ngôn ngữ đồi bại. Mày là nỗi xấu hổ
        cho Romania" và "Fă harakiri!" (Mày đi chết đi - ND).
      </p>
      <p className="mt-6">
        Nhưng sự kiện gây bất ngờ nhất lại xảy ra ở Nhật Bản, một vài tháng sau
        khi tôi đã trở thành nhà văn viết bằng tiếng Romania, khi một quyển sách
        được dịch qua tiếng Nhật. Quyển có tựa đề là Squaring the circle,, viết
        bởi Gheorghe Sasarman. Người dịch quyển đó là Haruya Sumiya, là một
        thiên sứ cho những tín đồ Nhật Bản yêu văn học Romania. Nếu ông ấy không
        sống trên cõi đời này, chúng ta sẽ không bao giờ được đọc các tiểu
        thuyết của Mircea Eliade, Zaharia Stancu hoặc Liviu Rebreanu bằng tiếng
        Nhật.
      </p>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="text-white text-xl flex justify-between">
      <div className="flex flex-row mt-2">
        <svg
          _ngcontent-serverApp-c37=""
          width="20"
          height="20"
          viewBox="0 0 17 15"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2 mt-[3px]"
          fill="white"
        >
          <path
            _ngcontent-serverApp-c37=""
            d="M8.32031 3.98438L3.00781 12.5H13.6719L8.32031 3.98438ZM8.32031 0.820312L16.6797 14.1797H0L8.32031 0.820312Z"
            class="cls-1"
          ></path>
        </svg>
        91
        <svg
          _ngcontent-serverApp-c37=""
          width="20"
          height="20"
          viewBox="0 0 17 15"
          xmlns="http://www.w3.org/2000/svg"
          className="ml-4 mr-2 mt-[3px]"
          fill="white"
        >
          <path
            _ngcontent-serverApp-c37=""
            d="M8.67969 11.0156L13.9922 2.5L3.32812 2.5L8.67969 11.0156ZM8.67969 14.1797L0.320311 0.820314L17 0.820312L8.67969 14.1797Z"
            class="cls-1"
          ></path>
        </svg>
        6715 lượt xem
      </div>
      <div className="flex justify-center items-center">
        <svg
          _ngcontent-serverApp-c37=""
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 500"
          height="25"
          width="25"
          fill="white"
        >
          <path
            _ngcontent-serverApp-c37=""
            d="M475,251.36c0-124.29-100.71-225-225-225S25,127.07,25,251.36c0,112.3,82.28,205.39,189.84,222.28V316.4H157.69v-65h57.15V201.79c0-56.39,33.57-87.53,85-87.53,24.62,0,50.37,4.39,50.37,4.39V174H321.82c-27.95,0-36.66,17.35-36.66,35.14v42.23h62.4l-10,65H285.16V473.64C392.72,456.75,475,363.66,475,251.36Z"
            class="cls-1"
          ></path>
        </svg>
      </div>
    </div>
  );
};

const BackToTop = () => {
  const [backToTop, setBackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else setBackToTop(false);
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {backToTop && (
        <div
          className="w-12 h-12 bg-green-500 flex justify-center items-center rounded-full fixed bottom-12 right-24 cursor-pointer hover:bg-green-400"
          onClick={scrollUp}
        >
          <svg
            _ngcontent-serverApp-c48=""
            id="Layer_1"
            width="20"
            height="20"
            viewBox="0 0 16 11"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              _ngcontent-serverApp-c48=""
              d="M0.885739 10.863C0.681279 10.863 0.48571 10.7919 0.316808 10.6586C-0.0565534 10.3474 -0.10989 9.77851 0.210134 9.40515L8.07739 0L15.7935 9.20958C16.1047 9.58294 16.0602 10.143 15.6869 10.463C15.3135 10.7741 14.7535 10.7297 14.4334 10.3563L8.07739 2.77354L1.57024 10.543C1.39244 10.7564 1.13465 10.863 0.885739 10.863Z"
            ></path>
          </svg>
        </div>
      )}
    </div>
  );
};

const InfoUser = () => {
  const [info, setInfo] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setInfo(true);
      } else setInfo(false);
    });
  }, []);

  return (
    <div>
      {info && (
        <div className="w-fit h-fit fixed left-40 top-52 flex flex-col justify-center items-center">
          <div>
            <svg
              _ngcontent-serverApp-c37=""
              width="20"
              height="20"
              viewBox="0 0 17 15"
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
            >
              <path
                _ngcontent-serverApp-c37=""
                d="M8.32031 3.98438L3.00781 12.5H13.6719L8.32031 3.98438ZM8.32031 0.820312L16.6797 14.1797H0L8.32031 0.820312Z"
                class="cls-1"
              ></path>
            </svg>
            <div className="my-4">
              <span className="text-white text-lg ">91</span>
            </div>
            <svg
              _ngcontent-serverApp-c37=""
              width="20"
              height="20"
              viewBox="0 0 17 15"
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
            >
              <path
                _ngcontent-serverApp-c37=""
                d="M8.67969 11.0156L13.9922 2.5L3.32812 2.5L8.67969 11.0156ZM8.67969 14.1797L0.320311 0.820314L17 0.820312L8.67969 14.1797Z"
                class="cls-1"
              ></path>
            </svg>
          </div>
          <img
            src="https://images.spiderum.com/sp-xs-avatar/dc5284506efd11edaa12915a4c0043eb.jpeg"
            alt=""
            className="w-12 h-12 rounded-full mt-4"
          />
          <div className="flex flex-col justify-center items-center">
            <svg
              _ngcontent-serverApp-c37=""
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 500"
              height="25"
              width="25"
              fill="white"
              className="mt-4"
            >
              <path
                _ngcontent-serverApp-c37=""
                d="M171.88,52.08a68,68,0,0,0-67.71,67.71v312.5A15.63,15.63,0,0,0,128.93,445L250,357.79,371.07,445a15.62,15.62,0,0,0,24.76-12.68V119.79a68,68,0,0,0-67.7-67.71Zm0,31.25H328.13a36.23,36.23,0,0,1,36.45,36.46v282L259.13,325.87a15.61,15.61,0,0,0-18.26,0L135.42,401.79v-282A36.23,36.23,0,0,1,171.88,83.33Z"
                class="cls-1"
              ></path>
            </svg>

            <svg
              _ngcontent-serverApp-c37=""
              width="18"
              height="19"
              viewBox="0 0 18 19"
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              className="mt-4"
            >
              <path
                _ngcontent-serverApp-c37=""
                d="M15.75 0.25H2.25C0.984375 0.25 0 1.26953 0 2.5V12.625C0 13.8906 0.984375 14.875 2.25 14.875H5.625V17.8281C5.625 18.1094 5.80078 18.25 6.04688 18.25C6.11719 18.25 6.1875 18.25 6.29297 18.1797L10.6875 14.875H15.75C16.9805 14.875 18 13.8906 18 12.625V2.5C18 1.26953 16.9805 0.25 15.75 0.25ZM16.3125 12.625C16.3125 12.9414 16.0312 13.1875 15.75 13.1875H10.125L9.66797 13.5391L7.3125 15.2969V13.1875H2.25C1.93359 13.1875 1.6875 12.9414 1.6875 12.625V2.5C1.6875 2.21875 1.93359 1.9375 2.25 1.9375H15.75C16.0312 1.9375 16.3125 2.21875 16.3125 2.5V12.625Z"
                class="cls-1"
              ></path>
            </svg>
            <span className="text-white text-lg">2</span>
            <svg
              _ngcontent-serverApp-c37=""
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="25"
              height="25"
              fill="white"
              className="mt-4"
            >
              <path
                _ngcontent-serverApp-c37=""
                d="M 36 5 C 32.151772 5 29 8.1517752 29 12 C 29 12.585766 29.198543 13.109464 29.335938 13.654297 L 17.345703 19.652344 C 16.059118 18.073938 14.181503 17 12 17 C 8.1517722 17 5 20.151775 5 24 C 5 27.848225 8.1517722 31 12 31 C 14.181503 31 16.059118 29.926062 17.345703 28.347656 L 29.335938 34.345703 C 29.198543 34.890536 29 35.414234 29 36 C 29 39.848225 32.151772 43 36 43 C 39.848228 43 43 39.848225 43 36 C 43 32.151775 39.848228 29 36 29 C 33.818497 29 31.940882 30.073938 30.654297 31.652344 L 18.664062 25.654297 C 18.801457 25.109464 19 24.585766 19 24 C 19 23.414234 18.801457 22.890536 18.664062 22.345703 L 30.654297 16.347656 C 31.940882 17.926062 33.818497 19 36 19 C 39.848228 19 43 15.848225 43 12 C 43 8.1517752 39.848228 5 36 5 z M 36 8 C 38.226909 8 40 9.7730927 40 12 C 40 14.226907 38.226909 16 36 16 C 33.773091 16 32 14.226907 32 12 C 32 9.7730927 33.773091 8 36 8 z M 12 20 C 14.226909 20 16 21.773093 16 24 C 16 26.226907 14.226909 28 12 28 C 9.7730915 28 8 26.226907 8 24 C 8 21.773093 9.7730915 20 12 20 z M 36 32 C 38.226909 32 40 33.773093 40 36 C 40 38.226907 38.226909 40 36 40 C 33.773091 40 32 38.226907 32 36 C 32 33.773093 33.773091 32 36 32 z"
              ></path>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

const Info = () => {
  return (
    <div className="text-white mt-5 flex justify-between">
      <div className="flex flex-row">
        <img
          src="https://images.spiderum.com/sp-xs-avatar/dc5284506efd11edaa12915a4c0043eb.jpeg"
          alt=""
          className="w-12 h-12 rounded-full"
        />
        <div className="mx-4">
          <h1 className="text-base font-medium">Huskywannafly</h1>
          <spann className="text-gray-400">@Huskywannafly</spann>
        </div>
        <div className="flex justify-center items-center ml-10 hover:text-green-500 cursor-pointer ">
          <span className="px-4 py-2 border-[1px] rounded-lg hover:border-green-500">
            Theo dõi
          </span>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="mx-4">
          <h1 className="text-base font-medium">Quan điểm tranh luận</h1>
          <spann className="text-gray-400">/quan-diem-tranh-luan</spann>
        </div>
        <div className="flex justify-center items-center ml-10 hover:text-green-500 cursor-pointer">
          <span className="px-4 py-2 border-[1px] rounded-lg hover:border-green-500">
            Theo dõi
          </span>
        </div>
      </div>
    </div>
  );
};

const User = ({ name, uri }) => {
  return (
    <div className="flex flex-row">
      <img src={uri} alt="" className="w-12 h-12 rounded-full" />
      <div className="mx-4">
        <h1 className="text-base font-medium">{name}</h1>
        <spann className="text-gray-400">29 tháng 1</spann>
      </div>
    </div>
  );
};

const Comment = () => {
  return (
    <div className="text-white w-3/6 m-auto border-grey-500 border-[0.5px] p-6 rounded-md">
      <div className="flex flex-row justify-between">
        <span className="text-gray-500">
          Chia sẻ cảm nghĩ của bạn về bài viết
        </span>
        <span>Gửi</span>
      </div>
      <div className="h-[1px] bg-gray-500 my-6 "></div>
      <div className="flex justify-end">
        <div>
          <span className="text-green-500 text-base cursor-pointer hover:underline ">
            Mới nhất
          </span>
          <span className="text-base  ml-6 cursor-pointer hover:underline">
            Hót nhất
          </span>
        </div>
      </div>
      <div className="p-4">
        <User
          name={"HelloIamDog"}
          uri="https://www.gravatar.com/avatar/5824e6c221f792ec926a393e9dbb1a2d?d=wavatar&f=y"
        />
        <p>
          Quan điểm của bạn đưa ra rất đúng. Nhưng lối viết của bạn còn hơi, um,
          hơi chưa ổn lắm, nếu bạn viết câu chuyện sinh động hơn một xíu!? Mình
          cũng đồng tình với quan điểm của bạn: Bạn tốt không phải là đúng theo
          chuẩn mực xã hội, mà là khi ta cảm thấy thoải mái và vui vẻ khi ở bên,
          tôn trọng, hiểu, và cảm thông cho câu chuyện ta mới gọi là bạn. Còn
          việc tốt hay xấu là quan điểm của mỗi người. Mình nghĩ chúng ta cần
          học cách nhìn nhận thế giới theo góc nhìn đa chiều, để hiểu cho từng
          hoàn cảnh, chứ không nên áp đặt sự "tốt" và sự "xấu" lên ai đó một
          cách thái quá. Rất cảm ơn bạn vì bài viết!
        </p>

        <div className="flex flex-row mt-6">
          <div className="w-[0.8px] h-20 bg-gray-500 mx-8"></div>
          <div className="">
            <User
              name="Huskywannafly"
              uri="https://images.spiderum.com/sp-xs-avatar/dc5284506efd11edaa12915a4c0043eb.jpeg"
            />
            <p className="mt-4">
              <span className="font-semibold">@HelloIamDog</span> Cảm ơn nhận
              xét của bạn. Mình sẽ cố gắng cải thiện ^^
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    uri: "https://images.spiderum.com/sp-images/026a42708ab611e98ff8d33e798018d0.png",
    timeToRead: "6 phút đọc",
    title: "Anime/manga master racing Boy",
    cataLog: "Phim",
    user: {
      uri: "https://images.spiderum.com/sp-xs-avatar/d54c4a20e70c11e79a70e3f8635a1288.jpg",
      name: "loveless",
    },
  },
  {
    uri: "https://images.spiderum.com/sp-images/f1d1e2507f1b11eaa9dcb3364a58500c.jpg",
    timeToRead: "4 phút đọc",
    title: "[Anime] Ngọn đồi hoa hồng anh",
    user: {
      uri: "https://images.spiderum.com/sp-xs-avatar/43fbae207cd411ea8541ffe0871b33b1.jpg",
      name: "Kaze",
    },
    cataLog: "Cảm nhận",
  },
  {
    uri: "https://images.spiderum.com/sp-images/598a0ae0ee3011e88e239b783652d11c.jpg",
    timeToRead: "8 phút",
    title: "Các Loại Figure Anime Manga Nhật Bản",
    cataLog: "Quan điểm",
    user: {
      uri: "https://images.spiderum.com/sp-xs-avatar/e55236a0e23311e8894e8116c15c1915.jpg",
      name: "Huỳnh Đức Trí",
    },
  },
];

const Other = () => {
  return (
    <div className=" w-3/5 m-auto text-white relative">
      <h1>Các bài viết nổi bật</h1>
      <div className="border-[0.3px] flex justify-between px-6 py-4">
        {data.map((item, index) => {
          return (
            <div key={index}>
              <Card data={item} />
            </div>
          );
        })}
      </div>
      <div className="absolute right-[-20px] top-1/3 py-10 px-3 bg-gray-400 opacity-90 rounded-sm hover:bg-gray-500">
        <svg
          _ngcontent-serverApp-c37=""
          width="15"
          height="24"
          viewBox="0 0 15 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            _ngcontent-serverApp-c37=""
            d="M2.8125 0L14.8125 12L2.8125 24L0 21.1875L9.1875 12L0 2.8125L2.8125 0Z"
            fill="white"
            class="cls-1"
          ></path>
        </svg>
      </div>
    </div>
  );
};

const PostDetail = () => {
  const [showComment, setShowComment] = useState(false);
  return (
    <div>
      <div className="w-3/6 m-auto">
        <InfoUser />
        <Header />
        <Body />
        <div className="h-[1px] bg-gray-500 my-6"></div>
        <Footer />
        <BackToTop />
        <Info />
        <div className="h-10"></div>
      </div>
      <Other />
      <div className="h-10"></div>
      <Comment />
      <div className="h-10"></div>
    </div>
  );
};

export default PostDetail;
