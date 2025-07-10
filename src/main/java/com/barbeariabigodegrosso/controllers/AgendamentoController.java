package com.barbeariabigodegrosso.controllers;

import com.barbeariabigodegrosso.model.Agendamento;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;

@RestController
@RequestMapping("/agendamento")
public class AgendamentoController {

    @PostMapping("/confirmar")
    public String confirmarAgendamento(@RequestParam String nome,
                                       @RequestParam String telefone,
                                       @RequestParam String data,
                                       @RequestParam String hora,
                                       @RequestParam String barbeiro,
                                       @RequestParam String services) {

        // Cria um objeto Agendamento e preenche os dados
        Agendamento agendamento = new Agendamento();
        agendamento.setNome(nome);
        agendamento.setTelefone(telefone);
        agendamento.setData(data);
        agendamento.setHora(hora);
        agendamento.setBarbeiro(barbeiro);
        agendamento.setServices(Arrays.asList(services.split(", ")));  // Converte a string de serviços em lista

        // Retorna as informações do agendamento
        return "<span>Confirmado!</span> Tudo certo com o seu agendamento, <strong>" + agendamento.getNome() + "</strong>!<br>" +
                "<br>Confira os detalhes abaixo:<br>" +
                "<strong>Data:</strong> " + agendamento.getData() + "    " +
                "<strong>Hora:</strong> " + agendamento.getHora() + "<br>" +
                "<strong>Barbeiro:</strong> " + agendamento.getBarbeiro() + "<br>" +
                "<strong>Serviços:</strong> " + String.join(", ", agendamento.getServices()) + "<br>" +
                "<br>Obrigado por escolher nossa barbearia! Estamos ansiosos para te atender.";
    }
}
