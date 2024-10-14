package net.javaguides.back.service.impl;

import lombok.AllArgsConstructor;
import net.javaguides.back.dto.StudentDto;
import net.javaguides.back.entity.Student;
import net.javaguides.back.mapper.StudentMapper;
import net.javaguides.back.repository.StudentRepository;
import net.javaguides.back.service.StudentService;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class StudentServiceImpl extends StudentService {

    private StudentRepository studentRepository ;
@Override
    public StudentDto createStudent(StudentDto studentDto){

        Student student = StudentMapper.mapToStudent(studentDto);
        Student savedStudent = studentRepository.save(student);
        return StudentMapper.mapToStudentDto(savedStudent);
    }

}