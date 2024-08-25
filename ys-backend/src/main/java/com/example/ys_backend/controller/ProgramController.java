package com.example.ys_backend.controller;

import com.example.ys_backend.model.Programs;
import com.example.ys_backend.service.ProgramService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/programs")
@CrossOrigin

public class ProgramController {

    @Autowired
    ProgramService programService;

    //create a new program
    @PostMapping("/createProgram")
    public String createProgram(@RequestBody Programs program){
        return programService.createProgram(program);
    }

    //update a program
    @PutMapping("/updateProgram/{programName}")
    public String updateProgram(@PathVariable String programName, @RequestBody Programs updatedProgram){
         return programService.updateProgram(programName, updatedProgram);
    }

    //get all programs
    @GetMapping("/getAllPrograms")
    public List<Programs> getAllPrograms(){
         return programService.getAllPrograms();
    }

    //delete a program
    @DeleteMapping("/deleteProgram/{programName}")
    public String deleteProgram (@PathVariable String programName){
        return programService.deleteProgram(programName);
    }
}
