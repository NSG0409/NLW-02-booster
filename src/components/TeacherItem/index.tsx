import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://lh3.googleusercontent.com/ogw/ADGmqu8aYzLdeZ0kW5wY8amNJAjbAtzrZqcIlacGu-te=s83-c-mo" alt="Natan Guedes"/>
                        <div>
                            <strong>Natan Guedes</strong>
                            <span>Física</span>
                        </div>
                    </header>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> <br/> Provident, voluptatibus maiores? Similique eum odit ratione quod dolorem numquam placeat optio dolor ad nam natus culpa delectus dolore maxime, impedit qui?
                        </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 100,00</strong>
                        </p>
                        <button type="button">
                        <img src={whatsappIcon} alt="Whatsapp"/>
                        Entrar em contato
                        </button>
                    </footer>
                </article>
    )
}

export default TeacherItem