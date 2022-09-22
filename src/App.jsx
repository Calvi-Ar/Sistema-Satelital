import React from 'react'

import { Button, Container,FormLabel, FormControl, Input, Stack, Select, Text } from '@chakra-ui/react'

import imagen1 from './assets/img1.png'
import imagen2 from './assets/img2.jpeg'

function App () {
  return (
    <Container  maxWidth={'10xl'} maxHeight={'6xl'} justifyItems={'center'} alignItems={'center'}  padding={10} backgroundImage={imagen2} bgSize={1345} bgRepeat={'none'}>

        {/* <Stack padding={6} color={'white'}>
          <Text textAlign={'center'} fontSize= {{ base: 'xl', sm: '2xl', md: '3xl' }}>Seguimiento Satelital</Text>
        </Stack> */}

      <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} spacing={8}   >
       

        <Stack  maxW={{base: 650, md: 750}} maxH={{base: 950, md: 620}} padding={10} alignItems={'center'} justifyContent={'center'} fontSize= {{ base: 'xl', sm: '2xl', md: '3xl' }}
              
              bg= {'blackAlpha.600' }
              spacing={4} borderRadius={50}>


            <Stack>
                <Text color={'white'} fontWeight={'bold'} textAlign={'center'} >¡Solicitá una cotización ahora!</Text>
            </Stack>

            

            <FormControl >

              <Stack direction={['column', 'row']} >
                
                <Stack >
                      <FormLabel fontWeight={'bold'} color={'white'}>Nombre *</FormLabel>
                      <Input bgColor={'white'} placeholder='...' _placeholder={{ opacity: 1, color: 'black' }} type="text" />
                      <FormLabel fontWeight={'bold'} color={'white'}>DNI *</FormLabel>
                      <Input bgColor={'white'} placeholder='...' _placeholder={{ opacity: 1, color: 'black' }} type="text" />
                      <FormLabel fontWeight={'bold'} color={'white'}>Localidad *</FormLabel>  
                      <Input bgColor={'white'} placeholder='...' _placeholder={{ opacity: 1, color: 'black' }}  type="text" />
                      <FormLabel fontWeight={'bold'} color={'white'}>Telefono Celular *</FormLabel>
                      <Input bgColor={'white'} placeholder='...' _placeholder={{ opacity: 1, color: 'black' }}  type="text" /> 
              </Stack>
              <Stack >
                      <FormLabel fontWeight={'bold'} color={'white'}>Apellido *</FormLabel>
                      <Input bgColor={'white'} placeholder='...' _placeholder={{ opacity: 1, color: 'black' }}  type="text" />
                      <FormLabel fontWeight={'bold'} color={'white'}>Domicilio *</FormLabel>
                      <Input bgColor={'white'} placeholder='...' _placeholder={{ opacity: 1, color: 'black' }}  type="text" />
                      <FormLabel fontWeight={'bold'} color={'white'}>Codigo Postal *</FormLabel>  
                      <Input bgColor={'white'} placeholder='...' _placeholder={{ opacity: 1, color: 'black' }}  type="text" />
                      <FormLabel fontWeight={'bold'} color={'white'}>Telefono Alternativo</FormLabel>
                      <Input bgColor={'white'} placeholder='...' _placeholder={{ opacity: 1, color: 'black' }}  type="text" />
              </Stack>

                

              </Stack>
              
        
              <Stack >
                      <FormLabel fontWeight={'bold'} color={'white'}>Email *</FormLabel>
                      <Input bgColor={'white'} placeholder='...' _placeholder={{ opacity: 1, color: 'black' }} type="email" />
                      <FormLabel fontWeight={'bold'} color={'white'}>Email Alternativo</FormLabel>
                      <Input bgColor={'white'} placeholder='...' _placeholder={{ opacity: 1, color: 'black' }} type='email' />
              </Stack>
              
              <Stack mt={4} alignItems={'center'}>
              <Button type='submit'>Enviar</Button>
              </Stack>
              
                           
            </FormControl>

            

        </Stack>

        {/* <Stack>

        <Stack  maxW={{base: 650, md: 750}} maxH={{base: 950, md: 620}} padding={10} alignItems={'center'} justifyContent={'center'} fontSize= {{ base: 'xl', sm: '2xl', md: '3xl' }}
              
              bg= {'blackAlpha.600' }
              spacing={4} borderRadius={50}>


            <Stack>
                <Text color={'white'} fontWeight={'bold'} textAlign={'center'} >Ingresá los datos de tu vehículo</Text>
            </Stack>

            

            <FormControl >

              <Stack  direction={['column', 'row']} >
                
                <Stack >
                      <FormLabel fontWeight={'bold'} color={'white'}>Tipo *</FormLabel>
                      <Input bgColor={'white'} placeholder='...' _placeholder={{ opacity: 1, color: 'black' }} type="text" />
                      <FormLabel fontWeight={'bold'} color={'white'}>Modelo *</FormLabel>
                      <Input bgColor={'white'} placeholder='...' _placeholder={{ opacity: 1, color: 'black' }} type="text" />
                      <FormLabel fontWeight={'bold'} color={'white'}>N° Patente *</FormLabel>  
                      <Input bgColor={'white'} placeholder='...' _placeholder={{ opacity: 1, color: 'black' }}  type="text" />
                      
              </Stack>
              <Stack>
                      <FormLabel fontWeight={'bold'} color={'white'}>Marca *</FormLabel>
                      <Input bgColor={'white'} placeholder='...' _placeholder={{ opacity: 1, color: 'black' }}  type="text" />
                      <FormLabel fontWeight={'bold'} color={'white'}>Color *</FormLabel>
                      <Input bgColor={'white'}placeholder='...' _placeholder={{ opacity: 1, color: 'black' }}  type="text" />
                      <FormLabel fontWeight={'bold'} color={'white'}>N° Chasis*</FormLabel>  
                      <Input bgColor={'white'} placeholder='...' _placeholder={{ opacity: 1, color: 'black' }}  type="text" />
                      
              </Stack>

                

              </Stack>
              
        
              <Stack >
                      <FormLabel fontWeight={'bold'} color={'white'}>N° Motor</FormLabel>
                        <Input bgColor={'white'} placeholder='...' _placeholder={{ opacity: 1, color: 'black' }}  type="text" />
                      <FormLabel fontWeight={'bold'} color={'white'}>Plan Básico</FormLabel>
                        <Select  bgColor={'white'} placeholder='Seleccionar' _placeholder={{ opacity: 1, color: 'black' }}  type="text" />
                      <FormLabel fontWeight={'bold'} color={'white'}>Adicionales *</FormLabel>
                        <Select  bgColor={'white'}  placeholder='Seleccionar' _placeholder={{ opacity: 1, color: 'black'  }} type="email">
                        <option value='option1'>Ventanas</option>
                        <option value='option2'>Puertas</option>
                        <option value='option3'>Volante</option>
                        <option value='option3'>Llave de seguridad</option>
                        </Select>
                      
              </Stack>
              
              <Stack mt={4} alignItems={'center'}>
              <Button type='submit'>Enviar</Button>
              </Stack>
              
                           
            </FormControl>

            

        </Stack>

        </Stack> */}

        {/* <Stack padding={6} bg= {{ base: 'orange.500', sm: 'brown.300', md: 'blue.200', lg: 'green.300', xl: 'red.400' }}>
          <Text textAlign={'center'} fontSize= {{ base: 'xl', sm: '2xl', md: '3xl' }} >Aca iría el contenido del footer</Text>
        </Stack> */}

      </Stack>

    </Container>
  )
}

export default App
