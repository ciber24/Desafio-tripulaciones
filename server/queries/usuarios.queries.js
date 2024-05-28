const usuariosQueries = {
    /* -- Crear tabla usuarios */
    tablaUsuarios: `CREATE TABLE agentes (
        user_id serial NOT NULL PRIMARY KEY UNIQUE,
        password varchar(9),
        email varchar(45) UNIQUE,
        role varchar(45));`,

    /* -- Insertar datos en tabla usuarios */
    insertarUsuario: `INSERT INTO agentes (nombre, apellidos, perfil, email, password, role)
        VALUES ($1,$2,$3,$4,$5,$6);`,

    /* -- Editar datos en tabla usuarios */
    deshabilitarUsuario: `UPDATE agentes SET status='blocked' WHERE id_agente=$1;`,
        
    /* -- para buscar al usuario y poder buscarlo por foreing */
    loginUsuario: `SELECT role FROM agentes WHERE email=$1 and password=$2;`,

    /* -- Mostrar todos los datos de la tabla usuarios */
    mostrarUsuarios: `SELECT * FROM agentes order by id_agente desc;`
}

module.exports = usuariosQueries;