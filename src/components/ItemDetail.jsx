import React from 'react'
import { Card, Heading, Text, CardBody, Stack, CardFooter, Image } from '@chakra-ui/react'
import ItemCount from './ItemCount'

const ItemDetail = ({producto}) => {



  return (
    <>
        
                <div key={producto.id}>
                    <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    >
                        <Image
                            objectFit='cover'
                            maxW={{ base: '100%', sm: '200px' }}
                            src= {producto.imagen}
                            alt='img'
                            />
            
                        <Stack>
                            <CardBody>
                                <Heading size='md'>{producto.nombre}</Heading>
                        
                                    <Text color='pink.600' fontSize='2xl'>
                                    ${producto.precio}
                                    </Text>
                                    <Text py='2'>
                                        {producto.descripcion}
                                    </Text>
                                    <Text py='2'>
                                        Stock disponible: {producto.stock} 
                                    </Text>
                                </CardBody>
                    
                                <CardFooter>
                                    <ItemCount p={producto} />
                                </CardFooter>
                            </Stack>
                    </Card>
                </div>

            
        
    </>
  )
}

export default ItemDetail