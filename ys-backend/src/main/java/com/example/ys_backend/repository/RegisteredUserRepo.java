package com.example.ys_backend.repository;

import com.example.ys_backend.model.RegisteredUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegisteredUserRepo extends JpaRepository<RegisteredUser, String> {
}
