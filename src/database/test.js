const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    // inserir dados na tabela
/*       await saveOrphanage(db, {
            lat: "-12.5656509",
            lng: "13.4317731",
            name: "Casa do Gaiato de Benguela",
            about: "Presta assistência a orfãos de todas as idades que se encontre em situação de risco e/ou vulnerabilidade social.",
            whatsapp: "+244923791847",
            images: [
                "https://images.unsplash.com/photo-1573261524302-6f1dc1458378?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
                "https://images.unsplash.com/photo-1600712243189-aaa2152723b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
            ].toString(),
            instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
            opening_hours: "Horário de visitas Das 8h até 18h",
            open_on_weekends: "1"
    
        },) 
*/
    // consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages");
    console.log(selectedOrphanages);

    // Consultar somente 1 orphanato, pelo id
    // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "5"')
    // console.log(orphanage);

    // Deletar um dado da tabela.

})