//frontend\src\Home.jsx
import React from 'react'
import { Box, Stack } from "@chakra-ui/react"
import Card from './Card'
import axios from "axios";


const Home = () => {
  const checkoutHandler = async (amount) => {
  console.log("Checkout Handler Called");
  try{
  var response = await axios.get("http://localhost:5000/api/getkey");
    const key = response.data.key;

  console.log("API Key:", key);
  response = await axios.post("http://localhost:5000/api/checkout", { amount });
const order = response.data.order;

  console.log("Order:", order);
        
        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "TGP",
            description: "RazorPay payment gateway trial",
            order_id: order.id,
            callback_url: "http://localhost:5000/api/paymentVerification",
            prefill: {
                name: "TGP",
                email: "trialemail@example.com",
                contact: "9999999999"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#123123"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
    }catch(error){
        console.error("Error during checkout:",error);
    }
};

    return (
        <Box>
            <Stack h={"100vh"} alignItems="center" justifyContent="center" direction={["column", "row"]}>
                <Card amount={1000} img={"https://img.freepik.com/free-photo/still-life-wireless-cyberpunk-headphones_23-2151072198.jpg?w=996&t=st=1718949629~exp=1718950229~hmac=d8fb973d399423572a8f0cb746bf94b4d708f16c1a85f99e867cb8645eb1a8bf"}  desc={"Earpods"} checkoutHandler={checkoutHandler} />
                <Card amount={3000} img={"http://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_32c26ad194234d42b3cd9e582a21c99b"} desc={"Camera"} checkoutHandler={checkoutHandler} />
                <Card amount={2000} img={"https://img.freepik.com/free-photo/still-life-wireless-cyberpunk-headphones_23-2151072227.jpg?size=626&ext=jpg&ga=GA1.1.175894772.1718949560&semt=sph"} desc={"Headphone"} checkoutHandler={checkoutHandler} />
            </Stack>
        </Box>
    );
};

export default Home;