package com.example.ys_backend.controller;

import com.example.ys_backend.model.PendingUser;
import com.example.ys_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/user")
@CrossOrigin

public class UserController {

    @Autowired
    UserService userService;

    //User registation endpoint (pending user)
    @PostMapping("/register")
    public String registerUser(@RequestBody PendingUser pendingUser){
        return userService.registerUser(pendingUser);
    }

    @GetMapping("/get-pending-users")
    public List<PendingUser> getAllPendingUsers(){
        return userService.getAllPendingUsers();
    }

    @PostMapping("/approve-user/{email}")
    public String approveUser(@PathVariable String email){
        return userService.approveUser(email);
    }

    @DeleteMapping("/reject-user/{email}")
    public String rejectUser(@PathVariable String email){
        return userService.rejectUser(email);
    }


}
