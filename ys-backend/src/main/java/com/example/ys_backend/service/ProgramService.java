package com.example.ys_backend.service;

import com.example.ys_backend.model.Programs;
import com.example.ys_backend.repository.ProgramRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

@Service
public class ProgramService {

    @Autowired
    ProgramRepository programRepository;

    //create a new program
    public String createProgram(Programs program){
        if (programRepository.existsById(program.getProgramName())){
            return "This program already posted";
        }else{
            programRepository.save(program);
            return "Successfully Created a new Program";
        }
    }

    //update a program
   public String updateProgram (String programName, Programs updatedProgram){
        Optional<Programs> existingProgram = programRepository.findById(programName);
        if(existingProgram.isPresent()){
            Programs pg = existingProgram.get();
            pg.setProgramName(updatedProgram.getProgramName());
            pg.setProgramDescription(updatedProgram.getProgramDescription());
            pg.setDuration(updatedProgram.getDuration());
            pg.setPrice(updatedProgram.getPrice());
            programRepository.save(pg);
            return "Program updated";
        }else{
            return "Program is not found";
        }
   }

   //get all programs
    public List<Programs> getAllPrograms(){
        return programRepository.findAll();
    }

    //delete program
    public String deleteProgram(String programName){
        if (programRepository.existsById(programName)){
            programRepository.deleteById(programName);
            return "program deleted successfully";
        }else{
            return "program is not found";
        }
    }

}
