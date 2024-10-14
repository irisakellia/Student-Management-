package net.javaguides.back.repository;

import net.javaguides.back.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student , Long> {



}
