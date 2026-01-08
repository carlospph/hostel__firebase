import React from 'react'

const Header = () => {
    return (
        <div>
            <nav className="flex items-center justify-between bg-white py-3 px-4 shadow-md max-w-6xl mx-auto rounded-lg">
                <div className="flex items-center">
                    <i className="fa-solid fa-hotel text-3xl"></i>
                    <p className="text-3xl font-bold">TopRoom</p>
                </div>


                <ul className="flex items-center gap-8">
                    <li>
                        <i className="fa-solid fa-home"></i>
                        Home
                    </li>
                    <li>
                        <i class="fa-solid fa-bell-concierge"></i>
                        Serviços
                    </li>
                    <li>
                        <i class="fa-solid fa-images"></i>
                        Galeria
                    </li>
                    <li>
                        <i class="fa-solid fa-phone"></i>
                        Contatos
                    </li>
                </ul>

                <div className="flex items-center gap-1">
                    <i class="fa-solid fa-circle-user text-[26px]"></i>
                    <p className="text-sm">Carlos Nascimento</p>
                </div>
            </nav>
        </div>
    )
}

export default Header
