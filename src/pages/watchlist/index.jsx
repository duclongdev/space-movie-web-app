import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRankingStar, faPlay, faFilm, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import React, { useState } from "react";
import OnePiece from '../../assets/image/OnePiece.png';
import Boruto from '../../assets/image/Boruto.png';
import Spy from '../../assets/image/SpyX.png';
import Bleach from '../../assets/image/Bleach.png';
import Naruto from '../../assets/image/Naruto.png';
import Eminence from '../../assets/image/Eminence.png';
import Jujutsu from '../../assets/image/jujutsu_kaisen.png'
import MyList from "./myList";
import RankPage from "./rankPage";
import { Link } from "react-router-dom";
import Trailer from "./trailer";


const Watchlist = () => {
  const data = [{id: 1, image: Boruto, title: 'Boruto the next generation', author: 'Masashi Kishimoto', genre: 'Adventure | Action', currentEps: '2/277', like: true, trailer: 'https://imdb-video.media-imdb.com/vi4211392025/1434659607842-pgv4ql-1594205467139.mp4?Expires=1675482867&Signature=Ug4S-AIbdKCvtyPumK5zckpqnTMsr9ngo16qAP0-hnkJqxmIK83dSBTTbAbZ7LELrlAbcRjhyhSFsikj3YWb4OSmCakTI7C1u2DHu~P9pOPlH~MEP6Me6xSJuMdgt2qbx7oLScBiyFl7unIplKADEbZmiKlS~~GBlG0iVz~J7W0TupcyUNKkam0cWA~ogYW5wm1YisKWPwGo~kuqRkMWBgxrbOX7DjDLOaHCcvc0JNdJpzMlKILMumwlC3BXpghMLlFmr7JjFYpKp8jCnlGQw8t1vs2oN1tZHCCIxHEYKjZJ09eLCbiFiWuk5Jr5krg3us2UFLtXToOoqc2fa7DCtw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA', content: 'The village hides under the leaves - the village of Leaves, which has progressed to modernization in peace. Boruto, son of Naruto Uzumaki, Hokage the Seventh, enrolled in Ninja Academy, a school that nurtured and trained ninjas. How will you meet your friends and challenge them when the mystery breaks out? The story of "Boruto Uzumaki" touching your heart like a wind will begin now!!'},
  {id: 2, image: Naruto, title: 'Naruto Shippuden', author: 'Masashi Kishimoto', genre: 'Adventure | Action', currentEps: '380/500', like: true, trailer: 'https://imdb-video.media-imdb.com/vi514000153/1434659607842-pgv4ql-1563957491785.mp4?Expires=1675484746&Signature=rRgZ1NsPLWpPXgRcmYNX8fB~1vmIwC-n-nG6~2jbyBUEk5WZZiAw555BY~I-n2zAH0eTziMutxZ3MzIX2YA4~G4cENo75sbmQEAaCOr9jQsVbUjnyl62R91mJDVz74Ua~Yr5wYMaEruDJsNq6hSeIA2YRNNhn9hP~4FUXftO8mNaYdVOgdBmzy3SdPHJoJoEORGzrmEeJuh88b4BAPdkXVo90l1HoJCs~XZWivuv0R6jsVo504R5cZCqMsAUZOmzqMnJ-edWnbe1jS7-djt4JtPnjzcLZmny60LF8qnhaBE4j8YAQ6DjF-kpLuCk2tohqK4jPPHniCYk3BmbzhifZg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA', content: 'In Konoha, where the stones on Tsunade\'s face were increasing, the Konoha Legion, which had evolved into a Shinobi, was busy with a D-rank mission under Ebisu\'s charge. Dolphins laugh Face is like the shape of Naruto in the past... Naruto Uzumaki himself has grown a lot after a long journey through the Konoha gate! A fierce battle between the Naruto mobs and the mysterious organization "Akatsuki" of the S-rank offender has begun!'},
  {id: 3, image: OnePiece, title: 'One Piece', author: 'Oda Eiichiro', genre: 'Adventure | Action', currentEps: '2/277', like: false, trailer: 'https://imdb-video.media-imdb.com/vi1913960985/1434659607842-pgv4ql-1564065260545.mp4?Expires=1675484807&Signature=hAkzcH0~YcBXtC~FBZ-GXt~NoZASAqNy~5urtlvGt82Fghy~IuCbw1GakzrOjlffZHrpT10Vzr5BIOP7-XghSCFE-h8zrq0vr5ATjEedOm~RgiBHT1TEtt1mGVkdL5I6rOcpgZfN2uUE9OXIQwjgXMuPgmPrzFETNSDsLcKXqecEcPYpyrBCMvjJSuVVQrpQmRwjcajY09ZkmbmcQkPyAHKV-7rBWjMEI3bbaDHK8WgF-l7AbN4V1QsIdtPYRReuyGq0uPtPhmOlbJXbht0qfZdi8ZnXSXROkzd0~c1aeDu~MfS-LW41rRByCZIoHZnUd3dGMb-hdKoGttba8X96LQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA', content: 'There once lived a pirate named Gol D. Roger who are Pirate King. When he was captured and about to be executed, he revealed that his treasure called One Piece was hidden somewhere at the Grand Line. This made all people set out to search and uncover the One Piece treasure, but no one ever found the location of Gol D. Roger\'s treasure, and the Grand Line was too dangerous a place to overcome. Twenty-two years after Gol D. Roger\'s death, a boy named Monkey D. Luffy decided to become a pirate and search for Gol D. Roger\'s treasure to become the next Pirate King.'},
  {id: 4, image: Spy, title: 'SPY×FAMILY', author: 'Tatsuya Endo', genre: 'Comedy | Action', currentEps: '2/10', like: false, trailer: 'https://imdb-video.media-imdb.com/vi3809657369/1434659607842-pgv4ql-1658928220034.mp4?Expires=1675484906&Signature=ODHY5w5UtJrm2EPq-Ql6uKY9Ft4eMOGAcCm9Vo3XDmIT0k~jEAc16d0WF3695ph35iAEgP5xCqO45Ud5eRlSEds97kd8cUTti0gLTMnXNVIxXdVlvmNkD2N4kw6M0DtP37SUQFWxbyNRgVvjO7I6XY3NLMC0P6xY-0Fj6sVXIzgT8SI2TErKQkvq37sRhSXm1SYQ5qdciLXyMTn~yLFARDlJDMFdd9puF~3x~Ghgv6Z9s6spCkV7ZK4dJEvG638Hl-0uPS5hS1WyPqzwyUeqZKsujdstKLBZUjUu9IoDfRNvPH67YIZobw5166COsW2baSmLtc6Q3VCQVED0dTzSkQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA', content: 'A spy known only as Twilight needs a family as part of his undercover mission, so he quickly marries a city hall worker and adopts a child and dog. Unknown to him, his family has secrets of their own: his wife Yor is an undercover assassin, his daughter Anya is a runaway psychic who can read minds, and his dog was from a laboratory that gave him the power to tell the future. All these four subjects must bond together as a family to manage their own affairs and be together as best as they can.'},
  {id: 5, image: Eminence, title: 'Eminence In Shadow', author: 'Daisuke Aizawa', genre: 'Dark fantasy | Isekai', currentEps: '2/8', like: true, trailer: 'https://imdb-video.media-imdb.com/vi2763703577/1434659607842-pgv4ql-1665681401501.mp4?Expires=1675484945&Signature=crEKCuyTaJdqrwDiYKgLPp5M0MwGKH9pi3A-QxqMDXxnE10yg50l-QATIh3-sk8ap1EjcPrPHg3mJrHCLTo5WVtd4wOndGSQS~kjDNrJY-Y2vkFfo2iJnyu3IK1t2eP903BrTiM4GqRr~PcXgtH-cg5UFHbwkzhfVvA1wDUovqCCl-y5-jzlAvs4f~Hgpaf2Bul3oEWvVrAY-WJBuBFJtnybD6wiXVl8kvOLUuI3uiH~R2mPCFivMYIpxJ9BKtdWWNR8uDYsB~GR8JGNcwvXBniua~LHkxPSwHLsl7HPp14ravMjLOS5a4MyPj~2JrEnRAGJuA6PBgXhY8rlWKyLbg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA', content: 'Ever since he was a child, he wanted to become a shadowbroker, a person who operates in the shadows. He trained up his body, doing practically everything possible in the world, until one day, he encountered magic. However, this was not magic and was in fact, the headlights of a car. And so, he died. Even after reincarnating, the boy, now the son of a noble, Cid Kagenou, wanted to achieve his dreams. After rescuing a girl, Cid creates an elaborate plot about how he was the leader of an ancient organization, sworn to fight the Cult of Diabolos, so as to prevent said cult from resurrecting Diabolos.'},
  {id: 6, image: Bleach, title: 'Bleach: Thousand-year Blood War', author: 'Tite Kubo', genre: 'Adventure | Action', currentEps: '5/7', like: false, trailer: 'https://imdb-video.media-imdb.com/vi1135068441/1434659607842-pgv4ql-1666357386723.mp4?Expires=1675484984&Signature=CG18CjrQm5BPYMpQBlri7sPDUNwm8VyYG-sR6VjxAfrI9phx07ntYEtDgjj9wN6VN~QSUACw7pQJn8LouT3bFsETen1O58INw5mSf8vKHrOgx6gOd1p4mKT4yFVfT1lCytmwkw7ak6EB2p2931jVfssGUj4aMO~5eIxHjhU8dqeJGI4yEvF4i~o1pzn9rZsfroFu5I2VVLliIkDoAEM1L9jVBqrqztNfxiYR89JysanrjXTYUTWD2UBpnCxfLqAhTR7O9QUL85xl2exC~60q4M35cjNs8tx3uoKbFWEi6BR47wSVMz-pPzMjv19F7m9-V7k-NZyafSbP3MsLGXTWbQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA', content: 'The peace is suddenly broken when warning sirens blare through the Soul Society. Residents, there are disappearing without a trace and nobody knows who\'s behind it. Meanwhile, a dark shadow is also extending itself toward Ichigo and his friends in Karakura Town.'},
  {id: 7, image: Jujutsu, title: 'Jujutsu Kaisen', author: 'Gege Akutami', genre: 'Adventure | Action', currentEps: '5/24', like: true, trailer: 'https://imdb-video.media-imdb.com/vi1065664793/1434659607842-pgv4ql-1601991243279.mp4?Expires=1675485029&Signature=hXLSFZQX0t-atMuDq6HsEpcFQvM1QccFq9JO4HHBqRMWwqiDyQDSkHsqkmgxOJesyZxKy5CnPGv~vXS26V3nZj-pbyBCkERUHuYoj3S0pvdHHEIP-623tmf1tN7EPt1rWRh2V0RDkcDXNS3pfmTPYENb-KEZ-vfs3tAO8wHxoo76QWDOIk6nv2W9jpx~XnL-siuzvhD3dFqjklQo667DmLV5OlCLVBJ1afTjh~frbhBvlCwBSUUf2udzadH6E~0i0gAsECiwHf6dILPHEq1FfipgZuSftJRiZ94ywKget1Ckv9n7IKmbo7eRdbMIlyd~M8VtZfkB7yMGW3aP2SPvTw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA', content: 'A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself. He enters a shaman\'s school to be able to locate the demon\'s other body parts and thus exorcise himself.'},
]

  const [currentFilm, setCurrentFilm] = useState(data[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [status, setStatus] = useState(1);
  const [currentLikeList, setCurrentLikeList] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [isHover1, setIsHover1] = useState(false);
  const [isHover2, setIsHover2] = useState(false);

  return (
    <div className="container pt-16 mx-auto pl-[3.5rem]">
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-8 flex flex-col relative" style={{height: 'calc(100vh - 4rem)'}}>
          <div className="flex items-end justify-between">
            <h2 className="text-white font-bold text-5xl">Watchlist</h2>
            <p className="text-white/70">All your movies in one place</p>
          </div>
          <hr className="opacity-30 mt-4" />

          {/* Button */}
          <div className="flex my-6">
            <button className="flex px-4 py-2 rounded font-bold items-center justify-center" 
              onClick={() => {setCurrentPage(1); setStatus(1)}}
              onMouseEnter={() => setIsHover1(true)}
              onMouseLeave={() => setIsHover1(false)}
              style={{
                backgroundColor: status === 1 ? '#FFFF00' : '#01FF45' && isHover1 ? '#4DFF7C' : '#01FF45'
              }}
              >
              <p>Mylist</p>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" className="ml-2"><path d="M13 13v8h6q.825 0 1.413-.587Q21 19.825 21 19v-6Zm0-2h8V5q0-.825-.587-1.413Q19.825 3 19 3h-6Zm-2 0V3H5q-.825 0-1.413.587Q3 4.175 3 5v6Zm0 2H3v6q0 .825.587 1.413Q4.175 21 5 21h6Z"/></svg>
            </button>

            <button className="flex px-4 py-2 rounded font-bold items-center justify-center ml-4" 
              onClick={() => {setCurrentPage(2); setStatus(2)}}
              onMouseEnter={() => setIsHover2(true)}
              onMouseLeave={() => setIsHover2(false)}
              style={{
                backgroundColor: status === 2 ? '#FFFF00' : '#01FF45' && isHover2 ? '#4DFF7C' : '#01FF45'
              }}
              >
              <p>Rank</p> 
              <FontAwesomeIcon icon={faRankingStar} className="fa-xl ml-2"/>
            </button>
          </div>

          {currentPage === 1 ? <MyList callback={setCurrentFilm} data={data}/> : <RankPage callback={setCurrentFilm}/>}
          {openModal && <Trailer closeModal={setOpenModal} link={currentFilm.trailer}/>}
        </div>

        <div className="col-span-4 text-white text-base">
          <div className="ml-4 bg-[#171821] h-full relative">
            <img className="max-h-[256px] w-full rounded-b-lg" src={currentFilm.image} alt="" />
            <div>
              <div className="pt-4 px-5">
                <h4 className="font-bold text-2xl line-clamp-1">{currentFilm.title}</h4>
                <div className="flex space justify-between text-base mt-2">
                  <p className=" text-[#F9E492]">{currentFilm.author}</p>
                  <p className="opacity-70">{currentFilm.genre}</p>
                </div>
                <hr className="my-4 opacity-30"/>
                <div className="overflow-y-scroll" style={{height: '170px'}}>
                  <p className="opacity-70 text-justify text-base mr-2">{currentFilm.content}</p>
                </div>
              </div>

              <div className="font-semibold absolute bottom-0 w-full">
                <div className="px-5 mb-5">
                  <div className="flex gap-x-2">
                    <p>Current episode: </p>
                    <p className="text-[#F9E492]">{currentFilm.currentEps}</p>
                  </div>

                  <p>Full 500 episodes</p>
                </div>

                {/* Like button */}
                <div className="bg-[#2D2E37] flex font-medium text-black items-center py-3 px-9 justify-between text-base">
                  <button className="text-white hover:text-[#FF9D00]" onClick={() => {
                    if(currentLikeList.includes(currentFilm.id)) {
                      setCurrentLikeList((prev) => {
                        var id = prev.indexOf(currentFilm.id);
                        prev.splice(id, 1);
                        return [...prev];
                      })
                    }
                    else {
                      setCurrentLikeList((prev) => {
                        prev.push(currentFilm.id);
                        return [...prev];
                      })
                    }

                  }}>
                    {currentLikeList.includes(currentFilm.id) ? 
                      <div>
                        <FontAwesomeIcon icon={faHeart} className="text-xl text-[#FF9D00]"/> 
                        <p className="text-[#FF9D00]">Like</p>
                      </div>
                      : 
                      <div>
                        <FontAwesomeIcon icon={regularHeart} className="text-xl"/> 
                        <p>Like</p>
                      </div>
                    }
                  </button>
                  <Link className="rounded-lg py-2 px-8 bg-[#01FF45] flex justify-center items-center font-bold space-x-3 hover:bg-[#4DFF7C]"
                    to='/play'
                  >
                    <FontAwesomeIcon icon={faPlay} className="text-lg"/>
                    <p>Play</p>
                  </Link>

                  <button className="text-white hover:text-[#FF9D00]" onClick={() => setOpenModal(!openModal)}>
                    <FontAwesomeIcon icon={faFilm} className="text-xl" color={openModal ? '#FF9D00' : null}/>
                    <p className={openModal ? 'text-[#FF9D00] ': null}>Trailer</p>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div> 
    </div>
  );
};
export default Watchlist;
