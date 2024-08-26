package com.example.ys_backend.controller;

import com.example.ys_backend.model.Program;
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

    @PostMapping("/saveProgram")
    public String saveProgram(@RequestBody Program program){
        return programService.saveProgram(program);
    }

    @PutMapping("/updateProgram")
    public String updateProgram(@RequestBody Program program){
        return programService.updateProgram(program);
    }

    @GetMapping("/getAllPrograms")
    public List<Program> getAllPrograms(){
        return programService.getAllPrograms();
    }

    @DeleteMapping("/deleteProgram/{programID}")
    public String deleteProgram (@PathVariable int programID){
        return programService.deleteProgram(programID);
    }
}
