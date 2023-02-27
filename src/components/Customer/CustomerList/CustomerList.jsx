import React, { useEffect, useState } from 'react'
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
  Stack,
  Spinner,
} from '@chakra-ui/react'
// import CustomerData from '/src/Customer.json'
import { Link } from 'react-router-dom';

export default function CustomerList() {

  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://crm-api-deg3.onrender.com/api/customers")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setCustomers(res);
        setLoading(false)
      })
  }, [])

  console.log(customers)


  function isEmpty(CustomerData) {
    return Object.keys(CustomerData).length === 0;
  }

  return (
    <div className='customer-list'>
      <Container mt='3rem' maxW='100%'>
        <WrapItem mb='2rem'>
          <Link to='/form'><Button colorScheme='linkedin' size='lg'>New Customer</Button></Link>
        </WrapItem>
        <TableContainer mb='2rem'>
          <Table variant='simple' fontSize='1.3rem'>
            {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
            <Thead>
              <Tr>
                <Th fontSize='1rem'>Name</Th>
                <Th fontSize='1rem'>Website</Th>
                <Th isNumeric fontSize='1rem'>Turnover</Th>
                <Th isNumeric fontSize='1rem'>Number of Employees</Th>
                <Th fontSize='1rem'>CEO</Th>
                <Th fontSize='1rem'>Established Year</Th>
              </Tr>
            </Thead>

            <Tbody>
              {
                customers.map(customer => (
                  <Tr key={customer._id}>
                    <Td>{customer.name}</Td>
                    <Td>{customer.website}</Td>
                    <Td isNumeric>{customer.turnover}</Td>
                    <Td isNumeric>{customer.employees}</Td>
                    <Td>{customer.ceo}</Td>
                    <Td>{customer.year}</Td>
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
          <WrapItem justifyContent='center' mt='10%'>
            {loading && <Stack><Spinner size='xl' /></Stack>}
          </WrapItem>
          {/* {isEmpty(CustomerData) &&
            <Alert status='error'>
              <AlertIcon />
              <AlertTitle>No Customers are availabe in the system</AlertTitle>
            </Alert>
          } */}
        </TableContainer>
      </Container>
    </div>
  )
}
