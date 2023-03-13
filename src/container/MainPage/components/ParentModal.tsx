import { storesType } from '@container/reducers';
import Modal from '@modules/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { SET_MODAL_TYPE, SET_TRAIN_ITEM } from '../model';
import { searchResultData as initSearchResultData } from '../model/data';
import './css/parentModal.scss';

function ParentModal() {
    const dispatch = useDispatch();
    const {
        modalType,
        parentModalData: { startStation, endStation, trainStop }
        // trainItem: { trainNumber, departureTime, arrivalTime, travelTime }
    } = useSelector((state: storesType) => ({ ...state.mainPage }));

    const handleCloseModal = () => {
        dispatch(SET_MODAL_TYPE(false));
        dispatch(SET_TRAIN_ITEM(initSearchResultData));
    };

    return (
        <Modal isOpen={modalType} handleCancel={handleCloseModal}>
            <div className="parentModal__title">
                <div className="parentModal__title_from">{startStation}</div>
                <div className="parentModal__title_arrow">
                    <span>去程</span>
                </div>
                <div className="parentModal__title_to">{endStation}</div>
            </div>

            {/* <div className="parentModal__timeField">
                <div className="parentModal__timeField_departureTime">{departureTime}</div>
                <div className="parentModal__timeField_arrow">{travelTime}</div>
                <div className="parentModal__timeField_arrivalTime">{arrivalTime}</div>
                <div className="parentModal__timeField_trainNumber">{trainNumber}</div>
            </div> */}

            <div className="parentModal__field">
                <ul className="parentModal__field_container">
                    {trainStop?.map((item) => (
                        <li className="parentModal__field_item">
                            <div>{item.stationName}</div>
                            <span className="dot" />
                            <p>{item.arrivalTime}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </Modal>
    );
}

export default ParentModal;
