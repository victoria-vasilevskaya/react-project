import React, {useState, useContext, useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import edit from './edit.svg'
import axios from 'axios'
import TextField from '@material-ui/core/TextField';
import st from './table.module.css';
import moment from "moment";
import UpdateApplicationModal from '../../modals/updateApplication'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


const DataTable = () => {
  
  const[modalVisible,setModalVisible] = useState(false)
  const [applications, setApplications] = useState([])
  const [inputValueData, setInputValueData] = useState('')
  const [inputValueMaster, setInputValueMaster] = useState('')
  
  const [masters, setMasters] = useState([])
  
  useEffect(() => {
    axios
        .get('http://localhost:5000/api/user/masters')
        .then(data => {
            setMasters(data.data)
        })
}, [])

  const handleChangeMaster = (event) => {
    setInputValueMaster(event.target.value);
  };

  const handleChangeData = (event) => {
    setInputValueData(event.target.value);
  };

  const handleClick = () =>{
    setInputValueData(moment().format("YYYY-MM-DD"))
  }

  const handleDel = () =>{
    setInputValueMaster('')
  }

  const onSelectionChange = (sel) =>{
    localStorage.setItem("Row", sel.id)
  }

  useEffect(() => {
    axios
        .get('http://localhost:5000/api/application/all')
        .then(data => {
            setApplications(data.data)
        })
}, [])

  const columns = [];
  localStorage.setItem("dataApplSelect", inputValueData)
  localStorage.setItem("masterSelect", inputValueMaster)

  const rows = []
  if (localStorage.getItem("role") === "Менеджер") {
    columns.push(
      { field: 'num', headerName: '№', type: 'number', width: 50 },
      { field: 'master', headerName: 'Мастер', width: 130 },
      { field: 'date', headerName: 'Дата', width: 130 },
      { field: 'time', headerName: 'Время', width: 80 },
      { field: 'address', headerName: 'Адрес', width: 300 },
      { field: 'phone', headerName: 'Телефон', width: 120, },
      { field: 'task', headerName: 'Вид заявки', width: 245, },
      { field: 'action', headerName: 'Статус', width: 200, },
      { field: 'edit', headerName: 'Изменить', width: 100, renderCell: () => <button onClick={() => setModalVisible(true)}><img src={edit} /></button> }
    )
    var dateAppli = ""
    for (let i = 0; i < applications.length; i++) {
      
      if((new Date(applications[i].data_application).getMonth() + 1)<10 && (new Date(applications[i].data_application).getDate()<10)){
        dateAppli = new Date(applications[i].data_application).getFullYear() + "-0" +(new Date(applications[i].data_application).getMonth() + 1) + "-0" + new Date(applications[i].data_application).getDate()
      }
      else if((new Date(applications[i].data_application).getMonth() + 1)<10){
        dateAppli = new Date(applications[i].data_application).getFullYear() + "-0" +(new Date(applications[i].data_application).getMonth() + 1) + "-" + new Date(applications[i].data_application).getDate()
      }
      else if(new Date(applications[i].data_application).getDate()<10){
        dateAppli = new Date(applications[i].data_application).getFullYear() + "-" +(new Date(applications[i].data_application).getMonth() + 1) + "-0" + new Date(applications[i].data_application).getDate()
      }
      
      if(localStorage.getItem("dataApplSelect")!="" && localStorage.getItem("masterSelect")!=""){
        if(dateAppli === localStorage.getItem("dataApplSelect") && applications[i].name === localStorage.getItem("masterSelect")){
          rows.push({
            "id": applications[i].id_application,
            "master": applications[i].name,
            "date": new Date(applications[i].data_application).getDate() + "-" + (new Date(applications[i].data_application).getMonth() + 1) + "-" + new Date(applications[i].data_application).getFullYear(),
            "time": applications[i].time,
            "address": applications[i].street + " д." + applications[i].house + " кв." + applications[i].flat,
            "phone": applications[i].phone_number,
            "task": applications[i].name_task,
            "action": applications[i].name_action
          })
        }
      }
      else if(localStorage.getItem("dataApplSelect")!="" && dateAppli === localStorage.getItem("dataApplSelect")){
        rows.push({
          "id": applications[i].id_application,
          "master": applications[i].name,
          "date": new Date(applications[i].data_application).getDate() + "-" + (new Date(applications[i].data_application).getMonth() + 1) + "-" + new Date(applications[i].data_application).getFullYear(),
          "time": applications[i].time,
          "address": applications[i].street + " д." + applications[i].house + " кв." + applications[i].flat,
          "phone": applications[i].phone_number,
          "task": applications[i].name_task,
          "action": applications[i].name_action
        })
      }
      else if(localStorage.getItem("masterSelect")!="" && applications[i].name === localStorage.getItem("masterSelect")){
        rows.push({
          "id": applications[i].id_application,
          "master": applications[i].name,
          "date": new Date(applications[i].data_application).getDate() + "-" + (new Date(applications[i].data_application).getMonth() + 1) + "-" + new Date(applications[i].data_application).getFullYear(),
          "time": applications[i].time,
          "address": applications[i].street + " д." + applications[i].house + " кв." + applications[i].flat,
          "phone": applications[i].phone_number,
          "task": applications[i].name_task,
          "action": applications[i].name_action
        })
      }
    }
  }
  else if (localStorage.getItem("role") === "Мастер") {
    columns.push(
      { field: 'num', headerName: '№', type: 'number', width: 50 },
      { field: 'time', headerName: 'Время', width: 80 },
      { field: 'address', headerName: 'Адрес', width: 300 },
      { field: 'phone', headerName: 'Телефон', width: 120, },
      { field: 'task', headerName: 'Вид заявки', width: 245, },
      { field: 'action', headerName: 'Статус', width: 200, },
      { field: 'edit', headerName: 'Изменить', width: 100, renderCell: () => <button onClick={() => setModalVisible(true)}><img src={edit} /></button> }
    )
    var dateAppl = ""
    for (let i = 0; i < applications.length; i++) {
      if((new Date(applications[i].data_application).getMonth() + 1)<10 && (new Date(applications[i].data_application).getDate()<10)){
        dateAppl = new Date(applications[i].data_application).getFullYear() + "-0" +(new Date(applications[i].data_application).getMonth() + 1) + "-0" + new Date(applications[i].data_application).getDate()
      }
      else if((new Date(applications[i].data_application).getMonth() + 1)<10){
        dateAppl = new Date(applications[i].data_application).getFullYear() + "-0" +(new Date(applications[i].data_application).getMonth() + 1) + "-" + new Date(applications[i].data_application).getDate()
      }
      else if(new Date(applications[i].data_application).getDate()<10){
        dateAppl = new Date(applications[i].data_application).getFullYear() + "-" +(new Date(applications[i].data_application).getMonth() + 1) + "-0" + new Date(applications[i].data_application).getDate()
      }
      if(dateAppl === moment().format("YYYY-MM-DD")){
        rows.push({
          "id": applications[i].id_application,
          "date": new Date(applications[i].data_application).getDate() + "-" + (new Date(applications[i].data_application).getMonth() + 1) + "-" + new Date(applications[i].data_application).getFullYear(),
          "time": applications[i].time,
          "address": applications[i].street + " д." + applications[i].house + " кв." + applications[i].flat,
          "phone": applications[i].phone_number,
          "task": applications[i].name_task,
          "action": applications[i].name_action
        })
      }
      
    }
  }
  if (localStorage.getItem("role") === "Мастер") {
    return (
      <div className={st.box}>
        <div className={st.btns}>
          <button className={st.btn}>Сегодня</button>
          <button className={`${st.btnTommorow} ${st.btn}`}>Завтра</button>
        </div>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
          />
        </div>
        <UpdateApplicationModal show={modalVisible} onHide={setModalVisible} />
      </div>
    )
  } else {
    return (
      <div className={st.box}>
        <div className={st.container}>
          <div className={st.inputs}>
            <div className={st.inputDate}>
              <span> Выбор даты </span>
              <div>
                <TextField
                  id="date"
                  type="date"
                  className={st.inputData}
                  onChange={handleChangeData}
                  value={inputValueData}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
            </div>
            <div className={st.inputMaster}>
              <span>Выбор мастера</span>
              <div>
                <Select
                  value={inputValueMaster}
                  onChange={handleChangeMaster}
                  className={st.inputSelectMaster}
                  id='inputMaster'
                >
                  {masters.map(master =>
                    <MenuItem value={master.name} key={master.id_user}>
                      {master.name}
                    </MenuItem>)}
                </Select>
              </div>
            </div>
          </div>
          <div className={st.btns}>
            <button className={`${st.btnDel} ${st.btn}`} onClick={handleDel}>Сброс</button>
            <button className={`${st.btnToday} ${st.btn}`} onClick={handleClick}>Сегодня</button>
          </div>
          <div className={st.caption}>{moment().format("DD-MM-YYYY")}</div>
        </div>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            onRowClick={onSelectionChange}
            pageSizeOptions={[5, 10]}
          />
        </div>
        <UpdateApplicationModal show={modalVisible} onHide={setModalVisible} />
      </div>
    )
  }

}

export default DataTable