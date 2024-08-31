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
            return "This faculty is already posted.";
        }else{
            facilityRepository.save(facility);
            return "Faculty successfully saved.";
        }
    }

    //update Facility
    public String updateFacility(Facility facility){
        System.out.println("Updating Facility: " + facility); // Log the facility data
        if(facilityRepository.existsById(facility.getFacilityID())){
            facilityRepository.save(facility);
            return "Facility successfully updated.";
        }else{
            return "not found.";
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
            return "Faculty deleted successfully.";
        }else{
            return "not found.";
        }
    }
}
