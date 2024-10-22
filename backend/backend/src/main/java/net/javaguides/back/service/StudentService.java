package net.javaguides.back.service;

import net.javaguides.back.dto.StudentDto;

import java.util.List;

public abstract class StudentService {
    public abstract StudentDto createStudent(StudentDto studentDto);
    public abstract StudentDto getStudentById(long studentId);
    public abstract List<StudentDto> getAllStudents();
    public abstract StudentDto updateStudent(Long studentId, StudentDto updatedStudent);
    public abstract void deleteStudent(Long studentId);
}
