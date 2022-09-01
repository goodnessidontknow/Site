$('#one').t(' ______         _____ _________ ______  ______\n|______ |      |_____|    |    |______ |_____/\n______| |_____ |     |    |    |______ |    \\_',
    {speed:15,beep:true,caret:true,blink:false,fin:()=>{
    $('.t-caret').remove();
    $('#two').t('        ______\n       /     /\\\n      /     /  \\\n     /_____/----\\_    (\n    "     "          ).\n   _ ___          o (:\') o\n  (@))_))        o ~/~~\\~ o\n                   o  o  o',
    {speed:0.1,beep:true,caret:true,blink:false, fin:()=>{
        $('.t-caret').remove();
        $('#three').t('slater26@purdue.edu\ngithub: goodnessidontknow\nlinkedin: /in/john-jack-slater\ninstagram: ___slater\n\n', {speed:15,beep:true,caret:true,blink:false,fin:()=>{
            setTimeout({}, 500)
            selectionMain();
        }})
    }})
}})
