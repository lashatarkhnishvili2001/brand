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
    //     const currentElement = detailsArray.find((item) => item.id === detailsID); 
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
                    </div>
                    <div className="detail-two-box">
                        <div className="detail-item-left">
                            <Subheading1 text={'Style:'}/>
                        </div>
                        <div className="detail-item-right">
                            <Subheading1 text={'Classic style'}/>
                        </div>
                    </div>
                    <div className="detail-two-box">
                        <div className="detail-item-left">
                            <Subheading1 text={'Certificate:'}/>
                        </div>
                        <div className="detail-item-right">
                            <Subheading1 text={'ISO-898921212'}/>
                        </div>
                    </div>
                    <div className="detail-two-box">
                        <div className="detail-item-left">
                            <Subheading1 text={'Size:'}/>
                        </div>
                        <div className="detail-item-right">
                            <Subheading1 text={'34mm x 450mm x 19mm'}/>
                        </div>
                    </div>
                    <div className="detail-two-box">
                        <div className="detail-item-left">
                            <Subheading1 text={'Memory:'}/>
                        </div>
                        <div className="detail-item-right">
                            <Subheading1 text={'36GB RAM'}/>
                        </div>
                    </div>
                    <div className='detail-feature'>
                        {/* {detailsArray.map((item, index) => {
                            return <React.Fragment key={index}>
                                <div className='detail-feature-col'>
                                <CheckSvg/> <Subheading text={item.feature}/>
                                </div>
                            </React.Fragment>
                        })} */}
                        <div className='detail-feature-col'>
                        <CheckSvg/> <Subheading text={"Some great feature name here"}/>
                        </div>
                        <div className='detail-feature-col'>
                        <CheckSvg/> <Subheading text={"Lorem ipsum dolor sit amet, consectetur"}/>
                        </div>
                        <div className='detail-feature-col'>
                        <CheckSvg/> <Subheading text={"Duis aute irure dolor in reprehenderit"}/>
                        </div>
                        <div className='detail-feature-col'>
                        <CheckSvg/> <Subheading text={"Some great feature name here"}/>
                        </div>
                    </div>

                </div>
                
            ): (
                <div>details not found</div>
            )}
            
        </div>
    )
}

export default BlockDetail