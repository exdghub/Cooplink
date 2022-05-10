import React from 'react'
import HeaderTitle from 'shared/components/headerTitle/headerTitle.component'
import Card from './components/card/card.component'
import man from "assets/images/man.jpg"

const TestimonalsSection = () => {
    return (
        <div className="container">
            <HeaderTitle titleText={"Our"} colorText={"Testtimonial"} />

            <div className="mt-5 mb-5">
                <Card name='Sushant Shrestha' title='Mero Bank Manager' description="is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s." rate={5} image={man} />
            </div>
        </div>
    )
}

export default TestimonalsSection