package com.example.ys_backend.service;

import com.example.ys_backend.model.Facility;
import com.example.ys_backend.repository.FacilityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FacilityService {

    @Autowired
    FacilityRepository facilityRepository;

    //save facility
    public String saveFacility (Facility facility){
        if(facilityRepository.existsById(facility.getFacilityID())){
            return "Already posted";
        }else{
            facilityRepository.save(facility);
            return "successfully saved";
        }
    }

    //update Facility
    public String updateFacility (Facility facility){
        if(facilityRepository.existsById(facility.getFacilityID())){
            return "successfully updated";
        }else{
            facilityRepository.save(facility);
            return "not found";
        }
    }

    //get all

    public List<Facility> getAllFacilities(){
        return facilityRepository.findAll();
    }

    //delete
    public String deleteFacility(int facilityID){
        if (facilityRepository.existsById(facilityID)){
            facilityRepository.deleteById(facilityID);
            return "Deleted";
        }else{
            return "not found";
        }
    }
}
