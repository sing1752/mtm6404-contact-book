import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ContactDetails from './pages/ContactDetails';
import AddContact from './pages/AddContact';
import EditContact from './pages/EditContact';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact/:id" element={<ContactDetails />} />
                <Route path="/add" element={<AddContact />} />
                <Route path="/edit/:id" element={<EditContact />} />
            </Routes>
        </Router>
    );
}

export default App;
