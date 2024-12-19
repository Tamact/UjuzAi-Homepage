import React from 'react';
import Head from 'next/head';
import ProgressBar from '../components/ProgressBar'

const TalentsPage = () => {
    return (
        <div>
            <Head>
                <title>Talents - UjuzAi</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
           <div className="container">
               <header className="header">
                 <div className="logo">U</div>
                 <h2 className="step-title">Etape 1</h2>
                 <ProgressBar progress={20} />
               </header>
               <main className="main-content">
                 <h1 className="upload-title">Upload your resume</h1>
                 <div className="upload-area">
                    <div className="upload-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                            {/* Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                            <path d="M160 0c-17.7 0-32 14.3-32 32V96h32 192 32V32c0-17.7-14.3-32-32-32H160zM480 128H32c-17.7 0-32 14.3-32 32V448c0 17.7 14.3 32 32 32H480c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32zM128 320h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H128c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H128c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H128c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
                        </svg>
                     </div>
                    <p className="upload-text">Drag & Drop or click to upload(.pdf)</p>
                 </div>
                 <button className="next-button">NEXT</button>
               </main>
           </div>
        </div>
    );
};

export default TalentsPage;