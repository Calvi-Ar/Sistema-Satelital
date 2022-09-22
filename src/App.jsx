import React from 'react'

import { Button, Container,FormLabel, FormControl, Input, Stack, Text } from '@chakra-ui/react'

import imagen1 from './assets/img1.png'

function App () {
  return (
    <Container  maxWidth={'10xl'} maxHeight={'2xl'} justifyItems={'center'} alignItems={'center'} padding={10} backgroundImage={imagen1} bgSize={1440} bgRepeat={'none'}>

      <Stack alignItems={'center'} justifyContent={'center'} spacing={8}   >
        {/* <Stack padding={6} bg= {'skyblue'}>
          <Text textAlign={'center'} fontSize= {{ base: 'xl', sm: '2xl', md: '3xl' }}>Seguimiento Satelital</Text>
        </Stack> */}

        <Stack  maxW={650} maxH={620} padding={10} alignItems={'center'} justifyContent={'center'} fontSize= {{ base: 'xl', sm: '2xl', md: '3xl' }}
              
              bg= {'blackAlpha.600' }
              spacing={4} borderRadius={50}>


            <Stack>
                <Text color={'white'} fontWeight={'bold'} textAlign={'center'} >¡Solicitá una cotización ahora!</Text>
            </Stack>

            

            <FormControl >

              <Stack direction={['column', 'row']} >
                
                <Stack >
                      <FormLabel fontWeight={'bold'} color={'white'}>Nombre *</FormLabel>
                      <Input color={'white'} placeholder='...' _placeholder={{ opacity: 1, color: 'white' }} type="text" />
                      <FormLabel fontWeight={'bold'} color={'white'}>DNI *</FormLabel>
                      <Input color={'white'} placeholder='...' _placeholder={{ opacity: 1, color: 'white' }} type="text" />
                      <FormLabel fontWeight={'bold'} color={'white'}>Localidad *</FormLabel>  
                      <Input color={'white'} placeholder='...' _placeholder={{ opacity: 1, color: 'white' }}  type="text" />
                      <FormLabel fontWeight={'bold'} color={'white'}>Telefono Celular *</FormLabel>
                      <Input color={'white'} placeholder='...' _placeholder={{ opacity: 1, color: 'white' }}  type="text" /> 
              </Stack>
              <Stack >
                      <FormLabel fontWeight={'bold'} color={'white'}>Apellido *</FormLabel>
                      <Input color={'white'} placeholder='...' _placeholder={{ opacity: 1, color: 'white' }}  type="text" />
                      <FormLabel fontWeight={'bold'} color={'white'}>Domicilio *</FormLabel>
                      <Input color={'white'} placeholder='...' _placeholder={{ opacity: 1, color: 'white' }}  type="text" />
                      <FormLabel fontWeight={'bold'} color={'white'}>Codigo Postal *</FormLabel>  
                      <Input color={'white'} placeholder='...' _placeholder={{ opacity: 1, color: 'white' }}  type="text" />
                      <FormLabel fontWeight={'bold'} color={'white'}>Telefono Alternativo</FormLabel>
                      <Input color={'white'} placeholder='...' _placeholder={{ opacity: 1, color: 'white' }}  type="text" />
              </Stack>

                

              </Stack>
              
        
              <Stack >
                      <FormLabel fontWeight={'bold'} color={'white'}>Email *</FormLabel>
                      <Input color={'white'} placeholder='...' _placeholder={{ opacity: 1, color: 'white' }} type="email" />
                      <FormLabel fontWeight={'bold'} color={'white'}>Email Alternativo</FormLabel>
                      <Input color={'white'} placeholder='...' _placeholder={{ opacity: 1, color: 'white' }} type='email' />
              </Stack>
              
              <Stack mt={4} alignItems={'center'}>
              <Button type='submit'>Enviar</Button>
              </Stack>
              
                           
            </FormControl>

            

        </Stack>

        {/* <Stack padding={6} bg= {{ base: 'orange.500', sm: 'brown.300', md: 'blue.200', lg: 'green.300', xl: 'red.400' }}>
          <Text textAlign={'center'} fontSize= {{ base: 'xl', sm: '2xl', md: '3xl' }} >Aca iría el contenido del footer</Text>
        </Stack> */}

      </Stack>

    </Container>
  )
}

export default App
