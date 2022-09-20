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
            LEFT JOIN 
                incidentmedia as images
            ON 
                (images.incident = incident.idincident) AND images.position = (
                    Select Min(incidentmedia.position)
                    From incidentmedia
                    Where incidentmedia.incident = incident.idincident AND type = 'image'
                )
            LEFT JOIN 
                user
            ON 
                (user.iduser = incident.user)
            LEFT JOIN 
                incidentmedia as pdfs
            ON 
                (pdfs.incident = incident.idincident) AND pdfs.idincidentmedia = (
                Select Min(incidentmedia.idincidentmedia)
                From incidentmedia
                Where incidentmedia.incident = incident.idincident AND type = 'pdf')
            LEFT JOIN 
                incidentmedia as videos
            ON 
                (videos.incident = incident.idincident) AND videos.idincidentmedia = (
                Select Min(incidentmedia.idincidentmedia)
                From incidentmedia
                Where incidentmedia.incident = incident.idincident AND type = 'video'
                )
            LEFT JOIN 
                incident_graphics as graphics
            ON 
                (graphics.incident = incident.idincident) AND graphics.idincident_graphics = (
                Select Min(incident_graphics.idincident_graphics)
                From incident_graphics
                Where incident_graphics.incident = incident.idincident)
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
