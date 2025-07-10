package com.barbeariabigodegrosso.model;

import java.util.List;

public class Agendamento {
    private String nome;
    private String telefone;
    private String data;
    private String hora;
    private String barbeiro;
    private List<String> services;  // Usando uma lista para armazenar os serviços

    // Getters e Setters
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public String getHora() {
        return hora;
    }

    public void setHora(String hora) {
        this.hora = hora;
    }

    public String getBarbeiro() {
        return barbeiro;
    }

    public void setBarbeiro(String barbeiro) {
        this.barbeiro = barbeiro;
    }

    public List<String> getServices() {
        return services;
    }

    public void setServices(List<String> services) {
        this.services = services;
    }
}
