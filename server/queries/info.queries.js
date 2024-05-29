const queries = {
    getUsers: `
    SELECT * FROM alumnos
    `,
    getAvisos: `
    SELECT
	    CONCAT(alumnos.nombre, ' ', alumnos.apellidos) AS nombre_alumno, alumnos.fecha_nacimiento
    FROM alumnos
    `,
    getPersonalData: `
    SELECT
        "alumnos".id_alumno,
        "alumnos".nombre AS nombre_alumno,
        "alumnos".apellidos AS apellido_alumno,
        TO_CHAR("alumnos".fecha_nacimiento, 'YYYY-MM-DD') AS fecha_nacimiento,
        "alumnos".dni,
        "alumnos".nacionalidad,
        "alumnos".domicilio,
        "alumnos".ciudad,
        "alumnos".provincia,
        "alumnos".pais,
        "alumnos".codigo_postal,
        "alumnos".telefono,
        "alumnos".email,
        "alumnos".colegio,
        "alumnos".curso,
        TO_CHAR("alumnos".fecha_registro, 'YYYY-MM-DD') AS fecha_registro,        
        "alumnos".persona_recomendado,
        "representantes_alumnos".id_representante,
        "representantes_legales".nombre AS nombre_representante_legal,
        "representantes_legales".apellidos AS apellidos_representante_legal,
        "representantes_legales".profesion_empresa AS profesion_representante_legal,
        "representantes_legales".relacion_ette AS relacion_alumno_representante_legal,
        "representantes_legales".email AS email_representante_legal,
        "representantes_legales".telefono AS telefono_representante_legal,
        "datos_facturacion".nombre AS nombre_datos_facturacion,
        "datos_facturacion".apellidos AS apellidos_datos_facturacion,
        "datos_facturacion".domicilio AS domicilio_datos_facturacion,
        "datos_facturacion".codigo_postal AS codigo_postal_datos_facturacion,
        "datos_facturacion".ciudad AS ciudad_datos_facturacion,
        "datos_facturacion".provincia AS provincia_datos_facturacion,
        "datos_facturacion".pais AS pais_datos_facturacion,
        "datos_facturacion".dni AS dni_datos_facturacion,
        "datos_facturacion".email AS email_datos_facturacion
    FROM "alumnos"
    INNER JOIN "facturas" ON "facturas".id_alumno = "alumnos".id_alumno
    INNER JOIN "datos_facturacion" ON "datos_facturacion".id_alumno = "alumnos".id_alumno
    INNER JOIN "representantes_alumnos" ON "representantes_alumnos".id_alumno = "alumnos".id_alumno
    INNER JOIN "representantes_legales" ON "representantes_legales".id_representante = "representantes_alumnos".id_representante
    WHERE "alumnos".dni = $1;
    `,
    getServices: `
    SELECT
        "intereses".id_interes,
        "servicios_generales".nombre_servicio AS interes_alumno,
        "intereses".interesado AS interes_alumno_bool
    FROM "alumnos"
    INNER JOIN "facturas" ON "facturas".id_alumno = "alumnos".id_alumno
    INNER JOIN "intereses" ON "intereses".id_alumno = "alumnos".id_alumno
    INNER JOIN "servicios_generales" ON "servicios_generales".id_serviciog = "intereses".id_serviciog
    WHERE "alumnos".dni = $1
    ORDER BY id_interes;
    `,
    getInteractions: `
    SELECT
        CONCAT(alumnos.nombre, ' ', alumnos.apellidos) AS nombre_completo,
        historico_contactos.motivo,
        historico_contactos.fecha,
        historico_contactos.comentarios AS observaciones
    FROM historico_contactos
    INNER JOIN facturas ON facturas.id_factura = historico_contactos.id_factura
    INNER JOIN alumnos ON alumnos.id_alumno = facturas.id_alumno
    WHERE alumnos.dni = $1
    `,
    getContractedCampaigns: `
    SELECT
        facturas.id_alumno,
        CONCAT(alumnos.nombre, ' ', alumnos.apellidos) AS nombre_completo,
        facturas.id_factura,
        lineas_factura.fecha AS fecha_factura,
        facturas.precio AS precio_factura,
        lineas_factura.id_linea AS id_linea_servicio,
        lineas_factura.precio AS precio_por_servicio,
        servicios_especificos.nombre_servicio
    FROM facturas
    INNER JOIN lineas_factura ON lineas_factura.id_factura = facturas.id_factura
    INNER JOIN servicios_especificos ON servicios_especificos.id_servicioes = lineas_factura.id_servicioes
    INNER JOIN servicios_generales ON servicios_generales.id_serviciog = servicios_especificos.id_serviciog
    INNER JOIN alumnos ON facturas.id_alumno = alumnos.id_alumno	
    WHERE alumnos.dni = $1
    `,
    updateServices: `
    UPDATE intereses
    SET interesado = $2
    WHERE id_interes = $1;
    `,
};
module.exports = queries;