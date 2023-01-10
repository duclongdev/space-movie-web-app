import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRankingStar, faPlay, faFilm, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import React, { useEffect, useState } from "react";
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


const Watchlist = () => {
  const data = [{id: 1, image: Boruto, title: 'Boruto the next generation', author: 'Masashi Kishimoto', genre: 'Adventure | Action', currentEps: '2/277', like: true, content: 'The village hides under the leaves - the village of Leaves, which has progressed to modernization in peace. Boruto, son of Naruto Uzumaki, Hokage the Seventh, enrolled in Ninja Academy, a school that nurtured and trained ninjas. How will you meet your friends and challenge them when the mystery breaks out? The story of "Boruto Uzumaki" touching your heart like a wind will begin now!!'},
  {id: 2, image: Naruto, title: 'Naruto Shippuden', author: 'Masashi Kishimoto', genre: 'Adventure | Action', currentEps: '380/500', like: true, content: 'In Konoha, where the stones on Tsunade\'s face were increasing, the Konoha Legion, which had evolved into a Shinobi, was busy with a D-rank mission under Ebisu\'s charge. Dolphins laugh Face is like the shape of Naruto in the past... Naruto Uzumaki himself has grown a lot after a long journey through the Konoha gate! A fierce battle between the Naruto mobs and the mysterious organization "Akatsuki" of the S-rank offender has begun!'},
  {id: 3, image: OnePiece, title: 'One Piece', author: 'Oda Eiichiro', genre: 'Adventure | Action', currentEps: '2/277', like: false, content: 'There once lived a pirate named Gol D. Roger who are Pirate King. When he was captured and about to be executed, he revealed that his treasure called One Piece was hidden somewhere at the Grand Line. This made all people set out to search and uncover the One Piece treasure, but no one ever found the location of Gol D. Roger\'s treasure, and the Grand Line was too dangerous a place to overcome. Twenty-two years after Gol D. Roger\'s death, a boy named Monkey D. Luffy decided to become a pirate and search for Gol D. Roger\'s treasure to become the next Pirate King.'},
  {id: 4, image: Spy, title: 'SPY×FAMILY', author: 'Tatsuya Endo', genre: 'Comedy | Action', currentEps: '2/10', like: false, content: 'A spy known only as Twilight needs a family as part of his undercover mission, so he quickly marries a city hall worker and adopts a child and dog. Unknown to him, his family has secrets of their own: his wife Yor is an undercover assassin, his daughter Anya is a runaway psychic who can read minds, and his dog was from a laboratory that gave him the power to tell the future. All these four subjects must bond together as a family to manage their own affairs and be together as best as they can.'},
  {id: 5, image: Eminence, title: 'Eminence In Shadow', author: 'Daisuke Aizawa', genre: 'Dark fantasy | Isekai', currentEps: '2/8', like: true, content: 'Ever since he was a child, he wanted to become a shadowbroker, a person who operates in the shadows. He trained up his body, doing practically everything possible in the world, until one day, he encountered magic. However, this was not magic and was in fact, the headlights of a car. And so, he died. Even after reincarnating, the boy, now the son of a noble, Cid Kagenou, wanted to achieve his dreams. After rescuing a girl, Cid creates an elaborate plot about how he was the leader of an ancient organization, sworn to fight the Cult of Diabolos, so as to prevent said cult from resurrecting Diabolos.'},
  {id: 6, image: Bleach, title: 'Bleach: Thousand-year Blood War', author: 'Tite Kubo', genre: 'Adventure | Action', currentEps: '5/7', like: false, content: 'The peace is suddenly broken when warning sirens blare through the Soul Society. Residents, there are disappearing without a trace and nobody knows who\'s behind it. Meanwhile, a dark shadow is also extending itself toward Ichigo and his friends in Karakura Town.'},
  {id: 7, image: Jujutsu, title: 'Jujutsu Kaisen', author: 'Gege Akutami', genre: 'Adventure | Action', currentEps: '5/24', like: true, content: 'A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself. He enters a shaman\'s school to be able to locate the demon\'s other body parts and thus exorcise himself.'},
]

  const [currentFilm, setCurrentFilm] = useState(data[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [status, setStatus] = useState(1);
  const [currentLikeList, setCurrentLikeList] = useState([]);

  return (
    <div className="container pt-16 mx-auto pl-[3.5rem]">
      <div className="grid grid-cols-12 gap-2">

        <div className="col-span-8 flex flex-col" style={{height: 'calc(100vh - 4rem)'}}>
          <div className="flex items-end justify-between">
            <h2 className="text-white font-semibold text-5xl">Watchlist</h2>
            <p className="text-white/70">All your movies in one place</p>
          </div>
          <hr className="opacity-30 mt-4" />

          {/* Button */}
          <div className="flex my-6">
            <button className="flex px-4 py-1 rounded font-medium" 
              onClick={() => {setCurrentPage(1); setStatus(1)}}
              style={{backgroundColor: status === 1 ? '#EBE910' : '#04DB41'}}
              >
              Mylist
              <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" className="ml-2"><path d="M13 13v8h6q.825 0 1.413-.587Q21 19.825 21 19v-6Zm0-2h8V5q0-.825-.587-1.413Q19.825 3 19 3h-6Zm-2 0V3H5q-.825 0-1.413.587Q3 4.175 3 5v6Zm0 2H3v6q0 .825.587 1.413Q4.175 21 5 21h6Z"/></svg>
            </button>

            <button className="flex px-4 py-1 rounded font-medium ml-4" 
              onClick={() => {setCurrentPage(2); setStatus(2)}}
              style={{backgroundColor: status === 2 ? '#EBE910' : '#04DB41'}}
              >
              Rank
              <FontAwesomeIcon icon={faRankingStar} className="fa-xl ml-2"/>
            </button>
          </div>

          {currentPage === 1 ? <MyList callback={setCurrentFilm} data={data}/> : <RankPage callback={setCurrentFilm}/>}
          
        </div>

        <div className="col-span-4 text-white text-base">
          <div className="ml-4 bg-[#171821] h-full relative">
            <img className="max-h-[256px] w-full rounded-b-lg" src={currentFilm.image} alt="" />
            <div>
              <div className="pt-4 px-5">
                <h4 className="font-bold text-2xl line-clamp-1">{currentFilm.title}</h4>
                <div className="flex space justify-between text-base mt-2">
                  <p className=" text-[#C7BA89]">{currentFilm.author}</p>
                  <p className="opacity-70">{currentFilm.genre}</p>
                </div>
                <hr className="my-4 opacity-30"/>
                <p className="opacity-70 text-justify text-sm">{currentFilm.content}</p>
              </div>

              <div className="font-semibold absolute bottom-0 w-full">
                <div className="px-5 mb-2">
                  <div className="flex gap-x-2">
                    <p>Current episode: </p>
                    <p className="text-[#C7BA89]">{currentFilm.currentEps}</p>
                  </div>

                  <p>Full 500 episodes</p>
                </div>

                {/* Like button */}
                <div className="bg-[#272831] flex font-medium text-black items-center py-3 px-9 justify-between text-base">
                  <button className="text-white hover:text-[#FF9513]" onClick={() => {
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
                        <FontAwesomeIcon icon={faHeart} className="text-xl text-[#FF9513]"/> 
                        <p className="text-[#FF9513]">Like</p>
                      </div>
                      : 
                      <div>
                        <FontAwesomeIcon icon={regularHeart} className="text-xl"/> 
                        <p>Like</p>
                      </div>
                    }
                  </button>
                  <Link className="rounded-lg py-2 px-8 bg-[#04DB41] flex justify-center items-center space-x-3 hover:bg-[#86EFAC]"
                    to='/play'
                  >
                    <FontAwesomeIcon icon={faPlay} className="text-lg"/>
                    <p>Play</p>
                  </Link>

                  <button className="text-white hover:text-[#FF9513]">
                    <FontAwesomeIcon icon={faFilm} className="text-xl"/>
                    <p className="">Trailer</p>
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
