import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));

export default function Student() {
  const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"};
  const[name,setName]=useState('');
  const[address,setAddress]=useState('');
  const[students,setStudents]=useState([]);
  const classes = useStyles();

  // SUBMIT 버튼을 클릭하면 이 핸들러를 통해 DB에 저장됨
  const handleClick=(e)=>{
    e.preventDefault()
    const student={name,address}
    console.log(student)
    fetch("http://localhost:8080/student/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(student)
    }).then(()=>{
      console.log("New Student added")
    })
  }

  useEffect(()=>{
    fetch("http://localhost:8080/student/getAll")
    .then(res=>res.json())
    .then((result)=>{
      setStudents(result);
    }
  )},[]);

  const filteredStudents = students.filter((student) => student.id === 1);
  console.log(filteredStudents);

  return (
    <Container>
      {/* 학생 정보 입력 */}
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{color:"blue"}}><u>Add Student</u></h1>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth 
          value={name}
          onChange={(e)=>setName(e.target.value)}
          />
          <TextField id="outlined-basic" label="Student Adress" variant="outlined" fullWidth
          value={address}
          onChange={(e)=>setAddress(e.target.value)}
          />
          <Button variant="contained" color="secondary" onClick={handleClick}>
            Submit
          </Button>
        </form>
      </Paper>
      {/* ==================================================================================== */}
      {/* 학생 정보 조회 */}
      <h1>Students</h1>
      <Paper elevation={3} style={paperStyle}>
        {/* {students.map(student=>(
          <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={student.id}>
          Id:{student.id}<br/>
          Name:{student.name}<br/>
          Address:{student.address}
          </Paper>
        ))
        } */}

        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={filteredStudents.id}>
          Id:{filteredStudents[0].id}<br/>
          Name:{filteredStudents[0].name}<br/>
          Address:{filteredStudents[0].address}
        </Paper>
      </Paper>
    </Container>
  );
}
