import React from 'react'

import { Button, Box, Container, Divider, FormLabel, FormControl, Grid, Link, Input, Stack, Select, Text, useDisclosure} from '@chakra-ui/react'

import imagen1 from './assets/img1.png'
import imagen2 from './assets/img2.jpeg'

function App () {



  
  return (
    <Container bgSize={2050}  minW="94vw" minH="110vh" padding={8}  justifyItems={'center'} alignItems={'center'}   backgroundImage={imagen2} bgRepeat={'no-repeat'} >

        {/* <Stack padding={6} color={'white'}>
          <Text textAlign={'center'} fontSize= {{ base: 'xl', sm: '2xl', md: '3xl' }}>Seguimiento Satelital</Text>
        </Stack> */}

      <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} spacing={8}   >

       





        {/* ---------------------------------------Modal Datos personales INTERESADO------------------------------------------------------------ */}
       

        {/* <Stack  maxW={{base: 650, md: 750}} maxH={{base: 950, md: 720}} padding={10} alignItems={'center'} justifyContent={'center'} fontSize= {{ base: 'xl', sm: '2xl', md: '3xl' }}
              
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

            

        </Stack> */}

        {/* -----------------Modal Alta de nuevo auto CLIENTE || Modal Datos vehículares INTERESADO  ------------------------------------------------------ */}

        

        {/* <Stack  maxW={{base: 650, md: 750}} maxH={{base: 950, md:720}} padding={10} alignItems={'center'} justifyContent={'center'} fontSize= {{ base: 'xl', sm: '2xl', md: '3xl' }}
              
              bg= {'blackAlpha.600' }
              spacing={4} borderRadius={50}>


            <Stack>
                <Text color={'white'} fontWeight={'bold'} textAlign={'center'} >Ingresá los datos de tu vehículo</Text>
            </Stack>

            <Divider />

            <FormControl >

              <Stack justifyContent={'center'} spacing={16}  direction={['column', 'row']} >
                
                <Stack >
                      <FormLabel fontWeight={'bold'} color={'white'}>Tipo *</FormLabel>
                      <Input variant='flushed'  color={'white'} placeholder='...' _placeholder={{ opacity: 1, color: 'black' }} type="text" />
                      <FormLabel fontWeight={'bold'} color={'white'}>Modelo *</FormLabel>
                      <Input variant='flushed'  color={'white'} placeholder='...' _placeholder={{ opacity: 1, color: 'black' }} type="text" />
                      <FormLabel fontWeight={'bold'} color={'white'}>N° Patente *</FormLabel>  
                      <Input variant='flushed'  color={'white'} placeholder='...' _placeholder={{ opacity: 1, color: 'black' }}  type="text" />
                      
              </Stack>
              <Stack>
                      <FormLabel fontWeight={'bold'} color={'white'}>Marca *</FormLabel>
                      <Input variant='flushed'  color={'white'} placeholder='...' _placeholder={{ opacity: 1, color: 'black' }}  type="text" />
                      <FormLabel fontWeight={'bold'} color={'white'}>Color *</FormLabel>
                      <Input variant='flushed'  color={'white'} placeholder='...' _placeholder={{ opacity: 1, color: 'black' }}  type="text" />
                      <FormLabel fontWeight={'bold'} color={'white'}>N° Chasis*</FormLabel>  
                      <Input variant='flushed'  color={'white'} placeholder='...' _placeholder={{ opacity: 1, color: 'black' }}  type="text" />
                      
              </Stack>

                

              </Stack>
              
        
              <Stack >
                      <FormLabel fontWeight={'bold'} color={'white'}>N° Motor</FormLabel>
                        <Input variant='flushed'  color={'white'} placeholder='...' _placeholder={{ opacity: 1, color: 'black' }}  type="text" />
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

            

        </Stack> */}

        

        {/* --------------------------------------Modal único INTERESADO ---------------------------------------------------- */}

        {/* <Stack padding={4} >

        <Stack  w={{base: 650, md: 750}} h={{base: 950, md: 950}} 
                padding={10} alignItems={'center'}
                justifyContent={'center'} fontSize= {{ base: 'xl', sm: '2xl', md: '3xl' }}
                bg= {'blackAlpha.600' }
                spacing={4} borderRadius={50}>


            <Stack>
                <Text fontSize={30} color={'white'} fontWeight={'bold'} textAlign={'center'} >¡Solicitá una cotización!</Text>
            </Stack>

            <Divider/>

            <FormControl  >

              <Text as={'u'} fontSize={24} color={'white'}>Datos Personales </Text>

              <Stack spacing={12}  direction={['column', 'row']} alignItems={'center'} justifyContent={'center'} >

              
                
                <Stack  >
                      <FormLabel fontWeight={'bold'} color={'white'}>Nombre *</FormLabel>
                      <Input variant='flushed'  color={'white'} placeholder='...' _placeholder={{ opacity: 1, color: 'black' }} type="text" />
                      <FormLabel fontWeight={'bold'} color={'white'}>Domicilio *</FormLabel>
                      <Input variant='flushed'  color={'white'} placeholder='...' _placeholder={{ opacity: 1, color: 'black' }} type="text" />
                      <FormLabel fontWeight={'bold'} color={'white'}>Teléfono *</FormLabel>  
                      <Input variant='flushed'  color={'white'} placeholder='...' _placeholder={{ opacity: 1, color: 'black' }}  type="text" />
                      
              </Stack>
              <Stack>
                      <FormLabel fontWeight={'bold'} color={'white'}>Apellido *</FormLabel>
                      <Input variant='flushed'  color={'white'} placeholder='...' _placeholder={{ opacity: 1, color: 'black' }}  type="text" />
                      <FormLabel fontWeight={'bold'} color={'white'}>Localidad *</FormLabel>
                      <Input variant='flushed'  color={'white'}placeholder='...' _placeholder={{ opacity: 1, color: 'black' }}  type="text" />
                      <FormLabel fontWeight={'bold'} color={'white'}>Teléfono Alternativo</FormLabel>  
                      <Input variant='flushed'  color={'white'} placeholder='...' _placeholder={{ opacity: 1, color: 'black' }}  type="text" />
                      
              </Stack>

              <Stack>
                      <FormLabel fontWeight={'bold'} color={'white'}>Documento *</FormLabel>
                      <Input variant='flushed'  color={'white'} placeholder='...' _placeholder={{ opacity: 1, color: 'black' }}  type="text" />
                      <FormLabel fontWeight={'bold'} color={'white'}>Código Postal *</FormLabel>
                      <Input variant='flushed'  color={'white'}placeholder='...' _placeholder={{ opacity: 1, color: 'black' }}  type="text" />
                      <FormLabel fontWeight={'bold'} color={'white'}>Email *</FormLabel>  
                      <Input variant='flushed'  color={'white'} placeholder='...' _placeholder={{ opacity: 1, color: 'black' }}  type="text" />
                      
              </Stack>
                

              </Stack>

              

              <Text as={'u'} fontSize={24} color={'white'}>Datos del Vehículo</Text>
              
        
              <Stack >

                <Stack spacing={12}  direction={['column', 'row']} alignItems={'center'} justifyContent={'center'}  >

              
                
                <Stack >
                      <FormLabel fontWeight={'bold'} color={'white'}>Tipo *</FormLabel>
                      <Input variant='flushed'  color={'white'} placeholder='...' _placeholder={{ opacity: 1, color: 'black' }} type="text" />
                      <FormLabel fontWeight={'bold'} color={'white'}>Color *</FormLabel>
                      <Input variant='flushed'  color={'white'} placeholder='...' _placeholder={{ opacity: 1, color: 'black' }} type="text" />
                                   
              </Stack>
              <Stack>
                      <FormLabel fontWeight={'bold'} color={'white'}>Marca *</FormLabel>
                      <Input variant='flushed'  color={'white'} placeholder='...' _placeholder={{ opacity: 1, color: 'black' }}  type="text" />
                      <FormLabel fontWeight={'bold'} color={'white'}>N° Patente *</FormLabel>
                      <Input variant='flushed'  color={'white'}placeholder='...' _placeholder={{ opacity: 1, color: 'black' }}  type="text" />
                              
              </Stack>

              <Stack>
                      <FormLabel fontWeight={'bold'} color={'white'}>Modelo *</FormLabel>
                      <Input variant='flushed'  color={'white'} placeholder='...' _placeholder={{ opacity: 1, color: 'black' }}  type="text" />
                      <FormLabel fontWeight={'bold'} color={'white'}>N° Chasis *</FormLabel>
                      <Input  variant='flushed' color={'white'}placeholder='...' _placeholder={{ opacity: 1, color: 'black' }}  type="text" />
                      
              </Stack>
                

              </Stack>
                      <FormLabel fontWeight={'bold'} color={'white'}>N° Motor *</FormLabel>
                        <Input variant='flushed'  color={'white'} placeholder='...' _placeholder={{ opacity: 1, color: 'black' }}  type="text" />
                        
               <Text as={'u'} fontSize={24} color={'white'}>Datos del Servicio </Text>

              
                      
                      <FormLabel fontWeight={'bold'} color={'white'}>Plan</FormLabel>
                        <Select    bgColor={'white'} placeholder='Seleccionar' _placeholder={{ opacity: 1, color: 'black' }}  type="text">
                        <option value='option1'>Plan Basico 1</option>
                        <option value='option1'>Plan Basico 2</option>
                        <option value='option1'>Plan Basico 3</option>
                        </Select>
                      <FormLabel fontWeight={'bold'} color={'white'}>Adicionales</FormLabel>
                        <Select     bgColor={'white'}  placeholder='Seleccionar' _placeholder={{ opacity: 1, color: 'black'  }} type="email">
                        <option value='option1'>Ventanas</option>
                        <option value='option2'>Puertas</option>
                        <option value='option3'>Volante</option>
                        <option value='option3'>Llave de seguridad</option>
                        </Select>
                
                      
              </Stack>
              
              <Stack mt={4} alignItems={'center'}>
              <Button fontWeight={'bold'} fontSize={20} _hover={{bgColor: 'red.500'}} type='submit'>Enviar</Button>
              </Stack>
              
                           
            </FormControl>

            

        </Stack>

        </Stack> */}

        
        {/* ------------------------------------------------------------------------------------------------------------------ */}

         {/* ---------------------------------- Bienvenida || Login ----------------------------------------- */}

            
         {/* <Stack mt={53}  w={{base: 650, md: 450}} h={{base: 650, md: 500}} padding={4} alignItems={'center'} justifyContent={'center'} fontSize= {{ base: 'xl', sm: '2xl', md: '3xl' }}
              
              bg= {'blackAlpha.600' }
              spacing={8} borderRadius={50}>


            <Stack>
                <Text color={'white'} fontWeight={'bold'} textAlign={'center'} >Login</Text>
            </Stack>

            <Divider/>

            <Stack spacing={8} alignItems={'center'} justifyContent={'center'}>

              <Text  fontSize={24} color={'white'} textAlign={'center'}> Usuario: </Text>
              <Input textAlign={'center'} variant='flushed' color={'white'}  _placeholder={{ opacity: 1, color: 'white' }}  type="text">
              </Input>

              <Text  fontSize={24} color={'white'} textAlign={'center'}> Contraseña: </Text>
              <Input textAlign={'center'} variant='flushed' color={'white'}  _placeholder={{ opacity: 1, color: 'white' }}  type="text">
              </Input>

              <Button fontWeight={'bold'} fontSize={20} _hover={{bgColor: 'green.400'}}>Ingresar</Button>
              
            </Stack>

        </Stack> */}

        {/* ----------------------------------Modal CUENTA USUARIO CLIENTE ----------------------------------------------------------- */}

        

        {/* <Stack  w={{base: 650, md: 650}} h={{base: 950, md: 500}} padding={10} alignItems={'center'} justifyContent={'center'} fontSize= {{ base: 'xl', sm: '2xl', md: '3xl' }}
              
              bg= {'blackAlpha.600' }
              spacing={8} borderRadius={50}>


            <Stack>
                <Text color={'white'} fontWeight={'bold'} textAlign={'center'} >Cuenta de Usuario</Text>
            </Stack>

            <Divider/>

            <Stack alignItems={'center'} justifyContent={'center'}>

              <Stack direction={'row'} spacing={20}>
                  <Button _hover={{color:'blue.400'}} as={'u'}  variant={'link'} color={'white'} fontWeight={'bold'} textAlign={'center'} >Modificar Servicio</Button>
                  <Button _hover={{color:'blue.400'}} as={'u'} variant={'link'} color={'white'} fontWeight={'bold'} textAlign={'center'} >Alta Nuevo Vehículo</Button>
                  <Button _hover={{color:'blue.400'}} as={'u'} variant={'link'} color={'white'} fontWeight={'bold'} textAlign={'center'} >Eliminar Servicio</Button>
              </Stack>
              
              <Grid padding={10} gap={10}>
                <Button bg={'none'} _hover={{bg:'blue.300'}} borderStyle={'solid'} borderWidth={1} p={3} w={'450px'} h={'60px'} borderColor={'white'}>
                  <Text fontSize={20} color={'white'} fontWeight={'bold'} textAlign={'center'}>Vehículo N ° 1</Text>
                </Button>
                <Button bg={'none'} _hover={{bg:'blue.300'}} borderStyle={'solid'} borderWidth={1} p={3} w={'450px'} h={'60px'} borderColor={'white'}>
                  <Text fontSize={20} color={'white'} fontWeight={'bold'} textAlign={'center'}>Vehículo N ° 2</Text>
                </Button>
                <Button bg={'none'} _hover={{bg:'blue.300'}} borderStyle={'solid'} borderWidth={1} p={3} w={'450px'} h={'60px'} borderColor={'white'}>
                  <Text fontSize={20} color={'white'} fontWeight={'bold'} textAlign={'center'}>Vehículo N ° 3</Text>
                </Button>
                
              </Grid>
            </Stack>

        </Stack> */}

        {/* ---------------------------------------------- Actualizar contraseña ---------------------------------------------------------------- */}

        {/* <Stack mt={53}  w={{base: 650, md: 450}} h={{base: 650, md: 500}} padding={4} alignItems={'center'} justifyContent={'center'} fontSize= {{ base: 'xl', sm: '2xl', md: '3xl' }}
              
              bg= {'blackAlpha.600' }
              spacing={8} borderRadius={50}>


            <Stack>
                <Text color={'white'} fontWeight={'bold'} textAlign={'center'} >Actualizar Contraseña</Text>
            </Stack>

            <Divider/>

            <Stack spacing={8} alignItems={'center'} justifyContent={'center'}>

              <Text  fontSize={24} color={'white'} textAlign={'center'}> Ingrese nueva contraseña: </Text>
              <Input textAlign={'center'} variant='flushed' color={'white'}  _placeholder={{ opacity: 1, color: 'white' }}  type="text">
              </Input>

              <Text  fontSize={24} color={'white'} textAlign={'center'}>Repita nueva contraseña: </Text>
              <Input textAlign={'center'} variant='flushed' color={'white'}  _placeholder={{ opacity: 1, color: 'white' }}  type="text">
              </Input>

              <Button fontWeight={'bold'} fontSize={20} _hover={{bgColor: 'green.400'}}>Aceptar</Button>
              
            </Stack>

        </Stack> */}

        {/* ----------------------------------------Lading Page------------------------------------------------------------ */}

        <Stack alignItems={'center'} spacing={10}>

          <Stack direction={'row'}  width={1200} h={65} justifyContent={'space-evenly'}>

            
              <Button color={'white'} variant={'link'} fontSize={25} size={'lg'}>Inicio</Button>
              <Button color={'white'} variant={'link'} fontSize={25} size={'lg'}>Nosotros</Button>
              <Button color={'white'} variant={'link'} fontSize={25} size={'lg'}>Contacto</Button>
              <Button color={'white'} variant={'link'} fontSize={25} size={'lg'}>Login</Button>

          </Stack>

          <Stack alignItems={'center'} spacing={16} >

          <Text fontWeight={'bold'} color={'white'} fontSize={80}>
            Delta Tracking
          </Text>
          <Text fontSize={25} color={'white'}>
            Somos una empresa dedicada al seguimiento de vehículos terrestres a través de sistemas GPS
          </Text>

          
          <Stack direction={'row'} align={'center'}>

          <Stack alignItems={'center'}>
          
          <Text fontSize={25} color={'white'}>Servicios ofrecidos:</Text>
          <Text fontSize={18} color={'white'}>-Disparo automático de alarmas con frase clave</Text>
          <Text fontSize={18} color={'white'}>-Apertura de puertas de forma remota</Text>
          <Text fontSize={18} color={'white'}>-Custodia de vehículos</Text>
          </Stack>

          {/* <Stack alignItems={'center'}>
          <Text fontSize={25} color={'white'}>Adicionales:</Text>
          <Text fontSize={16} color={'white'}>-Llaves de seguridad</Text>
          <Text fontSize={16} color={'white'}>-Bloqueo de puertas y ventas</Text>
          <Text fontSize={16} color={'white'}>-Trabas para volante</Text>
          </Stack> */}

          </Stack>
          
          
          
          <Button fontSize={28} w={450} h={62} _hover={{bgColor: 'orange.400'}} bg={'green.400'} color={'white'}>¡Solicitá una cotización ahora!</Button>
          </Stack>
          
        </Stack>


        {/* <Stack padding={6} bg= {{ base: 'orange.500', sm: 'brown.300', md: 'blue.200', lg: 'green.300', xl: 'red.400' }}>
          <Text textAlign={'center'} fontSize= {{ base: 'xl', sm: '2xl', md: '3xl' }} >Aca iría el contenido del footer</Text>
        </Stack> */}

      </Stack>

    </Container>
  )
}

export default App
