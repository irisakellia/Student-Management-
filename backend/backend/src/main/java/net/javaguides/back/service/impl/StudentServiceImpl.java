package net.javaguides.back.service.impl;

import lombok.AllArgsConstructor;
import net.javaguides.back.dto.StudentDto;
import net.javaguides.back.entity.Student;
import net.javaguides.back.exception.ResourceNotFoundException;
import net.javaguides.back.mapper.StudentMapper;
import net.javaguides.back.repository.StudentRepository;
import net.javaguides.back.service.StudentService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

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

    @Override
    public StudentDto getStudentById(long studentId) {
        Student student = studentRepository.findById(studentId)
                .orElseThrow(()->
                        new ResourceNotFoundException("student does not exist in the db "+ studentId));

        return StudentMapper.mapToStudentDto(student);
    }

    @Override
    public List<StudentDto> getAllStudents() {
        List<Student> students = studentRepository.findAll();
        return students.stream().map((student) -> StudentMapper.mapToStudentDto(student))
                .collect(Collectors.toList());
    }

    @Override
    public StudentDto updateStudent(Long studentId, StudentDto updatedStudent) {
        Student student = studentRepository.findById(studentId).orElseThrow(
                ()-> new ResourceNotFoundException("student not found "+ studentId)

        );

        student.setPhotourl(updatedStudent.getPhotourl());
        student.setFirstName(updatedStudent.getFirstName());
        student.setLastName(updatedStudent.getLastName());
        student.setEmail(updatedStudent.getEmail());
        student.setGender(updatedStudent.getGender());

        Student updatedStudentObj = studentRepository.save(student);

        return StudentMapper.mapToStudentDto(updatedStudentObj);


    }

    @Override
    public void deleteStudent(Long studentId) {
        studentRepository.findById(studentId).orElseThrow(
                ()-> new ResourceNotFoundException("student not found "+ studentId)

        );
        studentRepository.deleteById(studentId);
    }


}
