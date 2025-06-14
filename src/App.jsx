import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail";
import Components from "./pages/Components";
import Albums from "./pages/Albums";
import Photos from "./pages/Photos";
import Todos from "./pages/Todos";
import Users from "./pages/Users";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/components" element={<Components />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/todos" element={<Todos />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
export default App;