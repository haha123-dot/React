import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import BookDetailPage from "./pages/BookDetailPage/BookDetailPage";
import AddBookPage from "./pages/AddBookPage/AddBookPage";
import sapiens from "./assets/sapiens.jpg";
import risefall from "./assets/risefall.jpg";
import guns from "./assets/guns.jpg";
import silk from "./assets/silk.jpg";
import young from "./assets/young.jpg";
import data from "./assets/data.jpg";
import chip from "./assets/chip.jpg";
import hidden from "./assets/hidden.jpg";
import shallows from "./assets/shallows.jpg";
import steve from "./assets/steve.jpg";
import gene from "./assets/gene.jpg";
import immune from "./assets/immune.jpg";
import interstellar from "./assets/interstellar.jpg";
import speaking from "./assets/speaking.jpg";
import world from "./assets/world.jpg";
import capture from "./assets/capture.jpg";
import davinci from "./assets/davinci.jpg";
import digital from "./assets/digital.jpg";
import warriors from "./assets/warriors.jpg";
import wolves from "./assets/wolves.jpg";


function App() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      year: "2011",
      genre: "Sejarah",
      description: "Buku ini membahas perjalanan panjang manusia era Homo sapiens di Afrika hingga zaman modern. Harari menjelaskan bagaimana biologi, budaya dan ekonomi membentuk dunia saat ini, serta menyoroti perubahan besar akibat revolusi kognitif, pertanian, dan sains.",
      poster: sapiens,
    },
    {
      id: 2,
      title: "The Diary of a Young Girl",
      author: "Anne Frank",
      year: "1947",
      genre: "Sejarah / Biografi",
      description: "Buku ini adalah catatan harian seorang gadis Yahudi bernama Anne Frank selama ia bersembunyi dari Nazi di masa Perang Dunia II",
      poster: young,
    },
    {
      id: 3,
      title: "The Rise and Fall of the Third Reich: A History of Nazi Germany",
      author: "William L. Shirer",
      year: "1960",
      genre: "Sejarah / World War II",
      description: "Buku ini memberikan gambaran menyeluruh tentang kebangkitan dan kejatuhan rezim Nazi di Jerman. Shirer, yang merupakan jurnalis, menyajikan kisah berdasarkan pengalamannya langsung selama perang dan dokumen resmi Jerman yang berhasil ditemukan setelah perang berakhir.",
      poster: risefall,
    },
    {
     id: 4,
     title: "The Silk Roads:A New History of the World",
     author: "Peter Frankopan",
     year: "2015",
     genre: "Sejarah",
     description: "Buku ini mengisahkan bagaimana Jalur Sutra menjadi pusat perdagangan, pertukaran budaya, dan ide yang membentuk dunia modern. Frankopan menyoroti pentinganya Asia dalam sejarah global, bukan hanya Eropa.",
     poster: silk, 
    },
        {
     id: 5,
     title: "Guns, Germs, and Steel:The Fates of Human Societies",
     author: "Jared Diamond",
     year: "1997",
     genre: "Sejarah / Geography",
     description: "Buku ini mencoba menjawab mengapa beberapa peradaban berkembang lebih cepat daropada yang lain. Diamond menelusuri pengaruh geografi, lingkungan, dan sumber daya alam terhadap perkembangan teknologi, politik, dan masyarakat.",
     poster: guns, 
    },
    {
     id: 6,
     title: "Steve Jobs",
     author: "Walter Isaacson",
     year: "2011",
     genre: "Technology",
     description: "Buku biografi tentang Steve Jobs, pendiri Apple, yang menampilkan perjalanan hidup dan inovasi teknologi yang mengubah dunia.",
     poster: steve, 
    },
    {
     id: 7,
     title: "The Shallows: What the Internet is Doing to Our Life",
     author: "Nicholas Carr",
     year: "2010",
     genre: "Technology",
     description: "Buku ini membahas dampak internet terhadap cara otak manusia berpikir, belajar, dan berperilaku di era digital.",
     poster: shallows, 
    },
    {
     id: 8,
     title: "Designing Data-Intensive Applications",
     author: "Martin Kleppmann",
     year: "2017",
     genre: "Technology",
     description: "Buku ini membahas desain sistem aplikasi yang menangani data besar dan intensif, sangat direkomendasikan untuk pengembang dan arsitek sistem.",
     poster: data, 
    },
    {
     id: 9,
     title: "Code: The Hidden Language of Computer Hardware and Software",
     author: "Charles Petzold",
     year: "2020",
     genre: "Technology",
     description: "Buku ini menjelaskan konsepdasar interaksi perangkat keras dan perangkat lunak komputer dalam bahasa yang mudah dipahami.",
     poster: hidden, 
    },
    {
     id: 10,
     title: "Chip War: The Fight for the World's Most Critical Technology",
     author: "Chris Miller",
     year: "2022",
     genre: "Technology",
     description: "Buku yang mengulas persaingan global di industri semikonduktor yang vital bagi teknologi modern.",
     poster: chip, 
    },
    {
     id: 11,
     title: "The End of Everything: (Astrophysically Speaking)",
     author: "Katie Mack",
     year: "2020",
     genre: "Science",
     description: "Buku ini membahas lima kemungkinan bagaimana alam semesta akan berakhir, misalnya Big Crunch, Heat Death, Big Rip, Vacuum Decay, dan 'Bounce'. Penulisnya menggunakan fisika kosmologi terkini, teori kuantum, dan hasil observasi terbaru untuk mengeksplorasi tiap skenario. Ditulis secara mudal, menarik, dan seringkali humoris meski membahas topik yang 'besar'.",
     poster: speaking, 
    },
    {
     id: 12,
     title: "Immune",
     author: "Philipp Dettmer",
     year: "2021",
     genre: "Science",
     description: "Buku ini adalah pengenalan mendalam ke sistem kekebalan tubuh manusia. Dettmer, yang juga pembuat saluran YouTube “Kurzgesagt – In a Nutshell”, menjelaskan komponen sistem imun seperti antibodi, sel imun, respons terhadap bakteri/virus, alergi, dan kanker, dengan ilustrasi menarik dan bahasa yang mudah dipahami. Menjelaskan bagaimana tubuh kita mempertahankan diri terhadap infeksi dan apa yang terjadi ketika sesuatu salah.",
     poster: immune, 
    },
    {
     id: 13,
     title: "An Immense World: How Animal Senses Reveal the Hidden Realms Around Us",
     author: "Ed Young",
     year: "2020",
     genre: "Science",
     description: "Buku ini mengeksplorasi cara-cara unik hewan-hewan “merasakan” dunia — seperti indera selain yang biasa kita pikirkan (penglihatan, pendengaran, bau, dsb). Contohnya: kemampuan melacak medan magnetik, penglihatan yang berbeda, komunikasi elektrik, dll. Tujuannya agar pembaca memahami bahwa persepsi manusia hanyalah sebagian kecil dari cara makhluk lain melihat/dengar/rasakan dunia.",
     poster: world, 
    },
    {
     id: 14,
     title: "The Gene: An Intimate History",
     author: "Siddhartha Mukherjee",
     year: "2016",
     genre: "Science",
     description: "Buku ini membahas genetika — mulai dari teori awal tentang genetika, penemuan gen, hingga perkembangan terkini seperti pemetaan genom manusia. Mukherjee menggabungkan sains, riset, dan cerita pribadi (keluarganya, yang memiliki sejarah gangguan mental) untuk menggambarkan dampak genetika pada kehidupan manusia. Ada juga pembahasan implikasi etis dan bagaimana ilmu genetika mengubah pemahaman kita tentang warisan, penyakit, dan identitas.",
     poster: gene, 
    },
    {
     id: 15,
     title: "Interstellar: The Search for Extraterrestrial Life and Our Future in the Stars",
     author: "Avi Loeb",
     year: "2023",
     genre: "Science",
     description: "Buku ini memeriksa kemungkinan adanya kehidupan di luar Bumi, dan bagaimana ilmuwan sekarang mendekati pertanyaan itu — melalui astrofisika, observasi astronomi, dan teori. Loeb mengajak pembaca berpikir tentang konsekuensi jika kita menemukan kehidupan ekstraterestrial, bagaimana mempersiapkan diri terhadap temuan tersebut, dan apa artinya bagi posisi kita sebagai manusia di alam semesta.",
     poster: interstellar, 
    },
        {
     id: 16,
     title: "Warrios: Into The Wild",
     author: "Erin Hunter",
     year: "2003",
     genre: "Fiksi / Fantasi",
     description: "Rusty adalah kucing rumahan yang bosan, sampai suku kucing liar ThunderClan dari hutan terdekat mengundangnya untuk berlatih menjadi salah satu prajurit mereka . Berganti nama menjadi Firepaw, kucing ini belajar cara berburu mangsa, mengenali aroma klan musuh, dan menghormati hierarki dunia kucing liar.",
     poster: warriors, 
    },
    {
     id: 17,
     title: "Digital Fortress",
     author: "Dan Brown",
     year: "1998",
     genre: "Fiksi / Tekno-thriller",
     description: "Kisah ini berlatar tahun 1996. Ketika superkomputer pemecah kode milik Badan Keamanan Nasional Amerika Serikat (NSA) , TRANSLTR, menemukan kode baru yang revolusioner, Benteng Digital, yang tidak dapat dipecahkannya, Komandan Trevor Strathmore memanggil kepala kriptografer Susan Fletcher untuk memecahkannya.",
     poster: digital, 
    },
    {
     id: 18,
     title: "The Da Vinci Code",
     author: "Dan Brown",
     year: "2003",
     genre: "Fiksi / Misteri",
     description: "Kisah ini mengikuti profesor Harvard Robert Langdon saat ia menyelidiki pembunuhan di Louvre dan mengungkap konspirasi yang melibatkan rahasia tentang hubungan antara Yesus Kristus dan Maria Magdalena yang tersembunyi dalam karya Leonardo da Vinci.",
     poster: davinci, 
    },
    {
     id: 19,
     title: "Guardians of Ga'Hoole: The Capture",
     author: "Kathryn Lasky",
     year: "2003",
     genre: "Fiksi / Fantasi",
     description: "Soren lahir di hutan Tyto , kerajaan yang tenang tempat tinggal para Burung Hantu. Namun, kejahatan mengintai di dunia burung hantu, kejahatan yang mengancam untuk menghancurkan kedamaian Tyto dan mengubah jalan hidup Soren selamanya.",
     poster: capture, 
    },
    {
     id: 20,
     title: "Wolves of the Beyond: Lone Wolf",
     author: "Wolves of the Beyond: Lone Wolf",
     year: "Tahun terbit: 2010",
     genre: "Fiksi / Fantasi",
     description: "Spin-off dari Guardians of Ga'hoole memperkenalkan Faolan, anak serigala yang baru lahir dengan kaki bengkok. Aturan keras kawanan serigala menuntut kelemahan seperti itu untuk ditinggalkan di bukit terpencil. Namun sendirian di alam liar, Faolan tidak binasa - sebuah kisah tentang bertahan hidup, keberanian, dan cinta yang berjaya.",
     poster: wolves, 
    },

  ]);

  const handleAddBook = (newBook) => {
    setBooks([...books, { ...newBook, id: books.length + 1 }]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage books={books} />} />
        <Route path="/book/:id" element={<BookDetailPage books={books} />} />
        <Route path="/add" element={<AddBookPage onAddBook={handleAddBook} />} />
      </Routes>
    </Router>
  );
}

export default App;
