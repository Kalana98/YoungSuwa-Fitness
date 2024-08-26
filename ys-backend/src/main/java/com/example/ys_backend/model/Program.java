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
@Table(name = "programs")
public class Program {

    @Id
    private int programID;
    private String programName;
    private String programDescription;
    private int duration;
    private double price;
}
