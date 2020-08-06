import React from 'react'

import './styles.css'
import '../../components/TeacherItem/styles.css'
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'

import Input from '../../components/Input'
import Select from '../../components/Select'


function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader 
            title="Estes são os proffys disponiveis">
                <form action="" id="search-teachers">
                <Select 
                    name="subject" 
                    label="Matéria"
                    options={[
                        { value: 'Artes', label: 'Artes'},
                        { value: 'Biologia', label: 'Biologia'},
                        { value: 'Matemática', label: 'Matemática'},
                        { value: 'Física', label: 'Física'},
                        { value: 'Química', label: 'Química'},
                        { value: 'Educação Física', label: 'Educação Física'},
                        { value: 'Português', label: 'Português'},
                        { value: 'Inglês', label: 'Inglês'},
                        { value: 'História', label: 'História'},
                        { value: 'Geografia', label: 'Geografia'},

                    ]}/>
                    <Select 
                    name="week_day" 
                    label="Dia da semana"
                    options={[
                        { value: '0', label: 'Domingo'},
                        { value: '1', label: 'Segunda-Feira'},
                        { value: '2', label: 'Terça-Feira'},
                        { value: '3', label: 'Quarta-Feira'},
                        { value: '4', label: 'Quinta-Feira'},
                        { value: '5', label: 'Sexta-Feira'},
                        { value: '6', label: 'Sábado'}
                    ]}/>
                    <Input type="time" name="time" label="Hora"/>
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