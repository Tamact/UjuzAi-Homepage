import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../components/header';
import Hero from '../components/hero';
    import About from '../components/about';
import Info from '../components/Info'
import Footer from '../components/footer';
import Modal from '../components/modal';
import ProgressBar from '../components/Progessbar';
import '../styles/global.css';


export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <Head>
                <title>UjuzAi - Révéler les Talents Invisibles</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header openModal={openModal} />
            <main className="main">
                <Hero />
                <ProgressBar progress={60}/>  {/* Added here */}
                <About />
                <Info />
            </main>
            <Modal isOpen={isModalOpen} closeModal={closeModal} />
            <Footer />
        </div>
    );
}
