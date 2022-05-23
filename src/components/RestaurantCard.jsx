import React from "react";
import {Col,Card} from "antd";
import { useNavigate } from "react-router-dom";



export default function RestaurantCard({restaurant}){
    let navigate = useNavigate()
    return (
        <>
        <Col style={{width:'300px', margin:'1em'}}> 
                <Card 
                    loading={!restaurant}
                    onClick={() => navigate (`/restaurants/${restaurant?.id}`)}
                    cover ={restaurant && <img alt={`Typical meal at ${restaurant?.name}`} src={restaurant?.image} />}
                
                    hoverable>
                    <Card.Meta title ={restaurant?.name} description = {restaurant?.address}/>
                    
                </Card>
        </Col>
        </>
    )
}