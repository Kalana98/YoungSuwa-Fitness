package com.example.ys_backend.repository;

import com.example.ys_backend.model.Program;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProgramRepository extends JpaRepository<Program, Integer> {
}
