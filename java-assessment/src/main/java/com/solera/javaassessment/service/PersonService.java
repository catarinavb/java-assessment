package com.solera.javaassessment.service;

import com.solera.javaassessment.model.PersonModel;
import com.solera.javaassessment.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PersonService {

    @Autowired
    private PersonRepository repository;


    public PersonModel addPerson(PersonModel person){
        return repository.save(person);
    }

    public List<PersonModel> getAllPersons() {
        return repository.findAll();
    }

    public Optional<PersonModel> getPersonById(int id) {
        return repository.findById(id);
    }

    public List<PersonModel> findByEmail (String email) {
        return repository.findByEmail(email);
    }
}
