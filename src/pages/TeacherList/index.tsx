import React from 'react'

import './styles.css'
import '../../components/TeacherItem/styles.css'
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'


function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponiveis">
                <form action="" id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matérias</label>
                        <input type="text" name="" id="subject"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="week-day">Dia da semana</label>
                        <input type="text" name="" id="subject"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" name="" id="subject"/>
                    </div>
                </form>
            </PageHeader>

            <main>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
            </main>
        </div>
    )
}

export default TeacherList