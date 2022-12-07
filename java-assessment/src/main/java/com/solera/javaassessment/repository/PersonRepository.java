package com.solera.javaassessment.repository;

import com.solera.javaassessment.model.PersonModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PersonRepository extends JpaRepository<PersonModel, Integer> {

    public List<PersonModel> findByEmail (String email);
}
