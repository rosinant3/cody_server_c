export default {
    /* 1? case_, 2? hook, 3? perPage */
    select: `SELECT DISTINCT
                idincidents_media as id,
                url,
                mimetype,
                incident,
                uploaded
            FROM 
                incidents_media im
            WHERE 
                im.incident = ?
            AND 
                im.uploaded = ?
            AND
                im.mimetype LIKE CONCAT('%', ?,  '%') 
            AND
                im.idincidents_media > ?
            ORDER BY 
                im.idincidents_media DESC LIMIT ?`,
    count: `SELECT 
                count(*) 
            FROM 
                incidents_media im 
            WHERE 
                im.incidents = ? 
            AND
                im.type LIKE CONCAT('%', ?,  '%') `
};
