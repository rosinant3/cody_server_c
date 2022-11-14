export default {
    /* 1? case_, 2? hook, 3? perPage */
    select: `SELECT DISTINCT
                incident.idincident, 
                incident.color, 
                incident.case_,
                incident.updated_at, 
                incident.created_at, 
                incident.dateTime as dateTime, 
                images.filelink as imagesfilename,
                pdfs.filelink as pdfsfilename,
                videos.filelink as videoslink,
                user.username as username,
                ST_AsGeoJSON(graphics.coordinates) as coordinates,
                graphics.idincident_graphics as idincident_graphics
            FROM 
                incident 
            WHERE 
                case_ = ?
            AND 
                CAST(dateTime as DATETIME) > CAST( ? as DATETIME)
            GROUP BY 
                incident.idincident 
            ORDER BY 
                incident.dateTime DESC LIMIT ?`,
    count: `SELECT count(*) FROM incident WHERE incident.case_ = ?`
};