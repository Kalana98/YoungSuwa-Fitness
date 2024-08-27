package com.example.ys_backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "facility")

public class Facility {

    @Id
    private int facilityID;
    private String facilityTitle;
    private String facilityDescription;

}
