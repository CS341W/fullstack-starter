import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import App from "./App.jsx"
import "./index.css"

const rootElement = document.getElementById("root")
ReactDOM.createRoot(rootElement).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}></Route>
    </Routes>
  </Router>
)
