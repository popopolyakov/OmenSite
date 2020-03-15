<template lang="pug">
    .omenlogo      
        .logo
            nuxt-link.logo__mainlink(to="/")
                | ОМЕН
                br
                | БОЙЗ
        .season
            nuxt-link.logo__mainlink(to="/")
                | весна-лето'20
</template>
<style lang="sass">



.omenlogo
    font-family: DrukTextWide
    text-align: center
    color: black
    text-decoration: none
    justify-content: space-between
    align-items: flex-start


.logo
    font-size: 30pt
    line-height: 1.1

.season
    font-size: 10pt
    margin-top: -8px

.logo__mainlink
    text-decoration: none
    &:visited
        color: black

</style>