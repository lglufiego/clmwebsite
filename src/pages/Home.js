'use client'

import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Flex,
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react'
import {
  MdOutlineEmail,
  MdWhatsapp
} from 'react-icons/md'
import { BsPerson } from 'react-icons/bs'

const emailBox = document.getElementById('emailBox')
const sendToEmailButton = document.getElementById('sendToEmailButton')


sendToEmailButton?.addEventListener('click', emailBox.scrollIntoView({ behavior: "smooth", block: "end" }), false);


export default function CallToActionWithAnnotation() {
  return (
    <>
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
          mb='5'
          >
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            CLM Produtos de Limpeza
          </Heading>
          <Text color={'gray.500'}>
            Somos uma empresa de limpeza dedicada a cuidar do que você mais valoriza: a sua casa, seu comércio e seu ambiente de trabalho. Atuando há 20 anos na comunidade, nosso objetivo é oferecer produtos da melhor qualidade, com atenção aos detalhes e atendimento ao cliente.
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button
              colorScheme={'green'}
              bg={'green.400'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'green.500',
              }}>
              Entre em contato pelo WhatsApp &nbsp; <MdWhatsapp />
            </Button>
            <Button id='sendToEmailButton' >
              Ou envie um e-mail
            </Button>
          </Stack>
        </Stack>

        <Flex justifyContent='center' flexDirection='column'>
          <Box
            id='emailBox'
            border='1px' borderColor='gray.200'
            bg="#FFF"
            color="white"
            borderRadius="lg">
            <Box p={4}>
              <Box bg="white" borderRadius="lg">
                <Box m={8} color="#0B0E3F">
                  <VStack spacing={5}>
                    <FormControl id="name">
                      <FormLabel>Nome</FormLabel>
                      <InputGroup borderColor="#E0E1E7">
                        <InputLeftElement pointerEvents="none">
                          <BsPerson color="gray.800" />
                        </InputLeftElement>
                        <Input type="text" size="md" />
                      </InputGroup>
                    </FormControl>
                    <FormControl id="email">
                      <FormLabel>Email</FormLabel>
                      <InputGroup borderColor="#E0E1E7">
                        <InputLeftElement pointerEvents="none">
                          <MdOutlineEmail color="gray.800" />
                        </InputLeftElement>
                        <Input type="text" size="md" />
                      </InputGroup>
                    </FormControl>
                    <FormControl id="message">
                      <FormLabel>Mensagem</FormLabel>
                      <Textarea
                        borderColor="gray.300"
                        _hover={{
                          borderRadius: 'gray.300',
                        }}
                        placeholder="message"
                      />
                    </FormControl>
                    <FormControl id="sendMessageButton" float="right">
                      <Button variant="solid" bg="#48BB78" color="white" _hover={{ bg: '#38A169' }}>
                        Enviar Mensagem
                      </Button>
                    </FormControl>
                  </VStack>
                </Box>
              </Box>
            </Box>
          </Box>
        </Flex>

      </Container>
    </>
  )
}