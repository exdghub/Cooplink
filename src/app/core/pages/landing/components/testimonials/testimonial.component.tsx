import React from 'react'
import HeaderTitle from 'shared/components/headerTitle/headerTitle.component'
import Card from './components/card/card.component'
import man from "assets/images/man.jpg"
import styles from "./testimonials.module.scss"

const TestimonalsSection = () => {
    return (
        <div className="container">
            <HeaderTitle titleText={"Our"} colorText={"Testtimonial"} />
            <div id="multi-item-example" className="carousel slide carousel-multi-item py-5" data-ride="carousel">

                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active ">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <Card name='Sushant Shrestha' title='Mero Bank Manager' description="is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s." rate={5} image={man} />
                            </div>

                            <div className="col-lg-6 col-sm-12">
                                <Card name='Sushant Shrestha' title='Mero Bank Manager' description="is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s." rate={5} image={man} />
                            </div>
                        </div>

                    </div>

                    <div className="carousel-item">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <Card name='Sushant Shrestha' title='Mero Bank Manager' description="is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s." rate={5} image={man} />
                            </div>

                            <div className="col-lg-6 col-sm-12">
                                <Card name='Sushant Shrestha' title='Mero Bank Manager' description="is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s." rate={5} image={man} />
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">

                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <Card name='Sushant Shrestha' title='Mero Bank Manager' description="is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s." rate={5} image={man} />
                            </div>

                            <div className="col-lg-6 col-sm-12">
                                <Card name='Sushant Shrestha' title='Mero Bank Manager' description="is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s." rate={5} image={man} />
                            </div>
                        </div>
                    </div>
                </div>
                <ol className={`${styles["indicator"]} carousel-indicators`}>
                    <li data-target="#multi-item-example" data-slide-to="0" className={`active`}></li>
                    <li data-target="#multi-item-example" data-slide-to="1"></li>
                    <li data-target="#multi-item-example" data-slide-to="2"></li>
                </ol>

            </div>
        </div >
    )
}

export default TestimonalsSection