import React from "react"
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import styled from "styled-components";

const About = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAii_Rz5kgmeNCHuybbDL3861ZMZFmP1sY"
    })

    const location = {
        lat: 44.10178797075,
        lng: -79.4908950067
    }

    return (
        <Main>
            <h1>About Us</h1>
            <p>
                Welcome to Shiawase Sushi, where happiness and culinary artistry converge to create an unforgettable dining experience. Nestled in the heart of East Gwillimbury, Shiawase Sushi is more than just a restaurant, it's a celebration of Japanese cuisine and culture.
                <br/><br/>
                At Shiawase Sushi, we pride ourselves on sourcing the freshest ingredients to craft exquisite sushi creations that tantalize the taste buds and delight the senses. Our skilled sushi chefs meticulously prepare each dish with precision and passion, ensuring every bite is a symphony of flavors.
                <br/><br/>
                But Shiawase Sushi is more than just sushi. Our menu features a diverse selection of Japanese delights, from traditional sashimi to inventive rolls and delectable appetizers. Whether you're craving the simplicity of a classic nigiri or the complexity of a specialty roll, our menu has something to satisfy every palate.
                <br/><br/>
                But it's not just about the food at Shiawase Sushi; it's about the experience. Our warm and inviting atmosphere sets the stage for an unforgettable dining journey. Whether you're enjoying a meal with friends, celebrating a special occasion, or simply treating yourself to a solo sushi adventure, Shiawase Sushi provides the perfect backdrop for creating cherished memories.
                <br/><br/>
                We believe that great food should be paired with exceptional service, which is why our dedicated staff is committed to ensuring that every guest leaves feeling satisfied and content. From the moment you step through our doors, you'll be treated to the kind of hospitality that makes you feel like part of the family.
                <br/><br/>
                So come join us at Shiawase Sushi and embark on a culinary voyage that's sure to leave you smiling. Whether you're a sushi aficionado or a newcomer to Japanese cuisine, we invite you to experience the joy of dining at Shiawase Sushi – where happiness is always on the menu.
            </p>

            <h2>We are located at 🗺️</h2>

            <div>
                {isLoaded ? (
                    <GoogleMap
                        mapContainerStyle={{width: '500px', height: '400px'}}
                        center={location}
                        zoom={17}
                    >
                        <Marker position={location} />
                    </GoogleMap>
                ) : <></>}
            </div>
        </Main>
    )
}

const Main = styled.main`
    display: flex;
    flex-direction: column;
    padding: 50px 150px;
    background-color: var(--background-color);

    h1 {
        align-self: center;
        margin-bottom: 50px;
        font-style: oblique;
    }

    p {
        margin-bottom: 50px;
        font-size: 18px;
        text-align: justify;
    }
    
    h2 {
        align-self: center;
        padding-bottom: 20px;
    }

    div {
        align-self: center;
    }

    @media (max-width: 900px) {
        padding: 50px 50px;
    }

    @media (max-width: 600px) {
        padding: 50px 30px;

        p {
            font-size: 16px;
        }

        div {
            max-width: 300px;
            max-height: 240px;
        }
    }
`

export default About