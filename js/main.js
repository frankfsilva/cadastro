$(document).ready(function() {
    $('#cpf').mask('000.000.000-00')
    $('#telefone').mask('(00) 00000-0000')
    $('#cep').mask('00000-000')

    
    $('form').validate({
        rules: {
            nome:{required: true},
            cpf:{required: true},
            email:{required: true, email: true},
            telefone:{required: true},
            endereco:{required: true},
            numero:{required: true},
            bairro:{required: true},
            cep:{required: true},
            cidade:{required: true},
            uf:{required: true},
            },
            messages: {
                nome:'*', 
                cpf: '*',
                email: '*',
                telefone: '*',
                endereco: '*',
                numero: '*',
                bairro: '*',
                cep: '*',
                cidade: '*',
                uf: '*',},
            
            SubmitHandler: function(form){                                  //Enviando o formulário
                console.log(form)
            },
            invalidHandler: function(evento, validador){
                let camposFaltando = validador.numberOfInvalids();          //armazenando o numero de campos faltando preenchimento
                if(camposFaltando){
                    alert(`${camposFaltando} obrigatórios estão sem preechimento`)}
        }
    })

    $('#cadastrar').on('click', function(e){
        e.preventDefault();
        const nomeAdicionado = $('#nome').val();
        const cpfAdicionado = $('#cpf').val();
        const emailAdicionado = $('#email').val();
        const telefoneAdicionado = $('#telefone').val();
        const enderecoAdicionado = $('#endereco').val();
        const numeroAdicionado = $('#numero').val();
        const bairroAdicionado = $('#bairro').val();
        const cepAdicionado = $('#cep').val();
        const cidadeAdicionado = $('#cidade').val();
        const ufAdicionado = $('#uf').val();

        const novoCadastro = $('<tr></tr>');
        $(`<td>${nomeAdicionado}</td>`).appendTo(novoCadastro);
        $(`<td>${cpfAdicionado}</td>`).appendTo(novoCadastro);
        $(`<td>${emailAdicionado}</td>`).appendTo(novoCadastro);
        $(`<td>${telefoneAdicionado}</td>`).appendTo(novoCadastro);
        $(`<td>${enderecoAdicionado}</td>`).appendTo(novoCadastro);
        $(`<td>${numeroAdicionado}</td>`).appendTo(novoCadastro);
        $(`<td>${bairroAdicionado}</td>`).appendTo(novoCadastro);
        $(`<td>${cepAdicionado}</td>`).appendTo(novoCadastro);
        $(`<td>${cidadeAdicionado}</td>`).appendTo(novoCadastro);
        $(`<td>${ufAdicionado}</td>`).appendTo(novoCadastro);

        $(novoCadastro).appendTo('tbody');
        $('#nome').val('');
        $('#cpf').val('');
        $('#email').val('');
        $('#telefone').val('');
        $('#numero').val('');
        $('#bairro').val('');
        $('#cep').val('');
        $('#cidade').val('');
        $('#uf').val('');
    })
})
