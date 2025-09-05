import { Routes, Route } from "react-router-dom";
import BirthdayGiftPage from "./pages/BirthdayGiftPage";
import BirthdayReelFullscreen from "./pages/BirthdayReels";
import PhotoAlbumViewer from "./pages/PhotoAlbumViewer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BirthdayReelFullscreen />} />
      <Route path="/gift" element={<BirthdayGiftPage />} />
      <Route path="/album" element={<PhotoAlbumViewer />} />
    </Routes>
  );
}

export default App;
