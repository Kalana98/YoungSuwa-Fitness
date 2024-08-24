package com.example.ys_backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "pending-user")

public class PendingUser {
    @Id
    private String email;
    private String name;
    private String contactNo;
    private String address;
}
