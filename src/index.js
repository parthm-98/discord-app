import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Pages/App';
import reportWebVitals from './reportWebVitals';
import Server1 from './Pages/servers/1';

function Navbar() {
  return (
    <div className="p-3 space-y-2 overflow-y-scroll bg-gray-900">
      <NavLink href="/servers">
        <DiscordIcon className="h-[30px] w-[30px]" />
      </NavLink>
      <hr className='border-t-white/[0.06] border-t-2 rounded mx-2'/>
      <NavLink href="/servers/1">
        S1
      </NavLink>
      
    </div>
  );
}

function NavLink({ href, children }) {
  const location = useLocation(); // Hook to get current URL
  const isActive = location.asPath === href; // Check if the current path matches

  return (
    <Link to={href} className="relative block group">
      {/* Sidebar active indicator */}
      <div className="flex absolute -left-3 h-full items-center">
        <div
          className={`${
            isActive ? 'h-10' : 'h-5 scale-0 opacity-0 group-hover:opacity-100'
          } flex items-center justify-center h-5 transition-all duration-200 bg-white w-1  rounded-r-full group-hover:scale-100 origin-left`}
        />
      </div>
      {/* Link content with hover and active state handling */}
      <div className="group-active:translate-y-px">
        <div
          className={`${
            isActive
              ? 'rounded-2xl bg-brand text-white'
              : 'rounded-3xl text-gray-100 bg-gray-700 group-hover:bg-brand group-hover:text-white group-hover:rounded-2xl'
          } flex items-center justify-center w-12 h-12 transition-all duration-200`}
        >
          {children}
        </div>
      </div>
    </Link>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="flex h-screen text-gray-100">
        <Navbar />
        <div className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/servers" element={<App />} />
            <Route path="/servers/1" element={<Server1 />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

function DiscordIcon(props) {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M19.73 4.87a18.2 18.2 0 00-4.6-1.44c-.21.4-.4.8-.58 1.21-1.69-.25-3.4-.25-5.1 0-.18-.41-.37-.82-.59-1.2-1.6.27-3.14.75-4.6 1.43A19.04 19.04 0 00.96 17.7a18.43 18.43 0 005.63 2.87c.46-.62.86-1.28 1.2-1.98-.65-.25-1.29-.55-1.9-.92.17-.12.32-.24.47-.37 3.58 1.7 7.7 1.7 11.28 0l.46.37c-.6.36-1.25.67-1.9.92.35.7.75 1.35 1.2 1.98 2.03-.63 3.94-1.6 5.64-2.87.47-4.87-.78-9.09-3.3-12.83zM8.3 15.12c-1.1 0-2-1.02-2-2.27 0-1.24.88-2.26 2-2.26s2.02 1.02 2 2.26c0 1.25-.89 2.27-2 2.27zm7.4 0c-1.1 0-2-1.02-2-2.27 0-1.24.88-2.26 2-2.26s2.02 1.02 2 2.26c0 1.25-.88 2.27-2 2.27z"
      />
    </svg>
  );
}
