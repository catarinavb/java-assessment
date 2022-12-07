package com.solera.javaassessment.controller;

import com.solera.javaassessment.model.PersonModel;
import com.solera.javaassessment.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/person")
@CrossOrigin(origins = "*")
public class PersonController {

    @Autowired
    private PersonService service;

    @CrossOrigin(origins = "*")
    @PostMapping("/")
    public ResponseEntity<Object> savePerson(@RequestBody PersonModel person) {
        return ResponseEntity.status(HttpStatus.OK).body(service.addPerson(person));
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/")
    public ResponseEntity<Object> getAllPersons() {
        List<PersonModel> personList = service.getAllPersons();
        if(personList.isEmpty()) return ResponseEntity.status(HttpStatus.NOT_FOUND).body("There isn't a list of Persons");
        return ResponseEntity.status(HttpStatus.OK).body(service.getAllPersons());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getPersonById(@PathVariable("id") int id) {
        Optional<PersonModel> person = service.getPersonById(id);
        if(!person.isPresent()) return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Person ID not found.");
        return ResponseEntity.status(HttpStatus.OK).body(service.getPersonById(id));
    }

    @GetMapping("/email")
    public ResponseEntity<Object> findByEmail(@RequestParam("email") String email){
        List<PersonModel> personByEmail = service.findByEmail(email);
        if(personByEmail.isEmpty()) return ResponseEntity.status(HttpStatus.NOT_FOUND).body("The selected email does not exist.");
        return ResponseEntity.status(HttpStatus.OK).body(personByEmail);
    }
}
