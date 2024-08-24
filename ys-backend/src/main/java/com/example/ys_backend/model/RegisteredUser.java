package com.example.ys_backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "registered-user")

public class RegisteredUser {

    @Id
    private String email;
    private String name;
    private String contactNo;
    private String address;
}
