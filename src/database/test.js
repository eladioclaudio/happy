const Database = require('./db');

Database.then(async db => {
    // inserir dados na tabela
   /* await db.run(`
        INSERT INTO orphanages (
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_weekends
        ) VALUES (
            "-8.8178385",
            "13.2295304",
            "UNICEF Luanda",
            "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
            "+244946754420",
            "https://images.unsplash.com/photo-1573261524302-6f1dc1458378?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
            "Horário de visitas Das 8h até 18h",
            "1"
        );
    `) */

    // consultar dados na tabela
    // const selectedOrphanages = await db.all("SELECT * FROM orphanages");
    // console.log(selectedOrphanages);

    // Consultar somente 1 orphanato, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    console.log(orphanage);
})