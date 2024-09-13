import React from 'react';
import {Link} from 'react-router-dom';


function Server1() {
  return (
    <Link 
            to="/servers" 
            className="flex items-center justify-center w-12 h-12 text-gray-100 bg-gray-500 rounded-3xl hover:rounded-2xl hover:bg-brand hover:text-white transition-all duration-200"
          >
            S1
      </Link>
  )
}

export default Server1;