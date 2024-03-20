$('body')
    .append( // heading
        $('<h1>').text('Todo List').addClass('heading')
    )
    .append( 
        $('<div>').addClass('input-n-btn')
            .append( // input box
                $('<input>')
                .attr('placeholder',"Enter new task")
                .attr('type','text')
                .addClass('newtask')
            )
            .append( // task add button
                $('<button>')
                .text('Add Task')
                .addClass('btn')
                .click(ev=>{ // button ko click karne par event
                    if ($('.newtask').val().trim() != "") {
                        $('.tasklist')
                        .append(
                            $('<li>')
                                .addClass('task')
                                .text(
                                    $('.newtask').val()
                                )
                                .append(
                                    $('<div>')
                                        .addClass('btngrp')
                                        .append(
                                            $('<button>')
                                                .addClass('upbtn').text('⬆')
                                                
                                        )
                                        .append(
                                            $('<button>')
                                                .addClass('downbtn').text('⬇')
                                                
                                        )
                                        .append(
                                            $('<button>')
                                                .addClass('deletebtn').text('X')
                                                
                                        )
                                )
                                
                        )
                        $('.newtask').val('') // input box ka khali karne ke liye
                         
                    }
                     
                })
        )
        
    )
   

    .append( // tasklist ul
        $('<ul>')
        .addClass('tasklist')
        .click(ev => {
            if($(ev.target).hasClass('upbtn')){
                $(ev.target).parent().parent()
                // .parent() will give parent of .upbtn class which is .btngrp
                // .parent().parent() will give parent of .btngrp which is .task
                .insertBefore($(ev.target).parent().parent().prev())
            }
            else if($(ev.target).hasClass('downbtn')){
                $(ev.target).parent().parent()
                .insertAfter($(ev.target).parent().parent().next())
            }
            else if($(ev.target).hasClass('deletebtn')){
                $(ev.target).parent().parent().remove()
            }
        })
    )