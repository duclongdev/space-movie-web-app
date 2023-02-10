import React from "react";
import OnePiece from "../../assets/image/OnePiece.png";
import Boruto from "../../assets/image/Boruto.png";
import Spy from "../../assets/image/SpyX.png";
import Bleach from "../../assets/image/Bleach.png";
import Eminence from "../../assets/image/Eminence.png";
import Jujutsu from "../../assets/image/jujutsu_kaisen.png";
import hot from "../../assets/image/flame.png";
import latest from "../../assets/image/new.png";
import star from "../../assets/image/star.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
import "./scrollbar.css";

import "swiper/css/scrollbar";

export default function RankPage({ callback }) {
  const data = [
    {
      id: 1,
      image: Boruto,
      title: "Boruto the next generation",
      author: "Masashi Kishimoto",
      genre: "Adventure | Action",
      currentEps: "2/277",
      status: 'Up to 277 episodes',
      like: true,
      trailer:
        "https://imdb-video.media-imdb.com/vi4211392025/1434659607842-pgv4ql-1594205467139.mp4?Expires=1675482867&Signature=Ug4S-AIbdKCvtyPumK5zckpqnTMsr9ngo16qAP0-hnkJqxmIK83dSBTTbAbZ7LELrlAbcRjhyhSFsikj3YWb4OSmCakTI7C1u2DHu~P9pOPlH~MEP6Me6xSJuMdgt2qbx7oLScBiyFl7unIplKADEbZmiKlS~~GBlG0iVz~J7W0TupcyUNKkam0cWA~ogYW5wm1YisKWPwGo~kuqRkMWBgxrbOX7DjDLOaHCcvc0JNdJpzMlKILMumwlC3BXpghMLlFmr7JjFYpKp8jCnlGQw8t1vs2oN1tZHCCIxHEYKjZJ09eLCbiFiWuk5Jr5krg3us2UFLtXToOoqc2fa7DCtw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
      content:
        'The village hides under the leaves - the village of Leaves, which has progressed to modernization in peace. Boruto, son of Naruto Uzumaki, Hokage the Seventh, enrolled in Ninja Academy, a school that nurtured and trained ninjas. How will you meet your friends and challenge them when the mystery breaks out? The story of "Boruto Uzumaki" touching your heart like a wind will begin now!!',
    },
    {
      id: 3,
      image: OnePiece,
      title: "One Piece",
      author: "Oda Eiichiro",
      genre: "Adventure | Action",
      currentEps: "2/277",
      status: 'Up to 24 episodes',
      like: false,
      trailer:
        "https://imdb-video.media-imdb.com/vi1913960985/1434659607842-pgv4ql-1564065260545.mp4?Expires=1675484807&Signature=hAkzcH0~YcBXtC~FBZ-GXt~NoZASAqNy~5urtlvGt82Fghy~IuCbw1GakzrOjlffZHrpT10Vzr5BIOP7-XghSCFE-h8zrq0vr5ATjEedOm~RgiBHT1TEtt1mGVkdL5I6rOcpgZfN2uUE9OXIQwjgXMuPgmPrzFETNSDsLcKXqecEcPYpyrBCMvjJSuVVQrpQmRwjcajY09ZkmbmcQkPyAHKV-7rBWjMEI3bbaDHK8WgF-l7AbN4V1QsIdtPYRReuyGq0uPtPhmOlbJXbht0qfZdi8ZnXSXROkzd0~c1aeDu~MfS-LW41rRByCZIoHZnUd3dGMb-hdKoGttba8X96LQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
      content:
        "There once lived a pirate named Gol D. Roger who are Pirate King. When he was captured and about to be executed, he revealed that his treasure called One Piece was hidden somewhere at the Grand Line. This made all people set out to search and uncover the One Piece treasure, but no one ever found the location of Gol D. Roger's treasure, and the Grand Line was too dangerous a place to overcome. Twenty-two years after Gol D. Roger's death, a boy named Monkey D. Luffy decided to become a pirate and search for Gol D. Roger's treasure to become the next Pirate King.",
    },
    {
      id: 5,
      image: Eminence,
      title: "Eminence In Shadow",
      author: "Daisuke Aizawa",
      genre: "Dark fantasy | Isekai",
      currentEps: "2/8",
      status: 'Up to 8 episodes',
      like: true,
      trailer:
        "https://imdb-video.media-imdb.com/vi2763703577/1434659607842-pgv4ql-1665681401501.mp4?Expires=1675484945&Signature=crEKCuyTaJdqrwDiYKgLPp5M0MwGKH9pi3A-QxqMDXxnE10yg50l-QATIh3-sk8ap1EjcPrPHg3mJrHCLTo5WVtd4wOndGSQS~kjDNrJY-Y2vkFfo2iJnyu3IK1t2eP903BrTiM4GqRr~PcXgtH-cg5UFHbwkzhfVvA1wDUovqCCl-y5-jzlAvs4f~Hgpaf2Bul3oEWvVrAY-WJBuBFJtnybD6wiXVl8kvOLUuI3uiH~R2mPCFivMYIpxJ9BKtdWWNR8uDYsB~GR8JGNcwvXBniua~LHkxPSwHLsl7HPp14ravMjLOS5a4MyPj~2JrEnRAGJuA6PBgXhY8rlWKyLbg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
      content:
        "Ever since he was a child, he wanted to become a shadowbroker, a person who operates in the shadows. He trained up his body, doing practically everything possible in the world, until one day, he encountered magic. However, this was not magic and was in fact, the headlights of a car. And so, he died. Even after reincarnating, the boy, now the son of a noble, Cid Kagenou, wanted to achieve his dreams. After rescuing a girl, Cid creates an elaborate plot about how he was the leader of an ancient organization, sworn to fight the Cult of Diabolos, so as to prevent said cult from resurrecting Diabolos.",
    },
    {
      id: 6,
      image: Bleach,
      title: "Bleach: Thousand-year Blood War",
      author: "Tite Kubo",
      genre: "Adventure | Action",
      currentEps: "5/7",
      status: 'Up to 7 episodes',
      like: false,
      trailer:
        "https://imdb-video.media-imdb.com/vi1135068441/1434659607842-pgv4ql-1666357386723.mp4?Expires=1675484984&Signature=CG18CjrQm5BPYMpQBlri7sPDUNwm8VyYG-sR6VjxAfrI9phx07ntYEtDgjj9wN6VN~QSUACw7pQJn8LouT3bFsETen1O58INw5mSf8vKHrOgx6gOd1p4mKT4yFVfT1lCytmwkw7ak6EB2p2931jVfssGUj4aMO~5eIxHjhU8dqeJGI4yEvF4i~o1pzn9rZsfroFu5I2VVLliIkDoAEM1L9jVBqrqztNfxiYR89JysanrjXTYUTWD2UBpnCxfLqAhTR7O9QUL85xl2exC~60q4M35cjNs8tx3uoKbFWEi6BR47wSVMz-pPzMjv19F7m9-V7k-NZyafSbP3MsLGXTWbQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
      content:
        "The peace is suddenly broken when warning sirens blare through the Soul Society. Residents, there are disappearing without a trace and nobody knows who's behind it. Meanwhile, a dark shadow is also extending itself toward Ichigo and his friends in Karakura Town.",
    },
    {
      id: 7,
      image: Jujutsu,
      title: "Jujutsu Kaisen",
      author: "Gege Akutami",
      genre: "Adventure | Action",
      currentEps: "5/24",
      status: 'Up to 24 episodes',
      like: true,
      trailer:
        "https://imdb-video.media-imdb.com/vi1065664793/1434659607842-pgv4ql-1601991243279.mp4?Expires=1675485029&Signature=hXLSFZQX0t-atMuDq6HsEpcFQvM1QccFq9JO4HHBqRMWwqiDyQDSkHsqkmgxOJesyZxKy5CnPGv~vXS26V3nZj-pbyBCkERUHuYoj3S0pvdHHEIP-623tmf1tN7EPt1rWRh2V0RDkcDXNS3pfmTPYENb-KEZ-vfs3tAO8wHxoo76QWDOIk6nv2W9jpx~XnL-siuzvhD3dFqjklQo667DmLV5OlCLVBJ1afTjh~frbhBvlCwBSUUf2udzadH6E~0i0gAsECiwHf6dILPHEq1FfipgZuSftJRiZ94ywKget1Ckv9n7IKmbo7eRdbMIlyd~M8VtZfkB7yMGW3aP2SPvTw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
      content:
        "A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself. He enters a shaman's school to be able to locate the demon's other body parts and thus exorcise himself.",
    },
  ];

  const latestFilm = [
    {
      id: 1,
      verImage:
        "https://cdn.myanimelist.net/images/about_me/ranking_items/8245034-57e14855-7109-4684-8b7c-98ea268dd0f1.jpg?t=1672431522",
      image:
        "https://cdn-cf.ginx.tv/respawn-cdn/kVI_Yz_rt_11_dpvEX5s8zgDHcwMRM2Z_voHVd0r_Bo/fill/1280/0/no/1/aHR0cHM6Ly93d3cuZ2lueC50di91cGxvYWRzMi9OZXRmbGl4L2N5YmVycHVua19lZGdlcnVubmVycy9uZXRmbGl4X2N5YmVycHVua19lZGdlcnVubmVyc19yZXZpZXcuanBn.webp",
      title: "Cyberpunk: Edgerunners",
      author: "Rafał Jaki",
      genre: "Cyberpunk | TV Series",
      currentEps: "0/1",
      status: 'Up to 1 episodes',
      like: true,
      content:
        "A Street Kid trying to survive in a technology and body modification-obsessed city of the future. Having everything to lose, he chooses to stay alive by becoming an Edgerunner, a Mercenary outlaw also known as a Cyberpunk.",
    },
    {
      id: 2,
      verImage:
        "https://cdn.shopify.com/s/files/1/0549/5835/8762/products/Bleach__Thousand-Year_Blood_War_Anime_Manga.jpg?v=1662476632",
      image:
        Bleach,
      title: "Bleach: Thousand-year Blood War",
      author: "Tite Kubo",
      genre: "Adventure | Action",
      currentEps: "5/7",
      status: 'Up to 7 episodes',
      like: false,
      content:
        "The peace is suddenly broken when warning sirens blare through the Soul Society. Residents, there are disappearing without a trace and nobody knows who's behind it. Meanwhile, a dark shadow is also extending itself toward Ichigo and his friends in Karakura Town.",
    },
    {
      id: 3,
      verImage:
        "https://resizing.flixster.com/b_iMzsB6inR_e8s0Wl1_JI1OSi4=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vMDBmODc2YTEtY2Y5Ny00NWJkLTliMTEtMTY3NjE5MWIyM2ZlLnBuZw==",
      image:
        "https://img3.hulu.com/user/v3/artwork/7b71b5a4-560b-4d8b-98c4-c5dee6004c21?base_image_bucket_name=image_manager&base_image=204c7e0e-a0bd-45fc-a7ff-5b6a60c90d62&region=US&format=jpeg&size=952x536",
      title: "Chainsaw Man",
      author: "Tatsuki Fujimoto",
      genre: "Adventure | Action",
      currentEps: "3/12",
      status: 'Up to 12 episodes',
      like: false,
      content:
        "When his father died, Denji was stuck with a huge debt and no way to pay it back. Thanks to a Devil dog he saved named Pochita, he's able to survive through odd jobs and killing Devils for the Yakuza. Pochita's chainsaw powers come in handy against these powerful demons. When the Yakuza betrays him and he's killed by the Zombie Devil, Pochita sacrifices himself to save his former master. Now Denji has been reborn as some kind of weird Devil-Human hybrid. He is now a Chainsaw Man!",
    },
    {
      id: 4,
      verImage:
        "https://cdn.shopify.com/s/files/1/0274/1056/3133/products/FIGFP3463_1_800x.jpg?v=1621256470",
      image: "https://m.media-amazon.com/images/I/81eng4YeGdL.jpg",
      title: "Attack on Titan SS4",
      author: "Hajime Isayama",
      genre: "Fantasy | Adventure",
      currentEps: "1/28",
      status: 'Up to 28 episodes',
      like: false,
      content:
        "Humans are nearly exterminated by giant creatures called Titans. Titans are typically several stories tall, seem to have no intelligence, devour human beings and, worst of all, seem to do it for the pleasure rather than as a food source. A small percentage of humanity survived by walling themselves in a land protected by extremely high walls, even taller than the biggest of titans. Flash forward to the present, and mankind has not seen a titan in over 100 years. One day, 10 year old Eren and his foster sister Mikasa witness something horrific as the city walls are destroyed by a colossal titan that appears out of thin air. As the smaller titans flood the city, the two kids watch in horror as their mother is eaten alive. Eren vows that he will murder every single titan and take revenge for all of mankind.",
    },
    {
      id: 5,
      verImage:
        "https://pic.bstarstatic.com/ogv/a80bf07e470fa17921c5fa717b7ffe4add28ba69.png@600w_800h_1e_1c_1f.webp",
      image:
        Spy,
      title: "SPY×FAMILY",
      author: "Tatsuya Endo",
      genre: "Comedy | Action",
      currentEps: "2/10",
      status: 'Up to 10 episodes',
      like: false,
      content:
        "A spy known only as Twilight needs a family as part of his undercover mission, so he quickly marries a city hall worker and adopts a child and dog. Unknown to him, his family has secrets of their own: his wife Yor is an undercover assassin, his daughter Anya is a runaway psychic who can read minds, and his dog was from a laboratory that gave him the power to tell the future. All these four subjects must bond together as a family to manage their own affairs and be together as best as they can.",
    },
    {
      id: 6,
      verImage:
        "https://m.media-amazon.com/images/M/MV5BYzlhYzEwNDctMTY1ZC00M2JiLWIzZTAtMWE5YzBkODIwNDgwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
      image: "https://i.ytimg.com/vi/WLzmLUtVkxA/maxresdefault.jpg",
      title: "Kotaro Lives Alone",
      author: "Mami Tsumura",
      genre: "Anime Series",
      currentEps: "1/10",
      status: 'Up to 10 episodes',
      like: false,
      content:
        "A lonely little boy moves into a ramshackle apartment building all on his own and makes friends with the broke manga artist who lives next door.",
    },
    {
      id: 7,
      verImage:
        "https://pic.bstarstatic.com/ogv/85b42f0b22fd5d3527850ffbbb1669e94444d934.jpg@600w_800h_1e_1c_1f.webp",
      image:
        "https://img1.ak.crunchyroll.com/i/spire2/452f17d459c32e6bf6c2609404efb24a1655033790_main.png",
      title: "Dr. Stone: Ryusui",
      author: "Boichi, Riichiro Inagaki",
      genre: "Sci-fi | Action",
      currentEps: "1/2",
      status: 'Up to 2 episodes',
      like: false,
      content:
        "After the world turns to stone—literally sending it back to the stone—the son of a famous astronaut sets out to restore the Earth to its scientific glory. In Ryusui, a special spinoff released this summer, he comes in contact with a skilled sailor and the revival of money. Will the reintroduction of greed and wealth destroy his chances at scientific progress?",
    },
  ];

  const mostView = [
    {
      id: 1,
      verImage:
        "https://m.media-amazon.com/images/M/MV5BNzJhMDY2NzUtYzE2Ny00YWVmLWI3YjQtODk2ZWQzYmEwMzJiXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
      image:
        "https://cdn.animenewsnetwork.com/thumbnails/max1000x1500/cms/news/132407/kimetsu_visualhorizontal.jpg",
      title: "Demon Slayer: Kimetsu no Yaiba",
      author: "Koyoharu Gotouge",
      genre: "Adventure | Action",
      currentEps: "1/26",
      status: 'Up to 26 episodes',
      like: true,
      view: "100M",
      content:
        "After a demon attack leaves his family slain and his sister cursed, Tanjiro embarks upon a perilous journey to find a cure and avenge those he's lost.",
    },
    {
      id: 2,
      verImage:
        "https://images-na.ssl-images-amazon.com/images/I/919yVqvSRmL._AC_UL900_SR615,900_.jpg",
      image:
        "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/f0e5bedfe6abd573766b7f5abdc378724814098c963f3cda0891f932757d7787._RI_V_TTW_.jpg",
      title: "My Dress-Up Darling",
      author: "Tomohisa Taguchi",
      genre: "Romantic | Comedy",
      currentEps: "0/12",
      status: 'Up to 12 episodes',
      like: true,
      view: "86M",
      content:
        "High schooler Wakana Gojou cares about one thing: making Hina dolls. With nobody to share his obsession, he has trouble finding friends or even holding conversation. But after the school's most popular girl, Marin Kitagawa, reveals a secret of her own, he discovers a new purpose for his sewing skills. Together, they'll make her cosplay dreams come true.",
    },
    {
      id: 3,
      verImage:
        "https://resizing.flixster.com/7FxWIMZzGWQTnMirqa17wYfbxOg=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvNmQwNWMwZDYtNmJmOS00MTZjLWIzOTItZDRkMTY0MmNhM2NjLmpwZw==",
      image:
        "https://www.japancuriosity.com/wp-content/uploads/2022/03/the-orbital-children-wide.jpeg",
      title: "The Orbital Children",
      author: "Mitsuo Iso",
      genre: "Sci-fi | Action",
      currentEps: "0/6",
      status: 'Up to 6 episodes',
      like: true,
      view: "80M",
      content:
        'The story takes place in the year 2045 in outer space, where AI, the internet and social networking sites are widespread. A massive accident occurs on a newly opened Japanese commercial space station, and a group of children are left behind. With no hope of rescue from adults, their lifeline is a barely surviving narrowband, a social network, a free application of low-intelligence AI and a drone controlled by a AR-based mobile device called "Smart". Will they be able to use these tools to survive the crisis?',
    },
    {
      id: 4,
      verImage:
        "https://resizing.flixster.com/b_iMzsB6inR_e8s0Wl1_JI1OSi4=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vMDBmODc2YTEtY2Y5Ny00NWJkLTliMTEtMTY3NjE5MWIyM2ZlLnBuZw==",
      image:
        "https://img3.hulu.com/user/v3/artwork/7b71b5a4-560b-4d8b-98c4-c5dee6004c21?base_image_bucket_name=image_manager&base_image=204c7e0e-a0bd-45fc-a7ff-5b6a60c90d62&region=US&format=jpeg&size=952x536",
      title: "Chainsaw Man",
      author: "Tatsuki Fujimoto",
      genre: "Adventure | Action",
      currentEps: "3/12",
      status: 'Up to 12 episodes',
      like: false,
      view: "73M",
      content:
        "When his father died, Denji was stuck with a huge debt and no way to pay it back. Thanks to a Devil dog he saved named Pochita, he's able to survive through odd jobs and killing Devils for the Yakuza. Pochita's chainsaw powers come in handy against these powerful demons. When the Yakuza betrays him and he's killed by the Zombie Devil, Pochita sacrifices himself to save his former master. Now Denji has been reborn as some kind of weird Devil-Human hybrid. He is now a Chainsaw Man!",
    },
    {
      id: 5,
      verImage:
        "https://pic.bstarstatic.com/ogv/a80bf07e470fa17921c5fa717b7ffe4add28ba69.png@600w_800h_1e_1c_1f.webp",
      image:
        Spy,
      title: "SPY×FAMILY",
      author: "Tatsuya Endo",
      genre: "Comedy | Action",
      currentEps: "2/10",
      status: 'Up to 10 episodes',
      like: false,
      view: "60M",
      content:
        "A spy known only as Twilight needs a family as part of his undercover mission, so he quickly marries a city hall worker and adopts a child and dog. Unknown to him, his family has secrets of their own: his wife Yor is an undercover assassin, his daughter Anya is a runaway psychic who can read minds, and his dog was from a laboratory that gave him the power to tell the future. All these four subjects must bond together as a family to manage their own affairs and be together as best as they can.",
    },
    {
      id: 6,
      verImage:
        "https://m.media-amazon.com/images/I/51+3Z+insOL._AC_SY780_.jpg",
      image:
        "https://w0.peakpx.com/wallpaper/690/421/HD-wallpaper-anime-blue-lock-bachira-meguru-chigiri-hyouma.jpg",
      title: "Blue Lock",
      author: "Rafał Jaki",
      genre: "Cyberpunk | TV Series",
      currentEps: "0/1",
      status: 'Up to 1 episodes',
      like: true,
      view: "50M",
      content: "Japan keeps losing the World Cup, over and over. After Isagi Yoichi, a forward for a high school team, gets eliminated in the last game in the qualifier for nationals, gets invited to a program called \"Blue Lock\" Their coach will be Ego Jinpachi, who intends to \"destroy Japanese loser football\" by introducing a radical new training regimen: isolate 300 young forwards in a prison-like institution called \"Blue Lock\" and put them through rigorous training aimed at creating \"the world's greatest egotist striker.\"",
    },
    {
      id: 7,
      verImage:
        "https://en-images.kinorium.com/movie/1080/1682616.jpg?1538983350",
      image:
        "https://i0.wp.com/www.thebulletintime.com/wp-content/uploads/2021/06/Goblin-Slayer-Season-2.jpg?fit=650%2C366&ssl=1",
      title: "Goblin Slayer season 2",
      author: "Rafał Jaki",
      genre: "Cyberpunk | TV Series",
      currentEps: "0/1",
      status: 'Up to 1 episodes',
      like: true,
      view: "43M",
      content: "A young priestess has formed her first adventuring party, but almost immediately they find themselves in distress. It's the Goblin Slayer who comes to their rescue--a man who's dedicated his life to the extermination of all goblins, by any means necessary. And when rumors of his feats begin to circulate, there's no telling who might come calling next.",
    },
    {
      id: 8,
      verImage:
        "https://cdn.shopify.com/s/files/1/0549/5835/8762/products/Bleach__Thousand-Year_Blood_War_Anime_Manga.jpg?v=1662476632",
      image:
        Bleach,
      title: "Bleach: Thousand-year Blood War",
      author: "Tite Kubo",
      genre: "Adventure | Action",
      currentEps: "5/7",
      status: 'Up to 7 episodes',
      like: false,
      view: "48M",
      content:
        "The peace is suddenly broken when warning sirens blare through the Soul Society. Residents, there are disappearing without a trace and nobody knows who's behind it. Meanwhile, a dark shadow is also extending itself toward Ichigo and his friends in Karakura Town.",
    },
  ];

  return (
    <div className="overflow-y-auto flex-1">
      <div className="col-span-8 mr-2">
        <div className="mb-8">
          <div className="flex items-center mb-2">
            <img src={hot} alt="" className="w-7 h-7" />
            <h4 className="text-white text-2xl font-semibold">Hot this week</h4>
          </div>

          <Swiper
            style={{zIndex:"0"}}
            slidesPerView={3}
            spaceBetween={30}
            scrollbar={{
              hide: true,
            }}
            modules={[Scrollbar]}
          >
            {data.map((value, index) => {
              return (
                <SwiperSlide
                  className="rounded-lg bg-[#2D2E37] text-white hover:bg-[#4E4D54]"
                  key={index}
                  onClick={() => callback(value)}
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
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className="mb-8">
          <div className="flex items-center mb-2 space-x-1">
            <img src={latest} alt="" className="w-7 h-7" />
            <h4 className="text-white text-2xl font-semibold">Latest Lists</h4>
          </div>

          <Swiper slidesPerView={3} spaceBetween={30} modules={[Scrollbar]} style={{zIndex:"0"}}>
            {latestFilm.map((value, index) => {
              return (
                <SwiperSlide
                  className="rounded-lg bg-[#272831] text-white hover:bg-[#4E4D54]"
                  key={index}
                  onClick={() => callback(value)}
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
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className="mb-8">
          <div className="flex items-center mb-2 space-x-1">
            <img src={star} alt="" className="w-7 h-7" />
            <h4 className="text-white text-2xl font-semibold">Most Views</h4>
          </div>

          <Swiper slidesPerView={3} spaceBetween={30} modules={[Scrollbar]} style={{zIndex:"0"}}>
            {mostView.map((value, index) => {
              return (
                <SwiperSlide
                  className="rounded-lg bg-[#2D2E37] text-white hover:bg-[#4E4D54]"
                  key={index}
                  onClick={() => callback(value)}
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
                    <p className="mr-1 text-base opacity-70">{value.view} Views</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
