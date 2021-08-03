package com.example.demo.repository;

import com.example.demo.model.FileEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


@Repository
@Transactional
public interface FileRepository extends JpaRepository<FileEntity, String> {
}