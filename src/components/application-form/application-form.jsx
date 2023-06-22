import React, {useContext, useState, useEffect} from 'react';
import st from './application-form.module.css';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'

function ApplicationForm() {

    const [inputValueMaster, setInputValueMaster] = useState('')
    const [inputValueStreet, setInputValueStreet] = useState('')
    const [inputValueHouse, setInputValueHouse] = useState('')
    const [inputValueFlat, setInputValueFlat] = useState('')
    const [inputValueTask, setInputValueTask] = useState('')
    const [inputValueData, setInputValueData] = useState('')
    const [inputValueTime, setInputValueTime] = useState('')
    const [inputValuePhone, setInputValuePhone] = useState('')
    const [inputValueComment, setInputValueComment] = useState('')

    const [masters, setMasters] = useState([])
    const [addresses, setAddresses] = useState([])
    const [streets, setStreets] = useState([])
    const [tasks, setTasks] = useState([])
    const [applications, setApplications] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:5000/api/user/masters')
            .then(data => {
                setMasters(data.data)
            })
    }, [])

    useEffect(() => {
        axios
            .get('http://localhost:5000/api/address/all')
            .then(data => {
                setAddresses(data.data)
            })
    }, [])

    useEffect(() => {
        axios
            .get('http://localhost:5000/api/address/streets')
            .then(data => {
                setStreets(data.data)
            })
    }, [])

    useEffect(() => {
        axios
            .get('http://localhost:5000/api/task/all')
            .then(data => {
                setTasks(data.data)
            })
    }, [])

    useEffect(() => {
        axios
            .get('http://localhost:5000/api/application/all')
            .then(data => {
                setApplications(data.data)
            })
    }, [])

    const getHouses = (street) =>{
        var houses = []
        for(var i = 0; i < addresses.length; i++){
            if(addresses[i].street === street){
                houses.push({"id_address":addresses[i].id_address, "house":addresses[i].house})
            }
        }
        return Array.from(new Set(houses))
    }

    const getFlats = (street, house) =>{
        var flats = []
        for(var i = 0; i < addresses.length; i++){
            if(addresses[i].street === street &&addresses[i].house === house){
                flats.push({"id_address":addresses[i].id_address, "flat":addresses[i].flat})
            }
        }
        return Array.from(new Set(flats))
    }

    const getTimes = (master, date) =>{
        var times = [
        {
            "time": "9-12"
        },
        {
            "time": "11-13"
        },
        {
            "time": "15-17"
        },
        {
            "time": "16-18"
        },
        {
            "time": "17-19"
        }
        ]
        /* var tims = []
        var dateAppli = ""
        for(var i = 0; i < applications.length; i++){
            if((new Date(applications[i].data_application).getMonth() + 1)<10 && (new Date(applications[i].data_application).getDate()<10)){
                dateAppli = new Date(applications[i].data_application).getFullYear() + "-0" +(new Date(applications[i].data_application).getMonth() + 1) + "-0" + new Date(applications[i].data_application).getDate()
              }
              else if((new Date(applications[i].data_application).getMonth() + 1)<10){
                dateAppli = new Date(applications[i].data_application).getFullYear() + "-0" +(new Date(applications[i].data_application).getMonth() + 1) + "-" + new Date(applications[i].data_application).getDate()
              }
              else if(new Date(applications[i].data_application).getDate()<10){
                dateAppli = new Date(applications[i].data_application).getFullYear() + "-" +(new Date(applications[i].data_application).getMonth() + 1) + "-0" + new Date(applications[i].data_application).getDate()
              }
              
            if(applications[i].name === master && dateAppli === date){
                tims.push({"time":applications[i].time})
            }
        }
        for(var i = 0; i < times.length; i++){
            for(var j = 0; j<tims.length; j++){
                if(times[i].time === tims[j].time){
                    delete times[i]
                }
            }
        }
        localStorage.setItem("times", times) */
        return Array.from(new Set(times))
    }
     
    const handleChangeMaster = (event) => {
        setInputValueMaster(event.target.value);
    };

    const handleChangeStreet = (event) => {
        setInputValueStreet(event.target.value);
    };

    const handleChangeHouse = (event) => {
        setInputValueHouse(event.target.value);
    };

    const handleChangeFlat = (event) => {
        setInputValueFlat(event.target.value);
    };

    const handleChangeTask = (event) => {
        setInputValueTask(event.target.value);
    };  

    const handleChangeData = (event) => {
        setInputValueData(event.target.value);
    };

    const handleChangeTime = (event) => {
        setInputValueTime(event.target.value);
    };

    const handleChangePhone = (event) => {
        setInputValuePhone(event.target.value);
    };

    const handleChangeComment = (event) => {
        setInputValueComment(event.target.value);
    };


    const handleCreate = () =>{
        
        if(inputValueStreet!=="" && inputValueHouse!=="" && inputValueFlat!=="" && inputValueTask!=="" && inputValueMaster!=="" && inputValueTime!==""){
            let id_userr
            for (let i = 0; i < masters.length; i++) {
                if (inputValueMaster === masters[i].name) {
                    id_userr = masters[i].id_user
                }
            }
            const application = {
                "street": inputValueStreet,
                "house" : inputValueHouse,
                "flat" : inputValueFlat,
                "task" : inputValueTask,
                "id_user" : id_userr,
                "time" : inputValueTime,
                "phone_number" : inputValuePhone,
                "comment_manager" : inputValueComment,
                "data_application" : inputValueData
            }
            axios
                .post("http://localhost:5000/api/application/create", application)
                .then()
            alert("Добавление прошло успешно")
        }
        else{
            alert("Не все поля были заполнены")
        }
        
        
    }

    return (
        <div className={st.container}>
            <div className={st.captionForm}>Оставить заявку</div>
            <form>
                <div className={st.inputs}>
                    <div className={st.inputs1}>
                        <div>
                            <span>Выбор мастера</span>
                            <div>
                                <Select
                                    value={inputValueMaster}
                                    onChange={handleChangeMaster}
                                    className={st.inputMaster}
                                    id='inputMaster'
                                >
                                    {masters.map(master =>
                                        <MenuItem value={master.name} key={master.id_user}>
                                            {master.name}
                                        </MenuItem>) }
                                </Select>
                            </div>
                        </div>
                        <div className={st.inputData}>
                            <span>Дата выполнения заявки</span>
                            <TextField
                                id="date"
                                type="date"
                                className={st.inputData}
                                onChange={handleChangeData}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>
                        <div>
                            <span>Время</span>
                            <div>
                                <Select
                                    value={inputValueTime}
                                    onChange={handleChangeTime}
                                    className={st.inputTime}
                                    id='inputTime'
                                >
                                    {getTimes(inputValueMaster, inputValueData).map(time =>
                                        <MenuItem value={time.time} key={time.id_time}>
                                            {time.time}
                                        </MenuItem>) }
                                </Select>
                            </div>
                        </div>
                    </div>
                    <div className={st.inputs2}>
                        <div>
                            <span>Улица</span>
                            <div>
                                <Select
                                    value={inputValueStreet}
                                    onChange={handleChangeStreet}
                                    className={st.inputStreet}
                                    id='inputStreet'
                                >
                                    {streets.map(street =>
                                        <MenuItem value={street.street} key={street.id_address}>
                                            {street.street}
                                        </MenuItem>)}
                                </Select>
                            </div>
                        </div>
                        <div>
                            <span>Дом/корпус</span>
                            <div>
                                <Select
                                    value={inputValueHouse}
                                    onChange={handleChangeHouse}
                                    className={st.inputHouse}
                                    id='inputHouse'
                                >
                                    {getHouses(inputValueStreet).map(house =>
                                        <MenuItem value={house.house} key={house.id_address}>
                                            {house.house}
                                        </MenuItem>)}
                                </Select>
                            </div>
                        </div>
                        <div>
                            <span>Квартира</span>
                            <div>
                            <Select
                                    value={inputValueFlat}
                                    onChange={handleChangeFlat}
                                    className={st.inputFlat}
                                    id='inputFlat'
                                >
                                    {getFlats(inputValueStreet,inputValueHouse).map(flat =>
                                        <MenuItem value={flat.flat} key={flat.id_address}>
                                            {flat.flat}
                                        </MenuItem>)} 
                            </Select>
                            </div>
                        </div>
                        <div>
                            <span>Номер телефона</span>
                            <div>
                                <TextField className={st.inputPhone} value={inputValuePhone} onChange={handleChangePhone} />
                            </div>
                        </div>
                    </div>
                    <div className={st.inputs3}>
                        <div>
                            <span>Что делать?</span>
                            <div>
                                <Select
                                    value={inputValueTask}
                                    onChange={handleChangeTask}
                                    className={st.inputTask}
                                    id='inputTask'
                                >
                                   {tasks.map(task =>
                                        <MenuItem value={task.name_task} key={task.id_task}>
                                            {task.name_task}
                                        </MenuItem>)}
                                </Select>
                            </div>
                        </div>
                        <div>
                            <span>Комментарий</span>
                            <div>
                                <TextField className={st.inputComm} value={inputValueComment} onChange={handleChangeComment}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={st.btns}>
                    <button className={`${st.btnSave} ${st.btn}`} onClick={handleCreate}>Сохранить</button>
                </div>
            </form>
            
        </div>
    )
}

export default ApplicationForm;