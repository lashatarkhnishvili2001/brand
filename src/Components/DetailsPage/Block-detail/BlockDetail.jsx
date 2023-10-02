import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navigation from './navigation';
import { detailsArray } from '../../../static/details';
import { Heading3, Subheading, Subheading1 } from '../../Headings';
import { CheckSvg } from '../../../static/icons';
import './BlockDetail.css'

const BlockDetail = (props) => {

    const {product} = props;
    const { name, description} = product

    const navigate = useNavigate();
    const {detailsID} = useParams();
    const [chosenDetails, setChosenDetails] = useState({
        found: true,
        data: {}
    });



    // useEffect(() =>{
    //     const currentElement = detailsArray.find((item) => item.id === detailsID.toLocaleLowerCase()); 
    //     if(currentElement) {
    //         setChosenDetails({
    //             found:true,
    //             data: {...currentElement}
    //         });
    //     }else{
    //         setChosenDetails({
    //             found:false,
    //             data: {}
    //         })
    //     }
    // }, [detailsID])


    // useEffect(() => {
    //     if (!chosenDetails.found) {
    //         setTimeout(() => {
    //             navigate('/')
    //         }, 1000)
    //     }
    // }, [chosenDetails, navigate] )



    return (
        <div className="Block-detail">
            {chosenDetails.found ? (
                <div className="content-container" >
                    <Navigation detailInformation={detailsArray} />
                    <div className="detail-description">
                            <Subheading text={description} />
                    </div>
                    <div className="detail-two-box">
                        <div className="detail-item-left">
                            <Subheading1 text={'model:'}/>
                        </div>
                        <div className="detail-item-right">
                            <Subheading1 text={'#8786867'}/>
                        </div>
                        {chosenDetails.data?.name && 
                            <ul>
                                <li>
                                    <div className="detail-item-left">
                                        <Subheading1 text={chosenDetails.data?.name.model}/>
                                        
                                    </div>
                                </li>
                            </ul>
                        }
                    </div>
                    <div className='detail-feature'>
                        {chosenDetails.data?.feature?.map((item, index) => {
                            return <React.Fragment key={index}>
                                <div>
                                <CheckSvg/> <Subheading text={item}/>
                                </div>
                            </React.Fragment>
                        })}
                    </div>

                </div>
                
            ): (
                <div>details not found</div>
            )}
            
        </div>
    )
}

export default BlockDetail