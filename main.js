function Escolher(idioma) {
    var conteudos = {
        "paragrafo1": {
            "ptbr": "Inicialmente fizemos uma análise detalhada em cada componente do site para que qualquer erro fosse resolvido por nós. ",
            "es": "Inicialmente, realizamos un análisis detallado de cada componente del sitio web para que cualquier error pudiera ser solucionado por nosotros.",
            "en": "Initially, we performed a detailed analysis of each component of the website so that any errors could be fixed by us."
        },
        "paragrafo2": {
            "ptbr": "O trabalho tem como tema “Projetos Promocionais - site para uma empresa”, o site escolhido foi o Coletivo Emaús tivemos o princípio em Refazer o site deles para melhoria; ",
            "es": "El tema del trabajo es “Proyectos Promocionales - sitio web para una empresa”, el sitio web elegido fue Coletivo Emaús, comenzamos rehaciendo su sitio web para mejorarlo;",
            "en": "The theme of the work is “Promotional Projects - website for a company”, the website chosen was Coletivo Emaús, we started by redoing their website for improvement;."
        },
        "paragrafo3": {
            "ptbr": "Como resultado das análises obtemos diversos erros que serão abordados ao longo do trabalho; priorizamos mudanças essenciais que se fossem adotadas o site teria mais visibilidade e com certeza melhoraria a experiência do usuário.",
            "es": "Como resultado del análisis obtuvimos varios errores que serán abordados a lo largo del trabajo; Priorizamos cambios esenciales que, si se adoptaran, el sitio tendría más visibilidad y sin duda mejorarían la experiencia del usuario.",
            "en": "As a result of the analysis, we obtained several errors that will be addressed throughout the work; We prioritized essential changes that if they were adopted, the site would have more visibility and would certainly improve the user experience."
        },
        "paragrafo4": {
            "ptbr": "O Coletivo Emaús foi fundado em 2015 pelo casal de missionários Tom Dias e Cibele Santiago, Emaús é uma marca de streetwear voltada para uma geração que busca algo além de tendência, mas uma forma de se expressar com atitude e propósito. O comportamento das pessoas e a Palavra são as principais inspirações para elaboração dos produtos e coleções do Emaús.",
            "es": "Coletivo Emaús fue fundado en 2015 por la pareja de misioneros Tom Dias y Cibele Santiago, Emaús es una marca de streetwear dirigida a una generación que busca algo más allá de las tendencias, sino una forma de expresarse con actitud y propósito. El comportamiento de las personas y la Palabra son las principales inspiraciones para crear los productos y colecciones de Emaús.",
            "en": "Coletivo Emaús was founded in 2015 by the missionary couple Tom Dias and Cibele Santiago, Emaús is a streetwear brand aimed at a generation that is looking for something beyond trends, but a way of expressing themselves with attitude and purpose. People's behavior and the Word are the main inspirations for creating Emaús products and collections."
        },
        "paragrafo5": {
            "ptbr": "O principal motivo de escolhermos a EMAÚS é a sua proposta, pois se trata de uma loja de roupas evangélicas diferente das outras roupas desse nicho; A marca inova em diversos sentidos principalmente por quebrar estigmas religiosos usando o estilo “streetwear” de forma que ele fique único.",
            "es": "La principal razón por la que elegimos EMAÚS es su propuesta, ya que es una tienda de ropa evangélica diferente a otras prendas de este nicho; La marca innova de varias maneras, principalmente rompiendo estigmas religiosos utilizando el estilo “streetwear” de una manera que lo hace único.",
            "en": "The main reason we chose EMAÚS is its proposal, as it is an evangelical clothing store different from other clothing in this niche; The brand innovates in several ways, mainly by breaking religious stigmas using the “streetwear” style in a way that makes it unique."
        }
    };

    // Atualiza o conteúdo dos parágrafos com base no idioma selecionado
    document.getElementById('paragrafo1').innerHTML = conteudos['paragrafo1'][idioma];
    document.getElementById('paragrafo2').innerHTML = conteudos['paragrafo2'][idioma];
    document.getElementById('paragrafo3').innerHTML = conteudos['paragrafo3'][idioma];
    document.getElementById('paragrafo4').innerHTML = conteudos['paragrafo4'][idioma];
    document.getElementById('paragrafo5').innerHTML = conteudos['paragrafo5'][idioma];
}