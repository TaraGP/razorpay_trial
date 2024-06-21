//frontend\src\Card.jsx
import { Button, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Card = ({ amount, img, desc, checkoutHandler }) => {
    return (
        <VStack>
            <Image src={img} boxSize={"64"} objectFit="cover" />
            <Text>₹{amount}</Text>
            <Text>{desc}</Text>
            <Button onClick={() => checkoutHandler(amount)}>Buy Now</Button>
        </VStack>
    )
}

export default Card;