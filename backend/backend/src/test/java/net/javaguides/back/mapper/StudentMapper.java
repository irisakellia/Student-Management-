package net.javaguides.back.mapper;

import net.javaguides.back.dto.StudentDto;
import net.javaguides.back.entity.Student;

public class StudentMapper {

    public static StudentDto mapToStudentDto(Student student) {
        return new StudentDto(
                student.getId(),
                student.getPhotourl(),
                student.getFirstName(),
                student.getLastName(),
                student.getEmail(), // Corrected mapping order
                student.getGender()
        );
    }

    public static Student mapToStudent(StudentDto studentDto) {
        return new Student(
                studentDto.getId(),
                studentDto.getPhotourl(),
                studentDto.getFirstName(),
                studentDto.getLastName(),
                studentDto.getEmail(), // Corrected mapping order
                studentDto.getGender()
        );
    }
}
