

export default {
    create: 'INSERT INTO incidents_graphics (incidentId, coordinates) VALUES (?, ST_GeomFromText(?))'
};