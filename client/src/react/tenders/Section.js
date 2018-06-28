import React from 'react';

export default ({tend, onClickInfo, onClickEdit}) =>
      (<div className='tendcont' id = {"tender"+tend.id}>
      <div className='tendStageFill tend textcentering'>{tend.stage}</div>
        <div className="tendid tend textcentering" type="button">{tend.id}<br/><span className="lower">№ аукциона</span></div>
        <div className="tendName tend textcentering" type="button">{tend.contact}<br/><span className="lower">Организация</span></div>
        <div className="tendCity tend textcentering">{tend.city}<br/><span className="lower">Город</span></div>
        <div className="tendPrice tend textcentering">{tend.price}<br/><span className="lower">Начальная цена</span></div>
        <div className='tendInf tend textcentering' type="button" id="theButton" onClick={onClickInfo}>Подробная информация</div>
        <div className="tendEdit tend textcentering" type="button" onClick={onClickEdit} >Edit</div>
        </div>
    )
