import React from 'react'

const myArray = [
  {
    name: "One Piece",
    title: "Updated to 1037",
    img: "/assets/30.jpg"
  },
  {
    name: "The Legend of Shy Lord",
    title: "Updated to 131",
    img: "/assets/31.jpg"
  },
  {
    name: "Dragon Ball Super",
    title: "131 Episodes",
    img: "/assets/32.jpg"
  },
  {
    name: "The Land of Miracles",
    title: "Updated to 15",
    img: "/assets/33.jpg"
  },
  {
    name: "The Love Story of My Immotal Dad",
    title: "Updated to 121",
    img: "/assets/34.jpg"
  },
  {
    name: "Demon Slayer:Kimetsu no Yaiba Tanjiro Kamado,...",
    title: "26 Episodes",
    img: "/assets/35.jpg"
  },
  {
    name: "One Piece",
    title: "Updated to 1037",
    img: "/assets/36.jpg"
  },
  {
    name: "The Legend of Shy Lord",
    title: "Updated to 1037",
    img: "/assets/37.jpg"
  },
  {
    name: "Dragon Ball Super",
    title: "Updated to 1037",
    img: "/assets/38.jpg"
  },
  {
    name: "The Land of Miracles",
    title: "Updated to 1037",
    img: "/assets/39.jpg"
  },
  {
    name: "The Love Story of My Immotal Dad",
    title: "Updated to 1037",
    img: "/assets/40.jpg"
  },
  {
    name: "Demon Slayer:Kimetsu no Yaiba Tanjiro Kamado,...",
    title: "Updated to 1037",
    img: "/assets/41.jpg"
  },
  {
    name: "One Piece",
    title: "Updated to 1037",
    img: "/assets/42.jpg"
  },
  {
    name: "The Legend of Shy Lord",
    title: "Updated to 1037",
    img: "/assets/43.jpg"
  },
  {
    name: "Dragon Ball Super",
    title: "Updated to 1037",
    img: "/assets/44.jpg"
  },
  {
    name: "The Land of Miracles",
    title: "Updated to 1037",
    img: "/assets/45.jpg"
  },
  {
    name: "The Love Story of My Immotal Dad",
    title: "Updated to 1037",
    img: "/assets/46.jpg"
  },
  {
    name: "Demon Slayer:Kimetsu no Yaiba Tanjiro Kamado,...",
    title: "Updated to 1037",
    img: "/assets/35.jpg"
  },

]
const Recommended = () => {
  return (
    <div>
      <div className="grid grid-cols-6 gap-4">
        {
          myArray.map((value, index) => (
            <div key={index} className="hover:scale-110 transition-all ease-in duration-300 hover:text-[#00dc5a] relative item-hover">
              <button className="flex justify-center items-center">
                <img
                  src={value.img}
                  alt={value.name}
                  className="relative"
                />
                <div className="absolute bottom-[23%] w-full h-[40%] bg-gradient-to-t from-black rounded-b-md"></div>
              </button>
              <button>
                <svg className="hidden absolute right-[45%] bottom-[60%] w-[35px] h-[35px] rounded-[50%] bg-[#00dc5a]" width="60px" height="60px" viewBox="0 0 60 60" version="1.1" ><g id="Btn/Play/Normal" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><circle id="bg" fill="#1CC749" cx="30" cy="30" r="30"></circle><path d="M35.7461509,22.4942263 L45.1405996,36.5858994 C46.059657,37.9644855 45.6871354,39.8270935 44.3085493,40.7461509 C43.8157468,41.0746859 43.2367237,41.25 42.6444487,41.25 L23.8555513,41.25 C22.198697,41.25 20.8555513,39.9068542 20.8555513,38.25 C20.8555513,37.657725 21.0308654,37.078702 21.3594004,36.5858994 L30.7538491,22.4942263 C31.6729065,21.1156403 33.5355145,20.7431187 34.9141006,21.662176 C35.2436575,21.8818806 35.5264463,22.1646695 35.7461509,22.4942263 Z" id="Triangle" fill="#FFFFFF" transform="translate(33.250000, 30.000000) rotate(-270.000000) translate(-33.250000, -30.000000) "></path></g></svg>
              </button>
              <p>{value.name}</p>
              <p className="absolute text-white bottom-[28%] left-[5%] font-normal text-sm ">{value.title}</p>
              <button>
                <svg className="hidden absolute right-[5%] bottom-[28%] w-[35px] h-[35px] rounded-[50%] bg-white " width="60px" height="60px" viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Btn/Add/Normal" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><circle id="bg" fillOpacity="0.8" fill="#FFFFFF" cx="30" cy="30" r="30"></circle><path d="M29.3055556,17.25 C29.6890866,17.25 30,17.5609134 30,17.9444444 L30,19.3888889 C30,19.77242 29.6890866,20.0833333 29.3055556,20.0833333 L22.9166667,20.0833333 L22.9166667,39.724 L28.6396082,34.9562398 C29.3713667,34.346441 30.4106369,34.302884 31.1863257,34.8255686 L31.3603918,34.9562398 L37.0833333,39.7254167 L37.0833333,33.5277778 C37.0833333,33.1442467 37.3942467,32.8333333 37.7777778,32.8333333 L39.2222222,32.8333333 C39.6057533,32.8333333 39.9166667,33.1442467 39.9166667,33.5277778 L39.9166667,41.2376789 C39.9166667,42.4112764 38.9652794,43.3627321 37.7916667,43.3627321 C37.3655561,43.3627321 36.9510168,43.2346313 36.6007867,42.9976358 L36.4312748,42.8701491 L30,37.50975 L23.5687252,42.8701491 C22.7234861,43.574515 21.4929682,43.5114751 20.7233835,42.7579578 L20.5758631,42.5980707 C20.3030814,42.2707327 20.1360669,41.8703014 20.0939154,41.4495208 L20.0833333,41.2376789 L20.0833333,20.0833333 C20.0833333,18.5896541 21.2391602,17.3659327 22.7052117,17.2577715 L22.9166667,17.25 L29.3055556,17.25 Z M39.2222222,17.25 C39.6057533,17.25 39.9166667,17.5609134 39.9166667,17.9444444 L39.9163333,21.499 L43.4722222,21.5 C43.8557533,21.5 44.1666667,21.8109134 44.1666667,22.1944444 L44.1666667,23.6388889 C44.1666667,24.02242 43.8557533,24.3333333 43.4722222,24.3333333 L39.9163333,24.333 L39.9166667,27.8888889 C39.9166667,28.27242 39.6057533,28.5833333 39.2222222,28.5833333 L37.7777778,28.5833333 C37.3942467,28.5833333 37.0833333,28.27242 37.0833333,27.8888889 L37.0823333,24.333 L33.5277778,24.3333333 C33.1442467,24.3333333 32.8333333,24.02242 32.8333333,23.6388889 L32.8333333,22.1944444 C32.8333333,21.8109134 33.1442467,21.5 33.5277778,21.5 L37.0823333,21.499 L37.0833333,17.9444444 C37.0833333,17.5609134 37.3942467,17.25 37.7777778,17.25 L39.2222222,17.25 Z" fill="#111319" fillRule="nonzero"></path></g></svg>
              </button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Recommended