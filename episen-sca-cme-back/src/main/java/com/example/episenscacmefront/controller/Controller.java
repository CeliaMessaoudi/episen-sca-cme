package com.example.episenscacmefront.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;

@RestController
public class Controller {

    @PostMapping("/add/order")
    @ResponseBody
    @CrossOrigin("*")
    public void add_order(@RequestBody String order) throws FileNotFoundException {
        System.out.println("MON MESSAGE: " + order);
        try {
            FileWriter writer = new FileWriter("./orders.txt", true);
            writer.write(order);
            writer.close();
        } catch (IOException e) {
            e.printStackTrace();
        }

    }

}
