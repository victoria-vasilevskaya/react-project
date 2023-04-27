import React from 'react';
import st from './application-form.module.css';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';


function ApplicationForm() {

    const [inputValueMaster, setInputValueMaster] = React.useState('');

    const handleChangeMaster = (event) => {
        setInputValueMaster(event.target.value);
    };

    const [inputValueDej, setInputValueDej] = React.useState('');

    const handleChangeDej = (event) => {
        setInputValueDej(event.target.value);
    };

    const [inputValueStreet, setInputValueStreet] = React.useState('');

    const handleChangeStreet = (event) => {
        setInputValueStreet(event.target.value);
    };

    const [inputValueHouse, setInputValueHouse] = React.useState('');

    const handleChangeHouse = (event) => {
        setInputValueHouse(event.target.value);
    };

    const [inputValueTask, setInputValueTask] = React.useState('');

    const handleChangeTask = (event) => {
        setInputValueTask(event.target.value);
    };

    const [inputValueData, setInputValueData] = React.useState('');

    const handleChangeData = (event) => {
        setInputValueData(event.target.value);
    };

    const [inputValueTime, setInputValueTime] = React.useState('');

    const handleChangeTime = (event) => {
        setInputValueTime(event.target.value);
    };

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
                                    <MenuItem value={10}>Боря</MenuItem>
                                    <MenuItem value={20}>Света</MenuItem>
                                    <MenuItem value={30}>Литий</MenuItem>
                                </Select>
                            </div>
                        </div>
                        <div>
                            <span>Дежурный?</span>
                            <div>
                                <Select
                                    value={inputValueDej}
                                    onChange={handleChangeDej}
                                    className={st.inputDej}
                                    id='inputDej'
                                >
                                    <MenuItem value={10}>Да</MenuItem>
                                    <MenuItem value={20}>Нет</MenuItem>
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
                                    <MenuItem value={10}>Помидорная</MenuItem>
                                    <MenuItem value={20}>Шашлычная</MenuItem>
                                    <MenuItem value={30}>Проспект Гномов</MenuItem>
                                    <MenuItem value={40}>Переулок Зависимостей</MenuItem>
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
                                    <MenuItem value={10}>1</MenuItem>
                                    <MenuItem value={20}>1к2</MenuItem>
                                    <MenuItem value={30}>2к4</MenuItem>
                                    <MenuItem value={40}>3к1</MenuItem>
                                </Select>
                            </div>
                        </div>
                        <div>
                            <span>Квартира</span>
                            <div>
                                
                            </div>
                        </div>
                        <div>
                            <span>Номер телефона</span>
                            <div>
                                
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
                                    <MenuItem value={10}>Подключить ТВ</MenuItem>
                                    <MenuItem value={20}>Отключить ТВ</MenuItem>
                                </Select>
                            </div>
                        </div>
                        <div>
                            <span>Дата</span>
                            <div>
                                <TextField
                                    id="date"
                                    type="date"
                                    defaultValue="2023-04-28"
                                    className={st.inputData}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </div>
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
                                    <MenuItem value={10}>9-12</MenuItem>
                                    <MenuItem value={20}>11-13</MenuItem>
                                    <MenuItem value={30}>15-17</MenuItem>
                                </Select>
                            </div>
                        </div>
                    </div>
                    <div className={st.inputs4}>
                        <div className={st.inputCom}>
                            <span>Комментарий</span>
                            <TextField className={st.inputComm} id="inputComment" variant="outlined" />
                        </div>
                    </div>
                </div>
                <div className={st.btns}>
                    <button className={`${st.btnSave} ${st.btn}`}>Сохранить</button>
                    <button className={`${st.btnCancel} ${st.btn}`}>Отменить</button>
                </div>
            </form>
        </div>
    )
}

export default ApplicationForm;