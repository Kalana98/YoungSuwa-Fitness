package com.example.ys_backend.service;

import com.example.ys_backend.model.Program;
import com.example.ys_backend.repository.ProgramRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProgramService {

    @Autowired
    ProgramRepository programRepository;

    //save program
    public String saveProgram(Program program){
        if(programRepository.existsById(program.getProgramID())){
            return "Program already posted";
        }else{
            programRepository.save(program);
            return "saved Successfully";
        }
    }

    public String updateProgram(Program program){
        if(programRepository.existsById(program.getProgramID())){
            programRepository.save(program);
            return "updated";
        }else{
            return "not found";
        }
    }

    public List<Program> getAllPrograms(){
        return programRepository.findAll();
    }

    public String deleteProgram(int programID){
        if(programRepository.existsById(programID)){
            programRepository.deleteById(programID);
            return "deleted";
        }else{
            return "not found";
        }
    }
}
