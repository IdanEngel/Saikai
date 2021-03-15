import React from 'react';
import { addIcon, addPositionSVG } from '../../../assets/icons';
import './style.css';

const List = ({
  dataList,
  currentUser,
  setError,
  setMessage,
  setAddPosition,
  setSelectedPosition,
}) => {
  return (
    <>
      {!dataList ? (
        <div className='d-flex justify-content-center'>
          <div className='spinner-border text-success' role='status'></div>
        </div>
      ) : (
        <div>
          <div class='col-md-1 addButtonWrapper  mt-2 mb-2'>
            <button
              type='button'
              className='addPositionButton'
              data-toggle='modal'
              data-target='.bd-add-position'
              onClick={() => setAddPosition(true)}
            >
              <img src={addPositionSVG} className='mr-3' alt='add button' />
            </button>
          </div>
          <div className='container'>
            <div className='row row-col-6 text-center '>
              {dataList.map((data) => (
                <div key={data.title} className='p-2 mb-4 col-md cardLists'>
                  <h3 className='listTitle'>{data.title}</h3>
                  <div id='positionWrapper'>
                    {data.items.map((company) => {
                      const cardColorsId =
                        company.status === 'Denied'
                          ? 'denied'
                          : company.status === 'Contract'
                          ? 'contract'
                          : company.status === 'In Progress'
                          ? 'inProgress'
                          : company.status === 'Received Task'
                          ? 'receivedTask'
                          : company.status === 'Applied'
                          ? 'applied'
                          : '';
                      return (
                        currentUser.uid === company.uid &&
                        data.title === company.status && (
                          <div
                            key={company.id}
                            className='card cardStyle mb-2 mt-3'
                            data-toggle='modal'
                            data-backdrop='static'
                            data-keyboard='false'
                            data-target='.bd-selected-position'
                          >
                            <div
                              className={`p-1 cardButton`}
                              id={`${cardColorsId}`}
                              onClick={() => {
                                setError('');
                                setMessage('');
                                setSelectedPosition(company);
                              }}
                            >
                              {company.position}
                              <br />
                              <span className='text-white-50 font-smaller'>
                                {company.name}
                              </span>
                            </div>
                          </div>
                        )
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* <div className='d-flex justify-content-end mr-2'>
        <button
          type='button'
          className='mt-3 addPositionButton'
          data-toggle='modal'
          data-target='.bd-add-position'
          onClick={() => setAddPosition(true)}
        >
          <img src={addIcon} className='mr-3 addIcon' alt='add button' />
          Add new Position
        </button>
      </div> */}
    </>
  );
};

export default List;