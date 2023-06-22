import React, {useState, useEffect} from "react";
import st from './updateApplication.module.css'
import TextField from '@material-ui/core/TextField';
import MuiMenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import axios from 'axios'

const UpdateApplicationModal = ({show, onHide}, props) => {

    const actions = [
        {
            "id_action": 1,
            "name_action": "Отменена"
        },
        {
            "id_action": 2,
            "name_action": "В работе"
        },
        {
            "id_action": 3,
            "name_action": "Выполнена"
        },
        {
            "id_action": 4,
            "name_action": "Не выполнена"
        }
    ]

    const [inputValueAction, setInputValueAction] = useState('')
    const [applications, setApplications] = useState([])
    const application = {}
    const [inputValueComment, setInputValueComment] = useState('')

    const handleChangeAction = (event) => {
        setInputValueAction(event.target.value);
    };

    useEffect(() => {
        axios
            .get('http://localhost:5000/api/application/all')
            .then(data => {
                setApplications(data.data)
            })
    }, [])

    const getApplication = () => {
        for(let i = 0; i< applications.length; i++){
            if(applications[i].id_application === localStorage.getItem("Row")){
                application.push({
                    "master": applications[i].name,
                    "date": new Date(applications[i].data_application).getDate() + "-" + (new Date(applications[i].data_application).getMonth() + 1) + "-" + new Date(applications[i].data_application).getFullYear(),
                    "time": applications[i].time,
                    "address": applications[i].street + " д." + applications[i].house + " кв." + applications[i].flat,
                    "phone": applications[i].phone_number,
                    "task": applications[i].name_task,
                    "action": applications[i].name_action,
                    "comment_master": applications[i].comment_master
                  })
            }
        }
        return application
    }

    return(
        (localStorage.getItem("role") === "Менеджер") ?
            (<div className={show ? (`${st.modal} ${st.active}`) : (`${st.modal}`)} onClick={() => onHide(false)}>
                <div className={st.container} onClick={e => e.stopPropagation()}>
                    <div className={st.caption}>
                        <span>Редактирование заявки</span>
                        <button className={st.btnClose} onClick={() => onHide(false)}>Х</button>
                    </div>
                    <div className={st.inputs}>
                        <div className={st.labels}>
                            <div className={st.inputs1}>
                                <div className={st.labelMaster}>
                                    <span>Мастер</span>
                                    <span>{getApplication.master}</span>
                                </div>
                                <div className={st.labelAddress}>
                                    <span>Адрес</span>
                                    <span>{getApplication.address}</span>
                                </div>
                            </div>
                            <div className={st.inputs2}>
                                <div className={st.labelData}>
                                    <span>Дата</span>
                                    <span>{getApplication.date}</span>
                                </div>
                                <div className={st.labelTime}>
                                    <span>Время</span>
                                    <span>{getApplication.time}</span>
                                </div>
                            </div>
                            <div className={st.inputs3}>
                                <div className={st.labelTask}>
                                    <span>Вид заявки</span>
                                    <span>{getApplication.task}</span>
                                </div>
                                <div className={st.inputCommentMaster}>
                                    <span>Комментарий мастера</span>
                                    <span>{getApplication.comment_master}</span>
                                </div>
                            </div>
                        </div>
                        <div className={st.input}>
                            <div className={st.inputAction}>
                                <span>Статус</span>
                                <Select
                                    value={inputValueAction}
                                    onChange={handleChangeAction}
                                    id='inputAction'
                                >
                                    {actions.map(action =>
                                        <MuiMenuItem value={action.name_action} key={action.id_action}>
                                            {action.name_action}
                                        </MuiMenuItem>) }
                                </Select>
                            </div>
                            <div className={st.inputCommentManager}>
                                <span>Комментарий менеджера</span>
                                <TextField className={st.inputComm} value={inputValueComment}/> 
                            </div>
                        </div>
                    </div>
                    <div className={st.buttons}></div>
                </div>
            </div>
            ) : (
                <div className={show ? (`${st.modal} ${st.active}`) : (`${st.modal}`)} onClick={() => onHide(false)}>
                     <div className={st.container} onClick={e => e.stopPropagation()}>
                    <div className={st.caption}>
                        <span>Редактирование заявки</span>
                        <button className={st.btnClose} onClick={() => onHide(false)}>Х</button>
                    </div>
                    <div className={st.inputs}>
                        <div className={st.labels}>
                            <div className={st.inputs1}>
                                <div className={st.labelMaster}>
                                    <span>Мастер</span>
                                    <span>Перов Т.</span>
                                </div>
                                <div className={st.labelAddress}>
                                    <span>Адрес</span>
                                    <span>Томина д.12В кв.19</span>
                                </div>
                            </div>
                            <div className={st.inputs2}>
                                <div className={st.labelData}>
                                    <span>Дата</span>
                                    <span>12-6-2023</span>
                                </div>
                                <div className={st.labelTime}>
                                    <span>Время</span>
                                    <span>17-19</span>
                                </div>
                            </div>
                            <div className={st.inputs3}>
                                <div className={st.labelTask}>
                                    <span>Вид заявки</span>
                                    <span>Подкл. общего П.</span>
                                </div>
                                <div className={st.inputCommentManager}>
                                    <span>Комментарий менеджера</span>
                                    <span>Почини то или это</span>
                                    {/* <TextField className={st.inputComm} value={inputValueComment} onChange={handleChangeComment}/> */}
                                </div>
                            </div>
                        </div>
                        <div className={st.input}>
                            <div className={st.inputAction}>
                                <span>Статус</span>
                                <Select
                                    value={inputValueAction}
                                    onChange={handleChangeAction}
                                    id='inputAction'
                                >
                                    {actions.map(action =>
                                        <MuiMenuItem value={action.name_action} key={action.id_action}>
                                            {action.name_action}
                                        </MuiMenuItem>) }
                                </Select>
                                
                            </div>
                            <div className={st.inputCommentMaster}>
                                <span>Комментарий мастера</span>
                                
                                {/* <TextField className={st.inputComm} value={inputValueComment} onChange={handleChangeComment}/> */}
                            </div>
                        </div>
                    </div>
                    <div className={st.buttons}>
                        <button className={`${st.btnSave} ${st.btn}`}>Сохранить</button>
                    </div>
                </div>
                </div>
            )
    )
}

export default UpdateApplicationModal