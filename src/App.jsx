import React from 'react'

import { Button, Container, FormLabel, FormControl, Input, Stack, Text } from '@chakra-ui/react'

import imagen1 from './assets/img1.png'

function App () {
  return (
    <Container  maxWidth={'10xl'} maxHeight={'2xl'} justifyItems={'center'} alignItems={'center'} padding={10} backgroundImage={imagen1} bgSize={1380}>

      <Stack alignItems={'center'} justifyContent={'center'} spacing={8}   >
        {/* <Stack padding={6} bg= {'skyblue'}>
          <Text textAlign={'center'} fontSize= {{ base: 'xl', sm: '2xl', md: '3xl' }}>Seguimiento Satelital</Text>
        </Stack> */}

        <Stack  padding={10} alignItems={'center'} justifyContent={'center'} fontSize= {{ base: 'xl', sm: '2xl', md: '3xl' }}
              
              bg= {'blackAlpha.600' }
              spacing={6} borderRadius={50}>


            <Stack>
                <Text color={'white'} fontWeight={'bold'} textAlign={'center'} >Solicita una cotización ahora!</Text>
            </Stack>

            

            <FormControl >

              <Stack direction={'row'} >
                
                <Stack >
                      <FormLabel fontWeight={'bold'} color={'white'}>Nombre *</FormLabel>
                      <Input  placeholder='Nombre' type="text" />
                      <FormLabel fontWeight={'bold'} color={'white'}>DNI *</FormLabel>
                      <Input placeholder='N° Documento' type="text" />
                      <FormLabel fontWeight={'bold'} color={'white'}>Localidad *</FormLabel>  
                      <Input type="text" />
                      <FormLabel fontWeight={'bold'} color={'white'}>Telefono Celular *</FormLabel>
                      <Input type="text" /> 
              </Stack>
              <Stack >
                      <FormLabel fontWeight={'bold'} color={'white'}>Apellido *</FormLabel>
                      <Input placeholder='Apellido' type="text" color={'red.800'} />
                      <FormLabel fontWeight={'bold'} color={'white'}>Domicilio *</FormLabel>
                      <Input placeholder='Calle' type="text" />
                      <FormLabel fontWeight={'bold'} color={'white'}>Codigo Postal *</FormLabel>  
                      <Input type="text" />
                      <FormLabel fontWeight={'bold'} color={'white'}>Telefono Alternativo</FormLabel>
                      <Input type="text" />
              </Stack>

                

              </Stack>
              
        
              {/* <Stack >
                      <FormLabel fontWeight={'bold'}>Email</FormLabel>
                      <Input placeholder='Email' type="email" />
                      <FormLabel fontWeight={'bold'}>Email Alternativo</FormLabel>
                      <Input placeholder='Email' type='email' />
              </Stack> */}
              
              <Stack mt={6} alignItems={'center'}>
              <Button type='submit'>Submit</Button>
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
