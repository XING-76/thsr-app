import { storesType } from '@container/reducers';
import Modal from '@modules/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { SET_MODAL_TYPE, SET_TRAIN_ITEM } from '../model';
import { searchResultData as initSearchResultData } from '../model/data';
import { Options } from '../model/types';
import './css/parentModal.scss';

function ParentModal() {
    const dispatch = useDispatch();
    const {
        modalType,
        parentModalData: { direction, trainStop },
        searchFormField: { startStationId, endStationId },
        trainItem: { trainNumber, departureTime, arrivalTime, travelTime },
        options
    } = useSelector((state: storesType) => ({ ...state.mainPage }));

    const handleInRange = (stationId: string) => {
        const start = Number(startStationId);
        const end = Number(endStationId);
        const station = Number(stationId);

        const south = station < end && station > start;
        const north = station > end && station < start;

        return direction ? north : south;
    };

    const handleRangeStyleType = (stationId: string, type?: string) => {
        if (stationId === startStationId) return `active ${type ? '' : 'first'}`;
        if (stationId === endStationId) return `active  ${type ? '' : 'last'}`;
        if (handleInRange(stationId)) return 'active';
    };

    const handleGetStationName = (stationId: string) => {
        const stationItem: Array<Options> = options.filter((option) => option.id === stationId);
        return stationItem[0]?.name;
    };

    const handleCloseModal = () => {
        dispatch(SET_MODAL_TYPE(false));
        dispatch(SET_TRAIN_ITEM(initSearchResultData));
    };

    return (
        <Modal isOpen={modalType} handleCancel={handleCloseModal}>
            <div className="parentModal__title">
                <div className="parentModal__title_from">{handleGetStationName(startStationId)}</div>
                <div className="parentModal__title_arrow">
                    <span>去程</span>
                </div>
                <div className="parentModal__title_to">{handleGetStationName(endStationId)}</div>
            </div>

            <div className="parentModal__timeField">
                <div className="parentModal__timeField_row title">
                    <div className="parentModal__timeField_item">出發</div>
                    <div className="parentModal__timeField_item">抵達</div>
                    <div className="parentModal__timeField_item">行車</div>
                    <div className="parentModal__timeField_item">車次</div>
                </div>
                <div className="parentModal__timeField_row">
                    <div className="parentModal__timeField_item departureTime">{departureTime}</div>
                    <div className="parentModal__timeField_item arrivalTime">{arrivalTime}</div>
                    <div className="parentModal__timeField_item arrow">{travelTime}</div>
                    <div className="parentModal__timeField_item trainNumber">{trainNumber}</div>
                </div>
            </div>

            <div className="parentModal__field">
                <ul className="parentModal__field_container">
                    {trainStop?.map((item) => (
                        <li key={item.id} className={`parentModal__field_item ${handleRangeStyleType(item.id)}`}>
                            <div>{item.stationName}</div>
                            <span className={`dot ${handleRangeStyleType(item.id, 'dot')}`} />
                            <p>{item.arrivalTime}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </Modal>
    );
}

export default ParentModal;
