package com.example.ys_backend.repository;

import com.example.ys_backend.model.PendingUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PendingUserRepo extends JpaRepository<PendingUser, String> {
}
