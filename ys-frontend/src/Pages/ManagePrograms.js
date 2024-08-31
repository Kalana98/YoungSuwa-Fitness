import React, { useState, useEffect } from 'react'
import './ManagePrograms.css'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Form, Button, Row, Col, Table} from 'react-bootstrap'
import AdminPanelBtn from '../Components/AdminPanelBtn'



const ManagePrograms = () => {

   const [programs, setPrograms] = useState([]); // for list of programs
   const [selectedProgram, setSelectedProgram] = useState(null); //for update the program 
   //for packages form
   const [pID, setPID] = useState(selectedProgram?.programID || "");
   const [name, setName] = useState(selectedProgram?.programName || "");
   const [description, setDescription] = useState(selectedProgram?.programDescription || "");
   const [proDuration, setProDuration] = useState(selectedProgram?.duration || "");
   const [proPrice, setProPrice] = useState(selectedProgram?.price || "");
   

    
    useEffect(() => {
        setPID(selectedProgram?.programID || '');
        setName(selectedProgram?.programName || '');
        setDescription(selectedProgram?.programDescription || '');
        setProDuration(selectedProgram?.duration || '');
        setProPrice(selectedProgram?.price || '');
    },[selectedProgram])

    const clearFields = () => {
        setPID("");
        setName("");
        setDescription("");
        setProDuration("");
        setProPrice("");
    }

    const validateFields = () => {
        if(!pID.trim() || !name.trim() || !description.trim() || !proDuration.trim() || !proPrice.trim()){
            alert("You should fill all these fields");
            return false;
        }else{
            return true;
        }
    }



    const fetchAllPrograms = async () => {
        try{
            const response = await axios.get('http://localhost:8080/api/v1/programs/getAllPrograms');
            setPrograms(response.data);
        }catch(error){
            console.error(error);
        }
    };

    useEffect(() => {
        fetchAllPrograms();
    }, []);

    const selectProgram = (program) => {
        setSelectedProgram(program);
    }

    const saveProgram = async () => {
        if (!validateFields()) return;
    
        console.log({
            programID: pID,
            programName: name,
            programDescription: description,
            duration: proDuration,
            price: parseFloat(proPrice)
        });
    
        try {
            await axios.post('http://localhost:8080/api/v1/programs/saveProgram', {
                programID: parseInt(pID), // Ensure programID is sent as a number
                programName: name,
                programDescription: description,
                duration: parseInt(proDuration), // Ensure duration is sent as a number
                price: parseFloat(proPrice) // Ensure price is sent as a float or number
            });
            alert("Program Saved Successfully");
            fetchAllPrograms();
            clearFields();
        } catch (error) {
            console.error("Error saving program: ", error.response || error.message);
            alert("Error saving the program. Check console for details.");
        }
    }
    

    const updateProgram = async () => {
        try{
            await axios.put('http://localhost:8080/api/v1/programs/updateProgram', {
                programID : pID,
                programName : name,
                programDescription : description,
                duration : proDuration,
                price : proPrice
            });
            alert('Program Updated Successfully');
            fetchAllPrograms();
            clearFields();
        }catch(error){
            alert("Error");
        }
    }

    const deleteProgram = async () => {
        try{
            await axios.delete(`http://localhost:8080/api/v1/programs/deleteProgram/${pID}`)
            alert("Account Deleted")
            fetchAllPrograms();
            clearFields();
        }catch(error){
            alert("Error", error);
            console.log(error)

        }
    }


  return (
    <div className='program-section'>
        <AdminPanelBtn />
      <h1>Package Management</h1>
      <Form className='mt-5'>
            <Row className='justify-content-center'>
                <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Program ID</Form.Label>
                        <Form.Control type="number" placeholder="Package Management : Program ID" value={pID} onChange={(e) => setPID(e.target.value)} />
                    </Form.Group>
                </Col>
            </Row>

            <Row className='justify-content-center'>
                <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Program Name</Form.Label>
                        <Form.Control type="text" placeholder="Package Management : Program Name" value={name} onChange={(e) => setName(e.target.value)}/>
                    </Form.Group>
                </Col>
            </Row>

            <Row className='justify-content-center'>
                <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Program Description</Form.Label>
                        <Form.Control type="text" placeholder="Package Management : Program Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                    </Form.Group>
                </Col>
            </Row>

            <Row className='justify-content-center'>
                <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Program Duration</Form.Label>
                        <Form.Control type="number" placeholder="Package Management : Program Duration" value={proDuration} onChange={(e) => setProDuration(e.target.value)}/>
                    </Form.Group>
                </Col>
            </Row>

            <Row className='justify-content-center'>
                <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Program Price</Form.Label>
                        <Form.Control type="text" placeholder="Package Management : Program Price" value={proPrice} onChange={(e) => setProPrice(e.target.value)}/>
                    </Form.Group>
                </Col>
            </Row>

            <Button variant="success" onClick={saveProgram}>Save</Button>{' '}
            <Button variant="secondary" onClick={updateProgram}>Update</Button>{' '}
            <Button variant="danger" onClick={deleteProgram}>Delete</Button>{' '}
        </Form>    
        <Table className='program-table'>
            <thead>
                <tr>
                    <th>Program ID</th>
                    <th>Program Name</th>
                    <th>Program Description</th>
                    <th>Program Duration (Days)</th>
                    <th>Program Price (Rs)</th>
                </tr>
            </thead>
            <tbody>
                {programs.length > 0 ? (
                 programs.map(pg => (
                    <tr key={pg.programID} onClick={() => selectProgram(pg)}>
                        <td>{pg.programID}</td>
                        <td>{pg.programName}</td>
                        <td>{pg.programDescription}</td>
                        <td>{pg.duration}</td>
                        <td>{parseFloat(pg.price).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} /-</td>
                    </tr>
                ))) : (
                    <tr>
                        <td colSpan={5}>No any programs to show in this table</td>
                    </tr>
                )
            }
            </tbody>
        </Table>
        
    </div>
  )
}

export default ManagePrograms
