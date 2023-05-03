import React, {useState} from 'react';
import {Carousel} from "react-bootstrap";
import "./Slider.css";

const Slider = () => {
    const [index, setIndex] = useState(0);
    
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    
    return (
        <Carousel interval={1500} activeIndex={index} onSelect={handleSelect} className="my-slider">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://media.istockphoto.com/id/485261548/photo/tasty-instant-noodles-and-spices-in-bowl-on-wooden-floor.jpg?s=170667a&w=0&k=20&c=y0Pb8Li2RREoESaW9N6rmnDtuydMdrehbVx2c0u7--Q="
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Clam Chowder</h3>
                    <p>Description of Recipe 1</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://media.istockphoto.com/id/965002050/photo/preparing-frittata-with-paprika-spring-onions-peas-spinach-and-parmesan.jpg?s=170667a&w=0&k=20&c=fO6mvk40y22hDjDKmgZCm236n4RbENb-sNjwKToQ-_w="
                    alt="Second slide"
                />
                
                <Carousel.Caption>
                    <h3>Buffalo Wings</h3>
                    <p>Description of Recipe 2</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                    alt="Third slide"
                />
                
                <Carousel.Caption>
                    <h3>Macaroni and Cheese</h3>
                    <p>Description of Recipe 3</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://media.istockphoto.com/id/665080188/photo/frittata-with-asparagus-ingredients.jpg?s=170667a&w=0&k=20&c=vu-PwTMolIc8a1Wd5KDpDkpx4ejK3ojqa0n5ym44iw4="
                    alt="Fourth slide"
                />
                
                <Carousel.Caption>
                    <h3>Chocolate Pancakes</h3>
                    <p>Description of Recipe 4</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;