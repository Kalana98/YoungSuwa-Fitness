package com.example.ys_backend.service;

import com.example.ys_backend.model.PendingUser;
import com.example.ys_backend.model.RegisteredUser;
import com.example.ys_backend.repository.PendingUserRepo;
import com.example.ys_backend.repository.RegisteredUserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    PendingUserRepo pendingUserRepo;

    @Autowired
    RegisteredUserRepo registeredUserRepo;

    //register new user(pending state)
    public String registerUser(PendingUser pendingUser){
        if (pendingUserRepo.existsById(pendingUser.getEmail())){
            return "User is already in the pending list";
        }else if(registeredUserRepo.existsById(pendingUser.getEmail())){
            return "This user is already registered";
        }
        else {
            pendingUserRepo.save(pendingUser);
            return "User added to pending list";
        }
    }

    //get all pending users
    public List<PendingUser> getAllPendingUsers(){
        return pendingUserRepo.findAll();
    }

    //get all registered users
    public List<RegisteredUser> getAllRegisteredUsers(){
         return registeredUserRepo.findAll();
    }

    //admin approves user
    public String approveUser (String email){
        PendingUser pendingUser = pendingUserRepo.findById(email).orElse(null);
        if(pendingUser != null){
            RegisteredUser registeredUser = new RegisteredUser(
                    pendingUser.getEmail(),
                    pendingUser.getName(),
                    pendingUser.getContactNo(),
                    pendingUser.getAddress()
            );
            registeredUserRepo.save(registeredUser);
            pendingUserRepo.delete(pendingUser);
            return "User approved and moved to registered users.";
        }else{
            return "User not found in pending list.";
        }
    }

    //admin rejects user
    public String rejectUser(String email){
        pendingUserRepo.deleteById(email);
        return "User rejeccted and removed from pending list.";
    }
}
