<template lang="pug">
  footer
    .footer__omen © <a href="https://vk.com/omenboyz" target="blank">OMEN</a>      
    .footer__popopolyakov Создание сайта <a href="https://vk.com/popopolyakov" target="blank">@popopolyakov</a>
</template>


<style lang="sass">
footer
    font-family: DrukTextWide
    opacity: 0.5
    color: lightgrey   
    width: 100%
    height: 120px
    display: flex
    justify-content: space-between
    margin-top: auto
    vertical-align: middle
    a
        &:visited
            color: lightgrey
    .footer__omen
        align-items: flex-start
    .footer__popopolyakov
        align-items: flex-end
    .footer__omen,.footer__popopolyakov
        display: inline-block
        padding-top: 50px    
        vertical-align: middle

        
</style>
