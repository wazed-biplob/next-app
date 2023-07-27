import Link from 'next/link';
import React from 'react';

const WithLayout = ({children}) => {
    return (
        <div>
            
        <nav>
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
        </nav>
            {children}
            <footer>
          <h1 className="text-center bg-sky-300 border">Footer</h1>
        </footer>
        </div>
    );
};

export default WithLayout;