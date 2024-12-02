import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserTest from "./pages/test/user-test";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/user-test" element={<UserTest />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};

export default App;
