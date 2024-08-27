package com.example.ys_backend.controller;

import com.example.ys_backend.model.Facility;
import com.example.ys_backend.service.FacilityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/facilities")
@CrossOrigin
public class FacilityControl {

    @Autowired
    FacilityService facilityService;

    //save facility
    @PostMapping("/saveFacility")
    public String saveFacility (@RequestBody Facility facility){
        return facilityService.saveFacility(facility);
    }

    //update
    @PutMapping("/updateFacility")
    public String updateFacility(@RequestBody Facility facility){
        return facilityService.updateFacility(facility);
    }

    //get all
    @GetMapping("/getAllFacilities")
    public List<Facility> getALlFacilities(){
        return facilityService.getAllFacilities();
    }

    //delete
    @DeleteMapping("/deleteFacility/{facilityID}")
    public String deleteFacility(@PathVariable int facilityID){
        return facilityService.deleteFacility(facilityID);
    }
}
