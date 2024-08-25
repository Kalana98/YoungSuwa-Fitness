package com.example.ys_backend.repository;

import com.example.ys_backend.model.Programs;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProgramRepository extends JpaRepository<Programs, String> {
}
