import React from "react";
import s from "./Abonents.module.css";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';


const columns = [
    {
      field: 'cm_mac',
      headerName: 'cm_mac',
      width: 140,
      hide: true
    },
    {
      field: 'cm_ip',
      headerName: 'cm_ip',
      width: 115,
      editable: true,
    },
    {
      field: 'cpe_mac',
      headerName: 'cpe_mac',
      width: 140,
      editable: true,
    },
    {
      field: 'cpe_ip',
      headerName: 'cpe_ip',
      width: 115,
      editable: true,
    },
    {
      field: 'vpn_ip',
      headerName: 'vpn_ip',
      width: 115
    },
    {
      field: 'vpn_login',
      headerName: 'vpn_login',
      width: 90
    },
    {
      field: 'vpn_pass',
      headerName: 'vpn_pass',
      width: 90
    },
    {
      field: 'street',
      headerName: 'street',
      width: 130
    },
    {
      field: 'house',
      headerName: 'house',
      width: 90
    },
    {
      field: 'flat',
      headerName: 'flat',
      width: 90
    },
    {
      field: 'surname',
      headerName: 'surname',
      width: 90
    },
    {
      field: 'patronymic',
      headerName: 'patronymic',
      width: 90
    },
    {
      field: 'balance',
      headerName: 'balance',
      width: 90
    }
  ];

const Abonents = (props) =>{
    return (
        <div className={s.Abonents}>
            <div className={s.tableAbonent}>
                <Box sx={{ height: 330, width: '100%' }}>
                    <DataGrid
                        rows={props.rows}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 4,
                                },
                            },
                        }}
                        pageSizeOptions={[4]}
                        disableRowSelectionOnClick
                        getRowId={(row) => row.id_abonent}
                        
                    />
                </Box>
            </div>
        </div>
    );
}

export default Abonents;