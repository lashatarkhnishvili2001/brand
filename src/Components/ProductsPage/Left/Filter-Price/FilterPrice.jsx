import React, { useEffect, useState } from 'react'
import { Heading6} from '../../../Headings';
import { ExpandMoreSvg } from '../../../../static/icons';
import { Slider } from 'antd';
import { ButtonNormalWhite } from '../../../Buttons';
import { useSearchParams } from 'react-router-dom';

const FilterPrice = () => {
    const [toggle, setToggle] = useState(false);
    const [firstValue, setFirstValue] = useState(0);
    const [secondValue, setSecondValue] = useState(9999);
    const [searchParams, setSearchParams] = useSearchParams()

    const params = Object.fromEntries([...searchParams]);

    useEffect(() => {
        if(params.priceRange) {
            setFirstValue(+(params.priceRange.split('-')) [0])
            setSecondValue(+(params.priceRange.split('-'))[1])
        }
    }, [])

    const handlePriceRange = () => {
        if (firstValue !== '' &&
            +firstValue >= 0 &&
            secondValue !== '' &&
            +secondValue > 0 &&
            +firstValue < +secondValue) {
            setSearchParams({
                ...params,
                priceRange: firstValue + '-' + secondValue,

            })
        }
    }

    const handleSliderRange = (value) => {
        setFirstValue(value[0])
        setSecondValue(value[1])
    }

    return (
        <div className={`filters ${toggle? 'active' : ''}`}>
            <div className="filters-header" onClick={() => (setToggle(prev => !prev))}>
                <Heading6 text={'price range'}/>
                <ExpandMoreSvg/>
            </div>
                <div className="filters-body" >
                    <form onSubmit={(e) => (e.preventDefault())}>
                        <ul className='list-ul'>
                            <li className="list-li">
                                <Slider range={{ draggableTrack: true }}
                                value={[firstValue, secondValue]}
                                defaultValue={[0, 9999]} 
                                min={0} max={9999}
                                onChange={(value) => (handleSliderRange(value))}/>
                            </li>
                        </ul>
                        <ul className='list-ul'>
                            <li className="list-li">
                                <div className="slider-container">
                                    <div className="min-input">
                                        <label htmlFor="min" className='min-input'>Min</label>
                                        <input type='number' placeholder={`0`} value={+firstValue} id='input-min'  onChange={(e) => (setFirstValue(e.target.value))}/>
                                    </div>
                                    <div className="max-input">
                                        <label htmlFor="max" className='max-input'>Max</label>
                                        <input type='number' placeholder={`9999`}  value={+secondValue} id='input-max'  onChange={(e) => (setSecondValue(e.target.value))}/>
                                    </div>
                                </div>
                                <div className="slider-button-apple">
                                    <ButtonNormalWhite text={'Apple'} type={'submit'} onClick={handlePriceRange}/>
                                </div>
                            </li>
                        </ul>
                    </form>
                </div>  
        </div> 
    )
}

export default FilterPrice