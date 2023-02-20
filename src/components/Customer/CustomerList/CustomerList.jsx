import React from 'react'
import './CustomerList.css'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Container,
  Text,
  AlertIcon,
  Alert,
  AlertTitle,
  AlertDescription,
  Button,
  WrapItem,
} from '@chakra-ui/react'
import CustomerData from '/src/Customer.json'
import { Link } from 'react-router-dom';

export default function CustomerList() {

  function isEmpty(CustomerData) {
    return Object.keys(CustomerData).length === 0;
  }


  return (
    <div className='customer-list'>
      <Container mt='6rem' maxW='100%'>
        <WrapItem>
          <Link to='/form'><Button colorScheme='teal'>New Customer</Button></Link>
        </WrapItem>
        <TableContainer>
          <Table variant='simple'>
            {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Website</Th>
                <Th isNumeric>Turnover</Th>
                <Th isNumeric>Number of Employees</Th>
                <Th>CEO</Th>
                <Th>Established Year</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                CustomerData.map(customer => (
                  <Tr>
                    <Td>{customer.name}</Td>
                    <Td>{customer.website}</Td>
                    <Td isNumeric>{customer.turnover}</Td>
                    <Td isNumeric>{customer.number_of_employees}</Td>
                    <Td>{customer.ceo}</Td>
                    <Td>{customer.est}</Td>
                  </Tr>
                ))
              }
            </Tbody>

            {/* <Tfoot>
                <Tr>
                  <Th>To convert</Th>
                  <Th>into</Th>
                  <Th isNumeric>multiply by</Th>
                </Tr>
              </Tfoot> */}
          </Table>
          {isEmpty(CustomerData) &&
            <Alert status='error'>
              <AlertIcon />
              <AlertTitle>No Customers are availabe in the system</AlertTitle>
            </Alert>
          }
        </TableContainer>
      </Container>
    </div>
  )
}
