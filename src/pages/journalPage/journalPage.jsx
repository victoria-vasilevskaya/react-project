import React, {useState} from 'react';
import ApplicationForm from '../../components/application-form/application-form';
import Header from '../../components/header/Header';
import Table from '../../components/table-applications/table/table';
import UpdateApplicationModal from '../../components/modals/updateApplication'

export default function Journal() {
    
    return (
        <div>
            <Header />
            <ApplicationForm />
            <Table />
        </div>
    )}