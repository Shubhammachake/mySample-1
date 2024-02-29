import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookLists from "./components/BookLists";
import AddBooks from "./components/AddBooks";
import EditDetails from "./components/EditDetails";
import Details from "./components/Details";

export default function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Routes>
          <Route path="/" element={<BookLists />} />
          <Route path="/AddBooks" element={<AddBooks />} />
          <Route path="/EditDetails" element={<EditDetails />} />
          <Route path="/Details" element={<Details />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
