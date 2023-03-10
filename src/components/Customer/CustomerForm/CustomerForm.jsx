import { Button, Container, FormControl, FormLabel, Input, Text, Wrap, WrapItem } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import './CustomerForm.css'
import { useNavigate } from 'react-router-dom';

export default function CustomerForm() {
  const [customer, setCustomer] = useState({});
  const navigate = useNavigate();

  function handleSubmit () {
      // fetch("https://mycrmserver.netlify.app/api/customer", {
      fetch("https://crm-api-deg3.onrender.com/api/customers", {
        method: "POST",
        body:JSON.stringify(customer),
        headers: {
          "Content-Type": "application/json"
        }
      }).then((res) => {
        return res.json();
      }).then((res) => {
        console.log(res);
        navigate('/')
      })
    // console.log(customer)
  }

  return (
    <Container mt='3rem' maxW='600px'>
      <Text fontSize={"3rem"}>Register your company</Text>
      <FormControl>
        <FormLabel mt={2}>Name</FormLabel>
        <Input type="text" onChange={(e) => {customer.name = e.target.value; setCustomer(customer);}} />
      </FormControl>
      <FormControl>
        <FormLabel mt={2}>Website</FormLabel>
        <Input type="text" onChange={(e) => {customer.website = e.target.value; setCustomer(customer);}} />
      </FormControl>
      <FormControl>
        <FormLabel mt={2}>Turnover</FormLabel>
        <Input type="number" onChange={(e) => {customer.turnover = e.target.value; setCustomer(customer);}} />
      </FormControl>
      <FormControl>
        <FormLabel mt={2}>No. Of Employees</FormLabel>
        <Input type="number" onChange={(e) => {customer.employees = e.target.value; setCustomer(customer);}} />
      </FormControl>
      <FormControl>
        <FormLabel mt={2}>CEO</FormLabel>
        <Input type="text" onChange={(e) => {customer.ceo = e.target.value; setCustomer(customer);}} />
      </FormControl>
      <FormControl>
        <FormLabel mt={2}>Established In</FormLabel>
        <Input type="number" onChange={(e) => {customer.year = e.target.value; setCustomer(customer);}} />
      </FormControl>
      <Wrap justify="left" mb='4rem'>
        <WrapItem>
          <Button
            mt={4}
            type='submit'
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </WrapItem>
      </Wrap>
    </Container>
  )
}
