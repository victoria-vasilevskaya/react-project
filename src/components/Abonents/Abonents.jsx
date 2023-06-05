import React from "react";
import s from "./Abonents.module.css";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from "react-router-dom";
import Axios from "axios";

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

  },
  {
    field: 'cpe_mac',
    headerName: 'cpe_mac',
    width: 140,

  },
  {
    field: 'cpe_ip',
    headerName: 'cpe_ip',
    width: 115,

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
    width: 95
  },
  {
    field: 'street',
    headerName: 'street',
    width: 170
  },
  {
    field: 'house',
    headerName: 'house',
    width: 60
  },
  {
    field: 'flat',
    headerName: 'flat',
    width: 60
  },
  {
    field: 'surname',
    headerName: 'surname',
    width: 110
  },
  {
    field: 'name',
    headerName: 'name',
    width: 100
  },
  {
    field: 'patronymic',
    headerName: 'patronymic',
    width: 130
  },
  {
    field: 'balance',
    headerName: 'balance',
    width: 70
  }
];

const Abonents = (props) => {
  let navigate = useNavigate();

  const idAbonentChange=(idabonent)=>{
    props.idabonent(idabonent);
  }
  const handleRowClick = (params) => {
    navigate(`/abonent-device/device-stats/${params.row.id_abonent}`);
    idAbonentChange(params.row.id_abonent);
  };

  return (
    <div className={s.Abonents}>
      <div className={s.tableAbonent}>
        <Box sx={{ height: 330, width: '103%' }}>
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
            getRowId ={(row) => row.id_abonent}
            onRowClick={handleRowClick}
            onRowDoubleClick={handleRowClick}
          />
        </Box>
      </div>
    </div>
  );
}
 

export default Abonents;